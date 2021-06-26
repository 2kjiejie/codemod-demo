<template>
  <div>
    <div>
      <h1>slot-attribute</h1>
      <h2>2.x Syntax</h2>
      <p>In 2.x, to pass content to named slots from the parent, we use the special <code>slot</code> attribute on <code>template</code></p>
      <h2>3.x Syntax</h2>
      <p>In 3.x, we can use <code>v-slot</code> directly on the <code>template</code> to provide the name of the <code>slot</code> as v-slot‘s argument.</p>
      <h2>Migration Strategy</h2>
      <p>We can replace the <code>slot</code> attribute with a template tag with <code>v-slot</code>.</p>
      <h2>Example</h2>
      <p>If the transformation fails, the content will be changed.</p>
    </div>
    <div title="If the transformation fails, the content will be changed.">
      <base-layout class="slotAttr">
        <p slot="title">title-content</p>
      </base-layout>
    </div>
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
.slotAttr {
  font-size: 40px;
  background-color: beige;
  width: 300px;
}
</style>
