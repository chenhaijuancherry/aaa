// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Elementui from 'element-ui'
import axios from 'axios'
import querystring from 'querystring'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import vuex from 'vuex'

axios.defaults.method='get'
axios.defaults.baseURL='http://localhost:8888'
Vue.prototype.$ajax=axios
Vue.prototype.$query=querystring
Vue.config.productionTip = false
Vue.use(Elementui)
/* eslint-disable no-new */
new Vue({//这里面的全是vue它自身的属性
  el: '#app',
  router,
  store,
  components:{App},
  template: '<App/>'
})
