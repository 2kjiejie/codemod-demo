import Vue from 'vue'
import VueRouter from "vue-router";
import transformations from "@/views/transformations";
import vueTransformation from '@/views/vue-transformation'
import hello from "@/views/hello";

Vue.use(VueRouter)
const routes=[
    {
      path: '/',
      name:'home',
      component: hello,
      props: true
    },
    {
        path:'/transformations',
        name:'transformations',
        component:transformations,
        props:true
    },
    {
        path:'/vue-transformation',
        name:'vue-transformation',
        component: vueTransformation,
        props:true
    }
]

const router=new VueRouter({
    routes,
    mode:'history',
})

export default router