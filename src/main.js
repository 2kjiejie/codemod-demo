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
Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        // var s=JSON.stringify()
        el.innerHTML = `
            <p>
                自定义指令绑定值（例如v-model:foo="test"中的test）
            </p>
            <p>
                value:${binding.value}
            </p>
            <p>
                自定义指令的参数（例如v-model:foo中的foo）
            </p>
            <p>
                argument:${binding.arg}
            </p>
    `
    }
})

//used by render_to_resolveComponent
Vue.component('button_counter', {
    name: 'button_counter',
    data() {
        return {
            count: 0
        }
    },
    template: `
      <div>
      <h1>render to resoleComponent</h1>
      <button @click="count++">
        Clicked {{ count }} times
      </button>
      </div>
    `
})
