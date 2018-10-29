<template>
  <transition name="slide">
    <div class="legal-right">
      <div class="title">{{title}}</div>
      <div class="content-wrapper" v-if="id === 0">
        <p class="content">
          您好，点击我的-<span class="main">全部订单</span>，找到您对应购买的商品，如您的订单变成<span class="main">待收货</span>，您就可以点击查看该<span class="main">订单详情</span>了，在最下方可以看到<span class="main">物流单号</span>，您可以复制物流单号并查询物流进度。
          <br/>
          <br/>
          附注：商家点击发货后，由于打包取货以及扫描等问题，可能会有延迟，您可延后24-48小时再进行查询。
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_11.png" alt="">
        </div>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_12.png" alt="">
        </div>
      </div>
      <div class="content-wrapper" v-else-if="id === 1">
        <p class="content">
          您好，退款成功后到账时间一般需要3-15个工作日，<span class="main">原路退回</span>到您当时的付款账户内（微信绑定的银行卡或零钱包）。
          <br/>
          <br/>
          查询方式：
          <br/>
          首先，打开微信钱包页面，找到右上角的“...”，点击
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_21.png" alt="">
        </div>
        <p class="content">
          其次，点击“账单”，打开微信支付的账单页面；
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_22.png" alt="">
        </div>
        <p class="content">
          然后，根据下单时间查找购买商品时的支付记录，金额下方会显示该笔交易目前的状态（是否退款），点击
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_23.png" alt="">
        </div>
        <p class="content">
          最后，在详情页面可查看退款的金额、状态及支付方式（用银行卡付款就会退到银行卡内，用零钱包付款就会退到零钱包）
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_24.png" alt="">
        </div>
      </div>
      <div class="content-wrapper" v-else-if="id === 2">
        <p class="content">您好，平台暂不支持退款功能，若有需要请主动联系商家进行协商。</p>
      </div>
      <div class="content-wrapper" v-else-if="id === 3">
        <p class="content">
          您好，下单后买家无法修改订单信息，您可通过商品详情页面下方的“<span class="main">联系商家</span>”咨询商家，说明修改信息，如您无法联系到商家，您可添加本页面下方的平台客服微信为好友，反馈问题。
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_41.png" alt="">
        </div>
      </div>
      <div class="content-wrapper" v-else-if="id === 4">
        <p class="content">
          您好，建议您先通过商品详情页面下方的“<span class="main">联系商家</span>”咨询商家，如您无法联系到商家，您可添加本页面下方的平台客服微信为好友，反馈问题。
          <br/>
          <br/>
          附注：一般商家发货时间72小时，遇到活动量大可能存在发货缓慢的情况，建议您耐心等待。
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_51.png" alt="">
        </div>
      </div>
      <div class="content-wrapper" v-else-if="id === 5">
        <p class="content">
          您好，您可在以下几个页面联系到商家：
          <br/>
          <br/>
          页面一：店铺主页右下角
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_61.png" alt="">
        </div>
        <p class="content">
          页面二：商品和活动详情页左下角
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_62.png" alt="">
        </div>
        <p class="content">
          页面三：订单详情页下方
        </p>
        <div class="image-wrapper">
          <img class="picture" src="./pic-right_63.png" alt="">
        </div>
      </div>
      <div class="platform-weixin">
        <p class="content">平台客服微信：weixin201220</p>
        <div class="copy" v-clipboard:copy="weixin" v-clipboard:success="copy">复制</div>
      </div>
      <toast ref="toast"></toast>
    </div>
  </transition>
</template>

<script>
  import Toast from 'base/toast/toast'

  const COMPONENT_NAME = 'legal-right'

  const LIST = [
    '1.如何查询物流？',
    '2.订单已经退款，钱还没有收到？',
    '3.如何申请退款？',
    '4.订单信息写错了怎么办？',
    '5.已经付款了，商家怎么还不发货？',
    '6.如何联系商家？'
  ]

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        id: '',
        weixin: 'weixin201220'
      }
    },
    computed: {
      title() {
        return LIST[this.id] || ''
      }
    },
    created() {
      this.id = Number(this.$route.params.id)
      console.log(this.id)
    },
    methods: {
      copy() {
        this.$refs.toast.show('复制成功')
      }
    },
    components: {
      Toast
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .legal-right
    min-height: 100vh
    padding: 0 15px
    background-color: #ffffff
    .title
      padding-top: 15px
      padding-bottom: 8.5px
      font-family: PingFangSC-Medium
      font-size: 16px
      color: #374B63
      letter-spacing: 0
      line-height: 32px
    .content-wrapper
      padding-bottom: 60px
      &::after
        display: block
        content: ''
        height: 1px
      .content
        margin-bottom: 15px
        font-family: PingFangSC-Regular
        font-size: 14px
        color: #374B63
        letter-spacing: 0.3px
        text-align: justify
        line-height: 24px
        .main
          color: #f94c5f
      .image-wrapper
        box-sizing: border-box
        margin-bottom 15px
        padding: 0 27.5px
        .picture
          width: 100%
    .platform-weixin
      position: fixed
      bottom: 0
      left: 0
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      height: 50px
      background-color: #f8f8f8
      font-family: PingFangSC-Regular
      font-size: 14px
      color: #828AA2
      letter-spacing: 0.3px
      text-align: justify
      .copy
        margin-left: 8px
        padding: 6.5px 14.5px
        border-1px(#828AA2, 100px)
</style>
