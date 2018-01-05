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
  args = {
    token: '692644deaa855546031338573fe0ecaf930184deaa855546031338573fe0ecaf93018395275dd659df928a859a57e292de5f721300',
    merchantId: 100000
  }
  return args
}
