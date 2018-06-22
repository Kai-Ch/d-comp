// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
// import '../static/style/style.css'

Vue.config.productionTip = false

//全局使用vuex
Vue.use(Vuex)

axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
