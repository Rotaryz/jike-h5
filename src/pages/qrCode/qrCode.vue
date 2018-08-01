
<template>
    <div class="qrCode">
        <div class="model">
          <div class="model-bac">
            <div class="model-add">扫码加好友，随时聊天购买</div>
          </div>
          <div class="model-code">
            <img v-if="codeImage" src="./qr-code.jpeg" height="205" width="205"/></div>
          <div class="model-sweep">长按二维码 扫一扫</div>
        </div>
      <!--<iframe class="test" src="http://weixin.qq.com/r/_C7L08vEb5YQrY_w93vq" frameborder="0"></iframe>-->
    </div>
</template>

<script type="text/ecmascript-6">
  import {getShopCode} from 'api/qrCode'

  export default {
    data() {
      return {
        codeImage: './twoCode.png'
      }
    },
    created() {
      this._getShopCode()
    },
    methods: {
      _getShopCode() {
        getShopCode().then((res) => {
          if (res.wechant_qrcode !== '') {
            this.codeImage = res.wechant_qrcode
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .test
    width :100vw
    height :400px
    z-index :2

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

