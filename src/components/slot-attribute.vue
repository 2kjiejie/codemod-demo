<template>
  <div>
    <h1>slot-default</h1>
    <base-layout>
      <template v-slot:title>title-content</template>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from "./base-layout";

export default {
  name: "slot-attribute",
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