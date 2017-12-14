<template>
  <div class="ruleDetail ruleDetailSow">
    <h3>活动规则</h3>
    <ul>
      <li>
        <p class="title">活动规则</p>
        <p class="contents"><span class="conShow">圣诞现金活动大抽奖</span></p>
      </li>
      <li>
        <p class="title">活动时间</p>
        <p class="contents"><span class="conShow">2017-11-28</span></p>
      </li>
      <li>
        <p class="title">签到说明</p>
        <p class="contents">活动说明活动期间仅限加“”商品享受5折封顶优
          惠活动时间:2018年4月24日-27日,共4天活动规
          则:活动期间内,通过当当购物手机客户端成功购
          买图书的用户,均视为成功.</p>
      </li>
    </ul>
    <div class="cancle">
      <span class="cancleCh"></span>
      <span class="cancleCh cancleCh2"></span>
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
  .ruleDetail
    display: none
    position: fixed
    top: 0
    bottom: 0
    height: 100%
    width: 100%
    background-color: $color-background-s
    z-index: 1900
    color: $color-text-d
    font-size: $font-size-medium
    background-color: #fff
    opacity: 0
    /*display: none*/
    transition: opacity .8s

  .ruleDetailSow
    opacity : 1
    h3
      color:$color-text
      text-align :center
      line-height: 25px
      padding-top:8.2%
      font-size: $font-size-large
      position: relative
      &:before
        content:''
        position: absolute
        width :28.5px
        height :4px
        background-color: #F1F1F1
        border-radius :2px
        bottom: -6px
        row-center()
    li
      padding: 0 7.3%
      p
        line-height:25px
        .conShow
          color:$color-assist-tr
      .title
        padding-top :20px
  .cancle
    position: absolute
    bottom: 67px
    right: 20px
    left: 50%
    .cancleCh
      position: absolute
      height: 32px
      width: 1px
      background: #000
      font-weight: 100
      -webkit-transform: rotate(45deg)
      -moz-transform: rotate(45deg)
      -ms-transform: rotate(45deg)
      -o-transform: rotate(45deg)
      transform: rotate(45deg)
    .cancleCh2
      -webkit-transform: rotate(-45deg)
      -moz-transform: rotate(-45deg)
      -ms-transform: rotate(-45deg)
      -o-transform: rotate(-45deg)
      transform: rotate(-45deg)

</style>
