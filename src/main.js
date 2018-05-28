import 'babel-polyfill'
import 'common/js/hack'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
// import store from './store'
import {initAxios} from 'common/js/config'
import 'common/stylus/index.styl'
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

initAxios()

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: ''
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
