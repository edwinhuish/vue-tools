<template>
  <div class="editor-wrapper">
    <h1>亚马逊编辑器</h1>
    <el-row>
      <el-col>
        <AzEditor :height="450" v-model="content" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AzEditor from '@/components/AmazonDescriptionEditor'

export default {
  name: 'AmazonEditor',
  components: { AzEditor },
  data() {
    return {
      content: ``
    }
  }
}
</script>

<style scoped>
.editor-wrapper {
  margin: 20px;
}
.align-center{
  text-align: center;
}
</style>

