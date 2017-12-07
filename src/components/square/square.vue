<template>
  <div >
    <ShopInformation ></ShopInformation>
    <Map></Map>
  </div>

</template>

<script type="text/ecmascript-6">
  import ShopInformation from 'base/shopInformation/shopInformation'
  import Map from 'base/map/map'
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
      ShopInformation,
      Map
    },
    mounted(){
      this.$on('click'),function(a){
        console.log(a,id)

      }
      // console.log(this.$store.state)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

</style>
