<template>
  <article class="activity" v-if="a">
    <!--<section class="content">-->
    <!--<img class="activity-img" src="./actviity.jpg" alt="">-->
    <!--<div class="btn-a1" @touchstart="btnActivity" @touchend="btnActivityEnd"></div>-->
    <!--</section>-->
    <section class="content" v-if="a*1 === ipcActiveList.HUANG_BIAN.id ">
      <img class="activity-img" src="./activity-hb.jpg" alt="">
      <!--<div :class="['btn',hit?'btn-action':'']" @touchstart.prevent="btnActivity" @touchend.prevent="btnActivityEnd"></div>-->
      <div class="btn-hb" @touchstart.prevent="btnActivity" @touchend.prevent="btnActivityEnd"></div>
    </section>
    <section class="content" v-else>
      <img class="activity-img" src="./activity_current.png" alt="">
      <div :class="['btn',hit?'btn-action':'']" @touchstart.prevent="btnActivity" @touchend.prevent="btnActivityEnd"></div>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import {IPC_ACTIVE_LIST} from 'common/js/constant'

  import {getMerchantData} from 'api/merchant'

  export default {
    data() {
      return {
        hit: false,
        st: false,
        orderInfo: '',
        m: '',
        a: '',
        e: '',
        type: '',
        enClick: true,
        time: null
      }
    },
    created() {
      this.m = this.$route.query.m || '' // 商家ID
      this.a = this.$route.query.a || ''// 活动ID
      this.e = this.$route.query.e || ''// 员工ID
      this.type = this.$route.query.type || ''// 活动类型
      this._getMerchantInfo()
    },
    methods: {
      _getMerchantInfo() {
        if (!this.m) {
          return
        }
        getMerchantData(this.m).then(res => {
          this._setTitle(res.shop_name)
        })
      },
      _setTitle(title) {
        document.title = title
      },
      btnActivity() {
        if (this.type === 'y') {
          this.hit = true
        }
      },
      btnActivityEnd() {
        // console.log('test-btn')
        if (this.enClick) {
          this.enClick = false
          setTimeout(() => {
            this.enClick = true
          }, 500)
          if (this.type === 'y') {
            this.hit = false
            /* eslint-disable */
            let url = `/pages/activity-detail/activity-detail?m=${this.m}&a=${this.a}&e=${this.e}`
            wx.miniProgram.navigateTo({url})
          }
        }

      }
    },
    computed: {
      ipcActiveList() {
        return IPC_ACTIVE_LIST
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .activity
    position: relative
    /*-webkit-overflow-scrolling: touch*/
    .content
      position: relative
      .activity-img
        width: 100%
        margin-bottom: -20px
      .btn
        position: absolute
        bottom: 1%
        left: 0px
        right: 0px
        height: 17vh
        margin: auto
        width: 90%
        z-index: 9
        transition: all .2s
        /*background: url("./botton.png") no-repeat center*/
        background-size: cover
        touch-action: none
      /*&.btn-action*/
      /*background: url("./botton_hit.png") no-repeat center 1.5px*/
      /*background-size: cover*/
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
      .btn-hb
        position :absolute
        bottom: 19vw
        left: 0px
        right: 0px
        height: 15vw
        margin: auto
        width: 90%
        z-index: 9
        touch-action: none
</style>
