<template>
  <transition name="fade">
    <div class="prize-modal" v-show="state === 1" @touchmove.prevent @click="cancel">
      <div class="modal-wrapper" @click.stop>
        <transition name="zoom">
          <div class="modal" v-show="state === 1">
            <div v-if="emotion" class="emotion" :class="emotion"></div>
            <div class="content">
              <slot></slot>
            </div>
            <div class="close" @click="close"></div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  const STATE_HIDE = 0
  const STATE_SHOW = 1

  const COMPONENT_NAME = 'modal'

  export default {
    name: COMPONENT_NAME,
    props: {
      emotion: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        state: STATE_HIDE
      }
    },
    methods: {
      cancel() {
        this.hide()
        this.$emit('cancel')
      },
      close() {
        this.hide()
        this.$emit('close')
      },
      show() {
        if (this.state === STATE_SHOW) {
          return
        }
        this.state = STATE_SHOW
      },
      hide() {
        this.state = STATE_HIDE
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .prize-modal
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    height: 100%
    over-flow: hidden
    background: $color-mask-bgc
    z-index :1500
    &.fade-enter, &.fade-leave-to
      opacity: 0
    &.fade-enter-to, &.fade-leave-to
      transition: all .3s ease-in-out
    .modal-wrapper
      position: absolute
      top: 50%
      left: 50%
      width: 250px
      height: 300px
      transform: translate(-50%, -50%)
      z-index: 999
      .modal
        position: relative
        display: flex
        flex-direction: column
        align-items: center
        width: 250px
        height: 300px
        background-color: $color-white
        border-radius :5px
        &.zoom-enter, &.zoom-leave-to
          transform: scale(.5)
        &.zoom-enter-to, &.zoom-leave-to
          transition: all .3s cubic-bezier(1, -0.07, 0.51, 1.48)
          /*transition-delay: .3s*/
        .emotion
          position: absolute
          display: block
          &.success
            top: -74.5px
            width: 217px
            height: 106.5px
            bg-image('./pic_unlucky')
            background-size: 217px 106.5px
          &.fail
            top: -36.25px
            width: 72.5px
            height: 72.5px
            bg-image('./pic-fail')
            background-size: 72.5px 72.5px
        .content
          width: 100%
          height: 100%
        .close
          position: absolute
          bottom: -70.9px
          display: block
          width: 23px
          height: 23px
          bg-image('./icon-close_white')
          background-size: 23px 23px
</style>
