<template>
  <div class="map_all">
    <div class="add">
      <div>
        <img class="nav_ico" src="./image/Group9.png"/>
        <p class="add_msg">{{allRedMsg ?
          allRedMsg.merchant_data.address : '正在定位...'}}</p>
      </div>
    </div>
    <div class="conmap">
      <div id="container">
        <div class="convers">
          <div class="cilent"></div>
          <img v-show="showPeo" src="./image/icon-s_sister@2x.png"
               :class="{'farPeo':true,'nearPeo' : farPeo}">
          <p class="map-dis">{{distance}}</p>
          <div class="rule">
            <p @click="showRules">活动规则</p>
          </div>
        </div>
        <div class="map-title">
          本店周边{{scope}}内可签到
        </div>
      </div>
    </div>
    <!-- -->
    <Rules ref="rules" :rulesList="rulesList"></Rules>
    <div class="reg-box">
      <ul class="reg_red">
        <li v-for="(red,index) in redPac" :key="index">
          <p>{{red.title}}</p>
          <img :src="red.showTitle === 1 ?
          require('./image/pic-r_rewardno@2x.png') :require('./image/pic-r_reward@2x.png') "
               alt=""
               class="award"
               v-show="red.showTitle !==0">
          <img :src="red.image">
        </li>

      </ul>
      <div class="ok buttons" v-show="isReg" @click="singIn">
        立即签到
      </div>
      <div class="no buttons" v-show="!isReg">
        {{regTitle}}
      </div>
      <div class="tip">
        <p>开启连续签到提醒</p>
        <div :class="{move_fa:isShowTip}" @click="showTip">
          <span :class="{move:isShowTip}"></span>
        </div>
      </div>
    </div>
    <RegList :prize="prize"></RegList>
    <PrizeModal ref="regmal">
      <div class="redFa">
        <span class="page">{{showPage}}</span>
        <p class="money" v-show="showRegPac">{{money}}<span>元</span></p>
        <div :class="{open:true, op_move:moveOpen}" @click="_drawPacket"></div>
        <div class="s-monall">
          <div class="s-mon" v-for="(ms,index) in morePeg" :key="index">￥{{
            ms.price}}
          </div>
        </div>
        <div class="s-monall s-monBo">
          <div class="s-mon" v-for="(end,index) in endPeg" :key="index">￥{{
            end.price}}
          </div>
        </div>
        <div class="re_detail" v-show="showRegPac">
          <pre>
           现金已经存放入您的账户
         可进入个人中心-红包查看详情
          </pre>
          <div class="share" @click="jumpMine">查看红包</div>
        </div>
        <p>{{shopName}}</p>
      </div>
    </PrizeModal>
    <toast ref="toast"></toast>
    <Load ref="load"></Load>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getRegistration,
    setSingIn,
    remind,
    signLists
  } from 'api/map'
  import Rules from 'base/rules/rules'
  import RegList from 'base/reg_list/reg_list'
  import redPacket from '../../common/js/red-packet'
  import PrizeModal from 'base/prize-modal/prize-modal'
  import Toast from 'base/toast/toast'
  import Load from 'base/load/load'
  let GEOLOCATION

  export default {
    components: {
      Rules,
      RegList,
      PrizeModal,
      Toast,
      Load
    },
    data() {
      return {
        shopName: '',
        isShowTip: 0,
        map: null,
        redPac: [{
          title: '',
          image: require('./image/icon-r_moenyno32@2x.png'),
          showTitle: 1,
          ispacket: 1
        }, {
          title: '第二天',
          image: require('./image/icon_notchecked.png'),
          showTitle: 0,
          ispacket: 0

        }, {
          title: '第三天',
          image: require('./image/icon_notchecked.png'),
          showTitle: 0,
          ispacket: 0
        }, {
          title: '',
          image: require('./image/icon-r_moenyno32@2x.png'),
          showTitle: 1,
          ispacket: 2
        }, {
          title: '第五天',
          image: require('./image/icon_notchecked.png'),
          showTitle: 0,
          ispacket: 0
        }, {
          title: '第六天',
          image: require('./image/icon_notchecked.png'),
          showTitle: 0,
          ispacket: 0
        }, {
          title: '',
          image: require('./image/icon-r_moenyno32@2x.png'),
          showTitle: 1,
          ispacket: 3
        }],
        peo: '',
        house: '',
        continuous: 0,
        allRedMsg: null,
//      测试
        isReg: false,
        distance: '正在计算距离…',
        isShowPeo: false,
        rulesList: [],
        start: null,
        webSocket: null,
        prize: [],
        showRegPac: false,
        showPage: '',
        moveOpen: false,
        money: '',
        redNum: 0,
        opeCi: 0,
        morePeg: [],
        endPeg: [],
        redList: null,
        regTitle: '不在签到范围内',
        showPeo: false,
        farPeo: true,
        scope: '',
      }
    },
    created() {
      this._getRegistration()
    },
    methods: {
//      跳转到个人中心
      jumpMine() {
        wx.miniProgram.navigateTo({url: '/pages/user/redPacket/redPacket'})
      },
//      开启提醒
      showTip() {
        let status = 0
        if (!this.isShowTip) {
          status = 1
        } else {
          status = 0
        }
        let data = {status: status, sign_id: this.allRedMsg.id}
        remind(data).then((res) => {
          if (res.error === 0) {
            this.isShowTip = !this.isShowTip
          }
          this.$refs.toast.show(res.message)
        })

      },
//      处理签订状态
      dealType(continuous) {
        this.redPac.forEach((item, idx) => {
          if (idx + 1 <= continuous && item.ispacket !== undefined) {
            item = new redPacket(item)
            this.redPac.splice(idx, 1, item)
          }
        })
      },
//      领取红包
      _drawPacket() {
        this.opeCi++
        this.moveOpen = !this.moveOpen
        setTimeout(() => {
          let allMoney = 0
          this.showPage = this.opeCi + '/' + this.redNum
          if (this.opeCi === 1) {
//              开一个时
            this.morePeg.push({price: this.redList[0].price})

          } else if (this.opeCi === 2 && this.redNum === 2 || this.opeCi === 3 && this.redNum === 3) {
//              两个包全
            this.showRegPac = true
            this.morePeg = []
            this.redList.forEach((item) => {
              this.endPeg.push(item)
              allMoney += parseFloat(item.price)
            })
            this.money = allMoney.toFixed(2)
            this.$refs.regmal.showClose()
          } else if (this.opeCi === 2 && this.redNum === 3) {
//              三个包开两个是
            this.morePeg.push({price: this.redList[1].price})
          }
        }, 2000)
      },
//   获取初始化数据
      _getRegistration() {
        getRegistration().then((res) => {
//          获取领取信息
          this.winPrize(res)
          this.showMap(res.scope, res)
          this.allRedMsg = res
          if (this.allRedMsg.scope >= 1000) {
            this.scope = `${this.allRedMsg.scope / 1000 }公里`
          } else {
            this.scope = `${this.allRedMsg.scope}米`
          }
          this.house = [res.merchant_data.longitude, res.merchant_data.latitude]
          if ((res.is_yesterday === 1 && res.continuous !== 7) || (res.is_today
            === 1 && res.continuous === 7) || (res.is_today === 1 &&
            res.continuous < 7)) {
            this.continuous = res.continuous
            this.dealType(this.continuous)
          }
          if (res.continuous === 7 && res.is_today === 0) {
            this.continuous = 0
            this.dealType(this.continuous)
          }
          if (res.is_today !== 0) {
            this.regTitle = '今日已签到'
//            测试
            this.isReg = false
            this.dealType(this.continuous)
          }
          if (res.opne_template_id === 0) {
            this.isShowTip = false
          } else {
            this.isShowTip = true
          }
        })
      },
      // 显示规则
      showRules() {
        this.$refs.rules.show()
        let data = [{
          title: '活动名称',
          content: [this.allRedMsg.title],
          status: 0
        }, {
          title: '活动时间',
          content: [this.allRedMsg.from_date + '至' + this.allRedMsg.to_date],
          status: 0
        }, {
          title: '活动说明',
          content: [`此活动为线下签到，只有在门店${this.scope}范围内才可签到；`,
            '首次成功签到，可一次获得一个随机红包；',
            '连续成功签到4次，可一次获得两个随机红包；',
            '连续成功签到7次，可一次获得三个随机红包；',
            '奖品数量有限，先到先得；', this.allRedMsg.explain],
          status: 1
        }, {
          title: '活动奖品',
          content: ['现金红包'],
          status: 1
        }]
        this.rulesList = data
      },
//      签到提交
      singIn() {
        this.continuous += 1
        let distance = this.distance ===
        '正在计算距离…' ? 0 : parseFloat(this.distance.slice(6)) * 1000
        let data = {
          sign_id: this.allRedMsg.id,
          continuous: this.continuous,
          distance: distance,
          address: ''
        }
        setSingIn(data).then((res) => {
          if (res.error === 1) {
//            签到失败提示
            this.$refs.toast.show(res.message)
            this.continuous -= 1
          } else {
            this.isReg = false
            this.regTitle = '今日已签到'
            this.redList = res
            this.redNum = res.length
            if ((this.continuous === 1 || this.continuous === 4 || this.continuous === 7) && res.length === 0) {
              this.$refs.toast.show('红包已被领完，明天再来')
            }
            if (res.length === 1) {
              this.$refs.regmal.show()
              this.money = res[0].price
              this.showRegPac = true
              if (this.continuous !== 1) {
                this.$refs.toast.show('红包已被领完，明天再来')
              }
            } else if (res.length > 1) {
              this.$refs.regmal.show()
              this.showPage = '0/' + res.length
              this.$refs.regmal.hideClose()
              if (this.continuous !== 4 && res.length === 2) {
                this.$refs.toast.show('红包已被领完，明天再来')
              }
            }
            if (res.num >= 0) {
              if (res.num > 1) {
                this.showPage = '0/' + res.num
              }
              this.$refs.regmal.show()
            }
            if (res) {
              this._getRegistration()
            }
          }
        })
      },
//      赢取红包
      winPrize(res) {
        let data = {sign_id: res.id}
        signLists(data).then((res) => {
          this.prize = res
        })
      },
//      地图与人的地位
      showMap(res, data) {
        //      店铺定位
        var that = this
        let codeName = data['merchant_data']['industry']['code_name']
        let image = `icon-s_${codeName}@2x`
        let marker1 = new AMap.Marker({ //  添加自定义点标记
          map: this.map,
          position: this.house, //  基点位置
          offset: new AMap.Pixel(-14, -16), //  相对于基点的偏移位置
          draggable: false, //  是否可拖动
          content: `<img src="${require(`./image/${image}.png`)}" style="height:9.07vw ;width: 8.53vw">`
          //  自定义点标记覆盖物内容
        })
//      获取人定位
        this.map.plugin('AMap.Geolocation', () => {
          GEOLOCATION = new AMap.Geolocation({
            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
            maximumAge: 0,           //  定位结果缓存0毫秒，默认：0
            showButton: false,        //  显示定位按钮，默认：true
            buttonPosition: 'LB',    //  定位按钮停靠位置，默认：'LB'，左下角
            panToLocation: false,     // 定位成功后将定位到的位置作为地图中心点，默认：true
            showMarker: false      // 定位成功后在定位到的位置显示点标记，默认：true
          })
          that.map.addControl(GEOLOCATION)
          GEOLOCATION.getCurrentPosition()
          AMap.event.addListener(GEOLOCATION, 'complete', onComplete) // 返回定位信息
          AMap.event.addListener(GEOLOCATION, 'error', onError)      // 返回定位出错信息
        })
        //  解析定位结果
        function onComplete(data) {
          that.peo = [data.position.lng, data.position.lat]
          let lnglat = new AMap.LngLat(data.position.lng, data.position.lat)
          let dirs = lnglat.distance(that.house)
          //      判断距离
          if (dirs <= that.allRedMsg.scope) {
            that.farPeo = true
            if (that.allRedMsg.is_today === 0) {
              that.regTitle = '立即签到'
              that.isReg = true
            }
          } else {
            that.farPeo = false
            that.isReg = false
            that.regTitle = '不在签到范围内'
          }
          that.showPeo = true
          var disWay = dirs > 1000 ? `${(dirs / 1000).toFixed(2)}公里` :
            `${dirs.toFixed(2)}米`
          that.distance = `你距离该店铺${disWay}`
        }

        function onError() {
          that.$refs.toast.show('定位失败，请重试！')
        }
      }
    },
    mounted() {
      document.title = '签到红包'
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 16,
        center: this.house
      })
      document.querySelector('.amap-logo').style.display = 'none'
      document.querySelector('.amap-copyright').innerHTML = ''
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  /*地图*/
  .conmap
    padding: 0 3.2vw
    background-color: $color-white

  .reg-box
    background-color: $color-white

  .amap-logo {
    display: none !important
  }

  #container
    width: 100%
    height: 0
    padding-top: 64.13vw
    position: relative
    margin: 0 auto
    .map-title
      position: absolute
      text-align: center
      top: 19.2vw
      row-center()
      color: $color-white
      background: $color-theme
      border-radius: 50px
      padding: 3px 7px
      font-size: $font-size-small-s
      z-index: 100
      &:before
        content: ''
        position: absolute
        bottom: -10px
        height: 0px
        row-center()
        border: 5px solid $color-theme
        border-bottom: 5px solid transparent
        border-right: 5px solid transparent
        border-left: 5px solid transparent
    .convers
      width: 100%
      height: 100%
      position: absolute
      top: 0
      z-index: 1000
      background-color: rgba(0, 0, 0, 0)
      .cilent
        height: 46.7vw
        width: 46.7vw
        all-center()
        position: absolute
        border-radius: 50%
        background: rgba(0, 0, 0, 0)
        border: 1px dashed #696671
      .farPeo
        width: 18px
        position: absolute
        bottom: 30px
        right: 44px
      .nearPeo
        right: 25vw
        bottom: 72px
      p
        position: absolute
        bottom: 3%
        color: $color-text
        font-size: $font-size-small
        font-family: $font-family-regular
        row-center()
      .map-dis
        padding: 4px 40px
        no-wrap()
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 8%,
        rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)
      .rule
        width: 58px
        height: 12px
        line-height: 1
        padding: 4px 0
        border-top-left-radius: 50px
        border-bottom-left-radius: 50px
        background-color: $color-theme
        position: absolute
        right: 0px
        top: 12px
        z-index: 200 /*&:before
          right: 12px
          background: $color-assist-tr
          z-index: 100*/
        p
          font-size: $font-size-small-s
          color: rgba(255, 255, 255, .7)
          no-wrap()
          position: relative
          z-index: 200
          text-indent: 6px

  .add
    padding: 0 $padding-all
    height: 30px
    line-height: 30px
    font-size: $font-size-small
    text-indent: 12px
    background: $color-white
    position: relative
    color: $color-text-d
    no-wrap()
    p
      background: $color-background
    .nav_ico
      width 8px
      height 10px
      position: absolute
      top: 50%
      left: 12px
      transform: translateY(-50%)

  .reg_red
    display: flex
    flex-direction: row
    justify-content: space-around
    color: $color-text-tr
    padding-top: $padding-all
    position: relative
    background-color: $color-white
    li
      width: 11%
      font-size: $font-size-small-s
      line-height: $font-size-medium
      position: relative
      text-align: center
      height: 12vw
      no-wrap()
      p
        margin-bottom: 7px
        height: 33%
        position: relative
        z-index: 1100
        padding-top: 3.2%
      img
        width: 39%
        position: absolute
        bottom: 2px
        left: 0
        row-center()
        z-index: 100
    .award
      position: absolute
      top: 0
      color: rgba(255, 255, 255, .6)
      background-size: cover
      width: 83%

  .reg_red:before
    content: ''
    position: absolute
    width: 83%
    top: 82%
    left: 30px
    background: url('./image/pic-xu_Line.png')
    height: 1px

  .buttons
    border-radius: 4px
    width: 175px
    height: 32px
    line-height: 32px
    text-align center
    position: relative
    left: 50%
    transform: translateX(-50%)
    background-size cover
    background-position: top right
    margin: 19.5px 0
    color: #696671
    font-size: $font-size-small

  .ok
    background: #FF4E00
    color: $color-text-transwhite

  .no
    background: #DDDDDD

  .tip
    font-size: $font-size-small
    padding: $padding-all
    color: $color-text-d
    position: relative
    border-top: 1px solid $color-row-line
    margin-top: 6px
    margin-bottom: 10px
    .move_fa
      background: #706B82
    div
      position: absolute
      height: 24px
      width: 43.5px
      right: $padding-all
      top: 50%
      transform: translateY(-50%)
      background: #dddddd
      border-radius: @height
      transition: background 1s
      span
        display: inline-block
        height: 22px
        width: 22px
        margin: 1px 1px
        border-radius: 50%
        background: $color-white
        transition: transform .5s
      .move
        transform: translateX(19px)

  //  红包
  .redFa
    width: 100%
    height: 100%
    background: #fff
    background-image: url('./image/pic-money_winbg.png')
    background-size: cover
    border-radius: 5px
    font-size: $font-size-small
    position: relative
    p
      color: #C52D14
      row-center()
      position: absolute
      bottom: 30px
    .s-monall
      color: $color-white
      width: 100%
      position: absolute
      font-size: $font-size-medium
      top: 50px
      background: rgba(0, 0, 0, 0)
      font-family: $font-family-light
      .s-mon
        display: inline-block
        margin-left: 110px
        line-height: 1
        margin-top: 11px
        background: rgba(0, 0, 0, 0)
        position: relative

        &:before
          content: ''
          position: absolute
          width: 12.5px
          height: 13.5px
          background: url('./image/icon-money-bg.png')
          background-size: cover
          bottom: 0
          left: -23px
    .s-monBo
      font-size: $font-size-small-s
      top: 92.5px
      display: flex
      justify-content: center
      .s-mon
        margin-left: 24px
        &:first-child
          margin-left: 0
        &:before
          top: 1px
          left: -10px
          width: 8.8px
          height: 9.504px
    .money
      position: absolute
      top: 56.5px
      font-size: ($font-size-small-s* 3)
      color: #FFDA4F
      span
        font-size: $font-size-small
    .page
      position: absolute
      right: $padding-all
      top: ($padding-all + 3)
      color: $color-text
    .open
      height: 66.5px
      width: @height
      border-radius: 50%
      position: absolute
      top: 56%
      background-image: url("./image/icon-open_money.png")
      background-size: cover
      row-center()
      transform: translateX(-50%) rotateY(0deg)
      transition: all 2s
    .op_move
      transform: translateX(-50%) rotateY(720deg)
    .re_detail
      height: 58.5%
      width: 100%
      left: 0
      background: $color-white
      position: absolute
      bottom: 0
      border-bottom-right-radius: 5px
      border-bottom-left-radius: 5px
      pre
        position: absolute
        bottom: 87px
        width: 65.4%
        margin: 17px auto 1.8%
        line-height: 1.4
        color: #868590
      div
        height: 23%
        width: 92%
        display: flex
        align-items: center
        justify-content: center
        border-radius: 2px
      .share
        background: $color-white
        color: $color-text
        border: 0.5px solid #DDDDDD
        border-radius: 4px
        position: absolute
        bottom: 15px
        row-center()
</style>
