<template>
  <div class="load-box" v-if="isLoad" @click.stop>
    <div class="load" >
      <img class="load-img" src="./loading.gif">
      <div class="load-text">加载中</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      show() {
        this.isLoad = true
      },
      hide() {
        this.isLoad = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .load-box
    position: fixed
    height: 100vh
    width: 100vw
    overflow: hidden
    z-index: 9999
    background: transparent
    top: 0
    left: 0
    display :flex
    justify-content :center
    align-items: center
    .load
      border-radius: 5px
      width: 100px
      height: 110px
      background: rgba(0, 0, 0, .7)
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .load-img
        height: 35px
        width: @height
      .load-text
        margin-top: 14px
        color: $color-white
        font-size: $font-size-medium
</style>
