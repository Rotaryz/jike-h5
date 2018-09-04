<template>
  <div class="ws-wx-code">
    <section class="content" v-if="info">
      <div class="title-wrapper">
        <img class="logo" :src="info.personal_qr_image" />
        <div class="title">{{info.shop_name}}</div>
      </div>
      <div class="qr-code"></div>
      <div class="explain">长按识别二维码进群</div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getGroupQrCode, getPersonalQrCode} from 'api/ws-qr-code'
  export default {
    data() {
      return {
        info: null
      }
    },
    created() {
      this.getParams()
    },
    methods: {
      _getGroupCode(id) {
        getGroupQrCode(id).then(res => {
          console.log(res)
          // this.codeImage = res.wx_group_qrcode
        })
      },
      _getPersonalQrCode(id) {
        getPersonalQrCode(id).then(res => {
          console.log(res)
          this.info = res.data
          // this.codeImage = res.personal_qr_image
        })
      },
      _setTitle() {
        console.log(2)
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
            break
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .ws-wx-code
    background: #20202E
    min-height: 100vh
    padding: 124px 22px 0
    .content
      display: flex
      flex-direction: column
      align-items: center
      background: #ffffff
      border-radius: 4px
      .title-wrapper
        display: flex
        flex-direction: row
        width: 100%
        .logo
          width: 60px
          height: 60px
          opacity: 0.8
          background: #F3F5F7
          border-radius: 8px
          margin: 20px 10px 0 20px
        .title
          flex: 1
          margin-top :25.5px
          margin-right :20px
          font-family: PingFangSC-Medium
          font-size: 18px
          color: #2B2B2B
          letter-spacing: 0
      .qr-code
        width: 235px
        height: 235px
        margin: 36px 0
        background: #ccc
      .explain
        font-family: PingFangSC-Regular
        font-size: 12px
        color: #888888
        letter-spacing: 0
        margin-bottom: 27.5px
</style>

