<template>
  <div>
    <h1>slot-default</h1>
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
  comments: {
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
