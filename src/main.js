// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroll from 'vue-scroller'
Vue.config.productionTip = false
Vue.use(VueScroll)
import './assets/css/reset.css'
import './assets/js/fontsize'
import './assets/iconfont-alipay/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
