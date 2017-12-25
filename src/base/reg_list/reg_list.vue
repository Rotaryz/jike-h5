<template>
  <div class="reg_list">
    <h4>谁领到了红包？</h4>
    <ul>
      <li v-for="(pri,index) in prize" :key="index">
        <img :src="pri.wechat_data.avatarUrl">
        <p>{{pri.nickname}}连续签到{{pri.packed_count}}天</p>
        <span v-for="n in pri.num"></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      prize:''
    },
    data(){
      return {
        start: null,
      }
    },
    methods: {

    },
    created(){
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .reg_list
    margin-top: 10px
    background: $color-background-s
    padding-top: 17px
    color: $color-text

  h4
    font-size: $font-size-medium
    line-height: $font-size-large-m
    text-align: center
    position: relative
    &:before
      content: ''
      position: absolute
      width: 26.5px
      height: 4px
      background: #F1F1F1
      left: 50%
      bottom: -5px
      -webkit-transform: translateX(-50%)
      -moz-transform: translateX(-50%)
      -ms-transform: translateX(-50%)
      -o-transform: translateX(-50%)
      transform: translateX(-50%)
      border-radius: 6px

  ul
    li
      font-size: $font-size-small
      padding: $padding-all
      display: flex
      position: relative
      border-bottom: 0.5px solid $color-row-line
      &:last-child
        border-bottom: none
      img
        height: 24px
        width: @height
      p
        line-height: 24px
        margin-left: 5px
        span
          color: $color-assist-tr
      > span
        position: absolute
        right: 12px
        top: 50%
        transform: translateY(-50%)
        height: 18px
        width: 14.5px
        background-image: url("./icon-money_1.png")
        background-size: cover
        &:nth-of-type(2)
          right: 30px
        &:nth-of-type(3)
          right: 49px
</style>
