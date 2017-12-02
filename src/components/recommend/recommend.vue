<template>
  <div class="recommend" ref="recommend">
    推荐
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
//  import {ERR_OK} from 'api/config'
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    created() {
    },
    activated() {
    },
    methods: {
      ...mapMutations({})
    },
    components: {
      Slider,
      Loading,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 0
    bottom: 0
</style>
