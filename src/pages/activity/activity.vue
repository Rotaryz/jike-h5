<template>
    <div class="activity">
      <div class="scroll-activity">
        <img class="activity-img" src="./actviity.jpg" alt="">
      </div>
      <div class="btn" :class="{'btn-action':hit}" @touchstart="btnActivity" @touchend="btnActivityEnd">
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        hit: false,
        st: false,
        orderInfo: '',
        m: '',
        a: '',
        e: ''
      }
    },
    created() {
      document.title = '异业联盟活动'
      this.m = this.$route.query.m
      this.a = this.$route.query.a
      this.e = this.$route.query.e
    },
    methods: {
      btnActivity() {
        this.hit = true
      },
      btnActivityEnd() {
        this.hit = false
        if (this.m !== 'y') {
          /* eslint-disable */
          wx.miniProgram.navigateTo({url: '/pages/activity-detail/activity-detail?m=' + this.m + '&a=' + this.a + '&e=' + this.a})
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .activity
    height: 100vh
    width: 100vw
    position: relative
    -webkit-overflow-scrolling: touch
    overflow-y: scroll
    .scroll-activity
      .activity-img
        width: 100vw
        margin-bottom: -20px
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
      /*background: url("./botton.png") no-repeat center*/
      background-size: 100%
    .btn.btn-action
      /*background: url("./botton_hit.png") no-repeat center 1.5px*/
      background-size: 100%
</style>
