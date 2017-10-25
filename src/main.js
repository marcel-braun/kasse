// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import KeyPad from '@/components/keyPad/keyPad'
import "./global.css"

Vue.component('KeyPad', KeyPad)
Vue.config.productionTip = false

// Material UI
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)

// Material UI Theme
Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'indigo',
  warn: 'red',
  background: 'blue-grey'
})


// for auto update
import { checkUpdate } from '@/utils/update.js'
checkUpdate()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
