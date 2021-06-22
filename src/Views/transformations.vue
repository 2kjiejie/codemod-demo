<template>
  <div>
    <h1>script改动部分</h1>
    <add_emit_declaration></add_emit_declaration>
    <define_component></define_component>
    <global_filter></global_filter>
    <import_composition_pai_from_vue></import_composition_pai_from_vue>
  </div>
</template>

<script>
import add_emit_declaration from "@/components/add_emit_declaration";
import define_component from "@/components/define_component";
import global_filter from "@/components/global_filter";
import import_composition_api_from_vue from "@/components/import_composition_api_from_vue";
export default {
  name: "transformations",
  components:{
    add_emit_declaration,
    define_component,
    global_filter,
  }
}
</script>

<style scoped>

</style>