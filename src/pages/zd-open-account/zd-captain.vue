<template>
  <div class="zd-captain">
    <img class="head-img" src="./open-shop/pic-head@1x.png" alt="">
    <div class="mask"></div>
    <section class="contain" v-if="!showQrCode">
      <div class="banner">
        <div>手机号验证</div>
      </div>
      <form class="content">
        <section class="input-wrapper mobile border-bottom-1px">
          <div class="left">
            <div class="option phone"></div>
            <input class="input" type="number" placeholder="请输入手机号码" maxlength="11" v-model="phoneNumber">
          </div>
        </section>
        <section class="input-wrapper mobile border-bottom-1px">
          <div class="left">
            <div class="option code"></div>
            <input class="input" type="number" placeholder="请输入验证码" maxlength="11" v-model="authCode">
          </div>
          <div class="get-code" v-if="allowGetCode" @click="getCode">获取验证码</div>
          <div class="get-code coding" v-else>{{codeSeconds}}s</div>
        </section>
        <section class="btn" @click="submit">
          <div class="txt">加入</div>
        </section>
      </form>
    </section>
    <section class="contain" v-else>
      <div class="banner">
        <div>关注公众号</div>
      </div>
      <div class="content qr-code">
        <section class="qr-code-wrapper">
          <img style="width: 100%;height: 100%" src="./join/zhidian-qrcode.jpg" alt="">
        </section>
        <section class="txt-qr-code">关注公众号，查看店铺</section>
      </div>
    </section>
    <toast ref="toast"></toast>
    <loading ref="loader" v-if="showLoading" title="加载中"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { checkIsPhoneNumber } from 'common/js/util'
  import Loading from 'base/loading/loading'
  import Toast from 'base/toast/toast'
  import { register } from 'api/zd-open-account'
  import { ERR_OK } from 'api/config'

  export default {
    components: {
      Toast,
      Loading
    },
    data() {
      return {
        phoneNumber: '',
        authCode: '',
        allowGetCode: true,
        codeSeconds: 59,
        timer: null,
        showQrCode: false,
        accountInfo: {},
        showLoading: false
      }
    },
    created() {
      document.title = '赞播智店'
      this._getParams()
    },
    methods: {
      _showToast(msg) {
        msg && this.$refs.toast && this.$refs.toast.show(msg)
      },
      _showLoading() {
        this.showLoading = true
      },
      _hideLoading() {
        this.showLoading = false
      },
      submit() {
        this._showLoading()
        if (!this._check()) return
        this._showLoading()
        let data = Object.assign({}, this.accountInfo, {
          code: this.authCode,
          mobile: this.phoneNumber
        })
        register(data).then(res => {
          alert(JSON.stringify(res) + 'no1')
          this._hideLoading()
          if (res.error !== ERR_OK) {
            this._showToast(res.message)
            return
          }
          this.showQrCode = true
        }).catch(e => {
          alert(JSON.stringify(e) + 'no2')
        })
      },
      getCode() {
        if (!checkIsPhoneNumber(this.phoneNumber)) {
          this._showToast('请输入正确的手机号码')
          return
        }
        if (!this.allowGetCode) return
        this.allowGetCode = false
        this.timer = setInterval(() => {
          --this.codeSeconds
        }, 1000)
        // Jwt.getCode(this.phoneNumber).then(res => {
        //   if (res.error !== ERR_OK) {
        //     this.$refs.toast.show(res.message)
        //   }
        // })
      },
      _check() {
        if (!checkIsPhoneNumber(this.phoneNumber)) {
          this._showToast('请输入正确的手机号码')
          return false
        }
        if (!this.authCode) {
          this._showToast('请输入验证码')
          return false
        }
        return true
      },
      _getParams() {
        this.accountInfo = this.$route.query
      }
    },
    watch: {
      'codeSeconds'(curVal) {
        if (curVal <= 0) {
          this.timer && clearInterval(this.timer)
          this.allowGetCode = true
          this.codeSeconds = 59
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .zd-captain
    height: 100vh
    layout(column, block, nowrap)
    .head-img
      position: absolute
      top: 0
      left: 0
      width: 100vw
      height: 141.6vw
    .mask
      flex: 1
      overflow: hidden
      background: #000
      opacity: 0.5
    .contain
      position: relative
      bottom: 0
      height: 333px
      background: #FFFFFF
      border-radius: 6px 6px 0 0
      .banner
        position: absolute
        row-center()
        top: -10.5px
        width: 185px
        height: 50px
        box-sizing: border-box
        icon-image('./join/pic-head')
        layout()
        justify-content: flex-end
        align-items: center
        font-family: PingFangSC-Medium
        font-size: 18px
        color: #FFFFFF
        letter-spacing: 0.8px
        text-align: center
        padding-bottom: 13px
      .content
        font-family: PingFangSC-Regular
        font-size: 16px
        color: #1F1F1F
        letter-spacing: 0.6px
        padding: 59px 29px 0
        &.qr-code
          layout()
          align-items: center
        .qr-code-wrapper
          width: 180px
          height: 180px
          background: #ccc
        .txt-qr-code
          margin-top: 15px
          font-family: PingFangSC-Regular
          font-size: 15px
          color: #1F1F1F
        .input-wrapper
          height: 64px
          display: flex
          flex-direction: row
          flex-wrap: nowrap
          align-items: center
          .left
            layout(row, block, nowrap)
            align-items: center
            flex: 1
            overflow: hidden
            .option
              width: 17px
              height: 17px
              margin-right: 8px
              &.phone
                icon-image('./join/icon-phone')
              &.code
                icon-image('./join/icon-code')
          .get-code
            height: 29px
            width: 97px
            background: #FFFFFF
            border-1px(#E63232, 30px)
            font-size: 14px
            color: #E63232
            text-align: center
            line-height: 29px
            &.coding
              color: #B1B1B1
              border-1px(#D2D2D2, 30px)
        .btn
          margin: 49px 10px 0
          height: 45px
          background-image: linear-gradient(90deg, #EB5C5C 0%, #D32F2F 100%)
          border-radius: 54.5px
          layout(row, block, nowrap)
          align-items: center
          justify-content: center
          .txt
            font-family: PingFangSC-Medium
            font-size: 18px
            color: #FFFFFF
            letter-spacing: 0.8px

  .input
    height: 40px
    flex: 1
    overflow: hidden
    font-size: 16px
    color: #1F1F1F
    letter-spacing: 0.6px
    outline: none
    margin-right: 10px
    &::-webkit-input-placeholder
      color: #99A0AA
      font-size: 16px
      letter-spacing: 0.6px
    &:-moz-placeholder
      color: #99A0AA
      font-size: 16px
      letter-spacing: 0.6px
    &::-moz-placeholder
      color: #99A0AA
      font-size: 16px
      letter-spacing: 0.6px
    &:-ms-input-placeholder
      color: #99A0AA
      font-size: 16px
      letter-spacing: 0.6px

</style>
