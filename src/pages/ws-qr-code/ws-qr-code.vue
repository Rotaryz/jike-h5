<template>
  <div class="qrCode">
    <div class="model">
      <div class="model-bac">
        <div class="model-add">关注微信企业号</div>
      </div>
      <div class="model-code">
        <img v-if="codeImage" :src="codeImage" height="205" width="205"/></div>
      <div class="model-sweep">长按二维码 扫一扫</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getQrCode, getGroupQrCode, getPersonalQrCode} from 'api/ws-qr-code'

  export default {
    data() {
      return {
        codeImage: ''
      }
    },
    created() {
      this.getParams()
    },
    methods: {
      _getQrCode(id) {
        getQrCode(id).then((res) => {
          this.codeImage = res.corp_wxqrcode
        })
      },
      _getGroupCode(id) {
        getGroupQrCode(id).then(res => {
          console.log(res)
          this.codeImage = res.wx_group_qrcode
        })
      },
      _getPersonalQrCode(id) {
        getPersonalQrCode(id).then(res => {
          console.log(res)
          this.codeImage = res.personal_qr_image
        })
      },
      getParams() {
        let type = this.$route.query.type
        let id = this.$route.query.employee_id
        switch (type) {
          case 'wx_group':
            this._getGroupCode(id)
            break
          case 'request_friend':
            this._getPersonalQrCode(id)
            break
          default:
            this._getQrCode(id)
            break
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .qrCode

    background-color: $color-mask-bgc
    width: 100%
    height: 100%
    position: fixed
    .model
      opacity: none
      width: 275px
      height: 335px
      background-color: #fff
      position: absolute
      top: 0px
      right: 0px
      bottom: 0px
      left: 0px
      margin: auto
      text-align: center
      .model-bac
        height: 70px
        line-height: 52px
        position: relative
        .model-bac-img
          width: 100%
        .model-logo
          height: 60px
          line-height: 60px
          position: absolute
          top: 0px
          width: 100%
          .model-logo-left
            width: 60px
            vertical-align: middle
            margin-top: -3px
            padding-right: 5px

          .model-logo-span
            position: relative
            padding-left: 5px
            font-family: 'PingFangSC-Light'
            font-size: 18px
            color: #9B9B9B
            letter-spacing: 0
      .model-add
        height: 70px
        position: absolute
        text-align: center
        width: 100%
        font-family: 'PingFangSC-Medium'
        font-size: 18px
        color: #464646
        letter-spacing: 0
        line-height: 70px

      .model-code
        width: 205px
        height: 205px
        margin: 0px auto
      .model-sweep
        font-family: 'PingFangSC-Medium'
        font-size: 14px
        color: #464646
        letter-spacing: 0
        height: 60px
        line-height: 60px
</style>

