<template>
  <div class="wrapper">
    <el-row :gutter="10">
      <el-col :xl="11" :lg="11" :md="11" :sm="11" :span="24">
        <el-col :md="12"> Total <span class="content-byte-count">{{ originalTxtLength }}</span> characters</el-col>
        <textarea v-model="originalTxt" class="full-width min-height-500"/>
        <el-button type="danger" class="az-editor-btn" @click="clearContent">!! 清空 !!</el-button>
      </el-col>
      <el-col :xl="2" :lg="2" :md="2" :sm="2" :span="24" class="align-center" center>
        <el-button type="success" class="trans-btn" @click="handleUniqueKeywords">>>></el-button>
      </el-col>
      <el-col :xl="11" :lg="11" :md="11" :sm="11" :span="24">
        <el-col :md="12"> Total <span class="content-byte-count">{{ targetTxtLength }}</span> characters</el-col>
        <textarea v-model="targetTxt" class="full-width min-height-500"/>
        <el-button type="primary" class="az-editor-btn" @click="handleCopy(targetTxt,$event)">一键复制</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import { byteCount, uniqueKeywords } from '@/utils/str'

export default {
  name: 'UniqueKeywords',
  components: { },
  data() {
    return {
      originalTxt: ``,
      targetTxt: ``
    }
  },
  computed: {
    originalTxtLength() {
      return byteCount(this.originalTxt)
    },
    targetTxtLength() {
      return byteCount(this.targetTxt)
    }
  },
  methods: {
    handleUniqueKeywords() {
      this.targetTxt = uniqueKeywords(this.originalTxt)
    },
    handleCopy(text, event) {
      clip(text, event)
    },
    clearContent() {
      this.originalTxt = ``
      this.targetTxt = ``
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
  min-width:100%;
  max-width:100%;
}
.min-height-500{
  min-height: 500px;
}
.align-center{
  text-align: center;
}
.resize-disable{
  resize: none;
}
@media (max-width: 768px) {
  .trans-btn{
    margin: 50px !important;
  }
}
.trans-btn{
  /* height: 100%; */
  margin-top: 250px;
  max-width: 100%;
  white-space: unset;
  word-break: break-all;
}
.content-byte-count{
  font-weight: bold;
  font-size: large;
  color: #ffa500;
}
.az-editor-btn{
  width: 100%;
}
</style>

