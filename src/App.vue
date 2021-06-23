<template>
  <div>
    <div>HelloWorld!</div>
    <transformations></transformations>
    <br>
    <hr>
    <br>
    <vue-transformation></vue-transformation>
  </div>

</template>

<script>
import transformations from "@/views/transformations";
import vueTransformation from "./views/vue-transformation"

export default {
  name: 'App',
  components: {
    transformations,
    vueTransformation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
