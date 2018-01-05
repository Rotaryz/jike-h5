<template>
  <transition name="fade">
    <div class="ruleDetail" v-show="state === 1">
      <div class="con-box">
        <h3>活动规则</h3>
        <ul>
          <li v-for="(item, index) in rulesList" :key="index"
              :class="{'explain':item.status === 1}">
            <p class="title">{{item.title}}:
              <spna class="contents">{{item.content}}</spna>
            </p>
          </li>
        </ul>
      </div>
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
      rulesList: {
        type: Array,
        default: [{
          title: '活动名称',
          content: ''
        }, {
          title: '活动时间',
          content: ''
        }, {
          title: '活动说明',
          content: ''
        }]
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
  .ruleDetail
    position: fixed
    top: 0
    bottom: 0
    height: 100%
    width: 100%
    background-color: $color-mask-bgc
    z-index: 1900
    color: $color-text-d
    font-size: $font-size-medium
    &.fade-enter, &.fade-leave-to
      opacity: 0
    &.fade-enter-to, &.fade-leave-to
      transition: all .5s ease-in-out
    .con-box
      height: 301px
      width: 265px
      overflow-y: scroll
      background: $color-white
      position: absolute
      all-center()
      h3
        color: $color-text
        text-align: center
        line-height: 25px
        padding-top: 8.2%
        font-size: $font-size-large
        position: relative
        &:before
          content: ''
          position: absolute
          width: 20px
          height: 4px
          background-color: #F1F1F1
          border-radius: 2px
          bottom: -6px
          row-center()
      ul
        margin-top: 14px
        li
          padding: 0 7.3%
          p
            font-size: $font-size-small
            line-height: 16.5px
            .conShow
              color: $color-assist-tr
          .title
            padding-top: 5px
        .explain
          margin-top: 26px
          color: #9B9B9B
          .contents
            display: block
            color: $color-text

  .close
    position: absolute
    left: 50%
    bottom: 115px
    display: block
    width: 23px
    height: 23px
    transform: translateX(-50%)
    bg-image('./icon-delet')
    background-size: 23px 23px
</style>
