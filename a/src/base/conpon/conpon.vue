<template>
  <div class="sws">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="con_ri">
          <div class="con_title">20<span>元</span></div>
          <p class="cou_subhead">满200元使用</p>
          <p class="client client_b"></p>
          <p class="client client_t"></p>
        </div>
        <div class="con_le">
          <p class="con_title">养发项目优惠券</p>
          <p class="cou_subhead">限国颐堂（天河店）使用</p>
          <p class="cou_subhead">有效期：2017.11.11-2018.01.20</p>
          <div class="con_side">
            <p class="con_title con_t1">抢</p>
            <p class="con_title">购</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
    swiper,
    swiperSlide
  }
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"
	.sws
		background-color: #fff
	.swiper-container
		background-color: #fff
		width:85% !important
		overflow: visible
	.swiper-slide
		width:90% !important
		height:90px !important
		display:flex
		background-color: #fff
		margin:$font-size-small-s 18px $font-size-small-s 13px
	.con_title
		color:$color-theme-s
		font-family: PingFangSC-Medium
		no-wrap()
	.cou_subhead
		font-size:$font-size-small-s
		color:$color-theme-title
		no-wrap()
	.con_ri
		padding:17px 18px
		border-left:4px solid $color-theme-s
		border-top-left-radius: 3px
		border-bottom-left-radius: 3px
		margin-left:($font-size-title + 2)
		border-top:1px solid $color-border-s
		border-bottom:1px solid $color-border-s
		border-right:1px dashed $color-border-s
		position:relative
		.client
			position:absolute
			width:$font-size-large
			height:($font-size-large / 2)
			right: -( $font-size-large / 2)
			z-index:100
			background-color:#fff
		.client_b
			border-right: 1px solid $color-border-s
			border-left: 1px solid $color-border-s
			border-top: 1px solid $color-border-s
			border-top-right-radius: $font-size-large
			border-top-left-radius: $font-size-large
			bottom: -1px
		.client_t
			border-top: none
			border-bottom: 1px solid $color-border-s
			border-bottom-right-radius: $font-size-large
			border-bottom-left-radius: $font-size-large
			border-bottom-right-radius: $font-size-large
			border-bottom-left-radius: $font-size-large
			top: -1px
		.con_title
			font-size:($font-size-medium-x * 2)
			span
				font-size:$font-size-medium
				font-family:PingFangSC-Light
	.con_le
		padding:14px 9px
		width:210px
		border:1px solid $color-border-s
		border-left:none
		border-right:none
		position:relative
		text
			display:block
		.con_title
			font-size: ($font-size-small-s * 2)
			line-height: ($font-size-small-s * 3)
			border-bottom: 1px solid #DFDFDF
			margin-bottom:5px
			font-family: PingFangSC-Medium
		.cou_subhead
			line-height:$font-size-title
		.con_side
			position:absolute
			background-color: $color-theme-s
			height:101%
			right:-5px
			bottom:0px
			width:30px
			line-height:45px
			border-top-right-radius: 5px
			border-bottom-right-radius: 5px
			.con_title
				font-size: $font-size-small
				color:#fff
				text-align: center
				border-bottom:none
				line-height: ($font-size-small-s * 2)
			.con_t1
				margin-top:23px

</style>
