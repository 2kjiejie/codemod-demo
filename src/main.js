import Vue from "vue";
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//used by new_directive_api
Vue.directive('demo',{
  bind:function (el,binding,vnode){
    var s=JSON.stringify()
    el.innerHTML=`
      name:${binding.name} <br>
      value:${binding.value} <br>
      expression:${binding.expression} <br>
      argument:${binding.arg} <br>
    `
  }
})

//used by render_to_resolveComponent
Vue.component('button_counter',{
  name:'button_counter',
  data(){
    return{
      count:0
    }
  },
  template:`
    <div>
      <h1>render to resoleComponent</h1>
      <button @click="count++">
        Clicked {{count}} times
      </button>
    </div>
  `
})
