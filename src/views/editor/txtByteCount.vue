<template>
  <div class="wrapper">
    <h1> 字符统计 </h1>
    <el-row class="remark-txt">
      <el-col :md="12">
        <p>温馨提示，在亚马逊卖家后台中：</p>

        <p>Product Title最多不超过 80 字符；<br>
          Bullet Point每行最多不超过 100 字符；<br>
          Search Terms每行最多不超过 250 字符。</p>
      </el-col>
      <el-col :md="12">
        <p>字符统计结果：</p>
        <p>当前字符数 CHARACTERS: <span class="content-byte-count">{{ contentByteCount }}</span></p>
        <el-button type="success" @click="handleCopy(txt, $event)">一键复制</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <textarea v-model="txt" class="full-width-textarea min-height-500"/>
      <el-button type="danger" @click="clearContent">!! 清空 !!</el-button>
      <el-button type="primary" @click="flatContentTxt">清空换行符</el-button>
    </el-row>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import { byteCount, flatStr } from '@/utils/str'

export default {
  name: 'TxtByteCount',
  components: { },
  data() {
    return {
      txt: ``
    }
  },
  computed: {
    contentByteCount() {
      return byteCount(this.txt)
    }
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event)
    },
    clearContent() {
      this.txt = ``
    },
    flatContentTxt() {
      this.txt = flatStr(this.txt)
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 20px;
}
.full-width-textarea{
  width:100%;
  min-width:100%;
  max-width:100%;
}
.min-height-500{
  min-height: 500px;
}
.content-byte-count{
  font-weight: bold;
  font-size: large;
  color: #ffa500;
}
.az-editor-btn{
  width: 100%;
}
.remark-txt{
  font-size:18px;
  line-height: 1.5;
}
</style>

