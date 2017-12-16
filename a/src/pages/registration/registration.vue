<template>
  <div>
    <RegMap></RegMap>
    <RedPacket></RedPacket>
    <PrizeModal>
      <div class="redFa">
        <span class="page">3/3</span>
        <p style="display: none">本红包由国颐堂提供</p>
        <p class="money">0.88<span>元</span></p>
        <div class="open op_move"></div>
        <div class="re_detail">
          <p>现金已经存放入您的账户可进入个人中心-红包查看详情</p>
          <div class="share">查看红包</div>
        </div>
      </div>
    </PrizeModal>
  </div>
</template>

<script type="text/ecmascript-6">
  import RegMap from 'base/reg_map/reg_map'
  import RedPacket from 'base/red-packet/red-packet'
  import PrizeModal from 'base/prize-modal/prize-modal'
  export default {
    components: {
      RegMap,
      RedPacket,
      PrizeModal
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .redFa
    width: 100%
    height: 100%
    background: #fff
    background-image: url('./pic-money_winbg.png')
    background-size: cover
    border-radius: 5px
    font-size: $font-size-small
    position: relative
    p
      line-height: 206px
      color: #E1452B
      text-align: center
    .money
      line-height: 124px
      font-size: ($font-size-small-s* 3)
      color: #FFDA4F
      span
        font-size: $font-size-small
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
      background-image: url("./icon-open_money.png")
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
      height: 58.5%
      width: 100%
      left: 0
      background: $color-background-s
      position: absolute
      bottom: 0
      border-bottom-right-radius: 5px
      border-bottom-left-radius: 5px

      p
        width: 65.4%
        margin: 17px auto 1.8%
        line-height: 1.4
        color: $color-text-tr
      div
        height: 23%
        width: 92%
        display: flex
        align-items: center
        justify-content: center
        border-radius: 2px
      .share
        background: $color-assist-tr
        color: $color-red
        position: absolute
        bottom: 15px
        row-center()
        color:$color-text-transwhite
</style>
