import Vue from "vue";
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import "./components/js_of_new_component_api"

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


