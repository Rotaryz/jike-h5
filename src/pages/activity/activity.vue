<template>
    <div class="activity">
      <img class="activity-img" src="./actviity.jpg" alt="">
      <div class="btn" :class="{'btn-action':hit}" @touchstart="btnActivity" @touchend="btnActivityEnd">
      </div>
      <PostOrder ref="postOrder"></PostOrder>
    </div>
</template>

<script type="text/ecmascript-6">
  import PostOrder from 'base/post-order/post-order'
  export default {
    data () {
      return {
        hit: false,
        st: false
      }
    },
    methods: {
      btnActivity(e) {
        // 跳转小程序买单
        this.hit = true
      },
      btnActivityEnd(e) {
        console.log(this.$refs)
        this.$refs.postOrder.shows(true)
        this.hit = false
        // 跳转小程序买单
        wx.miniProgram.navigateTo({url: '/pages/pay/pay'})
      }
    },
    components: {
      PostOrder
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  body
    overflow-y: auto
  .activity
    width: 100vw
    position: relative
    .activity-img
      width: 100vw
    .btn
      position: absolute
      bottom: 35px
      left: 0px
      right: 0px
      height: 10vh
      width: 90%
      margin: auto
      z-index: 1
      transition: all .2s
      border-radius: 3px
      background: url("./botton.png") no-repeat center
      background-size: 100%
    .btn.btn-action
      background: url("./botton_hit.png") no-repeat center 1.5px
      background-size: 100%
</style>
