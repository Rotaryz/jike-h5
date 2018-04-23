
<template>
    <div class="qrCode">
        <div class="model">
          <div class="model-bac">
            <img class="model-bac-img" src="./pic-auxiliary_figure@2x.png"/>
            <div class="model-logo">
              <img class="model-logo-left" src="./pic-logo_service@2x.png"/>
              <span class="model-logo-span">赞播客服二维码</span>
            </div>
            <div class="model-add">扫码加好友</div>
          </div>
          <div class="model-code">
            <img v-if="codeImage" :src="codeImage" height="205" width="205"/></div>
          <div class="model-sweep">长按二维码 扫一扫</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {getShopCode} from 'api/qrCode'
  export default {
    data() {
      return {
        codeImage: ''
      }
    },
    created() {
      this._getShopCode()
    },
    methods: {
      _getShopCode() {
        getShopCode().then((res) => {
          console.log(res)
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
  .qrCode

    background-color: $color-mask-bgc
    width: 100%
    height: 100%
    position: fixed
    .model
      opacity: none
      width: 280px
      height: 380px
      background-color: #fff
      position: absolute
      top: 0px
      right: 0px
      bottom: 0px
      left: 0px
      margin: auto
      text-align: center
      .model-bac
        height: 104px
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
          .model-logo-span:after
            content: ''
            position: absolute
            border-right: 1px solid #ccc
            height: 16px
            top: 5px
            left: -2px
      .model-add
        height: 48px
        position: absolute
        top: 50px
        text-align: center
        width: 100%
        ont-family: 'PingFangSC-Medium'
        font-size: 20px
        color: #464646
        letter-spacing: 0
        line-height: 48px

      .model-code
        width: 205px
        height: 205px
        margin: 0px auto
        background: #252439
      .model-sweep
        font-family: 'PingFangSC-Light'
        font-size: 14px
        color: #464646
        letter-spacing: 0
        height: 60px
        line-height: 60px
</style>

