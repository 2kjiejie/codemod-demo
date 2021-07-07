import Vue from 'vue'
import VueRouter from "vue-router";
import transformations from "@/views/transformations";
import vueTransformation from '@/views/vue-transformation'
import hello from "@/views/hello";
import add_emit_declaration from "@/components/add_emit_declaration";
import import_composition_api_from_vue from "@/components/import_composition_api_from_vue";
import new_component_api from "@/components/new_component_api";
import new_directive_api from "@/components/new_directive_api";
import next_tick from "@/components/next_tick";
import remove_set_and_delete from "@/components/remove_set_and_delete";
import rename_lifecycle from "@/components/rename_lifecycle";

import vForVIfPrecedenceChange from "@/components/v-for-v-if-precedence-change";
import vBindOrderSensitive from "@/components/v-bind-order-sensitive";
import vElseIfKey from  "@/components/v-else-if-key"
import transitionGroupRoot from "@/components/transition-group-root";
import vForTemplateKey from "@/components/v-for-template-key"
import slotScopeAttribute from "@/components/slot-scope-attribute-parent";
import slotAttribute from '@/components/slot-attribute';
import slotDefault from  '@/components/slot-default';
import RemoveVOnNative from "../components/remove-v-on-native";
import RemoveListener from '../components/remove-listener.vue';

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
        path:'/add_emit_declaration',
        name:'add_emit_declaration',
        component:add_emit_declaration,
        props:true
    },
    {
        path:'/import_composition_api_from_vue',
        name:'import_composition_api_from_vue',
        component:import_composition_api_from_vue,
        props:true
    },
    {
        path:'/button_counter',
        name:'new_component_api',
        component:new_component_api,
        props:true
    },
    {
        path:'/new_directive_api',
        name:'new_directive_api',
        component:new_directive_api,
        props:true
    },
    {
        path:'/next_tick',
        name:'next_tick',
        component:next_tick,
        props:true
    },
    {
        path:'/remove_set_and_delete',
        name:'remove_set_and_delete',
        component:remove_set_and_delete,
        props:true
    },
    {
        path:'/rename_lifecycle',
        name:'rename_lifecycle',
        component:rename_lifecycle,
        props:true
    },
    //scoped-slots-to-slots
    {
        path:'/vue-transformation',
        name:'vue-transformation',
        component: vueTransformation,
        props:true
    },
    {
        path:'/v-for-v-if-precedence-change',
        name:'v-for-v-if-precedence-change',
        component:vForVIfPrecedenceChange,
        props:true
    },
    {
        path:'/v-bind-order-sensitive',
        name:'v-bind-order-sensitive',
        component:vBindOrderSensitive,
        props:true
    },
    {
        path:'/v-else-if-key',
        name:'v-else-if-key',
        component:vElseIfKey,
        props:true
    },
    {
        path:'/transition-group-root',
        name:'transition-group-root',
        component:transitionGroupRoot,
        props:true
    },
    {
        path:'/v-for-template-key',
        name:'v-for-template-key',
        component:vForTemplateKey,
        props:true
    },
    {
        path:'/slot-scope-attribute',
        name:'slot-scope-attribute',
        component:slotScopeAttribute,
        props:true
    },
    {
        path:'/slot-attribute',
        name:'slot-attribute',
        component:slotAttribute,
        props:true
    },
    {
        path:'/slot-default',
        name:'slot-default',
        component:slotDefault,
        props:true
    },
    {
        path:'/remove-v-on-native',
        name:'remove-v-on-native',
        component: RemoveVOnNative,
        props: true
    },
    {
        path:'/remove-listeners',
        name:'remove-listeners',
        component: RemoveListener,
        props: true
    }
]

const router=new VueRouter({
    routes,
    mode:'history',
})

export default router
