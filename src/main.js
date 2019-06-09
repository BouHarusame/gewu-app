// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import Mui from 'vue-awesome-mui'
import App from './App'
import router from './router'
import { post, fetch, patch, put } from './utils/http'
import './utils/appback.js'
import './mock/mock'
import './utils/rem.js'
import './assets/css/font-awesome.min.css'
import './styles/index.styl'

Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.config.productionTip = false
Vue.use(MintUI)
// Vue.use(Mui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
