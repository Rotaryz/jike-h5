<template>
  <div>
    <RegMap></RegMap>
    <RedPacket></RedPacket>
  </div>
</template>

<script type="text/ecmascript-6">
  import RegMap from 'base/reg_map/reg_map'
  import RedPacket from 'base/red-packet/red-packet'
  export default {
    components: {
      RegMap,
      RedPacket
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

</style>
