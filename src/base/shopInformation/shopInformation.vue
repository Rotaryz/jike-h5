<!-- 店铺信息半窗 -->
<template>
  <div class="shop-info">
    <!-- 地址 -->
    <div class="add">
      <img class="nav_ico" src="./image/Group9.png"></img>
      <p class="add_msg">广东省广州市白云区黄石街道国际单位A3白云科技...</p>
    </div>
    <!-- 店铺详情 -->
    <div class="shop_con">
      <div class="shop-item">
        <div class="shop_head">
          <div class="shop_title">
            <p class="shop_name">国颐堂（天河店）</p>
            <p class="shop_type">养发护发品牌</p>
          </div>
          <div class="shop_logo">
            <img src="./image/icon-shop_bg.png" class="house"></img>
            <div class="shop_ico">
            </div>
          </div>
          <div class="shop_eva">
            <p class="shop_dis">5454人已收藏</p>
            <p class="shop_start">评分4.8</p>
          </div>
        </div>
        <div class="shop_nav">
          <div class="shop_nav_ti">
            <p ><img class="icos" src="./image/icon-distance.png"></img>距离<span class="nav_ti">1520</span>米</p>
          </div>
          <div class="shop_nav_ti">
            <p><img class="icos" src="./image/icon-walk.png"></img>步行<span class="nav_ti">10</span>分钟</p>
          </div>
          <div class="shop_nav_ti">
            <p><img class="icos" src="./image/icon-navigation_1.png"></img>开始导航</p>
          </div>
          <div class="shop_nav_ti">
            <p><img class="icos" src="./image/icon-call_1.png"></img>打电话</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
	import {mapMutations} from 'vuex'
	export default {
   		data() {
   			return {

   			}
   		},
   		components: {
		}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"
	.shop-item
		margin-top: $font-size-small-s
		background-color: $color-background-s
	.add
		height: 40px
		background-color: $color-add-background
		line-height: 40px
		font-size: $font-size-medium
		text-indent: 24px
		position: relative
		padding-right:20px
		no-wrap()
		.nav_ico
			width 8px
			height 10px
			position:absolute
			top:50%
			left: 12px
			transform:translateY(-50%)
	.shop_head
		display:flex
		padding:17px 12px 
		div
			flex:1
		.shop_title
			display:flex
			flex-direction:column
			.shop_name
				no-wrap()
				font-size:$font-size-medium-x
				line-height:23px
			.shop_type
				font-size:$font-size-small-s
				line-height:$font-size-medium
		.shop_logo
			text-align: center
			position:relative
			.house
				height:50px
				width:70px
			.shop_ico
				height:41px
				width:41px
				border-radius:50%
				border: 1px solid #696671
				box-shadow: 0 0 4px 0 rgba(0,0,0,0.03)
				position:absolute
				right:3px
				top:2px
				z-index:10
				background-color:#fff
		.shop_eva
			display:flex
			flex-direction:column
			padding-left:17px
			.shop_dis
				font-size:$font-size-small
				line-height:17px
				color:$color-font1
			.shop_start
				font-size:$font-size-small-s
				line-height:$font-size-medium
				color:$color-font1
				no-wrap()
	.shop_nav
		display:flex
		border-top:1px solid #F1EFF5
		border-bottom:1px solid #F1EFF5
		
		p
			position: relative
			display:inline
			text-align: center
		.shop_nav_ti
			flex:1
			font-size:$font-size-small-s
			line-height:($font-size-small-s * 4)
			color:$color-font1
			border-right:1px solid #F1EFF5
			text-indent:2em
			
			.nav_ti
				font-size:$font-size-small
				color:$color-theme-s
				font-weight:600
			.icos
				position:absolute
				width ($font-size-large / 2)
				height ($font-size-large / 2)
				left:-14px
				top: 50%
				transform: translateY(-50%)
			
				
				
	
</style>