<template>
  <div>
    <h2>remove contextual h from render</h2>
    <render_demo></render_demo>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component('render_demo',{
  render(h) {
    return h('div',["hello from render"])
  }
})

export default {
  name: "remove_contextual_h_from_render",

}
</script>

<style scoped>

</style>