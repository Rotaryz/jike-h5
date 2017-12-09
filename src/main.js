import 'babel-polyfill'
import 'common/js/hack'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
import 'swiper/dist/css/swiper.css'


import 'common/stylus/index.styl'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.prototype.$AJAX = Axios;
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
	loading: ''
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
