<template>
<div>
  <h1>remove-listeners</h1>
  <h2>2.x Syntax</h2>
  <p>
    In Vue 2, you can access attributes passed to your components with <code>this.$attrs</code>, and event listeners with <code>this.$listeners</code> .
  </p>
  <h2>3.x Syntax</h2>
  <p>In Vue 3's virtual DOM, event listeners are now just attributes, prefixed with on, and as such are part of the <code>$attrs</code> object, so <code>$listeners</code> has been removed.</p>
  <h2>Migration Strategy</h2>
  <p>We need to get rid of <code>$listeners</code> in Vue3.</p>
  <h2>Example</h2>
  <p>
    In this example, we use <code>$listeners</code> to bind a <code>v-on</code> event. All the functions should remain unchanged after transformation.
  </p>
  <div>
    <remove-listener-child @click="add" :id="counter"></remove-listener-child>
  </div>
</div>
</template>

<script>
import RemoveListenerChild from "./remove-listener-child";
export default {
  name: "remove-listener",
  components: {RemoveListenerChild},
  methods: {
     add() {
       this.counter++
     }
  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped>

</style>