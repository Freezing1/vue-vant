import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/reset.css'
import './assets/css/common.css'

import Dialog from './components/dialog'
import Loading from './components/loading'
import toast from './components/toast'

import './JS/plugin'
import './JS/FastClick'
import './JS/vconsole'
import utils from './JS/utils'
import filters from './filters'
import VueScroller from 'vue-scroller'
import { get, post } from './JS/ajax'
import { Button, Grid, GridItem, Field, Cell, CellGroup, RadioGroup, Radio} from 'vant'

import './assets/icons' // icon


Vue.use(VueScroller)
Vue.use(utils)
Vue.use(Button).use(Grid).use(GridItem).use(Field).use(Cell).use(CellGroup).use(RadioGroup).use(Radio)

// this.util.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
Vue.prototype.$toast = toast
Vue.prototype.$http = { get, post }

Vue.config.productionTip = false



export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
