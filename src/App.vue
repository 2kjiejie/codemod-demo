<template>
  <div>
    <div>HelloWorld!</div>
    <transformations></transformations>
  </div>

</template>

<script>
import transformations from "@/views/transformations";
export default {
  name: 'App',
  components: {
    transformations
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
