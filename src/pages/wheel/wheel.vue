<template>
  <div class="luckdraw">
    <iframe id="show-iframe"  v-show="iframeState" frameborder=0 name="showHere" scrolling=auto src="http://www.baidu.com"></iframe>
    <div class="header-wrapper">
      <div class="left-wrapper">
        <div class="luckerPannel" ref="luckerPannel">
          <div class="item" v-for="item, index in luckers">
            <div class="avatar-wrapper">
              <img class="full-image" :src="item.userinfo.avatarUrl" alt="">
            </div>
            <div class="content">
              {{item.userinfo.nickname}}领取了{{item.promotion.promotion_title}}奖品
            </div>
          </div>
          <div class="item" v-if="luckers.length > 0">
            <div class="avatar-wrapper">
              <img class="full-image" :src="luckers[0].userinfo.avatarUrl"
                   alt="">
            </div>
            <div class="content">
              {{luckers[0].userinfo.nickname}}领取了{{luckers[0].promotion.promotion_title}}奖品
            </div>
          </div>
        </div>
      </div>
      <div class="right-wrapper" @click="showRules">规则 <i
        class="icon-arrow-right"></i></div>
    </div>
    <div class="title-wrapper"></div>
    <div class="wheel-wrapper">
      <div class="wheel">
        <div class="wheel-pointer" @click="drawPrize"></div>
        <div class="wheel-content" ref="wheel">
          <div class="wheel-relative">
            <div class="prize" v-for="item, index in wheelList"
                 :class="`prize-${index}`">
              <p class="name">{{item.promotion_title}}</p>
              <div class="img-wrapper">
                <img :src="item.promotion_img" alt="">
              </div>
            </div>
            <div class="prize prize-5">
              <p class="name">谢谢惠顾</p>
              <div class="img-wrapper">
                <img src="./pic-face@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-pan"></div>
      <p class="count-wrapper">您剩余 <span class="number">{{count}}</span> 次抽奖机会
      </p>
    </div>
    <div class="prize-wrapper">
      <div class="title"></div>
      <div class="container">
        <div class="item" v-for="item in luckers">
          <div class="left-wrapper">
            <div class="avatar-wrapper">
              <img class="full-image" :src="item.userinfo.avatarUrl" alt="">
            </div>
            <div class="content">
              {{item.userinfo.nickname}}领取了{{item.promotion.promotion_title}}奖品
            </div>
          </div>
          <div class="right-wrapper">{{item.created_at}}</div>
        </div>
      </div>
    </div>
    <prize-modal ref="prizeModal" :emotion="emotion">
      <div class="modal-wrapper">
        <div class="top">
          <p class="title">{{prize.id === 0 ? '好可惜，差点就中了！' : '恭喜您中奖啦！'}}</p>
          <p class="content">{{prize.promotion_title}}</p>
        </div>
        <div class="middle">
          <div class="content">{{prize.id === 0 ? '中奖机会天天有' : '奖品已经存放入您的账户'}}
          </div>
          <div class="content">
            {{prize.id === 0 ? '明天再来' : `可进入个人中心-${prize.promotion_type === 'coupon' ? '优惠券' : '红包'}查看详情`}}
          </div>
        </div>
        <div class="bottom">
          <div class="btn" @click="handleClick">
            {{prize.id === 0 ? '随便逛逛' : `查看${prize.promotion_type === 'coupon' ? '优惠券' : '红包'}`}}
          </div>
        </div>
      </div>
    </prize-modal>
    <rules ref="rules" :rulesList="rulesList"></rules>
    <toast ref="toast"></toast>
    <phone-test ref="phoneTest"></phone-test>
    <load ref="load"></load>
  </div>
</template>

<script type="text/ecmascript-6">
  import PrizeModal from 'base/prize-modal/prize-modal'
  import Rules from 'base/rules/rules'
  import Toast from 'base/toast/toast'
  import Load from 'base/load/load'
  import PhoneTest from 'base/phoneTest/phoneTest'
  import {prefixStyle} from 'common/js/dom'
  import {ERR_OK} from 'api/config'
  import {getWheelDetail, getLuckyUsers, getLuckyNum, doLucky} from 'api/wheel'

  const transform = prefixStyle('transform')
  const transitionDuration = prefixStyle('transitionDuration')
  const transition = prefixStyle('transition')

  export default {
    data() {
      return {
        wheelList: [],
        count: 0,
        rotate: 0,
        wheeling: false,
        prize: {},
        luckers: [],
        rulesList: [],
        activeIndex: 0,
        emotion: 'success',
        iframeState: false
      }
    },
    created() {
      document.title = '大转盘'
      this.direction = 'vertical'
      this._getWheelDetail()
    },
    destroyed() {
      this.timer && clearInterval(this.timer)
    },
    methods: {
      drawPrize() {
        if (this.count === 0) {
          this.$refs.toast.show('您的抽奖次数已用完！')
          return
        }
        if (this.wheeling) {
          return
        }
        this.$refs.load.show()
        this.wheeling = true
        const data = {
          activity_id: this.activityId
        }
        doLucky(data).then((res) => {
          this.$refs.load.hide()
          if (res.error === ERR_OK) {
            this.prize = res
            let index
            const noPrice = res.id === 0
            if (noPrice) {
              index = 5
            } else {
              index = this.wheelList.findIndex((item) => item.id === res.id)
            }
            let addAngle = 0
            if (this.rotate > 0) {
              let beforeAngle = this.rotate % 360
              addAngle = 360 - beforeAngle
            }
            let angle = index * 60
            let random = Math.floor(Math.random() * 10 + 5)
            this.rotate = this.rotate + random * 360 + angle + addAngle
            let duration = random / 2
            this.$refs.wheel.style[transitionDuration] = duration + 's'
            this.$refs.wheel.style[transform] = `rotate(-${this.rotate}deg)`
            setTimeout(() => {
              if (noPrice) {
                this.emotion = 'fail'
              } else {
                this.emotion = 'success'
              }
              this.showPrizeModal()
              this.wheeling = false
              this._getLuckyUser()
              this._getLuckyNum()
            }, duration * 1000)
          } else {
            this.$refs.toast.show(res.message)
          }
        })
      },
      showPrizeModal() {
        this.$refs.prizeModal.show()
      },
      showRules() {
        this.iframeState = true
        this.$refs.rules.show()
      },
      handleClick() {
        /* eslint-disable no-undef */
        if (this.prize.id === 0) {
          // 推荐
          wx.miniProgram.switchTab({url: '/pages/recommend/recommend'})
        } else if (this.prize.promotion_type === 'coupon') {
          // 优惠券
          wx.miniProgram.navigateTo({url: '/pages/user/myCoupon/myCoupon'})
        } else if (this.prize.promotion_type === 'redpacket' || this.prize.promotion_type === 'lucky_redpacket') {
          // 红包
          wx.miniProgram.navigateTo({url: '/pages/user/redPacket/redPacket'})
        }
      },
      _getWheelDetail() {
        getWheelDetail()
          .then((res) => {
            const prize = res.activity_promotion.map((item, index) => {
              return `${item.promotion_title}`
            })
            console.log(prize)
            let data = [{
              title: '活动名称',
              content: [res.name],
              status: 0
            }, {
              title: '活动时间',
              content: [`${res.to_date}`],
              status: 0
            }, {
              title: '活动规则',
              content: ['活动期间内，每人每天一次抽奖机会；', '奖品数量有限，先到先得；', res.activity_desc],
              status: 1
            }, {
              title: '活动奖品',
              content: prize,
              status: 1
            }]
            console.log(this.wheelList)
            this.rulesList = data
            this.wheelList = res.activity_promotion
            this.activityId = res.id
            this._getLuckyUser()
            this._getLuckyNum()
          })
      },
      _getLuckyUser() {
        getLuckyUsers(this.activityId)
          .then((res) => {
            this.luckers = res
            this._setIntervalUser()
          })
      },
      _getLuckyNum() {
        const data = {activity_id: this.activityId}
        getLuckyNum(data).then((res) => {
          this.count = res.num
        })
      },
      _setIntervalUser() {
        this.timer = setInterval(() => {
          this.activeIndex += 1
          this.$refs.luckerPannel.style[transition] = 'all .5s'
          this.$refs.luckerPannel.style[transform] = `translate3d(0, -${this.activeIndex * 24}px, 0)`
          if (this.activeIndex === this.luckers.length) {
            setTimeout(() => {
              this.activeIndex = 0
              this.$refs.luckerPannel.style[transition] = ''
              this.$refs.luckerPannel.style[transform] = 'translate3d(0, 0, 0)'
            }, 500)
          }
        }, 2000)
      }
    },
    components: {
      PrizeModal,
      Rules,
      Toast,
      PhoneTest,
      Load
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .luckdraw
    width: 100%
    min-height: 100vh
    overflow: hidden
    background-color: #232347
    bg-image('./pic-background')
    background-size: 100%
    background-repeat: no-repeat
    .header-wrapper
      display: flex
      justify-content: space-between
      padding: 19px 12px 0
      .left-wrapper
        height: 24px
        border-1px(rgba(255, 255, 255, .15), 50px)
        overflow: hidden
        .luckerPannel
          /*transition: all .5s*/
          .item
            display: flex
            align-items: center
            height: 24px
            padding-right: 10px
            .avatar-wrapper
              display: inline-block
              vertical-align: middle
              width: 20px
              height: 20px
              margin-left: 2px
              margin-right: 1.5px
              border-radius: 50%
              overflow: hidden
            .content
              display: inline-block
              vertical-align: middle
              font-size: $font-size-small-s
              color: $color-white
      .right-wrapper
        display: flex
        align-items: center
        justify-content: center
        width: 44px
        height: 24px
        line-height 24px
        border-1px(rgba(255, 255, 255, .15), 50px)
        font-size: $font-size-small-s
        color: $color-white
        .icon-arrow-right
          width: 5px
          height: 8px
          margin-left: 3px
          icon-image('icon-right')
    .title-wrapper
      width: 100%
      height: 0
      margin-top: 10px
      padding-top: 23.866666666666%
      bg-image('./pic-header_title')
      background-size: 69.2% 100%
      background-position: center
      background-repeat: no-repeat
    .wheel-wrapper
      width: 100%
      padding: 0 10%
      box-sizing: border-box
      .wheel
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        .wheel-pointer
          position: absolute
          top: 50%
          left: 50%
          width: 28.6666666666666%
          height: 32%
          z-index: 50
          transform: translate(-50%, -50%)
          bg-image('./pic-pointer')
          background-size: 100% 100%
        .wheel-content
          position: absolute
          top: 0
          left: 0
          display: flex
          justify-content: center
          width: 100%
          height: 100%
          transition-timing-function: ease-in-out
          transition-property: transform
          bg-image('./pic-zp')
          background-size: 100% 100%
          .wheel-relative
            position: relative
            width: 100%
            height: 100%
            .prize
              position: absolute
              top: 0
              left: 27.7%
              width: 45%
              height: 100%
              box-sizing: border-box
              padding-top: 11%
              text-align: center
              for $i in 0 1 2 3 4 5
                &.prize-{$i}
                  z-index: (-($i) + 6)
                  transform: rotate($i * 60deg)
              .name
                margin-bottom: 10%
                font-size: $font-size-small-s
                color: $color-orange
              .img-wrapper
                width: 37.04%
                height: 13.11%
                margin: 0 auto
                box-sizing: border-box
                img
                  max-width: 100%
                  max-height: 100%
      .bottom-pan
        width: 100%
        height: 0
        margin-top: -3%
        padding-top: 7.6%
        bg-image('./pic-bottom_pan')
        background-size: 44.9333333% 100%
        background-repeat: no-repeat
        background-position: center
      .count-wrapper
        width: 100%
        margin-top: 10px
        text-align: center
        color: $color-white
        font-size: $font-size-small
        .number
          color: $color-yellow
    .prize-wrapper
      margin-top: 24px
      padding: 0 39px
      .title
        width: 100%
        height: 0
        margin-bottom: 12.5px
        padding-top: 5.993150684%
        bg-image('./pic-title')
        background-size: 100%
        background-repeat: no-repeat
      .container
        width: 100%
        box-sizing: border-box
        .item
          display: flex
          align-items: center
          justify-content: space-between
          height: 24px
          margin-bottom: 10px
          padding: 0 20px 0px 10px
          border-radius: 100px
          line-height: 24px
          border-1px(rgba(255, 255, 255, .15), 50px)
          background-color: rgba(255, 255, 255, .15)
          .left-wrapper
            flex: 1
            no-wrap()
            .avatar-wrapper
              display: inline-block
              vertical-align: middle
              width: 20px
              height: 20px
              border-radius: 50%
              overflow: hidden
            .content
              display: inline-block
              vertical-align: middle
              font-size: $font-size-small-s
              color: $color-text-ll
          .right-wrapper
            font-size: $font-size-small-s
            color: $color-text-ll
    .modal-wrapper
      width: 100%
      height: 100%
      text-align: center
      .top
        height: 125.5px
        box-sizing: border-box
        padding-top: 53.5px
        background-color: $color-orange-d
        .title
          margin-bottom: 9.5px
          font-size: $font-size-large-m
          color: $color-text-g
        .content
          font-size: $font-size-medium
          color: $color-white
          .number
            font-family: $font-family-regular
      .middle
        height: 119px
        padding-top: 17px
        box-sizing: border-box
        .content
          line-height: 16.5px
          font-size: $font-size-small
          color: $color-text-dd
      .bottom
        height: 55.5px
        padding: 0 10px
        box-sizing: border-box
        .btn
          width: 100%
          height: 40px
          line-height: 40px
          border-radius: 2px
          font-size: $font-size-small
          color: $color-white
          background: $color-orange-d
</style>

