<template>
  <div>
    <LiveConpon></LiveConpon>
  </div>
</template>

<script type="text/ecmascript-6">
  import LiveConpon from 'base/live-conpon/live-conpon'

  export default {
    components: {
      LiveConpon
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  div
    height :100%
    background: $color-master
</style>
