<template>
  <div>
    <div id="container">
      <span class="peo" v-show="isshwocen" @click="newCenter(peo)"></span>
      <span class="hou" v-show="isshwocen" @click="newCenter(house)"></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import squareMethod from '../../common/js/square.js'
  export default {
    data() {
      return {
        address: '',
        map: null,
        markerClick: null,
        msg: new Object(),
        locList: new Array(),
        center: '',
        personal: new Object(),
        house: '',
        peo: '',
        isshwocen: 0

      }
    },
    created() {
    },
    activated() {
    },
    methods: {
      ...mapMutations({}),
//添加icon标记
      showIcon(arr) {
        this.isshwocen = 1
        let that = this
        for (let item of arr) {
          // console.log(item)
          this.marker = new AMap.Marker({ //添加自定义点标记
            map: this.map,
            position: [item.longitude, item.latitude], //基点位置
            offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
            draggable: false, //是否可拖动
            content: `<img src="${item.iconPath}" data-type="${item.id}" data-longitude="${item.longitude}"data-latitude="${item.latitude}"
              style="width: ${item.width};
              height: ${item.height}">`
            //自定义点标记覆盖物内容
          })
          this.marker.on('click', function () {
            let id = this.th.contentDom.children[0].getAttribute("data-type")
            let longitude = this.th.contentDom.children[0].getAttribute("data-longitude")
            let latitude = this.th.contentDom.children[0].getAttribute("data-latitude")
            if (id !== 0) {
              that.getShopMsg(id, latitude, longitude)
            }

          })
        }

      },
      getShopMsg(id, latitude, longitude){
        let that = this
        this.$AJAX.get(this.$store.state.baseUrl +
          'api/merchants/overlap-merchants', {
          params: {
            longitude: longitude,
            latitude: latitude,
            merchant_id: 100000
          }
        }).then((data) => {

          if (typeof(that.peo) !== 'string') {
            data.data.data.forEach((item, idx) => {
              let origin = this.peo.join(',')
              let destination = item.longitude + ',' + item.latitude
              this.$AJAX.get('https://restapi.amap.com/v3/direction/walking?key=ac0a6fd529c354c210281d98f04bb1cf', {
                params: {
                  origin: origin,
                  destination: destination
                }
              }).then((data) => {
//                距离
                let distance = data.data.route.paths[0].distance
                let timeSec = data.data.route.paths[0].duration
                let way, times
                if (timeSec / 60 >= 45) {
                  way = 1
                  this.$AJAX.get('https://restapi.amap.com/v3/direction/driving?key=ac0a6fd529c354c210281d98f04bb1cf', {
                    params: {
                      origin: origin,
                      destination: destination
                    }
                  }).then((data) => {
                    times = data.data.route.paths[0].duration / 60
                    Object.assign(item,
                      {distance: distance, way: way, times: times.toFixed(2),peo:origin})
                  })
                } else {
                  way = 0
                  times = timeSec / 60

                  Object.assign(item,
                    {distance: distance, way: way, times: times.toFixed(2),peo:origin})
                }

              })
            })
          }
          let res = data.data.data

          Object.assign(this.msg, {status: 1}, {data: res})
          console.log(this.msg)
          this.$store.dispatch('isshow', this.msg)

        })
      },
      getShopLoc(){
        let geolocation
        let that = this
        this.$AJAX.get(this.$store.state.baseUrl +
          'api/merchants/plaza-merchants', {
          params: {
            merchant_id: 100000
          }
        }).then((data) => {
          console.log(data)
          let res = data.data.data
//          去除重复范围内的图标
          for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res.length - i; j++) {
              if ((res[i].longitude >= res[j].longitude - 0.000200 &&
                res[i].longitude <= res[j].longitude + 0.000200) &&
                (res[i].latitude >= res[j].latitude - 0.000150 &&
                res[i].longitude <= res[j].longitude + 0.000150)) {
                res.splice(j, 1)
              }
            }
          }
//         整理生成地图展示所需数据
          for (let item of res) {
            let its = new squareMethod(item)
            if (its['current_merchant']) {
              this.house = [its.longitude, its.latitude]
              this.center = this.house
            }
            this.locList.push(its)

          }
//        使用地图方法
          this.map = new AMap.Map('container', {
            resizeEnable: true,
            center: this.center,
            zoom: 18
          })

          this.map.plugin('AMap.Geolocation', function () {
            geolocation = new AMap.Geolocation({
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              showButton: false,        //显示定位按钮，默认：true
              buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
              panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
              showMarker: false,       //定位成功后在定位到的位置显示点标记，默认：true


            })

            that.map.addControl(geolocation)

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError)      //返回定位出错信息
          })
          //解析定位结果
          function onComplete(data) {
            Object.assign(that.personal, {longitude: data.position.lng},
              {latitude: data.position.lat}, {height: '32px'}, {
                width: '10px'
              },
              {iconPath: './src/common/image/icon/icon-me.png'}, {id: 0})
            that.peo = [data.position.lng, data.position.lat]
            that.locList.push(that.personal)
            that.showIcon(that.locList)
            console.log('ok')
          }

          //解析定位错误信息
          function onError(data) {
            console.log('no')
//            location.reload()
            that.showIcon(that.locList)
          }


        })


      },
      newCenter(data){
        //更改中心点
        this.center = data
        this.map.setCenter(this.center)

      }
    },
    mounted() {

      this.getShopLoc()


    }
  }

</script>
<style>
  .peo, .hou {
    position: absolute;
    bottom: 30px;
    width: 30px;
    height: 30px;
    background: #000;
    right: 20px;
    z-index: 100;
  }

  .hou {
    background: red;
    bottom: 130px;
  }

</style>
