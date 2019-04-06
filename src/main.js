import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
//export const eventEmitter = new Vue();

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
