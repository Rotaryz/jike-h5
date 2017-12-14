<template>
  <div>
    <div id="container">
    </div>
    <div class="particulars">
      <div class="par_r">国颐堂（天河店）</div>
      <div class="par_l"><img src="./icon-navigation.png">导航</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        map: null
      }
    },
    mounted(){
      let goWay = ''
      if (this.$route.params.way === '0') {
        goWay = 'walking'
      } else if (this.$route.params.way === '1') {
        goWay = 'driving'
      }
      let map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 15,
        center: this.$route.params.origin.split(',')
      })
//      生成人标记

      let marker1 = new AMap.Marker({ //添加自定义点标记
        map: map,
        position: this.$route.params.origin.split(','), //基点位置
        offset: new AMap.Pixel(0, -20), //相对于基点的偏移位置
        draggable: false, //是否可拖动
        content: `<img src="./src/common/image/icon/icon-me.png" style="height: 30px;width: 8px">`
        //自定义点标记覆盖物内容
      })
      //      生成目的地标记

      let marker2 = new AMap.Marker({ //添加自定义点标记
        map: map,
        position: this.$route.params.destination.split(','), //基点位置
        offset: new AMap.Pixel(0, -20), //相对于基点的偏移位置
        draggable: false, //是否可拖动
        content: `<img src="./src/common/image/icon/icon-shop_normal.png" style="height: 28px;width: 32px">`
        //自定义点标记覆盖物内容
      })
//      请求规划路劲
      this.$AJAX.get('https://restapi.amap.com/v3/direction/' + goWay +
        '?key=ac0a6fd529c354c210281d98f04bb1cf', {
        params: {
          origin: this.$route.params.origin,
          destination: this.$route.params.destination
        }
      }).then((data) => {
        let res = data.data.route.paths[0].steps
        for (let item of res) {
          let lineArr = []
          let polylines = item.polyline.split(';')
          for (let pe of polylines) {

            lineArr.push(pe.split(','))
          }

          let polyline = new AMap.Polyline({
            path: lineArr,          //设置线覆盖物路径
            strokeColor: "#3366FF", //线颜色
            strokeOpacity: 1,       //线透明度
            strokeWeight: 5,        //线宽
            strokeStyle: "solid",   //线样式
            strokeDasharray: [10, 5] //补充线样式
          })
          polyline.setMap(map)
        }


      })


    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .particulars
    height: 64px
    line-height: 64px
    position: fixed
    width: 100%
    z-index: 1000
    bottom: 0
    background: $color-background-s
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.21)
    display: flex
    flex-direction: row
    .par_r
      flex: 4
      text-indent :$font-size-medium
    .par_l
      flex: 1
      position: relative
      text-align: center
      font-size: $font-size-small
      line-height:80px;
      &::before
        content: ''
        height: 100%
        width 1px
        background: $color-col-line
        position: absolute
        left: 0
      img
        position:absolute
        width:$font-size-small-s
        height:$font-size-small-s
        top: 18px
        left 50%
        margin-left:-(@height/2)
</style>
