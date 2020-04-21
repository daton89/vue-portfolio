import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('./assets/images/spinner.svg')
})

new Vue({
  render: h => h(App)
}).$mount('#app')

// Add Blix Widget
const blixWidget = document.getElementById('widget-1') as HTMLScriptElement
if (blixWidget) {
  blixWidget.src = `https://wgh.onblix.com/resource/widget_helper.js?widget_id=azqiceOaRbsgVuatXMrh&redirect_uri_ext=${window.location.href}`
}
