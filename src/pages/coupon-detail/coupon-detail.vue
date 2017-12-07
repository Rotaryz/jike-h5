<template>
  <div class="coupon-detail">
    <div class="slider-wrapper">
      <div class="slider">
        <slider ref="slider">
          <div class="slider-item" v-for="item in banners"></div>
        </slider>
      </div>
    </div>
    <div class="desc-wrapper">
      <div class="description">
        <p class="name">养发护发项目优惠券</p>
        <p class="limit">限量500件</p>
        <div class="price-wrapper">
          <p class="price"><span class="rmb">¥</span><span class="number">200</span></p>
          <p class="origin-price">门市价:￥300</p>
          <p class="buy-number"><i class="icon icon-buyer"></i><span class="font">100人已购买</span></p>
        </div>
      </div>
      <div class="share-wrapper">
        <div class="share-btn">
          <i class="icon-share-polite"></i>
          <p class="content">分享有礼</p>
          <i class="icon-money"></i>
        </div>
      </div>
    </div>
    <div class="service-detail">
      <p class="header border-bottom-1px">服务详情</p>
      <div class="detail-wrapper">
        <div class="item-wrapper border-bottom-1px">
          <div class="content left"><span class="circle"></span><span class="font">养发服务</span></div>
          <div class="content middle">1次</div>
          <div class="content right">￥20</div>
        </div>
        <div class="item-wrapper border-bottom-1px">
          <div class="content left"><span class="circle"></span><span class="font">养发服务</span></div>
          <div class="content middle">1次</div>
          <div class="content right">￥20</div>
        </div>
      </div>
    </div>
    <div class="know-detail">
      <p class="header border-bottom-1px">购买须知</p>
      <div class="detail-wrapper">
        <div class="item-wrapper">
          <p class="title">有效期：</p>
          <p class="content">
            <span class="circle"></span>
            <span class="value">2016-01-01 至 2017-12-30</span>
          </p>
        </div>
        <div class="item-wrapper">
          <p class="title">预约：</p>
          <p class="content">
            <span class="circle"></span>
            <span class="value">无需预约，消费高峰可能需要等位</span>
          </p>
        </div>
      </div>
    </div>
    <div class="buy-button-wrapper border-top-1px">
      <div class="button-group">
        <div class="collect border-right-1px">
          <i class="icon icon-collected"></i>
          收藏
        </div>
        <div class="customer-service">
          <i class="icon icon-customer-service"></i>
          客服
        </div>
      </div>
      <div class="buy-btn">立即购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'

  export default {
    data() {
      return {
        banners: new Array(3)
      }
    },
    created() {
    },
    components: {
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .coupon-detail
    width: 100%
    .slider-wrapper
      position: relative
      width: 100%
      height: 0
      padding-top: 53.333333333%
      .slider
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: #363636
    .desc-wrapper
      display: flex
      height: 94px
      margin-bottom: 10px
      padding: 0 12px
      background-color: $color-white
      .description
        flex: 1
        padding-top: 11px
        .name
          margin-bottom: 5px
          font-size: $font-size-medium
        .limit
          font-size: $font-size-small
          color: $color-text-d
        .price-wrapper
          display: flex
          align-items: flex-end
          margin-top: 12.5px
          .price
            color: $color-text-t
            fonot-size: 0
            .rmb
              display: inline-block
              vertical-align: bottom
              font-size: $font-size-small
            .number
              display: inline-block
              vertical-align: bottom
              font-family: "PingFangSC-Medium"
              font-size: $font-size-large-xx
              transform: translateY(4px)
          .origin-price
            margin-left: 5px
            font-size: $font-size-small-s
          .buy-number
            margin-left: 34px
            font-size: 0
            .icon
              width: 11px
              height: 10px
              vertical-align: middle
            .font
              display: inline-block
              vertical-align: middle
              font-size: $font-size-small-s
      .share-wrapper
        flex: 0 0 48px
        display: flex
        align-items: center
        .share-btn
          position: relative
          width: 48px
          height: 48px
          padding-top: 5px
          border-1px($color-col-line, 3px)
          .icon-share-polite
            display: block
            width: 23px
            height: 25px
            margin: 0 auto
          .content
            margin-top: 3px
            text-align: center
            font-size: $font-size-small-s
          .icon-money
            position: absolute
            top: -2.5px
            right: -.5px
            width: 15px
            height: 18px
    .service-detail
      margin-bottom: 10px
      padding-left: 12px
      background-color: $color-white
      .header
        height: 39px
        line-height: 39px
        font-size: $font-size-medium
        color: $color-text-l
      .detail-wrapper
        .item-wrapper
          display: flex
          align-items: center
          height: 28px
          padding-right: 12px
          &:last-child
            border-none()
          .content
            flex: 1
            color: $color-text-dd
            font-size: $font-size-small
            &.left
              text-align: left
              .circle
                display: inline-block
                vertical-align: middle
                width: 4.5px
                height: 4.5px
                margin-right: 5.25px
                border-radius: 50%
                background-color: $color-circle
              .font
                display: inline-block
                vertical-align: middle
            &.middle
              text-align: center
            &.right
              text-align: right
    .know-detail
      padding-left: 12px
      background-color: $color-white
      .header
        height: 39px
        line-height: 39px
        font-size: $font-size-medium
        color: $color-text-l
      .detail-wrapper
        padding: 7.5px 0
        .item-wrapper
          margin-bottom: 13px
          &:last-child
            margin-bottom: 0
          .title
            margin-bottom: 8.5px
            font-size: $font-size-small
            color: $color-text-t
          .content
            font-size: 0
            .circle
              display: inline-block
              vertical-align: middle
              width: 4.5px
              height: 4.5px
              margin-right: 5.25px
              border-radius: 50%
              background-color: $color-circle
            .value
              display: inline-block
              vertical-align: middle
              font-size: $font-size-small
    .buy-button-wrapper
      position: fixed
      bottom: 0
      left: 0
      display: flex
      width: 100%
      height: 44px
      background-color: $color-white
      .button-group
        flex: 1
        display: flex
        font-size: $font-size-small-s
        .collect
          flex: 1
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          .icon
            width: 15px
            height: 14px
            margin-bottom: 3px
        .customer-service
          flex: 1
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          .icon
            width: 15.5px
            height: 14px
            margin-bottom: 3px
      .buy-btn
        flex: 0 0 200px
        line-height: 44px
        text-align: center
        font-size: $font-size-medium
        color: $color-white
        background-color: $color-button
</style>
