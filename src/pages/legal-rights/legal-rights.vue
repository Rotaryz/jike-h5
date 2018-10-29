<template>
  <transition name="slide-leave">
    <div class="legal-rights">
      <div class="container">
        <div class="title">常见问题</div>
        <div class="list-wrapper">
          <router-link tag="div" :to="{path: '/legal-right/' + index}" class="list-item border-bottom-1px"
                       v-for="(item, index) in list" :key="index">
            <p class="content">{{item}}</p>
            <i class="arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  const COMPONENT_NAME = 'legal-rights'

  const LIST = [
    '1.如何查询物流？',
    '2.订单已经退款，钱还没有收到？',
    '3.如何申请退款？',
    '4.订单信息写错了怎么办？',
    '5.已经付款了，商家怎么还不发货？',
    '6.如何联系商家？'
  ]

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        list: LIST
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .legal-rights
    min-height: 100vh
    background: #f8f8f8
    .container
      padding: 0 15px
      background: #ffffff
      .title
        padding-top: 15px
        padding-bottom: 8.5px
        font-family: PingFangSC-Medium
        font-size: 16px
        color: #374B63
        letter-spacing: 0
        line-height: 32px
      .list-wrapper
        width: 100%
        .list-item
          display: flex
          align-items: center
          justify-content: space-between
          padding: 18px 0
          border-bottom-1px(#ECEDF1)
          .content
            font-family: PingFangSC-Regular
            font-size: 14px
            color: #374B63
            letter-spacing: 0.3px
            text-align: justify
            line-height: 18px
          .arrow-right
            display: inline-block
            width: 6px
            height: 12px
            background: url("./icon-pressed_right@2x.png") no-repeat
            background-size: 6px 12px
          &:last-child
            border-none()
</style>
