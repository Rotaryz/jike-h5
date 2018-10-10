<template>
  <div class="zd-open-staff">
    <img class="bg-img" src="./open-staff/pic-openshop@1x.png" alt="">
    <section class="banner">
      <div class="logo"></div>
      <div class="content">
        <div class="name">Peter</div>
        <div class="tile">正在邀请您开通国颐堂的小店</div>
      </div>
    </section>
    <section class="btn-wrapper" @click="toStaff">我要开店(国颐堂的小店)</section>
    <toast ref="toast"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import URLS from 'common/js/base'
  import Toast from 'base/toast/toast'

  export default {
    components: {
      Toast
    },
    data() {
      return {
        accountInfo: {}
      }
    },
    created() {
      document.title = '赞播智店'
      this._getParams()
    },
    methods: {
      toStaff() {
        this.$router.push(`/zd-staff?unionid=${this.accountInfo.unionid}&openid=${this.accountInfo.openid}`)
      },
      _getParams() {
        this.accountInfo = this.$route.query
        if (!this.accountInfo.unionid || !this.accountInfo.openid) {
          window.location.href = `${URLS.zd}/wechat/oauth?type=${this.accountInfo.user_type}`
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .zd-open-staff
    height: 100vh
    background: #00031e
    .bg-img
      width: 100%
    .banner
      position: fixed
      top: 20px
      left: 15px
      right: 15px
      padding: 15px
      background: #FFFFFF
      border-radius: 12px 0 12px 0
      layout(row)
      .logo
        height: 50px
        width: 50px
        border-radius: 50%
        overflow: hidden
        background-color: #edeef2
      .content
        margin-left: 15px
        flex: 1
        overflow: hidden
        .name
          font-family: PingFangSC-Semibold
          font-size: 18px
          color: #1F1F1F
          margin: 4px 0 9px
        .title
          font-family: PingFangSC-Regular
          font-size: 14px
          color: #1F1F1F
          line-height: 1.4
    .btn-wrapper
      position: fixed
      bottom: 35px
      left: 15px
      right: 15px
      height: 50px
      background-image: linear-gradient(90deg, #EB5C5C 0%, #D32F2F 100%)
      border-radius: 54.5px
      font-family: PingFangSC-Medium
      font-size: 18px
      color: #FFFFFF
      letter-spacing: 0.8px
      text-align: center
      line-height: 50px
</style>
