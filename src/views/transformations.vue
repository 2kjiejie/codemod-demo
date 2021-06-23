<template>
  <div>
    <h1>script改动部分</h1>
    <add_emit_declaration></add_emit_declaration>
    <define_component></define_component>
    <global_filter></global_filter>
    <import_composition_api_from_vue></import_composition_api_from_vue>
    <new_directive_api></new_directive_api>
    <remove_contextual_h_from_render></remove_contextual_h_from_render>
    <remove_set_and_delete></remove_set_and_delete>
    <rename_lifecycle></rename_lifecycle>
    <render_to_resolveComponent></render_to_resolveComponent>




    <h1>scoped-slots-to-slots</h1>
    <scoped-slots-to-slots :level="1" class="scopedSlot">Hello</scoped-slots-to-slots>
    <v-model></v-model>
    <vue-class-component></vue-class-component>
  </div>
</template>

<script>
import add_emit_declaration from "@/components/add_emit_declaration";
import define_component from "@/components/define_component";
import global_filter from "@/components/global_filter";
import import_composition_api_from_vue from "@/components/import_composition_api_from_vue";
import new_directive_api from "@/components/new_directive_api";
import remove_contextual_h_from_render from "@/components/remove_contextual_h_from_render";
import remove_set_and_delete from "@/components/remove_set_and_delete";
import rename_lifecycle from "@/components/rename_lifecycle";
import render_to_resolveComponent from "@/components/render_to_resolveComponent";


import ScopedSlotsToSlots from "../components/scoped-slots-to-slots";
import VModel from "../components/v-model";
import VueClassComponent from "../components/vue-class-component";

export default {
  name: "transformations",
  components:{
    ScopedSlotsToSlots,
    VModel,
    VueClassComponent,
    import_composition_api_from_vue,
    add_emit_declaration,
    define_component,
    global_filter,
    new_directive_api,
    remove_contextual_h_from_render,
    remove_set_and_delete,
    rename_lifecycle,
    render_to_resolveComponent
  }
}
</script>

<style scoped>
.scopedSlot {
  background: antiquewhite;
  width: 200px;
}
</style>