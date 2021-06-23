import Vue from "../node_modules/vue/dist/vue.js";
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

