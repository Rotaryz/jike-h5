<template>
  <div class="qrCode">

  </div>
</template>

<script type="text/ecmascript-6">
  import {getShopCode} from 'api/qrCode'
  export default {
    data() {
      return {
        wheelList: []
      }
    },
    created() {
      document.title = '加好友，聊天购物'
      this._getQrCode()
    },
    destroyed() {
      this.timer && clearInterval(this.timer)
    },
    methods: {
      _getQrCode() {
        console.log('>>')
        // getShopCode
      }
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .luckdraw
    width: 100%
    min-height: 100vh
    overflow: hidden
    background-color: #232347
    bg-image('./pic-background')
    background-size: 100%
    background-repeat: no-repeat
    .header-wrapper
      display: flex
      justify-content: space-between
      padding: 19px 12px 0
      .left-wrapper
        height: 24px
        border-1px(rgba(255, 255, 255, .15), 50px)
        overflow: hidden
        .luckerPannel
          /*transition: all .5s*/
          .item
            display: flex
            align-items: center
            height: 24px
            padding-right: 10px
            .avatar-wrapper
              display: inline-block
              vertical-align: middle
              width: 20px
              height: 20px
              margin-left: 2px
              margin-right: 1.5px
              border-radius: 50%
              overflow: hidden
            .content
              display: inline-block
              vertical-align: middle
              font-size: $font-size-small-s
              color: $color-white
      .right-wrapper
        display: flex
        align-items: center
        justify-content: center
        width: 44px
        height: 24px
        line-height 24px
        border-1px(rgba(255, 255, 255, .15), 50px)
        font-size: $font-size-small-s
        color: $color-white
        .icon-arrow-right
          width: 5px
          height: 8px
          margin-left: 3px
          icon-image('icon-right')
    .title-wrapper
      width: 100%
      height: 0
      margin-top: 10px
      padding-top: 23.866666666666%
      bg-image('./pic-header_title')
      background-size: 69.2% 100%
      background-position: center
      background-repeat: no-repeat
    .wheel-wrapper
      width: 100%
      padding: 0 10%
      box-sizing: border-box
      .wheel
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        .wheel-pointer
          position: absolute
          top: 50%
          left: 50%
          width: 28.6666666666666%
          height: 32%
          z-index: 50
          transform: translate(-50%, -50%)
          bg-image('./pic-pointer')
          background-size: 100% 100%
        .wheel-content
          position: absolute
          top: 0
          left: 0
          display: flex
          justify-content: center
          width: 100%
          height: 100%
          transition-timing-function: ease-in-out
          transition-property: transform
          bg-image('./pic-zp')
          background-size: 100% 100%
          .wheel-relative
            position: relative
            width: 100%
            height: 100%
            .prize
              position: absolute
              top: 0
              left: 27.7%
              width: 45%
              height: 100%
              box-sizing: border-box
              padding-top: 11%
              text-align: center
              for $i in 0 1 2 3 4 5
                &.prize-{$i}
                  z-index: (-($i) + 6)
                  transform: rotate($i * 60deg)
              .name
                margin-bottom: 10%
                font-size: $font-size-small-s
                color: $color-orange
              .img-wrapper
                width: 37.04%
                height: 13.11%
                margin: 0 auto
                box-sizing: border-box
                img
                  max-width: 100%
                  max-height: 100%
      .bottom-pan
        width: 100%
        height: 0
        margin-top: -3%
        padding-top: 7.6%
        bg-image('./pic-bottom_pan')
        background-size: 44.9333333% 100%
        background-repeat: no-repeat
        background-position: center
      .count-wrapper
        width: 100%
        margin-top: 10px
        text-align: center
        color: $color-white
        font-size: $font-size-small
        .number
          color: $color-yellow
    .prize-wrapper
      margin-top: 24px
      padding: 0 39px
      .title
        width: 100%
        height: 0
        margin-bottom: 12.5px
        padding-top: 5.993150684%
        bg-image('./pic-title')
        background-size: 100%
        background-repeat: no-repeat
      .container
        width: 100%
        box-sizing: border-box
        .item
          display: flex
          align-items: center
          justify-content: space-between
          height: 24px
          margin-bottom: 10px
          padding: 0 20px 0px 10px
          border-radius: 100px
          line-height: 24px
          border-1px(rgba(255, 255, 255, .15), 50px)
          background-color: rgba(255, 255, 255, .15)
          .left-wrapper
            flex: 1
            no-wrap()
            .avatar-wrapper
              display: inline-block
              vertical-align: middle
              width: 20px
              height: 20px
              border-radius: 50%
              overflow: hidden
            .content
              display: inline-block
              vertical-align: middle
              font-size: $font-size-small-s
              color: $color-text-ll
          .right-wrapper
            font-size: $font-size-small-s
            color: $color-text-ll
    .modal-wrapper
      width: 100%
      height: 100%
      text-align: center
      .top
        height: 125.5px
        box-sizing: border-box
        padding-top: 53.5px
        background-color: $color-orange-d
        .title
          margin-bottom: 9.5px
          font-size: $font-size-large-m
          color: $color-text-g
        .content
          font-size: $font-size-medium
          color: $color-white
          .number
            font-family: $font-family-regular
      .middle
        height: 119px
        padding-top: 17px
        box-sizing: border-box
        .content
          line-height: 16.5px
          font-size: $font-size-small
          color: $color-text-dd
      .bottom
        height: 55.5px
        padding: 0 10px
        box-sizing: border-box
        .btn
          width: 100%
          height: 40px
          line-height: 40px
          border-radius: 2px
          font-size: $font-size-small
          color: $color-white
          background: $color-orange-d
</style>

