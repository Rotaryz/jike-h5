<template>
  <ShopInformation></ShopInformation>
</template>

<script type="text/ecmascript-6">
  import ShopInformation from 'base/shopInformation/shopInformation'
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
      ShopInformation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
</style>
