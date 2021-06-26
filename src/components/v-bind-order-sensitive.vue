<template>
<div>
  <h1>v-bind-order-sensitive</h1>
  <h2>2.x Syntax</h2>
  <p>In 2.x, if an element has both <code>v-bind="object"</code> and an identical individual property defined, the individual property would always overwrite bindings in the object.</p>
  <h2>3.x Syntax</h2>
  <p>In 3x, if an element has both <code>v-bind="object"</code> and an identical individual property defined, the order of how the bindings are declared determines how they are merged. In other words, rather than assuming developers want the individual property to always override what is defined in the object, developers now have more control over the desired merging behavior.</p>
  <h2>Migration Strategy</h2>
  <p>If you are relying on this override functionality for <code>v-bind</code>, we currently recommend ensuring that your <code>v-bind</code> attribute is defined before individual properties.</p>
  <h2>Example</h2>
  <p>If the transformation fails, the background color would be changed. (It is red before transformation.)</p>
  <div class='red' :class="color" title="If the transformation fails, the background color would be changed.">
    <h2>v-bind-order-sensitive</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: "v-bind-order-sensitive",
  data() {
    return {
      color: 'box'
    }
  }
}
</script>

<style scoped>
.box {
  background: bisque;
  width: 400px;
  font-size: 30px;
}
.red {
  background: red;
  width: 600px;
  text-align: center;
}
</style>
