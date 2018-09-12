<template>
  <div class="ws-pay-server">
    <div class="header-bg"></div>
    <div class="content">
      <header class="header-title">
        <div class="logo"></div>
        <div class="title">赞播微店</div>
      </header>
      <form class="form">
        <section class="title border-bottom-1px">
          <div class="icon-title left"></div>
          <div class="middle">团长版</div>
          <div class="icon-title right"></div>
        </section>
        <section class="money">
          <div class="price">¥298</div>
          <div class="old-price">原价：¥2,980</div>
        </section>
        <section class="input-wrapper">
          <div class="input-content border-bottom-1px">
            <div class="option">店铺名称</div>
            <input class="input-box" placeholder="请输入店铺名（开店后可修改)" type="text" maxlength="15" v-model="shopName">
          </div>
          <div class="input-content border-bottom-1px">
            <div class="option">手机号码</div>
            <input class="input-box" placeholder="请填写微信绑定的手机号码" type="number" v-model="mobile">
          </div>
        </section>
        <section class="button" @click="submit">立即支付</section>
      </form>
      <footer class="footer">
        <section class="footer-title">
          <div class="footer-icon left"></div>
          <div class="middle">团长专属权益</div>
          <div class="footer-icon right"></div>
        </section>
        <ul class="footer-content">
          <li class="item-wrapper">
            <div class="txt">自建商品</div>
          </li>
          <li class="item-wrapper">
            <div class="txt">创建活动</div>
          </li>
          <li class="item-wrapper">
            <div class="txt">发布动态</div>
          </li>
          <li class="item-wrapper">
            <div class="txt">发展队员</div>
          </li>
        </ul>
      </footer>
    </div>
    <toast ref="toast"></toast>
    <loading ref="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/load/load'
  import Toast from 'base/toast/toast'
  import * as Util from 'common/js/util'

  export default {
    components: {
      Loading,
      Toast
    },
    data() {
      return {
        shopName: '',
        mobile: '',
        allow: true
      }
    },
    mounted() {
      // this.$refs.loading.show()
    },
    methods: {
      submit() {
        let flag = this.checkShopName() && this.checkMobile() && this.allow
        if (!flag) return
        console.log(66666666666)
        this.allow = false
        this.showLoading()
        setTimeout(() => {
          this.hideLoading()
          this.allow = true
          console.log(2)
          this.toSuccessPage()
        }, 2000)
      },
      showLoading() {
        this.$refs.loading.show()
      },
      hideLoading() {
        this.$refs.loading.hide()
      },
      toSuccessPage() {
        const path = '/ws-pay-success'
        this.$router.replace(path)
      },
      checkShopName() {
        if (!this.shopName) {
          this.$refs.toast.show('请输入店铺名称')
        }
        return this.shopName
      },
      checkMobile() {
        let flag = Util.checkIsPhoneNumber(this.mobile)
        if (!flag) {
          this.$refs.toast.show('请输入正确手机号码')
        }
        return flag
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  input
    outline: none

  .ws-pay-server
    position: relative
    background: #ffffff
    .header-bg
      position: absolute
      height: 222px
      top: 0
      left: 0
      right: 0
      icon-image(pic-moneybg)
    .content
      position: relative
      padding: 0 15px
      .header-title
        display: flex
        flex-direction: row
        align-items: center
        padding: 20px 0
        .logo
          width: 35px
          height: 35px
          icon-image(pic-head1)
          margin-right: 8.5px
        .title
          font-family: PingFangSC-Medium;
          font-size: 16px
          color: #E1E1E1;
          letter-spacing: 0.6px;
          line-height: 1.1
      .form
        background: #FFFFFF;
        border: 1px solid rgba(236, 237, 241, 0.58);
        box-shadow: 0 4px 16px 0 rgba(55, 75, 99, 0.10);
        border-radius: 3px;
        padding: 0 20px
        .title
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center
          padding: 19px
          .icon-title
            width: 23.5px
            height: 9.5px
            &.left
              icon-image(pic-colonel_graphical1)
            &.right
              icon-image(pic-colonel_graphical2)
          .middle
            font-family: PingFangSC-Semibold;
            font-size: 18px
            color: #374B63;
            line-height: 1.1
            margin: 0 4px
        .money
          display: flex
          flex-direction: column
          align-items: center
          padding-top: 30px
          .price
            font-family: DINAlternate-Bold;
            font-size: 45px;
            color: #374B63;
            letter-spacing: 2px;
            line-height: 1.1
            position: relative
            &:first-letter
              font-family: DINAlternate-Bold;
              font-size: 30px
              color: #374B63;
              letter-spacing: 1.33px;
              margin-right: 4px
            &:after
              content: ''
              width: 43px
              height: 17.5px
              position: absolute
              top: -7px;
              right: -34px;
              icon-image(pic-tab)
          .old-price
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #7D849C;
            line-height: 1.1
            text-decoration: line-through
        .input-wrapper
          margin-top: 4.5px
          .input-content
            height: 34.5px
            display: flex
            flex-direction: row
            padding-top: 20.5px
            .option
              font-family: PingFang-SC-Medium;
              font-size: 3.7vw;
              color: #828AA2;
              letter-spacing: 0.6px;
              line-height: 1.1
              margin-right: 4.4vw
            .input-box
              flex: 1
              font-family: PingFangSC-Regular;
              font-size: 3.7vw;
              color: #374B63
              letter-spacing: 0;
              height: 3.7vw;
              &::-webkit-input-placeholder
                font-size: 3.7vw;
                color: #CCCCCC;
              &:-moz-placeholder
                font-size: 3.7vw;
                color: #CCCCCC;
              &::-moz-placeholder
                font-size: 3.7vw;
                color: #CCCCCC;
              &:-ms-input-placeholder
                font-size: 3.7vw;
                color: #CCCCCC;

        .button
          background: #F94C5F;
          box-shadow: 0 4px 16px 0 rgba(249, 76, 95, 0.30);
          border-radius: 100px;
          height: 45px
          margin: 44.5px 20px
          font-family: PingFangSC-Regular;
          font-size: 16px
          color: #FFFFFF;
          letter-spacing: 0.6px;
          text-align: center;
          line-height: 45px

      .footer
        .footer-title
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center
          padding: 43px 0 51px
          .footer-icon
            width: 72.5px
            height: 13px
            &.left
              icon-image(pic-complete_graphical1)
            &.right
              icon-image(pic-complete_graphical2)
          .middle
            font-family: PingFangSC-Medium;
            font-size: 16px
            color: #797B83;
            letter-spacing: 0.6px;
            line-height: 1.1
            margin: 0 4px
        .footer-content
          display: flex
          flex-direction: row
          justify-content: space-between
          padding-bottom: 91.5px
          .item-wrapper
            width: 55px
            height: 55px
            position: relative
            .txt
              position: absolute
              top: 73px
              font-family: PingFangSC-Regular;
              font-size: 3.7vw
              color: #828AA2;
              letter-spacing: 0.52px;
              text-align: center;
              white-space: nowrap
            &:nth-child(1)
              icon-image(icon-shop)
            &:nth-child(2)
              icon-image(icon-activity)
            &:nth-child(3)
              icon-image(icon-release)
            &:nth-child(4)
              icon-image(icon-team)

</style>
