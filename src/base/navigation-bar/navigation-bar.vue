<template>
  <div class="head-item" :style="headStyle">
    <div class="status-bar" :style="{height: statusBarHeight + 'px'}"></div>
    <div class="head-content" :style="{color: titleColor}">{{Ltitle}}</div>
    <div class="head-arrow" v-if="showArrow" @click="goBackUrl">
      <img class="head-arrow-img" src="./Group6@2x.png">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /* eslint-disable no-undef */

  export default {
    props: {
      title: {
        type: String,
        default: ''
      }, // 标题
      headStyle: {
        type: String,
        default: 'background: rgba(255, 255, 255, 1)'
      }, // 头部背景颜色
      showArrow: {
        type: Boolean,
        default: true
      }, // 是否显示返回箭头
      titleColor: {
        type: String,
        default: '#333333'
      }, // 标题文字颜色
      custom: {
        type: Boolean,
        default: false
      },
      arrowType: {
        type: String,
        default: 'dark'
      } // 是否在点击返回时自定义方法
    },
    data() {
      return {
        statusBarHeight: 20
      }
    },
    created() {
      // let res = wx.getSystemInfoSync()
      // this.statusBarHeight = res.statusBarHeight || 20
    },
    methods: {
      goBackUrl() {
        // 如果有自定义方法，会向父级页面传递一个customFn的方法，如果没有直接返回
        this.$emit('customFn')
      }
    },
    computed: {
      Ltitle() {
        if (this.title.length > 12) {
          return this.title.slice(0, 12) + '···'
        } else {
          return this.title
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  .head-item
    width: 100vw
    transition: all 0.3s
    position: fixed
    left: 0
    top: 0
    z-index: 100
    .head-arrow
      position: absolute
      width: 44px
      height: 44px
      left: 0
      bottom: 0
      display: flex
      justify-content: center
      align-items: center
      .head-arrow-img
        width: 10px
        height: 17.5px
    .head-content
      text-align: center
      line-height: 44px
      height: 44px
      font-size: 18px
      font-family: PingFangSC-Medium
      color: #333333
</style>
