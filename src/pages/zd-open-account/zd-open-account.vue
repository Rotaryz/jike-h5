<template>
  <div class="poster-open-account">
    <img class="head-img" src="./open-shop/pic-head@1x.png" alt="">
    <section class="broadcast-wrapper">
      <swiper :options="options" class="broadcast" ref="mySwiper" @slideChange="slideChange">
        <swiper-slide class="broadcast-item" id="slide-0" >
          <img class="slide-image" src="./open-shop/pic-broadcast_ai.png" alt="">
          <div class="title">砍价/拼团</div>
        </swiper-slide>
        <swiper-slide class="broadcast-item" id="slide-1">
          <img class="slide-image" src="./open-shop/pic-broadcast_nlmx@1x.png" alt="">
          <div class="title">数据分析</div>
        </swiper-slide>
        <swiper-slide class="broadcast-item" id="slide-2">
          <img class="slide-image" src="./open-shop/pic-broadcast_xwzz@1x.png" alt="">
          <div class="title">AI雷达</div>
        </swiper-slide>
      </swiper>
    </section>
    <ul class="slider-dots">
      <li class="dot" v-for="(item,index) in sliderInfo" :key="index" :class="sliderIndex===index?'active':''"></li>
    </ul>
    <section class="why">
      <div class="title">为什么选择赞播智店</div>
      <ul class="content">
        <li class="item-wrapper" v-for="(item,index) in whyInfo" :key="index">
          <div class="right">
            <img class="avatar" v-if="item.icon" :src="item.icon" alt="">
          </div>
          <div class="left">
            <div class="title">{{item.title}}</div>
            <div class="txt">{{item.txt}}</div>
          </div>
        </li>
      </ul>
    </section>
    <section class="step-wrapper">
      <div class="title">使用流程</div>
      <div class="title-two">（三步完成开店，轻松体验赞播微商神器）</div>
      <img class="step" src="./open-shop/pic-first.png" alt=""/>
      <img class="step" src="./open-shop/pic-two.png" alt=""/>
    </section>
    <section class="btn-wrapper">
      <div class="btn" @click="toOpenShop">我要开店</div>
    </section>
    <toast ref="toast"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import Toast from 'base/toast/toast'
  import URLS from 'common/js/base'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  const vw = document.documentElement.clientWidth / 100
  const sliderInfo = [{
    imgUrl: '/zd-img/open-shop/pic-broadcast_xwzz@1x.png',
    title: 'AI雷达'
  }, {
    imgUrl: '/zd-img/open-shop/pic-broadcast_ai.png',
    title: '砍价/拼团'
  }, {
    imgUrl: '/zd-img/open-shop/pic-broadcast_nlmx@1x.png',
    title: '数据分析'
  }]
  const whyInfo = [{
    icon: '/zd-img/open-shop/pic-toker@2x.png',
    title: '拓客神器',
    txt: '砍价抢购，火爆拼团，快速裂变营销。'
  }, {
    icon: '/zd-img/open-shop/pic-deal@2x.png',
    title: '成交神器',
    txt: 'AI雷达，行为追踪，精准个人营销。'
  }, {
    icon: '/zd-img/open-shop/pic-recruit@2x.png',
    title: '招商神器',
    txt: '转发赚钱，转发商品，单兵和团队营销。'
  }, {
    icon: '/zd-img/open-shop/pic-administration@2x.png',
    title: '管理神器',
    txt: '能力模型，评测系统，精准识别员工价值。'
  }]
  export default {
    components: {
      Toast,
      swiper,
      swiperSlide
    },
    data() {
      return {
        hasPhoneNumber: false,
        hasAttention: false,
        code: null,
        qrCodeImg: null,
        sliderInfo,
        sliderMargin: 15.67 * vw + 'px',
        sliderIndex: 0,
        circular: true,
        whyInfo,
        fromId: '',
        openType: 0,
        accountInfo: {},
        options: {
          loop: true,
          centeredSlides: true,
          slidesPerView: 1.3
        },
        startIndex: 1,
        endIndex: 1
      }
    },
    created() {
      alert(window.location.path)
      document.title = '赞播智店'
      this._getParams()
    },
    beforeRouteLeave(to, from, next) {
      Object.assign(to.query, this.$route.query)
      next()
    },
    methods: {
      slideChange() {
        this.endIndex = this.$refs.mySwiper.swiper.activeIndex - 1
        if (this.endIndex > this.sliderInfo.length - 1) {
          this.endIndex = 0
        } else if (this.endIndex < 0) {
          this.endIndex = this.sliderInfo.length - 1
        }
        this.sliderIndex = this.endIndex
      },
      toOpenShop() {
        this.$router.push(`/zd-captain`)
      },
      _getParams() {
        this.accountInfo = this.$route.query
        if (!this.accountInfo.unionid || !this.accountInfo.openid) {
          alert(`##;${URLS.zd}/wechat/oauth?type=${this.accountInfo.user_type}`)
          window.location.href = `${URLS.zd}/wechat/oauth?type=${this.accountInfo.user_type}`
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  @import "~swiper/dist/css/swiper.css"

  .poster-open-account
    min-height: 100vh
    background-color: #FFFFFF
    padding-bottom: 16.866vw
    .head-img
      width: 100vw
    .broadcast-wrapper
      margin-top: 20px
      width: 100%
      .broadcast
        height: 100%
        .broadcast-item
          height: 100%
          layout()
          flex-wrap: nowrap
          align-items: center
          .slide-image
            width: 100%
          .title
            font-family: $font-family-regular
            font-size: 20px
            color: #374B63
            letter-spacing: 0
            text-align: center
            line-height: 1
            height: @font-size
    .slider-dots
      height: 5.5px
      padding: 21.5px 0 50.5px
      layout(row)
      justify-content: center
      .dot
        width: 5.5px
        height: 5.5px
        border-radius: 100%
        background: #F94C5F
        box-shadow: 0 5px 10px 0 #FFD0D5
        margin: 0 2.75px
        transition: all 0.3s
        &.active
          width: 19px
          border-radius: 100px

    .why
      font-family: $font-family-regular
      color: #374B63
      padding-bottom: 62px
      .title
        font-family: PingFang-SC-Bold
        font-size: 30px
        letter-spacing: 0
        text-align: center
        line-height: 1
        margin-bottom: 47px
      .content
        padding: 0 35px
        .item-wrapper
          layout(row, block, nowrap)
          height: 68.5px
          margin-bottom: 35px
          &:last-child
            margin-bottom: 0
          .right
            width: 55px
            height: 100%
            margin-right: 32px
            layout()
            justify-content: center
            align-items: center
            .avatar
              width: 55px
              height: 55px
          .left
            flex: 1
            height: 100%
            layout()
            .title
              font-size: 20px
              letter-spacing: 2px
              line-height: 1
              margin-bottom: 6.5px
              text-align: left
            .txt
              font-size: 14px
              color: #7F8189
              letter-spacing: 0.6px
              line-height: 1.2

    .step-wrapper
      padding: 0 21px
      layout()
      align-items: center
      font-family: $font-family-regular
      color: #374B63
      margin-bottom: 16.866vw
      .step
        width: 100%
      .title
        font-size: 8vw
        letter-spacing: 0
        text-align: center
        line-height: 1
        width: 100%
        position: relative
      .title-two
        margin: 10px 0 23px
        font-size: 14px
        color: #AFB3C6
        text-align: center
        line-height: 1

    .btn-wrapper
      position: fixed
      bottom: 0
      width: 100%
      height: 16.866vw
      line-height: 16.866vw
      background: #FFFFFF
      box-shadow: 0 0 20px 0 rgba(74, 74, 74, 0.15)
      layout()
      justify-content: center
      align-items: center
      z-index: 120
      .btn
        display: block
        height: 13.33vw
        width: 84.6%
        box-sizing: border-box
        background-image: linear-gradient(90deg, #EB5C5C 0%, #D32F2F 100%)
        border-radius: 14.53vw
        font-family: PingFangSC-Semibold
        font-size: 20px
        color: #FFFFFF
        text-align: center
        line-height: 13.33vw
</style>
