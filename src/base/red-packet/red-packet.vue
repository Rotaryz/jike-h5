<template>
  <div class="redPac">
    <div class="redFa">
      <span class="page">3/3</span>
      <p style="display: none">本红包由国颐堂提供</p>
      <p class="money">0.88<span>元</span></p>
      <div class="open op_move"></div>
      <div class="cancle">
        <span class="cancleCh"></span>
        <span class="cancleCh cancleCh2"></span>
      </div>
      <div class="re_detail">
        <p>现金已经存放入您的账户可进入个人中心-红包查看详情</p>
        <div class="share">查看红包</div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .redPac
    display: none
    position: fixed
    height: 100%
    width: 100%
    z-index: 1500
    top: 0
    background: $color-tan
    .redFa
      width: 67%
      height: 45%
      position: absolute
      background: #fff
      background-image: url('./image/pic-money_winbg.png')
      background-size: cover
      border-radius: 5px
      all-center()
      font-size: $font-size-small
      p
        line-height: 206px
        color: #E1452B
        text-align: center
       .money
         line-height:124px
         font-size:($font-size-small-s*3)
         color :#FFDA4F
         span
           font-size:$font-size-small
      .page
        position: absolute
        right: $padding-all
        top: ($padding-all + 3)
        color: $color-text
      .open
        height: 66.5px
        width: @height
        border-radius: 50%
        position: absolute
        top: 56%
        background-image: url("./image/icon-open_money.png")
        background-size: cover
        row-center()
        -webkit-transition: all 2s
        -moz-transition: all 2s
        -ms-transition: all 2s
        -o-transition: all 2s
        transition: all 2s
      .op_move
        transform: translateX(-50%) rotateY(1080deg)
      .re_detail
        height :58.5%
        width :100%
        left: 0
        background: $color-background-s
        position: absolute
        bottom: 0
        border-bottom-right-radius :5px
        border-bottom-left-radius :5px

        p
          width :65.4%
          margin:3.6% auto 1.8%
          line-height:1.4
          color:$color-text-tr
        div
          height:23%
          width:92%
          margin: 5.4% auto
          display: flex
          align-items:center
          justify-content:center
          border-radius :2px
        .share
          background: $color-assist-tr
          color: $color-red
        .seeMore
          border :0.5px solid $color-row-line
          color:$color-text

</style>
