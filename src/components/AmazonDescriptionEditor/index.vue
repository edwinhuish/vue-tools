<template>
  <div class="tinymce-container editor-container">
    <symbolTable/>
    <el-row :gutter="10">
      <el-col>
        <textarea :id="tinymceId" v-model="txtHtml" class="tinymce-textarea" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :md="12">Enter a total of <span :class="{'exceeded-limit': exceededLimit }" class="content-html-length">{{ getContentHtmlLength }}</span> characters</el-col>
      <el-col :md="12" class="align-right">
        <el-popover
          v-model="showDelPopover"
          placement="top"
          width="230">
          <div style="text-align:center">
            <h3>确定要清空吗？</h3>
            <p>注意保存数据，以免丢失数据。</p>
            <div>
              <el-button type="primary" size="mini" @click="showDelPopover = false">取消</el-button>
              <el-button type="default" size="mini" @click="clearContent();showDelPopover = false">确定</el-button>
            </div>
          </div>
          <el-button slot="reference" type="danger" class="az-editor-btn">!! 清空 !!</el-button>
        </el-popover>
        <el-button type="warning" class="az-editor-btn" @click="restoreContent">恢复</el-button>
        <el-button type="primary" class="az-editor-btn" @click="handleCopy(txtHtml,$event)">复制HTML源码</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import symbolTable from './components/symbolTable'
import { getStrByteLength } from '@/utils/str'

export default {
  name: 'AmazonEditor',
  components: { symbolTable },
  props: {
    id: {
      type: String,
      default: function() {
        return (
          'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
        )
      }
    },
    value: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      required: false,
      default: 360
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      showDelPopover: false,
      tinymceId: this.id,
      txtHtml: '',
      languageTypeList: {
        en: 'en',
        zh: 'zh_CN'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language]
    },
    getContentHtmlLength() {
      const val = this.txtHtml || this.value
      return getStrByteLength(val)
    },
    exceededLimit() {
      return (this.getContentHtmlLength > 2000)
    }
  },
  watch: {
    value(val) {
      if (this.hasInit) {
        const ed = this.getTinymceInst()
        if (ed) { // 避免因为切换语言后destroy编辑器导致为null
          if (!this.hasChange) {
            this.$nextTick(() =>
              ed.setContent(val || '')
            )
          }
          this.txtHtml = ed.getContent()
        }
      }
    },
    language() {
      this.destroyTinymce()
      this.$nextTick(() => this.initTinymce())
    }
  },
  mounted() {
    this.initTinymce()
  },
  activated() {
    this.initTinymce()
  },
  deactivated() {
    this.destroyTinymce()
  },
  destroyed() {
    this.destroyTinymce()
  },
  methods: {
    initTinymce() {
      const _this = this
      window.tinymce.init({
        language: this.language,
        selector: `#${this.tinymceId}`,
        toolbar: ['undo redo restoredraft | bold italic | bullist numlist | removeformat | code'],
        plugins: ['autosave code  lists   paste  save   tabfocus  wordcount'],
        menubar: '',
        formats: {
          bold: {
            inline: 'b'
          },
          italic: {
            inline: 'i'
          }
        },
        valid_elements: 'b,i,b/strong,b/h1,b/h2,b/h3,b/h4,b/h5,i/em,p,p/div,br,ul,li,ol',
        valid_styles: {},
        height: this.height,
        body_class: 'panel-body ',
        advlist_bullet_styles: '',
        advlist_number_styles: '',
        autosave_prefix: 'az_editor_autosave',
        autosave_ask_before_unload: true,
        autosave_interval: '3s',
        autosave_restore_when_empty: true,
        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
          })
        }
      })
    },
    destroyTinymce() {
      if (this.getTinymceInst()) {
        this.getTinymceInst().destroy()
      }
    },
    getTinymceInst() {
      return window.tinymce.get(this.tinymceId)
    },
    setContent(value) {
      this.getTinymceInst().setContent(value)
    },
    getContent() {
      this.getTinymceInst().getContent()
    },
    clearContent() {
      this.setContent('')
      this.successMessage('Clear successfully')
    },
    restoreContent() {
      const ed = this.getTinymceInst()
      ed.undoManager.undo()
      ed.undoManager.redo()
      this.successMessage('Restore successfully')
    },
    handleCopy(text, event) {
      clip(text, event)
    },
    successMessage($str) {
      this.$message({
        message: $str,
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style scoped>
.az-editor-btn{
  min-width: 150px;
}
.el-row {
  margin-bottom: 20px;
}
.align-right {
  text-align: right;
}
.content-html-length{
  font-weight: bold;
  font-size: large;
  color: #ffa500;
}
.content-html-length.exceeded-limit {
  font-size: x-large;
  color: #ff0000;
}
</style>
