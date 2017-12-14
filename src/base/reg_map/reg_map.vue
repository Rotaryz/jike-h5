<template>
  <div class="map_all">
    <div class="add">
      <img class="nav_ico" src="./image/Group9.png"/>
      <p class="add_msg">广东省广州市白云区黄石街道国际单位A3白云科技...</p>
    </div>
    <div id="container">
      <div class="convers">
        <p>正在计算距离…</p>
        <div class="rule">
          <p>规则</p>
        </div>
      </div>
    </div>
    <div>
      <ul class="reg_red">
        <li>
          <p>奖励</p>
          <img src="./image/Rectangle 5.png" alt="" class="award">
          <img src="./image/icon-1_money.png">
        </li>
        <li>
          <p>第2天</p>
          <img src="./image/icon_yeschecked.png">
        </li>
        <li>
          <p>第3天</p>
          <img src="./image/icon_notchecked.png">
        </li>
        <li>
          <p>第4天</p>
          <img src="./image/icon-2_money.png">
        </li>
        <li>
          <p>第5天</p>
          <img src="./image/icon_notchecked.png">
        </li>
        <li>
          <p>第6天</p>
          <img src="./image/icon_notchecked.png">
        </li>
        <li>
          <p>第7天</p>
          <img src="./image/icon-3_money.png">
        </li>
      </ul>
      <button
        style="background-image:url('./src/common/image/icon/icon-button-n.png')">
        今日已签到
      </button>
      <div class="tip">
        <p>开启连续签到提醒</p>
        <div :class="{move_fa:isShowTip}">
          <span :class="{move:isShowTip}" @click="showTip"></span>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {

    data(){
      return {
        isShowTip: 0
      }
    },

    methods: {
      showTip(){
        this.isShowTip = !this.isShowTip
        console.log(this.isShowTip)
      }
    },
    mounted(){
      let map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 15,
        center: [113.29318, 23.25062]
      })
      let marker1 = new AMap.Marker({ //添加自定义点标记
        map: map,
        position: [113.29318, 23.25062], //基点位置
        offset: new AMap.Pixel(-14, -16), //相对于基点的偏移位置
        draggable: false, //是否可拖动
        content: `<img src="./src/common/image/icon/icon-shop_normal.png" style="height: 28px;width: 32px">`
        //自定义点标记覆盖物内容
      })

      document.querySelector('#container').style.height =
        (document.body.offsetHeight * 0.36) + 'px'
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  /*地图*/
  #container
    height: 36%
    position: relative
    width: 93.6%
    margin: 0 auto
    .convers
      width: 100%
      height: 100%
      position: absolute
      top: 0
      z-index: 1000
      background-image: url("./image/bk-qd.png")
      background-color: rgba(0, 0, 0, 0)
      background-size: cover
      p
        position: absolute
        bottom: 2%
        color: #7A0000
        font-size: $font-size-small
        row-center()
      .rule
        width: 44px
        height: 20px
        line-height: @height
        border-radius: 50px
        background-color: rgba(0, 0, 0, 0)
        border: 2px solid #FFFFFF;
        position: absolute
        right: 12px
        top: 12px
        font-size: $font-size-small-s
        z-index: 200
        &:after, &:before
          content: ''
          position: absolute
          height: 8px
          width: @height
          right: 10px
          top: 50%
          background: $color-background-s
          transform: rotate(45deg) translateY(-74%)
        &:before
          right: 12px
          background: $color-assist-tr
          z-index: 100
        p
          color: rgba(255, 255, 255, .7)
          no-wrap()
          position: relative
          z-index: 200
          text-indent: 7px

  .add
    height: 30px
    line-height: 30px
    font-size: $font-size-small
    text-indent: 24px
    position: relative
    padding-right: 20px
    color: $color-text-d
    no-wrap()
    .nav_ico
      width 8px
      height 10px
      position: absolute
      top: 50%
      left: 12px
      transform: translateY(-50%)

  div
    background-color: $color-background-s

  .reg_red
    display: flex
    flex-direction: row
    justify-content: space-around
    color: $color-text-tr
    padding-top: $padding-all
    position: relative

    li
      width: 10%
      font-size: $font-size-small-s
      line-height: $font-size-medium
      position: relative
      text-align: center
      height: 63px
      no-wrap()
      p
        margin-bottom: 7px
        height: 33%
        position: relative
        z-index: 1100
        padding-top: 3.2%
      img
        width: 100%
        position: relative
        z-index: 100
    .award
      position: absolute
      top: 0
      color: rgba(255, 255, 255, .6)
      background-size: cover
      width: 98%

  .reg_red:before
    content: ''
    position: absolute
    width: 320px
    top: 72.5%
    left: 30px
    background: url('./image/pic-xu_Line.png')
    height: 1px

  button
    width: 185px
    height: 54px
    line-height: 32px
    text-align center
    position: relative
    left: 50%
    transform: translateX(-50%)
    background-size cover
    background-position: top right
    margin-top: $padding-all
    color: rgba(255, 255, 255, .7)
    font-size: $font-size-medium

  .tip
    font-size: $font-size-small
    padding: $padding-all
    color: $color-text-d
    position: relative
    border-top: 1px solid $color-row-line
    margin-top: 6px
    .move_fa
      background-color: #706B82
    div
      position: absolute
      height: 24px
      width: 43.5px
      right: $padding-all
      top: 50%
      transform: translateY(-50%)
      background: #dddddd
      border-radius: @height
      -webkit-transition: all 1s
      -moz-transition: all 1s
      -ms-transition: all 1s
      -o-transition: all 1s
      transition: all 1s

      span
        display: inline-block
        height: 22px
        width: 22px
        margin: 1px 1px
        border-radius: 50%
        background: $color-background-s
        transition: all .5s
      .move
        transform: translateX(19px)




</style>
