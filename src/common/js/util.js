const REGPASS = /^[a-zA-Z0-9]{6,18}$/
const REGPHONE = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/

function onBridgeReady(params) {
  const {appId, timeStamp, nonceStr, packAge, signType, paySign} = params
  const {WeixinJSBridge} = require('./wx')
  return new Promise((resolve, reject) => {
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        appId,
        timeStamp,
        nonceStr,
        'package': packAge,
        signType,
        paySign
      },
      function (res) {
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          resolve()
        } else {
          reject()
        }
      })
  })
  // WeixinJSBridge.invoke(
  //   'getBrandWCPayRequest', {
  //     'appId': 'wx2421b1c4370ec43b',     // 公众号名称，由商户传入
  //     'timeStamp': '1395712654',         // 时间戳，自1970年以来的秒数
  //     'nonceStr': 'e61463f8efa94090b1f366cccfbbb444', // 随机串
  //     'package': 'prepay_id=u802345jgfjsdfgsdg888',
  //     'signType': 'MD5',         // 微信签名方式：
  //     'paySign': '70EA570631E4BB79628FBCA90534C63FF7FADD89' // 微信签名
  //   },
  //   function (res) {
  //     if (res.err_msg === 'get_brand_wcpay_request:ok') {
  //       // 使用以上方式判断前端返回,微信团队郑重提示：
  //       // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
  //     }
  //   })
}

export function f() {
  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
  }
}

export function checkIsPhoneNumber(phoneNum) {
  return REGPHONE.test(phoneNum)
}

export function checkPassWord(password) {
  return REGPASS.test(password)
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function getSearch() {
  var args = {}
  var query = location.search.substring(1)
  var pairs = query.split('&')
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    var name = pairs[i].substring(0, pos)
    var value = pairs[i].substring(pos + 1)
    args[name] = value
  }
  return args
}

