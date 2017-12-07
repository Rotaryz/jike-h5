<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'
import squareMethod from '../../common/js/square.js'
export default {
  data() {
    return {
      address: '',
      map: null,
      markerClick: null
    }
  },
  created() {},
  activated() {},
  methods: {
    ...mapMutations({}),
    showIcon(arr) {
      var that = this
      for (var item of arr) {
        // console.log(item)
        this.marker = new AMap.Marker({ //添加自定义点标记
          map: this.map,
          position: item.address, //基点位置
          offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
          draggable: false, //是否可拖动
          content: `<div class="marker-route marker-marker-bus-from" data-type="${item.id}"></div>` //自定义点标记覆盖物内容
        })
        this.marker.on('click', function() {
          var id = this.th.contentDom.children[0].getAttribute("data-type")
          that.$store.commit('ISSHOW',1)
           // that.$store.dispatch('isshow');
          // that.$emit('showIn', id)
        })
      }
    }
  },
  mounted() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      center: [113.264544, 23.123877],
      zoom: 17
    })

    var oo = [{
        id: 1,
        address: [113.264544, 23.123877]
      },
      {
        id: 2,
        address: [113.265544, 23.123977]
      }
    ]
    this.showIcon(oo)


  }
}

</script>
<style>
.amap-marker .marker-route {
  position: absolute;
  width: 40px;
  height: 44px;
  color: #e90000;
  background: url(http://webapi.amap.com/theme/v1.3/images/newpc/poi-1.png) no-repeat;
  cursor: pointer;
}

.amap-marker .marker-marker-bus-from {
  background-position: -334px -180px;
}

</style>
