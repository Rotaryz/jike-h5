<template>
  <transition name="fade">
    <div class="toast" v-show="showToast">
      <div class="content">{{content}}</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showToast: false,
        content: 'carNumber error!'
      }
    },
    methods: {
      show(content, time) {
        this.content = content
        this.showToast = true
        const showTime = time || 1000
        setTimeout(() => {
          this.showToast = false
        }, showTime)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  .toast
    position: fixed
    top: 50%
    left: 50%
    min-width: 200px
    z-index: 999
    padding: 10px 0
    opacity: .9
    border: 1px solid #666
    border-radius: 6px
    transition: all .5s ease-out
    transform: translate(-50%, -50%)
    text-align: center
    background-color: rgba(0,0,0,.8)
    &.fade-enter, &.fade-leave-active
      opacity: 0
    &.fade-enter-active, &.fade-leave-active
      transition: all .3s ease-in-out
    .content
      line-height: 20px
      color: $color-white

</style>
