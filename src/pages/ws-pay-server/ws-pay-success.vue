<template>
  <div class="ws-pay-success">
    <div class="header-bg"></div>
    <div class="content">
      <div class="logo"></div>
      <div class="name">赞播微店</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .ws-pay-success
    position: relative
    padding:89.5px 0 35px
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
      border: 1px solid rgba(236,237,241,0.58);
      box-shadow: 0 4px 16px 0 rgba(55,75,99,0.10);
      border-radius: 3px;
      height :478.5px
      .logo
        height :80px
        width :80px
        icon-image(pic-head2)

</style>
