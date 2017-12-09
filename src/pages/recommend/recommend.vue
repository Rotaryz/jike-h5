<template>
  <div class="recommend" ref="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider ref="slider">
          <div class="slider-item" v-for="item in banner">

          </div>
        </slider>
      </div>
    </div>
    <div class="nav-wrapper">
      <div class="content-wrapper">
        <div class="icon icon-luckdraw"></div>
        <p class="content">大转盘</p>
      </div>
      <div class="content-wrapper">
        <div class="icon icon-invite"></div>
        <p class="content">邀请返现</p>
      </div>
      <div class="content-wrapper">
        <div class="icon icon-sign"></div>
        <p class="content">签到红包</p>
      </div>
      <div class="content-wrapper">
        <div class="icon icon-live"></div>
        <p class="content">直播优惠</p>
      </div>
    </div>
    <div class="tab-container">
      <div class="tab-wrapper">
        <div class="tab-content">
          <div class="tab-item border-right-1px active">优惠券</div>
          <div class="tab-item">发现</div>
        </div>
        <div class="tab-line"></div>
      </div>
      <div class="tab-content-wrapper">
        <div class="coupon-panel">
          <div class="coupon">
            <div class="content">
              <div class="left">
                <p class="price"><span class="number">30</span><span class="yuan">元</span></p>
                <p class="desc">满200元使用</p>
              </div>
              <div class="right">
                <div class="desc-wrapper">
                  <div class="description">
                    <div class="top">
                      <p class="name">养发项目优惠券</p>
                      <p class="valid">有效期至2018-01-01</p>
                    </div>
                    <div class="bottom">节假日不可用</div>
                  </div>
                  <div class="btn-wrapper">
                    <div class="btn"><span class="font">抢购</span> <i class="icon icon-button-right"></i></div>
                  </div>
                </div>
                <div class="tip-wrapper">礼包</div>
              </div>
            </div>
          </div>
        </div>
        <div class="discover-panel">
          <div class="ticky-wrapper">
            <div class="ticky">

            </div>
            <div class="collector">
              <div class="avatar-wrapper">
                <div class="avatar" v-for="item in avatars">
                  <img src="" alt="">
                </div>
                <div class="more">
                  <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                </div>
              </div>
              <div class="collect">
                <span class="number">3000</span>
                <span class="font">人收藏</span>
                <i class="icon icon-collected"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  //  import {ERR_OK} from 'api/config'
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        banner: new Array(3),
        avatars: new Array(5)
      }
    },
    created() {
    },
    activated() {
    },
    methods: {
      ...mapMutations({})
    },
    components: {
      Slider,
      Loading,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .recommend
    background: $color-background
    .slider-wrapper
      position: relative
      width: 100%
      height: 0
      padding-top: 40%
      background-color: #363636
      .slider-content
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .nav-wrapper
      display: flex
      align-items: center
      height: 84px
      margin-bottom: 10px
      background-color: $color-white
      .content-wrapper
        flex: 1
        text-align: center
        .icon
          width: 32px
          height: 32px
          background-size: 32px 32px
        .content
          margin-top: 4px
          font-size: $font-size-small
    .tab-container
      .tab-wrapper
        position: relative
        .tab-content
          display: flex
          height: 42px
          background: $color-white
          .tab-item
            flex: 1
            line-height: 42px
            text-align: center
            font-size: $font-size-medium-x
            &.active
              color: $color-text-t
        .tab-line
          position: absolute
          bottom: 0
          width: 50%
          height: 2px
          background-color: $color-theme
          transition: all .5s
      .tab-content-wrapper
        display: flex
        width: 200%
        transition: all .5s
        transform: translate3d(-50%, 0, 0)
        .coupon-panel
          width: 50%
          box-sizing: border-box
          padding: 10px 12px
          .coupon
            position: relative
            width: 100%
            height: 0
            padding-top: 28.409090909%
            overflow: hidden
            bg-image('./pic-coupon_bg')
            background-size: 100% 100%
            .content
              position: absolute
              top: 0
              left: 0
              display: flex
              width: 100%
              height: 100%
              .left
                flex: 0 0 28%
                display: flex
                flex-direction: column
                justify-content: center
                width: 28%
                height: 100%
                color: $color-text-d
                text-align: center
                .price
                  font-size: 0
                  .number
                    font-family: Impact
                    font-size: 40px
                    line-height: 49px
                  .yuan
                    font-size: $font-size-small
                .desc
                  font-size: $font-size-small-s
              .right
                position: relative
                flex: 1
                .desc-wrapper
                  display: flex
                  height: 100%
                  padding: 0 12px
                  .description
                    flex: 1
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    padding: 10px 0
                    .top
                      .name
                        line-height: $font-size-large-m
                        font-size: $font-size-medium
                        no-wrap()
                      .valid
                        font-size: $font-size-small-s
                    .bottom
                      font-size: $font-size-small-s
                  .btn-wrapper
                    display: flex
                    align-items: center
                    width: 58px
                    flex: 0 0 58px
                    .btn
                      width: 58px
                      height: 24px
                      margin: auto
                      text-align: center
                      line-height: 24px
                      font-size: 0
                      background: $color-button
                      .font
                        display: inline-block
                        vertical-align: middle
                        margin-right: 3px
                        font-size: $font-size-small
                        color: $color-white
                      .icon
                        vertical-align: middle
                        width: 11px
                        height: 11px

                .tip-wrapper
                  position: absolute
                  top: 3px
                  right: -18px
                  display: inline-block
                  padding: 5px 20px
                  font-size: $font-size-small
                  background-color: $color-yellow
                  transform: rotate(40deg)
        .discover-panel
          width: 50%
          box-sizing: border-box
          padding: 10px 12px
          .ticky-wrapper
            border-1px()
            .ticky
              width: 100%
              height: 0
              padding-top: 23.96011396%
            .collector
              display: flex
              align-items: center
              justify-content: space-between
              height: 35.5px
              padding: 0 12px
              .avatar-wrapper
                .avatar
                  display: inline-block
                  width: 21px
                  height: 21px
                  margin-right: -3px
                  border-1px($color-white, 50%)
                .more
                  display: inline-block
                  margin-left: 3.6px
                  .dot
                    display: inline-block
                    width: 3px
                    height: 3px
                    margin-right: 2px
                    border-radius: 50%
                    background: $color-ellipse
              .collect
                display: flex
                align-items: center
                .number
                  font-size: $font-size-small-s
                  color: $color-text-t
                .font
                  font-size: $font-size-small-s
                .icon
                  width: 14px
                  height: 14px
                  margin-left: 4px
</style>
