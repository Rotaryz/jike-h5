<template>
  <div class="post-order" @click="hide()" v-if="show">
    <div class="modal border-top-1px" :class="{post:show}" @click.stop="">
      <div class="form-wrapper border-bottom-1px">
        <div class="label-control border-bottom-1px">
          <div class="label">{{title}}</div>
          <div class="content">{{price}}元</div>
        </div>
        <div class="label-control border-bottom-1px">
          <div class="label">数量</div>
          <div class="content">
            <div class="number-control">
              <div class="desc" @click.stop="descCount()">-</div>
              <div class="number">{{count}}</div>
              <div class="add" @click.stop="addCount()">+</div>
            </div>
          </div>
        </div>
        <div class="label-control">
          <div class="label">小计</div>
          <div class="content">{{total}}元</div>
        </div>
      </div>
      <div class="price-wrapper border-top-1px border-bottom-1px">
        <div class="content">
          <div class="label">订单总价</div>
          <div class="price">
            <div class="number">{{total}}</div>
            <div class="yuan">元</div>
          </div>
        </div>
      </div>
      <div class="post-btn"  @click.stop="postOrder">
        提交订单
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(1)
    },
    data() {
      return {
        show: false,
        count: 1,
        total: 0,
        title: '',
        price: '1.00',
        stock: 4
      }
    },
    methods: {
      shows (obj) {
        this.show = true
        if (obj) {
          this.show = true
          this.title = obj.name
          this.price = obj.price
          this.stock = obj.stock
          this.total = (this.count * this.price).toFixed(2)
        }
      },
      hide () {
        this.show = false
      },
      addCount() {
        if (this.stock > 0) {
          if (this.count < this.stock) {
            this.count += 1
          }
        }
        this.total = (this.count * this.price).toFixed(2)
      },
      descCount() {
        if (this.count <= 1) {
          this.count = 1
        } else {
          this.count -= 1
        }
        this.total = (this.count * this.price).toFixed(2)
      },
      postOrder() {
        wx.miniProgram.postMessage({ data: {foo: 'bar'} })
        wx.miniProgram.navigateTo({url: '/pages/transfer/transfer'})
      }
    }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable'
  @import '../../common/stylus/mixin'

  .post-order
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: hidden
    z-index: 1000
    background-color: $color-mask-bgc
    .modal
      position: fixed
      height: 0px
      bottom: 0
      left: 0
      width: 100%
      overflow: hidden
      z-index: 1
      background: $color-background
      transition: all .5s
      .form-wrapper
        background: $color-white
        margin-bottom: 10px
        padding-left: 12px
        .label-control
          display: flex
          align-items: center
          justify-content: space-between
          height: 39px
          padding-right: 12px
          .label
            font-size: $font-size-medium
          .content
            font-size: $font-size-medium
            color: $color-text-t
            .number-control
              display: flex
              height: 22px
              .desc
                width: 22px
                height: 22px
                text-align: center
                line-height: 22px
                border-1px($color-col-line, 2px)
                color: $color-button
              .number
                width: 48px
                height: 22px
                margin: 0 2.5px
                text-align: center
                line-height: 22px
                border-1px($color-col-line, 2px)
                color: $color-text
              .add
                width: 22px
                height: 22px
                text-align: center
                line-height: 22px
                border-radius: 2px
                border-1px($color-button, 2px)
                color: $color-white
                background-color: #706b82
      .price-wrapper
        padding-left: 12px
        background-color: $color-white
        .content
          display: flex
          align-items: center
          justify-content: space-between
          height: 42px
          padding-right: 12px
          .label
            font-size: $font-size-medium
          .price
            color: $color-text-t
            display: flex
            align-items: center
            .number
              font-size: $font-size-large
            .yuan
              font-size: $font-size-small-s
          .content-right
            display: flex
            align-items: center
            height: 42px
            .content-right-txt
              font-size: $font-size-medium
              color: #A1A1A1
            .content-right-txt-user
              color: $color-text
              font-family: $font-family-meddle
              .content-right-money
                margin-bottom: -1px
                font-size: $font-size-small-s
                font-family: $font-family-regular
              .content-right-title
                margin-bottom: -1px
                font-family: $font-family-regular
            .content-right-icon
              width: 7px
              height: 12px
              margin-left: 3.7px
      .post-btn
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 44px
        line-height: 44px
        text-align: center
        font-size: $font-size-medium
        color: $color-white
        background-color: #3460EC
    .post
      height: 250px
      transition: all .5s
</style>
