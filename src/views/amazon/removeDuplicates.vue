<template>
  <div class="wrapper">
    <el-row :gutter="10" class="height-500">
      <el-col :xl="11" :lg="11" :md="11" :sm="11" :span="24">
        <textarea v-model="originalTxt" class="full-width full-height resize-disable"/>
        <el-col :md="12"> Total <span class="content-html-length">{{ originalTxtLength }}</span> characters</el-col>
        <el-button type="danger" class="az-editor-btn">!! 清空 !!</el-button>
      </el-col>
      <el-col :xl="2" :lg="2" :md="2" :sm="2" :span="24" class="align-center" center>
        <el-button type="success" plain class="custom-btn" @click="removeDuplicates">>>></el-button>
      </el-col>
      <el-col :xl="11" :lg="11" :md="11" :sm="11" :span="24">
        <textarea v-model="targetTxt" class="full-width full-height resize-disable"/>
        <el-col :md="12"> Total <span class="content-html-length">{{ targetTxtLength }}</span> characters</el-col>
        <el-button type="primary" class="az-editor-btn" @click="handleCopy(txtHtml,$event)">复制HTML源码</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import keywords from 'normalize-keywords'
import { getStrByteLength } from '@/utils/str'

export default {
  name: 'RemoveDuplicateWords',
  components: { },
  data() {
    return {
      originalTxt: ``,
      targetTxt: ``
    }
  },
  computed: {
    originalTxtLength() {
      return getStrByteLength(this.originalTxt)
    },
    targetTxtLength() {
      return getStrByteLength(this.targetTxt)
    }
  },
  methods: {
    removeDuplicates() {
      this.targetTxt = keywords(this.originalTxt.replace(/\r\n/g, ' ').replace(/\n/g, ' ').split(' ')).join(' ')
    },
    handleCopy(text, event) {
      clip(text, event)
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 20px;
}
.full-width{
  width:100%;
}
.full-height{
  height: 100%;
}
.align-center{
  text-align: center;
}
.height-500,
.el-row.height-500{
  height: 500px;
}
.el-row.height-500>.el-col{
  height: 100%;
}
.resize-disable{
  resize: none;
}
.custom-btn{
  height: 100%;
  max-width: 100%;
  white-space: unset;
  word-break: break-all;
}
.content-html-length{
  font-weight: bold;
  font-size: large;
  color: #ffa500;
}
</style>

