<template>
  <div>
    <h1>transformations in JavaScript</h1>
    <add_emit_declaration></add_emit_declaration>
    <import_composition_api_from_vue></import_composition_api_from_vue>
    <new_component_api></new_component_api>
    <new_directive_api></new_directive_api>
    <next_tick></next_tick>
    <remove_set_and_delete></remove_set_and_delete>
    <rename_lifecycle></rename_lifecycle>
  </div>
</template>

<script>
import add_emit_declaration from "@/components/add_emit_declaration";
import import_composition_api_from_vue from "@/components/import_composition_api_from_vue";
import new_component_api from "@/components/new_component_api";
import new_directive_api from "@/components/new_directive_api";
import next_tick from "@/components/next_tick";
import remove_set_and_delete from "@/components/remove_set_and_delete";
import rename_lifecycle from "@/components/rename_lifecycle";

export default {
  name: "transformations",
  components:{
    import_composition_api_from_vue,
    add_emit_declaration,
    new_component_api,
    new_directive_api,
    next_tick,
    remove_set_and_delete,
    rename_lifecycle,
  }
}
</script>

<style scoped>
.scopedSlot {
  background: antiquewhite;
  width: 200px;
}
</style>
