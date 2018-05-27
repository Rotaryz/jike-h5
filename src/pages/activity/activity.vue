<template>
  <article class="activity">
    <!--<section class="content">-->
    <!--<img class="activity-img" src="./actviity.jpg" alt="">-->
    <!--<div class="btn-a1" @touchstart="btnActivity" @touchend="btnActivityEnd"></div>-->
    <!--</section>-->
    <section class="content">
      <img class="activity-img" src="./actviity2.jpg" alt="">
      <div :class="['btn',hit?'btn-action':'']" @touchstart="btnActivity" @touchend="btnActivityEnd"></div>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        hit: false,
        st: false,
        orderInfo: '',
        m: '',
        a: '',
        e: '',
        type: ''
      }
    },
    created() {
      this.m = this.$route.query.m // 商家ID
      this.a = this.$route.query.a // 活动ID
      this.e = this.$route.query.e // 员工ID
      this.type = this.$route.query.type // 活动类型
    },
    methods: {
      btnActivity(e) {
        e.preventDefault()
        if (this.type === 'y') {
          this.hit = true
        }
      },
      btnActivityEnd(e) {
        e.preventDefault()
        if (this.type === 'y') {
          this.hit = false
          /* eslint-disable */
          let url = `/pages/activity-detail/activity-detail?m=${this.m}&a=${this.a}&e=${this.e}`
          wx.miniProgram.navigateTo({url})
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .activity
    position: relative
    .content
      position: relative
      .activity-img
        margin-bottom: -20px
        width: 100%
      .btn
        position: absolute
        bottom: 0px
        left: 0px
        right: 0px
        height: 10vh
        margin: auto
        width: 90%
        z-index: 9
        transition: all .2s
        background: url("./botton.png") no-repeat center
        background-size: cover
        touch-action: none
        &.btn-action
          background: url("./botton_hit.png") no-repeat center 1.5px
          background-size: cover
      .btn-a1
        position: absolute
        bottom: 0px
        left: 0px
        right: 0px
        height: 13vh
        margin: auto
        width: 90%
        z-index: 9
        touch-action: none
</style>
