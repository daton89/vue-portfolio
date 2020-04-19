import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueLazyload)

new Vue({
  render: h => h(App)
}).$mount('#app')
