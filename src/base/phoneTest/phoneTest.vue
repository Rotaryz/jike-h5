<template>
  <transition name="fade">
    <div class="phoneTest-phoneCover" v-show="phoneTestCover">
      <div class="phoneTest-phoneWindow">

        <div class="phoneTest-phoneWindow-head">
          <text class="phoneTest-phoneWindow-headTxt">绑定手机号</text>
          <div class="phoneTest-closeBtn" @click="closeCover">
            <img class="phoneTest-closeBtn-icon"
                 src="./image/icon-close_win.png"/>
          </div>
        </div>

        <text class="phoneTest-titleTxt">绑定手机号,获取更多红包、优惠券等信息</text>

        <div class="phoneTest-list">
          <div class="phoneTest-list-item">
            <img class="phoneTest-list-item-image"
                 src="./image/icon-phone.png"/>
            <input type="number" placeholder="输入手机号"
                   class="phoneTest-list-item-input" v-model="phoneNum"
                   @input="phoneNumIn"/>
          </div>

          <div class="phoneTest-list-item">
            <img class="phoneTest-list-item-image" src="./image/icon-code.png"/>
            <div class="phoneTest-list-codeBox">
              <input type="text" placeholder="验证码" v-model="phoneCode"
                     class="phoneTest-list-item-input" @input="phoneCodeIn"/>
              <div
                :class="phoneCodeDisabled?'phoneTest-list-code phoneTest-list-codeRed':'phoneTest-list-code'"
                @click="getPhoneCode">{{phoneCodeTime}}
              </div>
            </div>
          </div>
        </div>

        <div
          :class="{'phoneTest-submit':true ,
        'phoneTest-submit-disabled':!submitDisabled}" @click="submitMsg">
          确定
        </div>
      </div>
      <Toast ref="toast"></Toast>
    </div>
  </transition>
</template>

<script>
  /* eslint-disable no-undef */
  import Toast from 'base/toast/toast'
  import {getPhoneCode, bindPhone} from 'api/user'
  export default{
    components: {
      Toast
    },
    data(){
      return {
        phoneCodeTime: '获取验证码',
        phoneCodeDisabled: false,
        submitDisabled: true,
        phoneTestCover: false,
        phoneNum: '',
        phoneCode: '',
        modify: false
      }
    },
    watch: {
      phoneNum(val){
        if (val > 11) {
          this.phoneNum = val.slice(0, 11)
        } else {
          this.phoneNum = val
        }

      }
    },

    methods: {
      bindPhone(type) {
        if (typeof (type) === 'string') {
          this.modify = true
        } else {
          this.modify = false
        }
        this.phoneTestCover = true
      },
      closeCover() {
        this.phoneNum = 0
        this.phoneCode = 0
        this.submitDisabled = true
        this.phoneTestCover = false
      },
      phoneNumIn(e) {
//        this.phoneNum = e.detail.value
        var reg = /^1[3|4|5|7|8][0-9]{9}$/
        if (reg.test(this.phoneNum) && this.phoneCode.length === 6) {
          this.submitDisabled = false
        } else {
          this.submitDisabled = true
        }
      },
      phoneCodeIn(e) {
        var reg = /^1[3|4|5|7|8][0-9]{9}$/
        if (reg.test(this.phoneNum) && this.phoneCode.length === 6) {
          this.submitDisabled = false
        } else {
          this.submitDisabled = true
        }
      },
      getPhoneCode() {
        var reg = /^1[3|4|5|7|8][0-9]{9}$/
        var self = this
        if (reg.test(self.phoneNum) && !self.phoneCodeDisabled) {
          self.phoneCodeTime = '发送中···'
          let data = {
            mobile: self.phoneNum
          }
          getPhoneCode(data).then((res) => {
            this.$refs.toast.show(res.message)
          })
          this.phoneCodeDisabled = true
          let time = 60
          this.phoneCodeTime = time + 's'
          let timer = setInterval(() => {
            time--
            self.phoneCodeTime = time + 's'
            if (time <= 0) {
              self.phoneCodeTime = '获取验证码'
              self.phoneCodeDisabled = false
              clearInterval(timer)
            }
          }, 1000)
        } else {
          this.$refs.toast.show('请输入正确的手机号码')
        }
      },
      submitMsg() {
        let reg = /^1[3|4|5|7|8][0-9]{9}$/
        let self = this
        if (this.phoneNum && reg.test(self.phoneNum) && this.phoneCode && this.phoneCode.length === 6) {
          let data
          if (this.modify) {
            data = {
              mobile: self.phoneNum,
              code: self.phoneCode,
              is_modify: 1
            }
          } else {
            data = {
              mobile: self.phoneNum,
              code: self.phoneCode
            }
          }
          bindPhone(data).then((res) => {
            if (res.error === 0) {
              this.$refs.toast.show('手机绑定成功')
              setTimeout(() => {
                self.phoneTestCover = false
              }, 1500)
              localStorage.setItem('isBinding', '1')
            } else {
              this.$refs.toast.show(res.message)
            }

          })
        }
      },
      show() {
        this.phoneTestCover = true
      }
    }

  }
</script>

<style lang="stylus">
  @import "../../common/stylus/variable"
  input
    outline: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

  .phoneTest-phoneCover
    position: fixed
    z-index: 2000
    left: 0
    top: 0
    height: 100vh
    width: 100vw
    background: $color-mask-bgc
    &.fade-enter, &.fade-leave-to
      opacity: 0
    &.fade-enter-to, &.fade-leave-to
      transition: all .3s ease-in-out

  .phoneTest-phoneWindow
    position: fixed
    height: 222px
    width: 230px
    margin: auto
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: #fff
    border-radius: 4px
    padding: 10px

    .phoneTest-phoneWindow-head
      height: 20px
      display: flex
      flex-direction: row
      justify-content: space-between
      margin-bottom: 5.5px

      .phoneTest-phoneWindow-headTxt
        font-size: $font-size-medium
        color: $color-text
        line-height: 20px

      .phoneTest-closeBtn
        width: 20px
        height: 20px

        .phoneTest-closeBtn-icon
          width: 10px
          height: 10px
          margin: 5px

    .phoneTest-titleTxt
      font-size: $font-size-small-s
      color: #9B9B9B

    .phoneTest-list
      padding-top: 10px
      padding-left: 1.5px

      .phoneTest-list-item
        height: 27px
        border-bottom: 1px solid #D6D6D6
        display: flex
        flex-direction: row
        align-items: center
        margin-top: 20px

        .phoneTest-list-item-image
          width: 14px
          height: 17px
          margin-right: 10px

        .phoneTest-list-item-input
          font-size: $font-size-medium

        .phoneTest-list-item-placeh
          font-size: $font-size-small
          color: #9B9B9B

        .phoneTest-list-codeBox
          display: flex
          justify-content: space-between
          align-items: center

          .phoneTest-list-item-input
            width: 120px

          .phoneTest-list-code
            border-left: 1px solid #E6E6E6
            height: 16.5px
            width: 60px
            text-align: center
            padding-left: 5px
            line-height: 16.5px
            font-size: $font-size-small
            color: #C8C8C8
            margin-left: 13px
          .phoneTest-list-codeRed
            color: $color-text-t

    .phoneTest-submit
      width: 230px
      height: 40px
      opacity: 0.3
      background: $color-text-t
      border-radius: 2px
      text-align: center
      line-height: 40px
      font-size: $font-size-small
      color: #fff
      margin-top: 30px

    .phoneTest-submit-disabled
      opacity: 1

</style>
