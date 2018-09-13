<template>
  <div class="ws-pay-success">
    <div class="header-bg"></div>
    <div class="content">
      <div class="content-wrapper">
        <div class="logo"></div>
        <div class="name">赞播微店</div>
        <div class="icon"></div>
        <div class="title">支付成功</div>
        <div class="explain">我们的客服会尽快联系你完成店铺开通～</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      document.title = '支付成功'
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .ws-pay-success
    position: relative
    padding: 89.5px 0 35px
    .header-bg
      position: absolute
      height: 222px
      top: 0
      left: 0
      right: 0
      icon-image(pic-moneybg)
    .content
      position: relative
      margin: 0 15px
      background: #FFFFFF;
      border: 1px solid rgba(236, 237, 241, 0.58);
      box-shadow: 0 4px 16px 0 rgba(55, 75, 99, 0.10);
      border-radius: 3px;
      height: 478.5px
      .content-wrapper
        position :relative
        top: -40px
        display: flex
        flex-direction: column
        align-items: center
        .logo
          height: 100px
          width: 100px
          icon-image(pic-head2)
        .name
          margin :5px
          font-family: PingFangSC-Regular;
          font-size: 16px
          color: #374B63;
          letter-spacing: 0.6px;
          text-align: center;
          line-height: 1.1
        .icon
          margin-top: 73.5px
          width: 72px
          height: 72px
          icon-image(icon-tick)
        .title
          margin-top: 12.5px
          font-family: PingFangSC-Medium;
          font-size: 16px
          color: #374B63;
          letter-spacing: 0.71px;
          line-height: 1.1
        .explain
          margin-top: 20px
          font-family: PingFangSC-Regular;
          font-size: 14px
          color: #828AA2;
          letter-spacing: 0.3px;
          line-height: 1.1
</style>
