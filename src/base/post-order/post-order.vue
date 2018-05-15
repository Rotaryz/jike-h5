<template>
  <transition name="fade">
  <div class="post-order" @click="hide" v-if="show">
    <div class="modal border-top-1px" :class="{post:show}">
      <div class="form-wrapper border-bottom-1px">
        <div class="label-control border-bottom-1px">
          <div class="label">{{orderInfo.title}}</div>
          <div class="content">{{orderInfo.price}}元</div>
        </div>
        <div class="label-control border-bottom-1px">
          <div class="label">数量</div>
          <div class="content">
            <div class="number-control">
              <div class="desc" @tap.stop="descCount">-</div>
              <div class="number">{{count}}</div>
              <div class="add" @tap.stop="addCount">+</div>
            </div>
          </div>
        </div>
        <div class="label-control">
          <div class="label">小计</div>
          <div class="content">{{total}}元</div>
        </div>
      </div>
      <div class="price-wrapper border-top-1px border-bottom-1px">
        <div class="content">
          <div class="label">订单总价</div>
          <div class="price">
            <text class="number">{{orderInfo.from === 'c_sharemoney' ? shareMoney : total}}</text>
            <text class="yuan">元</text>
          </div>
        </div>
      </div>
      <div class="post-btn"  @tap.stop="postOrder">
        提交订单
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  // import wepy from 'wepy'
  // import {ERR_OK} from 'api/base'
  // import Order from 'api/order'
  // import base from 'common/mixins/base'
  // import URIS from 'common/js/config'

  export default {
    data() {
      return {
        imageUri: '',
        orderInfo: {},
        show: false,
        maskAnimation: '',
        modalAnimation: '',
        count: 1,
        stock: 0,
        peopleStock: -1,
        total: 0,
        status: '',
        goOnce: true
      }
    },
    methods: {
      shows (obj) {
        this.show = obj
      },
      hide () {
        this.show = false
      }
    }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable'
  @import '../../common/stylus/mixin'

  .post-order
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: hidden
    z-index: 1000
    background-color: $color-mask-bgc
    .modal
      position: absolute
      height: 0px
      bottom: 0
      left: 0
      width: 100%
      overflow: hidden
      z-index: 1
      background: $color-background
      transition: all .5s
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
                background-color: #706b82
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
          .content-right
            display: flex
            align-items: center
            height: 42px
            .content-right-txt
              font-size: $font-size-medium
              color: #A1A1A1
            .content-right-txt-user
              color: $color-text
              font-family: $font-family-meddle
              .content-right-money
                margin-bottom: -1px
                font-size: $font-size-small-s
                font-family: $font-family-regular
              .content-right-title
                margin-bottom: -1px
                font-family: $font-family-regular
            .content-right-icon
              width: 7px
              height: 12px
              margin-left: 3.7px
      .post-btn
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 44px
        line-height: 44px
        text-align: center
        font-size: $font-size-medium
        color: $color-white
        background-color: #3460EC
    .post
      height: 250px
      transition: all .5s
</style>
