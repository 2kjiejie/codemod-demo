import Vue from "../node_modules/vue/dist/vue.js";
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

