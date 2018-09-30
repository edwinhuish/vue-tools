<template>
  <el-row :gutter="10">
    <el-col :lg="4" :span="8">
      <table class="table table-bordered symbol-table">
        <tbody>
          <tr class="text-center">
            <td><span>✔</span></td>
            <td><el-button size="mini" data-copy-txt="✔" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>™</span></td>
            <td><el-button size="mini" data-copy-txt="™" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>★</span></td>
            <td><el-button size="mini" data-copy-txt="★" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>⚠</span></td>
            <td><el-button size="mini" data-copy-txt="⚠" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
        </tbody>
      </table>
    </el-col>
    <el-col :lg="4" :span="8">
      <table class="table table-bordered symbol-table">
        <tbody>
          <tr class="text-center">
            <td><span>①</span></td>
            <td><el-button size="mini" data-copy-txt="①" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>②</span></td>
            <td><el-button size="mini" data-copy-txt="②" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>③</span></td>
            <td><el-button size="mini" data-copy-txt="③" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>④</span></td>
            <td><el-button size="mini" data-copy-txt="④" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
        </tbody>
      </table>
    </el-col>

    <el-col :lg="4" :span="8">
      <table class="table table-bordered symbol-table">
        <tbody>
          <tr class="text-center">
            <td><span>⑤</span></td>
            <td><el-button size="mini" data-copy-txt="⑤" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>⑥</span></td>
            <td><el-button size="mini" data-copy-txt="⑥" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>⑦</span></td>
            <td><el-button size="mini" data-copy-txt="⑦" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>⑧</span></td>
            <td><el-button size="mini" data-copy-txt="⑧" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
        </tbody>
      </table>
    </el-col>

    <el-col :lg="4" :span="8">
      <table class="table table-bordered symbol-table">
        <tbody>
          <tr class="text-center">
            <td><span>⑨</span></td>
            <td><el-button size="mini" data-copy-txt="⑨" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>⑩</span></td>
            <td><el-button size="mini" data-copy-txt="⑩" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>☛</span></td>
            <td><el-button size="mini" data-copy-txt="☛" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>➤</span></td>
            <td><el-button size="mini" data-copy-txt="➤" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
        </tbody>
      </table>
    </el-col>

    <el-col :lg="4" :span="8">
      <table class="table table-bordered symbol-table">
        <tbody>
          <tr class="text-center">
            <td><span>♬</span></td>
            <td><el-button size="mini" data-copy-txt="♬" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>☀</span></td>
            <td><el-button size="mini" data-copy-txt="☀" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>❆</span></td>
            <td><el-button size="mini" data-copy-txt="❆" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>♠</span></td>
            <td><el-button size="mini" data-copy-txt="♠" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
        </tbody>
      </table>
    </el-col>
    <el-col :lg="4" :span="8">
      <table class="table table-bordered symbol-table">
        <tbody>
          <tr class="text-center">
            <td><span>©</span></td>
            <td><el-button size="mini" data-copy-txt="©" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>®</span></td>
            <td><el-button size="mini" data-copy-txt="®" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td><span>◆</span></td>
            <td><el-button size="mini" data-copy-txt="◆" @click="handleSymbolCopy($event)"><span>Copy</span></el-button></td>
          </tr>
          <tr class="text-center">
            <td colspan="2"><a
              class="pull-right"
              href="https://www.piliapp.com/symbol/"
              target="_blank"
              style="color: #07519A;">More Symbols</a></td>
          </tr>
        </tbody>
      </table>
    </el-col>
  </el-row>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly

export default {
  name: 'SymbolTable',
  props: {},
  data() {
    return {}
  },
  methods: {
    handleSymbolCopy(event) {
      const text = event.target.parentElement.parentElement.dataset.copyTxt
      clip(text, event)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
.half-width{
  width:50%;
}
.table-bordered {
    border: 1px solid #ddd;
    border-collapse:collapse;
}
.table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
    border: 1px solid #ddd;
}
.symbol-table{
  width:100%;
}
.symbol-table>thead>tr>th,
.symbol-table>tbody>tr>th,
.symbol-table>tfoot>tr>th,
.symbol-table>thead>tr>td,
.symbol-table>tbody>tr>td,
.symbol-table>tfoot>tr>td {
  width: 50%;
  padding: 8px;
}
</style>
