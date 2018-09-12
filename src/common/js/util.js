const REGPASS = /^[a-zA-Z0-9]{6,18}$/
const REGPHONE = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/

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
