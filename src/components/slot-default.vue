<template>
  <div>
    <div>
      <h1>slot-default</h1>
      <h2>2.x Syntax</h2>
      <p>After vue 2.6, we can add contents outside the <code>template</code> with <code>v-slot</code>.</p>
      <h2>3.x Syntax</h2>
      <p>In 3.x, it will be an error if there is content outside the <code>template</code> with <code>v-slot</code>.</p>
      <h2>Migration Strategy</h2>
      <p>We need to delete the contents outside the <code>template</code> with <code>v-slot</code></p>
      <h2>Example</h2>
      <p>These contents should remain unchanged after transformation</p>
    </div>
    <base-layout>
      <p>Need to be deleted in vue3</p>
      <p>Need to be deleted  in vue3</p>
      <h3>Need to be deleted  in vue3</h3>
      <div class="hello">
        <p>Need to be deleted  in vue3</p>
      </div>
      <template v-slot:default>
        <p>default A paragraph for the main content.</p>
        <p>default And another one.</p>
      </template>
    </base-layout>
  </div>
</template>


<script>
import baseLayout from "./base-layout";

export default {
  name: "slot-default",
  components: {
    baseLayout
  }
}
</script>

<style scoped>
.hello {
  background: aqua;
  width: 100px;
}
</style>
