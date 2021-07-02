<template>
  <div>
    <h1>new component api</h1>
    <div>
      <h2>2.x Syntax</h2>
      <p>we can use the <code>Vue.component('mycomponent',{})</code> to register a new component .</p>
      <h2>3.x Syntax</h2>
      <p>In 3.x, it will be an error if there is a global-api used by Vue.</p>
      <p>You has to use <code>const app=Vue.create({App})</code> and <code>app.component('mycomponent',{})</code></p>
    </div>
    <div style="border: solid 1px blue;margin-bottom: 100px;">
      <h1>Example</h1>
      <button_counter></button_counter>
    </div>
  </div>
</template>

<script>
export default {
  name: "new_component_api"
}
</script>

<style scoped>

</style>
