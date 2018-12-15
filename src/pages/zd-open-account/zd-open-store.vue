<template>
  <div class="zd-open-staff">
    <img class="bg-img" src="./open-staff/pic-openshop@1x.png" alt="">
    <section class="banner">
      <div class="logo" v-if="merchantInfo.avatar" :style="{backgroundImage: 'url(' + merchantInfo.avatar + ')',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}"></div>
      <div class="logo" v-else></div>
      <div class="content">
        <div class="name" v-if="merchantInfo.name">{{merchantInfo.name}}</div>
        <div class="tile" v-if="merchantInfo.shop_name">正在邀请您开通{{merchantInfo.shop_name}}</div>
      </div>
    </section>
    <section class="btn-wrapper" @click="toStaff" v-if="merchantInfo.shop_name">我要开店{{'(' + merchantInfo.shop_name + ')'}}</section>
    <section class="btn-wrapper" @click="toStaff" v-else>我要开店</section>
    <toast ref="toast"></toast>
    <loading ref="loader"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import URLS from 'common/js/base'
  import Toast from 'base/toast/toast'
  import Loading from 'base/loading-css/loading-css'
  import { getMerchantInfo } from 'api/zd-open-account'
  import { ERR_OK } from 'api/config'

  export default {
    components: {
      Toast,
      Loading
    },
    data() {
      return {
        accountInfo: {},
        merchantInfo: {
          avatar: '',
          name: '',
          shop_name: ''
        }
      }
    },
    created() {
      document.title = '赞播智店'
      this._getParams()
    },
    beforeMount() {
    },
    mounted() {
      this._getMerchantInfo()
    },
    beforeUpdate() {
    },
    beforeRouteLeave(to, from, next) {
      Object.assign(to.query, this.$route.query)
      next()
    },
    methods: {
      toStaff() {
        this.$router.push(`/zd-store`)
      },
      _getParams() {
        this.accountInfo = this.$route.query
        if (!this.accountInfo.unionid || !this.accountInfo.openid) {
          window.location.href = `${URLS.zdOauth}/wechat/oauth?type=${this.accountInfo.user_type}&merchant_id=${this.accountInfo.merchant_id}`
        }
      },
      _showToast(msg) {
        msg && this.$refs.toast && this.$refs.toast.show(msg)
      },
      _showLoading() {
        this.$refs.loader && this.$refs.loader.show()
      },
      _hideLoading() {
        this.$refs.loader && this.$refs.loader.hide()
      },
      _getMerchantInfo() {
        let merchantId = this.$route.query.merchant_id
        getMerchantInfo({merchant_id: merchantId}).then(res => {
          this._hideLoading()
          if (res.error !== ERR_OK) {
            this._showToast(res.message)
            return
          }
          this.merchantInfo = res.data
        }).catch(e => {
          console.error(e)
        })
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
