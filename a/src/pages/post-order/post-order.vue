<template>
  <div class="post-order">
    <div class="banner-wrapper">
      <div class="banner"></div>
    </div>
    <div class="form-wrapper">
      <div class="label-control border-bottom-1px">
        <p class="label">养发护发项目优惠券</p>
        <p class="content">200元</p>
      </div>
      <div class="label-control border-bottom-1px">
        <p class="label">数量</p>
        <div class="content">
          <div class="number-control">
            <div class="desc">-</div>
            <div class="number">1</div>
            <div class="add">+</div>
          </div>
        </div>
      </div>
      <div class="label-control">
        <p class="label">小计</p>
        <p class="content">200元</p>
      </div>
    </div>
    <div class="price-wrapper">
      <div class="content">
        <p class="label">订单总价</p>
        <p class="price"><span class="number">200</span><span class="yuan">元</span></p>
      </div>
    </div>
    <div class="post-btn">
      提交订单
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .post-order
    .banner-wrapper
      position: relative
      width: 100%
      height: 0
      padding-top: 53.333333333%
      .banner
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: #363636
    .form-wrapper
      background: $color-white
      margin-bottom: 10px
      padding-left: 12px
      .label-control
        display: flex
        align-items: center
        justify-content: space-between
        height: 39px
        padding-right: 12px
        .label
          font-size: $font-size-medium
        .content
          font-size: $font-size-medium
          color: $color-text-t
          .number-control
            display: flex
            height: 22px
            .desc
              width: 22px
              height: 22px
              text-align: center
              line-height: 22px
              border-1px($color-col-line, 2px)
              color: $color-button
            .number
              width: 48px
              height: 22px
              margin: 0 2.5px
              text-align: center
              line-height: 22px
              border-1px($color-col-line, 2px)
              color: $color-text
            .add
              width: 22px
              height: 22px
              text-align: center
              line-height: 22px
              border-radius: 2px
              border-1px($color-button, 2px)
              color: $color-white
              background-color: $color-button
    .price-wrapper
      padding-left: 12px
      background-color: $color-white
      .content
        display: flex
        align-items: center
        justify-content: space-between
        height: 42px
        padding-right: 12px
        .label
          font-size: $font-size-medium
        .price
          color: $color-text-t
          .number
            font-size: $font-size-large
          .yuan
            font-size: $font-size-small-s
    .post-btn
      position: fixed
      bottom: 0
      left: 0
      width: 100%
      height: 44px
      line-height: 44px
      text-align: center
      color: $color-white
      background-color: $color-button
</style>
