<template>
  <transition name="fade">
    <div class="ruleDetail" v-show="state === 1">
      <h3>活动规则</h3>
      <ul>
        <li>
          <p class="title">活动规则</p>
          <p class="contents"><span class="conShow">{{name}}</span></p>
        </li>
        <li>
          <p class="title">活动时间</p>
          <p class="contents"><span class="conShow">{{date}}</span></p>
        </li>
        <li>
          <p class="title">签到说明</p>
          <p class="contents">{{desc}}</p>
        </li>
      </ul>
      <div class="close" @click="close">
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  const STATE_HIDE = 0
  const STATE_SHOW = 1

  const COMPONENT_NAME = 'rules'

  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        state: STATE_HIDE,
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
      },
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .ruleDetail
    position: fixed
    top: 0
    bottom: 0
    height: 100%
    width: 100%
    background-color: $color-white
    z-index: 1900
    color: $color-text-d
    font-size: $font-size-medium
    &.fade-enter, &.fade-leave-to
      opacity: 0
    &.fade-enter-to, &.fade-leave-to
      transition: all .5s ease-in-out
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
  .close
    position: absolute
    left: 50%
    bottom: 35px
    display: block
    width: 23px
    height: 23px
    transform: translateX(-50%)
    bg-image('./icon-close_black')
    background-size: 23px 23px
</style>
