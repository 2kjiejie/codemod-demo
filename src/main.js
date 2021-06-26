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
                value of the Custom Directives（like the test in the v-model:foo="test"）
            </p>
            <p>
                value:${binding.value}
            </p>
            <p>
                arguments of the Custom Directives（like the foo in the v-model:foo="test"）
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
      <button @click="count++">
        Clicked {{ count }} times
      </button>
      </div>
    `
})
