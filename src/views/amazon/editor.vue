<template>
  <div class="editor-wrapper">
    <el-row :gutter="10">
      <el-col>
        <code>
          <h1 class="align-center">Amazon产品描述编辑器</h1>
        </code>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <AzEditor :height="300" v-model="content" />
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

