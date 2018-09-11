<template>
  <div class="ws-wx-code">
    <section class="content" v-if="info">
      <div class="title-wrapper">
        <div class="logo">
          <img class="img-logo" :src="info.shop_image"/>
        </div>
        <div class="title">{{info.shop_name}}</div>
      </div>
      <div class="qr-code">
        <img class="img-qr-code" :src="info.qr_image"/>
      </div>
      <div class="explain">长按识别二维码{{type==='wx_group'?'进群':'添加好友'}}</div>
    </section>
    <toast ref="toast"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getGroupQrCode, getPersonalQrCode } from 'api/ws-qr-code'
  import Toast from 'base/toast/toast'

  export default {
    components: {
      Toast
    },
    data() {
      return {
        info: null,
        type: ''
      }
    },
    created() {
      this.getParams()
    },
    methods: {
      _getGroupCode(id, currentCorp) {
        getGroupQrCode(id, currentCorp).then(res => {
          if (!res) {
            this.$refs.toast.show('系统异常')
            return
          }
          if (!res.qr_image) {
            this.$refs.toast.show('人数已满')
          }
          this.info = res
        })
      },
      _getPersonalQrCode(id, currentCorp) {
        getPersonalQrCode(id, currentCorp).then(res => {
          if (!res) {
            this.$refs.toast.show('系统异常')
            return
          }
          if (!res.qr_image) {
            this.$refs.toast.show('商家暂未上传二维码')
          }
          this.info = res
        })
      },
      _setTitle(type) {
        if (type === 'wx_group') {
          document.title = '群二维码名片'
        } else {
          document.title = '个人二维码名片'
        }
      },
      getParams() {
        let type = this.$route.query.type
        let id = this.$route.query.employee_id
        let currentCorp = this.$route.query.current_corp
        this.type = type
        this._setTitle(type)
        switch (type) {
          case 'wx_group':
            this._getGroupCode(id, currentCorp)
            break
          case 'request_friend':
            this._getPersonalQrCode(id, currentCorp)
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
    padding: 33vw 22px 0
    box-sizing :border-box
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
          border-1px()
          .img-logo
            width: 100%
            height: 100%
        .title
          flex: 1
          margin-top: 25.5px
          margin-right: 20px
          font-family: PingFangSC-Medium
          font-size: 18px
          color: #2B2B2B
          letter-spacing: 0
      .qr-code
        width: 235px
        height: 235px
        margin: 36px 0
        background: #ccc
        border-1px()
        .img-qr-code
          width: 100%
          height: 100%
      .explain
        font-family: PingFangSC-Regular
        font-size: 12px
        color: #888888
        letter-spacing: 0
        margin-bottom: 27.5px
</style>

