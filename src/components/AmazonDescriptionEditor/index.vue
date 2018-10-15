<template>
  <div class="tinymce-container editor-container">
    <symbolTable/>
    <el-row :gutter="10">
      <el-col>
        <textarea :id="tinymceId" v-model="txtHtml" class="tinymce-textarea" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="12" class="editor-mark">Enter a total of <span :class="{'exceeded-limit': exceededLimit }" class="content-byte-count">{{ getContentHtmlLength }}</span> characters</el-col>
      <el-col :lg="12" class="editor-btn-wrapper editor-mark">
        <el-button type="danger" class="az-editor-btn" @click="clearContent">!! 清空 !!</el-button>
        <el-button type="warning" class="az-editor-btn" @click="restoreContent">恢复</el-button>
        <el-button type="primary" class="az-editor-btn" @click="handleCopy(txtHtml,$event)">复制HTML源码</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import symbolTable from './components/symbolTable'
import { byteCount } from '@/utils/str'

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
      return byteCount(val)
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
@media (max-width: 1200px) {
  .editor-mark {
    text-align: center !important;
  }
}
.editor-btn-wrapper {
  text-align: right;
}
.editor-btn-wrapper>.az-editor-btn{
  margin:  15px 0 15px 15px;
}
.content-byte-count{
  font-weight: bold;
  font-size: large;
  color: #ffa500;
}
.content-byte-count.exceeded-limit {
  font-size: x-large;
  color: #ff0000;
}
</style>
