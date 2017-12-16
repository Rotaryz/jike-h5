<template>

</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .know-detail
    padding-left: 12px
    background-color: $color-white
    .header
      height: 39px
      line-height: 39px
      font-size: $font-size-medium
      color: $color-text-l
    .detail-wrapper
      padding: 7.5px 0
      .item-wrapper
        margin-bottom: 13px
        &:last-child
          margin-bottom: 0
        .title
          margin-bottom: 8.5px
          font-size: $font-size-small
          color: $color-text-t
        .content
          font-size: 0
          .circle
            display: inline-block
            vertical-align: middle
            width: 4.5px
            height: 4.5px
            margin-right: 5.25px
            border-radius: 50%
            background-color: $color-circle
          .value
            display: inline-block
            vertical-align: middle
            font-size: $font-size-small
</style>
