<template>
  <div>
    <h1>JavaScript改动部分</h1>
    <add_emit_declaration></add_emit_declaration>
    <import_composition_api_from_vue></import_composition_api_from_vue>
    <new_directive_api></new_directive_api>
    <remove_set_and_delete></remove_set_and_delete>
    <rename_lifecycle></rename_lifecycle>
    <render_to_resolveComponent></render_to_resolveComponent>
  </div>
</template>

<script>
import add_emit_declaration from "@/components/add_emit_declaration";
import import_composition_api_from_vue from "@/components/import_composition_api_from_vue";
import new_directive_api from "@/components/new_directive_api";
import remove_set_and_delete from "@/components/remove_set_and_delete";
import rename_lifecycle from "@/components/rename_lifecycle";
import render_to_resolveComponent from "@/components/render_to_resolveComponent";

export default {
  name: "transformations",
  components:{
    import_composition_api_from_vue,
    add_emit_declaration,
    new_directive_api,
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