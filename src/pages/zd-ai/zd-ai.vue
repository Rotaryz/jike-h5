<template>
  <div class="zd-captain">
    <div class="mask">
      <img class="img" src="http://5b0988e595225.cdn.sohucs.com/images/20180714/089696d1a0cd43d7ab3965d8652cd2ef.png" alt="">
    </div>
    <section class="contain" v-if="!showQrCode">
      <div class="banner">
        <div>手机号验证</div>
      </div>
      <form class="content">
        <section class="input-wrapper mobile border-bottom-1px">
          <div class="left">
            <div class="option phone"></div>
            <input class="input" type="tel" placeholder="请输入手机号码" maxlength="11" v-model="phoneNumber">
          </div>
        </section>
        <section class="input-wrapper mobile border-bottom-1px">
          <div class="left">
            <div class="option code"></div>
            <input class="input" type="tel" placeholder="请输入验证码" maxlength="11" v-model="authCode">
          </div>
          <div class="get-code" :class="codeStyle? 'coding' : ''" v-if="allowGetCode" @click="getCode">获取验证码</div>
          <div class="get-code coding" v-else>{{codeSeconds}}s</div>
        </section>
        <section class="btn" :class="btnStyle || codeStyle?'unable':''" @click="submit">
          <div class="txt">确定</div>
        </section>
      </form>
    </section>
    <toast ref="toast"></toast>
    <loading ref="loader"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { checkIsPhoneNumber } from 'common/js/util'
  import Loading from 'base/loading-css/loading-css'
  import Toast from 'base/toast/toast'
  import { zdAiUltra } from 'api/zd-ai'
  import { ERR_OK } from 'api/config'
  export default {
    components: {
      Toast,
      Loading
    },
    data() {
      return {
        phoneNumber: '15197865308',
        authCode: '234689',
        allowGetCode: true,
        codeSeconds: 59,
        timer: null,
        showQrCode: false,
        accountInfo: {},
        codeStyle: true,
        btnStyle: true,
        host: /(com)/.test(window.location.host) ? `https://zhidian-radar.jkweixin.com/#` : `https://zhidian-radar.jkweixin.net/#`,
        url: ''
      }
    },
    created() {
      this._getParams()
      this.url = this.host + `/oauth?access_token=8961208ae3bb1cc68bb8405b0d5a4e7b869cb1e8`
    },
    methods: {
      _showToast(msg) {
        msg && this.$refs.toast && this.$refs.toast.show(msg)
      },
      _showLoading() {
        this.$refs.loader && this.$refs.loader.show()
      },
      _hideLoading() {
        this.$refs.loader && this.$refs.loader.hide()
      },
      submit() {
        if (!this._check()) return
        this._showLoading()
        let data = Object.assign({}, this.accountInfo, {
          code: this.authCode,
          mobile: this.phoneNumber
        })
        zdAiUltra(data).then(res => {
          this._hideLoading()
          console.log(res)
          if (res.error !== ERR_OK) {
            this._showToast(res.message)
            return
          }
          if (!res.data.access_token) {
            this._showToast('返回token失败:' + res.data.access_token)
            return
          }
          window.location.href = this.url + res.data.access_token
        }).catch(e => {
          // alert('系统异常：' + JSON.stringify(e))
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
      },
      phoneNumber(curVal) {
        if (checkIsPhoneNumber(curVal)) {
          this.codeStyle = false
        } else {
          this.codeStyle = true
        }
      },
      authCode(curVal) {
        if (curVal) {
          this.btnStyle = false
        } else {
          this.btnStyle = true
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .img
    width 100%
    height :100%
    object-fit :cover
    object-position: right

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
          &.unable
            opacity :0.6
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
