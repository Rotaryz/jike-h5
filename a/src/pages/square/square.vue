<template>
  <div class="square">
    <ShopInformation></ShopInformation>
    <Map></Map>
    <Shade></Shade>
  </div>

</template>

<script type="text/ecmascript-6">
  import ShopInformation from 'base/shopInformation/shopInformation'
  import Map from 'base/map/map'
  import Shade from 'base/shade/shade'
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
      ...mapMutations({}),
    },
    components: {
      ShopInformation,
      Map,
      Shade
    },
    mounted(){
//      this.$on('set-phone'), function (a) {
//        console.log(a)
//
//      }
      // console.log(this.$store.state)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
</style>
