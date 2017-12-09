<template>
  <div class="shade" v-show="showCall">
    <div class="scon">
      <ul>
        <li>{{phone}}</li>
        <li>
          <img src="../../common/image/icon/icon-call.png" class="icos">
          <a :href="'tel:'+phone" @click="hidePhone">打电话</a>
        </li>
      </ul>
      <div class="cancel" @click="hidePhone">
        取消
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    computed: {
      phone(){
        return this.$store.state.phone
      },
      showCall(){
        return this.$store.state.showCall
      }
    },
    methods:{
      hidePhone(){
        setTimeout(()=>{
          var phoneObj = {phone:'',showCall:false}
          this.$store.dispatch('setPhone', phoneObj)
        },500)

      }
    },
    mounted(){

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .shade
    position: fixed
    height: 100%
    width: 100%
    z-index: 2000
    top: 0
    background-color: rgba(54, 53, 71, .5)
    .scon
      background: $color-background
      position: absolute
      width: 100%
      bottom: 0
      li, .cancel
        height: 40px
        background: $color-white
        line-height: @height
        text-align: center
        font-size: $font-size-medium
        .icos
          width: 12px
          height: 12px
          transform: translateY(1px)
      .cancel
        margin-top: 5px
      li:first-child
        border-bottom: 1px solid $color-row-line
        color: $color-text-tr
</style>
