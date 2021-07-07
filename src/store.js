import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)
const store=new Vuex.Store({
    state(){
        return{
            message:'message from store.js'
        }
    }
})

export default store
