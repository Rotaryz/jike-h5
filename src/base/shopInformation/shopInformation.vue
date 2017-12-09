<!-- 店铺信息半窗  -->
<template>
  <transition name="fade">
    <div class="shop-info" transiton="fade" v-show="isShowShop">
      <!-- 地址 -->
      <div class="add">
        <img class="nav_ico" src="./image/Group9.png"></img>
        <p class="add_msg" >广东省广州市白云区黄石街道国际单位A3白云科技...</p>
      </div>
      <!-- 店铺详情 -->
      <div class="shop_all">
        <div :class="{shop_con: num === 1,shop_con_b: num !== 1}"
             v-for="(shop,index) in
        shopMsg"
             :key="index">
          <div class="shop-item">
            <div class="shop_head">
              <div class="shop_title">
                <p class="shop_name">{{shop.name}}</p>
                <p class="shop_type">{{shop.describe}}</p>
              </div>
              <div class="shop_logo">
                <img src="./image/icon-shop_bg.png" class="house"/>
                <img class="shop_ico" :src="shop.logo_image ?
                shop.logo_image :
                './src/base/shopInformation/image/logo.png'"/>

              </div>
              <div class="shop_eva">
                <p class="shop_dis">5454人已收藏</p>
                <p class="shop_start"><img src="./image/icon-Star.png"
                                           class="icos">评分4.8</p>
              </div>

            </div>
            <div class="shop_nav" v-show="num === 1 || shop.conShow2">
              <div class="shop_nav_ti" style="flex:1.2">
                <p><img class="icos"
                        src="./image/icon-distance.png"/>距离<span
                  class="nav_ti">{{shop.distance ? shop.distance : '0'}}</span>米
                </p>
              </div>
              <div class="shop_nav_ti" style="flex:1.14">
                <p><img class="icos" src="./image/icon-walk.png"/>步行<span
                  class="nav_ti">10</span>分钟</p>
              </div>
              <div class="shop_nav_ti" style="flex:1.03">
                <p><img class="icos" src="./image/icon-navigation_1.png"/>开始导航
                </p>
              </div>
              <div class="shop_nav_ti" :data-mobile="shop.mobile">
                <p><img class="icos"
                        src="./image/icon-call_1.png"
                />打电话
                </p>
              </div>
            </div>

          </div>
          <div class="sws" v-show="num === 1 || shop.conShow2">
            <swiper ref="mySwiper">
              <swiper-slide v-for="(detail,index) in shop.promotions"
                            :key="index">
                <div class="con_ri">
                  <div class="con_title">20<span>元</span></div>
                  <p class="cou_subhead">满200元使用</p>
                  <p class="client client_b"></p>
                  <p class="client client_t"></p>
                </div>
                <div class="con_le">
                  <p class="con_title">养发项目优惠券</p>
                  <p class="cou_subhead">限国颐堂（天河店）使用</p>
                  <p class="cou_subhead">有效期：2017.11.11-2018.01.20</p>
                  <div class="con_side">
                    <p class="con_title con_t1">抢</p>
                    <p class="con_title">购</p>
                  </div>
                </div>
              </swiper-slide>

            </swiper>
          </div>
          <p class="mclient" v-show="num !== 1"
            ></p>
          <img src="./image/icon-open.png"
               :class="{open:num !==0,opencl:shop.conShow2}"
               @touchstart="showDetail(index,shop)"  v-show="num !== 1">

        </div>
        <!-- 优惠券 -->
      </div>

    </div>
  </transition>
</template>

<script>
  import {mapMutations} from 'vuex'
  import Coupon from '../conpon/conpon.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    data() {
      return {
        po: 0,
        mb: '10px',
        showNum:0,
        conShow1:true,
        conShow2:false,
        changeMsg:[]
      }
    },
    computed: {
      isShowShop(){
        return this.$store.state.isShowShop
      },
      shopMsg(){
        return this.$store.state.shopMsg
      },
      num(){
        return this.$store.state.showShop

      }

    },
    components: {
      Coupon,
      swiper,
      swiperSlide
    },
    methods: {
      showDetail(index,shop){
        this.changeMsg = JSON.parse(JSON.stringify(this.shopMsg))
        this.showNum = index
        shop.conShow2 = !shop.conShow2
        this.changeMsg.splice(index,1,shop)
        this.$store.dispatch('showDetail', this.changeMsg)
      }
    },
    mounted(){

//      if(this.$store.state.shopMsg.length == 1){
//        console.log('45')
//      }else{
//        console.log('666')
//      }
//      console.log(this.$store.state.isShowShop)
      // console.log(this.$store.state)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .shop-info
    position: relative
    z-index: 1000
    background: $color-add-background

  /*display: block*/

  .shop-item
    position: relative
    background-color: $color-background-s

  .add
    height: 40px
    background-color: $color-add-background
    line-height: 40px
    font-size: $font-size-medium
    text-indent: 24px
    position: relative
    padding-right: 20px
    no-wrap()
    .nav_ico
      width 8px
      height 10px
      position: absolute
      top: 50%
      left: 12px
      transform: translateY(-50%)

  .shop_all
    background: $color-add-background
    max-height: 320px
    overflow-y: scroll

  .shop_all::-webkit-scrollbar
    display: none

  .shop_con, .shop_con_b

    position: relative
    .open,.opencl
      width: 7px
      position: absolute
      right: 14.3px
      z-index: 20
      transform: translateY(-50%)
    .opencl
      transform: translateY(-64%) rotate(180deg)

  .shop_con_b
    margin-bottom: 10px
  .shop_head
    display: flex
    padding: 17px 12px
    position: relative
    width: 100%
    height: (@width * 0.47)
    div
      flex: 1
    .shop_title
      display: flex
      flex-direction: column
      .shop_name
        no-wrap()
        font-size: $font-size-medium-x
        line-height: 23px
        margin-bottom: 3px;
      .shop_type
        font-size: $font-size-small-s
        line-height: $font-size-medium
    .shop_logo
      text-align: center
      position: relative
      flex: 1.5
      .house
        height: 48.5px
        width: 70px
        transform: translatex(-20%)
      .shop_ico
        height: 40px
        width: 40px
        border-radius: 50%
        border: 1px solid #696671
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.03)
        position: absolute
        right: 34px
        top: 4px
        z-index: 10
        background-color: #fff
    .shop_eva
      display: flex
      flex-direction: column
      no-wrap()
      .shop_dis
        font-size: $font-size-small
        line-height: 17px
        color: $color-font1
        margin-bottom: 5px
      .shop_start
        font-size: $font-size-small-s
        line-height: $font-size-medium
        color: $color-font1
        text-indent: 1.1em
        position: relative

        .icos
          left: 0

  .shop_nav
    display: flex
    border-top: 1px solid #F1EFF5
    border-bottom: 1px solid #F1EFF5

    p
      position: relative
      display: inline

    .shop_nav_ti
      flex: 1
      font-size: $font-size-small-s
      line-height: ($font-size-small-s * 4)
      color: $color-font1
      border-right: 1px solid #F1EFF5
      text-indent: 2em
      text-align: center
      no-wrap()

      .nav_ti
        font-size: $font-size-small
        color: $color-theme-s
        font-weight: 600

  .icos
    position: absolute
    width ($font-size-large / 2)
    height ($font-size-large / 2)
    left: -14px
    top: 50%
    transform: translateY(-50%)
    z-index: 20

  .fade-enter-active, .fade-leave-active
    transition: opacity .6s

  .fade-enter, .fade-leave-active
    opacity: 0

  // 半圆
  .mclient
    position: absolute
    width: $font-size-small
    height: ($font-size-small / 2)
    right: $font-size-small
    z-index: 10
    background-color: #fff
    border-top: none
    border-bottom: 1px solid $color-border-s
    border-bottom-right-radius: $font-size-small
    border-bottom-left-radius: $font-size-small
    bottom: -($font-size-small / 2)

  //  优惠券
  .sws
    background-color: #fff

  .swiper-container
    background-color: #fff
    width: 85% !important
    overflow: visible

  .swiper-slide
    width: 90% !important
    height: 90px !important
    display: flex
    background-color: #fff
    margin: 10px -1px 10px 24px

  .con_title
    color: $color-theme-s
    font-family: PingFangSC-Medium
    no-wrap()

  .cou_subhead
    font-size: $font-size-small-s
    color: $color-theme-title
    no-wrap()

  .con_ri
    padding: 17px 18px
    border-left: 4px solid $color-theme-s
    border-top-left-radius: 3px
    border-bottom-left-radius: 3px
    margin-left: ($font-size-title + 2)
    border-top: 1px solid $color-border-s
    border-bottom: 1px solid $color-border-s
    border-right: 1px dashed $color-border-s
    position: relative
    .client
      position: absolute
      width: 10px
      height: 5px
      right: -5px
      z-index: 100
      background-color: #fff
    .client_b
      border-right: 1px solid $color-border-s
      border-left: 1px solid $color-border-s
      border-top: 1px solid $color-border-s
      border-top-right-radius: 10px
      border-top-left-radius: 10px
      bottom: -1px
    .client_t
      border-top: none
      border-bottom: 1px solid $color-border-s
      border-bottom-right-radius: $font-size-large
      border-bottom-left-radius: $font-size-large
      border-bottom-right-radius: $font-size-large
      border-bottom-left-radius: $font-size-large
      top: -1px
    .con_title
      font-size: ($font-size-medium-x * 2)
      span
        font-size: $font-size-medium
        font-family: PingFangSC-Light

  .con_le
    padding: 7px 5px
    width: 210px
    border: 1px solid $color-border-s
    border-left: none
    border-right: none
    position: relative
    text
      display: block
    .con_title
      font-size: $font-size-large
      line-height: ($font-size-small-s * 3)
      border-bottom: 1px solid #DFDFDF
      margin-bottom: 5px
      font-family: PingFangSC-Medium
    .cou_subhead
      line-height: $font-size-medium-x
      no-warp()
    .con_side
      position: absolute
      background-color: $color-theme-s
      height: 101%
      right: -5px
      bottom: 0px
      width: 30px
      line-height: 45px
      border-top-right-radius: 5px
      border-bottom-right-radius: 5px
      .con_title
        font-size: $font-size-small
        color: #fff
        text-align: center
        border-bottom: none
        line-height: ($font-size-small-s * 2)
      .con_t1
        margin-top: 23px


</style>
