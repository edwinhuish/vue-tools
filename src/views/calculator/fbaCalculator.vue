<template>
  <div class="wrapper">
    <el-row :gutter="10">
      <el-col><h1>FBA费用计算器 2018最新版</h1></el-col>
      <el-col :span="12">
        <el-form :label-position="right" :model="fbaCost" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="fbaCost.name"/>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="fbaCost.region"/>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="fbaCost.type"/>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import clip from '@/utils/clipboard' // use clipboard directly
// import { byteCount, uniqueKeywords } from '@/utils/str'

export default {
  name: 'FBACalculator',
  data() {
    return {
      regions: {
        'us': {
          'label': '美国',
          'currency_label': '美元',
          'currency_fa_icon': 'usd',
          'params': {
            region: 'us',
            length: '',
            width: '',
            height: '',
            weight: '',
            is_clothing: 0
          }
        },
        'jp': {
          'label': '日本',
          'currency_label': '日元',
          'currency_fa_icon': 'jpy',
          'params': {
            region: 'jp',
            length: '',
            width: '',
            height: '',
            weight: '',
            is_media: 0,
            price: ''
          }
        },
        'ca': {
          'label': '加拿大',
          'currency_label': '加元',
          'currency_fa_icon': 'usd',
          'params': {
            region: 'ca',
            length: '',
            width: '',
            height: '',
            weight: '',
            is_media: 0
          }
        },
        'uk': {
          'label': '英国',
          'currency_label': '英镑',
          'currency_fa_icon': 'gbp',
          'params': {
            region: 'uk',
            length: '',
            width: '',
            height: '',
            weight: '',
            price: ''
          }
        },
        'de': {
          'label': '德国',
          'currency_label': '欧元',
          'currency_fa_icon': 'eur',
          'params': {
            region: 'de',
            length: '',
            width: '',
            height: '',
            weight: '',
            price: ''
          }
        },
        'es': {
          'label': '西班牙',
          'currency_label': '欧元',
          'currency_fa_icon': 'eur',
          'params': {
            region: 'es',
            length: '',
            width: '',
            height: '',
            weight: ''
          }
        },
        'it': {
          'label': '意大利',
          'currency_label': '欧元',
          'currency_fa_icon': 'eur',
          'params': {
            region: 'it',
            length: '',
            width: '',
            height: '',
            weight: ''
          }
        },
        'fr': {
          'label': '法国',
          'currency_label': '欧元',
          'currency_fa_icon': 'eur',
          'params': {
            region: 'fr',
            length: '',
            width: '',
            height: '',
            weight: '',
            price: ''
          }
        }
      },
      region: 'us',
      params: null,
      fbaFee: '',
      calculated: false,
      errors: []
    }
  },
  watch: {
    region: (newVal, oldVal) => {
      this.params = this.regions[newVal]['params']
      this.fbaFee = ''
      this.errors = []
      this.calculated = false
    }
  },
  created() {
    this.params = this.regions[this.region]['params']
  },
  mounted() {
    document.getElementById('length-input').focus()
  },
  methods: {
    // calculateFbaFee(event) {
    //   this.fbaFee = ''
    //   this.errors = []

    //   if (this.params.price != undefined) {
    //     if (!this.params.price) {
    //       this.errors.push('商品价格不能为空')
    //       return
    //     }
    //     if (!$.isNumeric(this.params.price)) {
    //       this.errors.push('商品价格必须为数字')
    //       return
    //     }
    //   }

    //   if (!this.params.length) {
    //     this.errors.push('商品长度不能为空')
    //     return
    //   }
    //   if (!$.isNumeric(this.params.length)) {
    //     this.errors.push('商品长度必须为数字')
    //     return
    //   }
    //   if (!this.params.width) {
    //     this.errors.push('商品宽度不能为空')
    //     return
    //   }
    //   if (!$.isNumeric(this.params.width)) {
    //     this.errors.push('商品宽度必须为数字')
    //     return
    //   }
    //   if (!this.params.height) {
    //     this.errors.push('商品高度不能为空')
    //     return
    //   }
    //   if (!$.isNumeric(this.params.height)) {
    //     this.errors.push('商品高度必须为数字')
    //     return
    //   }
    //   if (!this.params.weight) {
    //     this.errors.push('商品重量不能为空')
    //     return
    //   }
    //   if (!$.isNumeric(this.params.weight)) {
    //     this.errors.push('商品重量必须为数字')
    //     return
    //   }

    //   var params = this.params
    //   var btn = $(event.currentTarget)
    //   this.calculated = false

    //   $.get('/web-api/tool/fba-fee', params)
    //     .done((data) => {
    //       this.fbaFee = data.fba_fee
    //       this.calculated = true
    //     })
    //     .fail((xhr) => {
    //       if (xhr.status == 429) {
    //         this.errors = ['您访问过于频繁，请稍后重试']
    //       } else {
    //         this.errors = xhr.responseJSON.errors
    //       }
    //     })
    // }
  }
}
</script>

<style scoped>

</style>

