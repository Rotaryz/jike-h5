<template>
  <div class="map_all">
    <div class="add">
      <img class="nav_ico" src="./image/Group9.png"/>
      <p class="add_msg">{{allRedMsg ?
        allRedMsg.merchant_data.address : '正在定位...'}}</p>
    </div>
    <div id="container">
      <div class="convers">
        <img src="./image/pic-people_right.png" class="farPeo"
             v-show="isShowPeo">
        <p>{{distance}}</p>
        <div class="rule">
          <p @click="showRules">规则</p>
        </div>
      </div>
    </div>
    <Rules :name="name,date,desc" ref="rules"></Rules>
    <div>
      <ul class="reg_red">
        <li v-for="(red,index) in redPac" :key="index">
          <p :class="{award:red.showTitle ===1}">{{red.title}}</p>
          <img src="./image/Rectangle 5.png" alt="" class="award"
               v-show="red.showTitle ===1">
          <img :src="red.image">
        </li>

      </ul>
      <button
        style="background-image:url('./src/common/image/icon/icon-button-r.png')"
        v-show="isReg" @click="singIn">
        立即签到
      </button>
      <button
        style="background-image:url('./src/common/image/icon/icon-button-n.png')"
        v-show="!isReg">
        今日已签到
      </button>
      <div class="tip">
        <p>开启连续签到提醒</p>
        <div :class="{move_fa:isShowTip}">
          <span :class="{move:isShowTip}" @click="showTip"></span>
        </div>
      </div>
    </div>
    <RegList :prize="prize"></RegList>
    <PrizeModal ref="regmal">
      <div class="redFa">
        <span class="page">{{showPage}}</span>
        <p style="display: none">本红包由国颐堂提供</p>
        <p class="money" v-show="showRegPac">{{money}}<span>元</span></p>
        <div :class="{open:true, op_move:moveOpen}" @click="_drawPacket"></div>
        <div class="s-monall">
          <div class="s-mon" v-for="(ms,index) in morePeg" :key="index">+{{
            ms.price}}
          </div>
        </div>
        <div class="s-monall s-monBo">
          <div class="s-mon" v-for="(end,index) in endPeg" :key="index">+{{
            end.price}}
          </div>
        </div>
        <div class="re_detail" v-show="showRegPac">
          <p>现金已经存放入您的账户可进入个人中心-红包查看详情</p>
          <div class="share">查看红包</div>
        </div>
      </div>
    </PrizeModal>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRegistration, setSingIn, remind, drawPacket,signLists} from  'api/map'
  import Rules from 'base/rules/rules'
  import RegList from 'base/reg_list/reg_list'
  import redPacket from '../../common/js/red-packet'
  import PrizeModal from 'base/prize-modal/prize-modal'
  let GEOLOCATION
  export default {
    data(){
      return {
        isShowTip: 0,
        map: null,
        redPac: [{
          title: '第一天',
          image: './src/common/image/icon/icon-12_money.png',
          showTitle: 0,
          ispacket: 1
        }, {
          title: '第二天',
          image: './src/common/image/icon/icon_notchecked.png',
          showTitle: 0,
          ispacket: 0

        }, {
          title: '第三天',
          image: './src/common/image/icon/icon-2_money.png',
          showTitle: 0,
          ispacket: 2
        }, {
          title: '第四天',
          image: './src/common/image/icon/icon_notchecked.png',
          showTitle: 0,
          ispacket: 0
        }, {
          title: '第五天',
          image: './src/common/image/icon/icon_notchecked.png',
          showTitle: 0,
          ispacket: 0
        }, {
          title: '第六天',
          image: './src/common/image/icon/icon_notchecked.png',
          showTitle: 0,
          ispacket: 0
        }, {
          title: '第七天',
          image: './src/common/image/icon/icon-3_money.png',
          showTitle: 0,
          ispacket: 3
        }],
        peo: '',
        house: '',
        continuous: 0,
        allRedMsg: null,
        isReg: true,
        distance: '正在计算距离…',
        isShowPeo: false,
        name: '',
        date: '',
        desc: '',
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
        redList: null
      }
    },
    components: {
      Rules,
      RegList,
      PrizeModal

    },
    created(){
      this._getRegistration()

    },
    methods: {

      showTip(){
        this.isShowTip = !this.isShowTip
        let status = 0
        if (this.isShowTip) {
          status = 1
        } else {
          status = 0
        }
        let data = {status: status, id: this.allRedMsg.id}
        remind(data).then((res) => {
//          console.log(res)
        })
      },
//      处理签订状态
      dealType(continuous){
        this.redPac.forEach((item, idx) => {
          if (idx + 1 <= continuous && item.ispacket !== undefined) {
            item = new redPacket(item)
            this.redPac.splice(idx, 1, item)
          }
        })
      },
//      领取红包
      _drawPacket(){
        this.opeCi++
        this.moveOpen = !this.moveOpen
        console.log(this.moveOpen)
        setTimeout(() => {
          let allMoney = 0
          this.showPage = this.opeCi + '/' + this.redNum
          console.log(this.opeCi)
          if (this.opeCi === 1) {
//              开一个时
            console.log({price: this.redList[0].price})
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
        this.winPrize()
        getRegistration().then((res) => {
//          获取领取信息
          this.winPrize()
          console.log(res)
          this.showMap(res.scope)
          this.allRedMsg = res
          this.house = [res.merchant_data.longitude, res.merchant_data.latitude]
          if (res.is_yesterday === 1) {
            this.continuous = res.first_sign.continuous
            this.dealType(this.continuous)
          }
          if (res.is_today !== 0) {
            this.isReg = false
            this.dealType(this.continuous)
          }
          if (res.opne_template_id === '0') {
            this.isShowTip = false
          } else {
            this.isShowTip = true
          }
        })
      },
      //显示规则
      showRules(){
        this.$refs.rules.show()
        this.name = this.allRedMsg.title
        this.date = this.allRedMsg.from_date
        this.desc = this.allRedMsg.explain
      },
//      签到提交
      singIn(){
        this.isReg = false
        this.continuous += 1
        let data = {sign_id: this.allRedMsg.id, continuous: 1}
        setSingIn(data).then((res) => {
          this.redList = res
          console.log(res)
          this.redNum = res.length
          if (res.length === 1) {
            this.$refs.regmal.show()
            this.money = res[0].price
            this.showRegPac = true
          } else if (res.length > 1) {
            this.$refs.regmal.show()
            this.showPage = '0/' + res.length
            this.$refs.regmal.hideClose()
          }
          if (res.num >= 0) {
            if (res.num > 1) {
              this.showPage = '0/' + res.num
              console.log(this.$refs.regmal)
            }
            this.$refs.regmal.show()
          }
          if (res) {
            this.dealType(this.continuous)
          }
        })
      },
//      判断距离
      isDistance(dis){
        var disWay = dis > 1000 ? (dis / 1000) : dis
        if (disWay > 3) {
          this.distance = `你距离该店铺${disWay.toFixed(2)}公里`
//          this.isReg = false
        } else {
          this.distance = `你距离该店铺${disWay.toFixed(2)}米`
        }

      },
//      事实中奖轮播

      .
        3




      winPrize(){
        let data = {id: 1}
        signLists(data).then((res) => {
          this.prize = res
          console.log(res)
        })
      },
//      地图与人的地位
      showMap(res){//      店铺定位
        var that = this
        let marker1 = new AMap.Marker({ //添加自定义点标记
          map: this.map,
          position: this.house, //基点位置
          offset: new AMap.Pixel(-14, -16), //相对于基点的偏移位置
          draggable: false, //是否可拖动
          content: `<img src="./src/common/image/icon/icon-shop_normal.png" style="height: 28px;width: 32px">`
          //自定义点标记覆盖物内容
        })

//      标记提示
        marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
          offset: new AMap.Pixel(-52, -26),//修改label相对于maker的位置
          content: `本店周边<span style="color:#FF4E00 ">${res / 1000}</span>公里内可签到`
        })
//      获取人定位
        this.map.plugin('AMap.Geolocation', () => {
          GEOLOCATION = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            showButton: false,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
            showMarker: false,       //定位成功后在定位到的位置显示点标记，默认：true
          })
          that.map.addControl(GEOLOCATION)
          GEOLOCATION.getCurrentPosition()
          AMap.event.addListener(GEOLOCATION, 'complete', onComplete)//返回定位信息
          AMap.event.addListener(GEOLOCATION, 'error', onError)      //返回定位出错信息
        })
        //解析定位结果
        function onComplete(data) {
          console.log(data)
          that.peo = [data.position.lng, data.position.lat]
          let lnglat = new AMap.LngLat(data.position.lng, data.position.lat)
          let dirs = lnglat.distance(that.house)
          console.log(dirs)
          if (dirs <= 3000) {
//            定人且画线
            let marker2 = new AMap.Marker({ //添加自定义点标记
              map: that.map,
              position: that.peo, //基点位置
              offset: new AMap.Pixel(-14, -16), //相对于基点的偏移位置
              draggable: false, //是否可拖动
              content: `<img src="./src/common/image/icon/pic-people_right.png"
style="height: 32px;width: 24.5px">`
              //自定义点标记覆盖物内容
            })
            let lineArr = [that.house, that.peo]
//            画线
            let polyline = new AMap.Polyline({
              path: lineArr,          //设置线覆盖物路径
              strokeColor: "#3366FF", //线颜色
              strokeOpacity: 1,       //线透明度
              strokeWeight: 5,        //线宽
              strokeStyle: "solid",   //线样式
              strokeDasharray: [10, 5] //补充线样式
            })
            polyline.setMap(map)
          } else {
            that.isShowPeo = true
          }
          that.isDistance(dirs.toFixed(2))
        }

        function onError() {
        }
      }
    },
    mounted(){
      var that = this
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 15,
        center: this.house
      })
      document.querySelector('#container').style.paddingTop =
        (document.body.offsetHeight * 0.36) + 'px'
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  /*地图*/
  #container
    height: 36%
    position: relative
    width: 93.6%
    margin: 0 auto
    .convers
      width: 100%
      height: 100%
      position: absolute
      top: 0
      z-index: 1000
      background-image: url("./image/bk-qd.png")
      background-color: rgba(0, 0, 0, 0)
      background-size: cover
      .farPeo
        width: 31px
        position: absolute
        bottom: 26.8px
        right: 15px
      p
        position: absolute
        bottom: 2%
        color: #7A0000
        font-size: $font-size-small
        row-center()
      .rule
        width: 44px
        height: 20px
        line-height: @height
        border-radius: 50px
        background-color: rgba(0, 0, 0, 0)
        border: 2px solid #FFFFFF;
        position: absolute
        right: 12px
        top: 12px
        font-size: $font-size-small-s
        z-index: 200
        &:after, &:before
          content: ''
          position: absolute
          height: 8px
          width: @height
          right: 10px
          top: 50%
          background: $color-background-s
          transform: rotate(45deg) translateY(-74%)
        &:before
          right: 12px
          background: $color-assist-tr
          z-index: 100
        p
          color: rgba(255, 255, 255, .7)
          no-wrap()
          position: relative
          z-index: 200
          text-indent: 7px

  .add
    height: 30px
    line-height: 30px
    font-size: $font-size-small
    text-indent: 24px
    position: relative
    padding-right: 20px
    color: $color-text-d
    no-wrap()
    .nav_ico
      width 8px
      height 10px
      position: absolute
      top: 50%
      left: 12px
      transform: translateY(-50%)

  div
    background-color: $color-background-s

  .reg_red
    display: flex
    flex-direction: row
    justify-content: space-around
    color: $color-text-tr
    padding-top: $padding-all
    position: relative

    li
      width: 10%
      font-size: $font-size-small-s
      line-height: $font-size-medium
      position: relative
      text-align: center
      height: 63px
      no-wrap()
      p
        margin-bottom: 7px
        height: 33%
        position: relative
        z-index: 1100
        padding-top: 3.2%
      img
        width: 100%
        position: absolute
        bottom: 0
        left: 0
        z-index: 100
    .award
      position: absolute
      top: 0
      color: rgba(255, 255, 255, .6)
      background-size: cover
      width: 98%

  .reg_red:before
    content: ''
    position: absolute
    width: 83%
    top: 78.5%
    left: 30px
    background: url('./image/pic-xu_Line.png')
    height: 1px

  button
    width: 185px
    height: 54px
    line-height: 32px
    text-align center
    position: relative
    left: 50%
    transform: translateX(-50%)
    background-size cover
    background-position: top right
    margin-top: $padding-all
    color: rgba(255, 255, 255, .7)
    font-size: $font-size-medium

  .tip
    font-size: $font-size-small
    padding: $padding-all
    color: $color-text-d
    position: relative
    border-top: 1px solid $color-row-line
    margin-top: 6px
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
        background: $color-background-s
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
    .s-monall
      color: $color-white
      width: 100%
      position: absolute
      text-align: center
      font-size: $font-size-medium
      top: 50px
      background: rgba(0, 0, 0, 0)
      font-family: $font-family-light
      .s-mon
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
          left: 93px
    .s-monBo
      font-size: $font-size-small-s
      top: 101.5px
      padding-left: 14px
      .s-mon
        display: inline-block
        margin-right: 17px
        margin-top: 0px
        &:before
          left: -10px
          width: 8.8px
          height: 9.504px
    p
      line-height: 206px
      color: #E1452B
      text-align: center
    .money
      line-height: 124px
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
      background: $color-background-s
      position: absolute
      bottom: 0
      border-bottom-right-radius: 5px
      border-bottom-left-radius: 5px

      p
        width: 65.4%
        margin: 17px auto 1.8%
        line-height: 1.4
        color: $color-text-tr
      div
        height: 23%
        width: 92%
        display: flex
        align-items: center
        justify-content: center
        border-radius: 2px
      .share
        background: $color-assist-tr
        color: $color-red
        position: absolute
        bottom: 15px
        row-center()
        color: $color-text-transwhite

</style>
