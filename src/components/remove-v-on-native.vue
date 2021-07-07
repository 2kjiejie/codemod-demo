<template>
  <div>
    <div>
      <h1>remove-v-on-native</h1>
      <h2>2.x Syntax</h2>
      <p>
        Event listeners passed to a component with <code> v-on </code> are by default only triggered by emitting an event with <code> this.$emit </code> .
        To add a native DOM listener to the child component's root element instead, the <code>.native</code> modifier can be used.
      </p>
      <h2>3.x Syntax</h2>
      <p>The <code>.native</code>  modifier for v-on has been removed. At the same time, the new emits option allows the child to define which events it does indeed emit.</p>
      <h2>Migration Strategy</h2>
      <p>We need to remove <code>.native</code> and also define the emit events in the child component.</p>
      <h2>Example</h2>
      <p>
        In this example, we create 3 buttons with same child component. The click event is tha native event, which means the second button shouldn't have any reactivities when clicking. 
        The second button should obtain functions after transformation.
      </p>
    </div>
    <div>
      <remove-v-on-native-child @click.native="clickHandler">The click event with .native</remove-v-on-native-child>
      <remove-v-on-native-child @click="clickHandler">The click event without .native</remove-v-on-native-child>
      <remove-v-on-native-child @vclick="vClickHandler">The $emit event in child component</remove-v-on-native-child>
    </div>
  </div>
</template>

<script>
import RemoveVOnNativeChild from "./remove-v-on-native-child";
export default {
  name: "remove-v-on-native",
  components: {RemoveVOnNativeChild},
  methods: {
    clickHandler () {
      alert('Here is the native event.') // 此处不会执行 因为组件中未定义 `click` 事件
    },
    vClickHandler () {
      alert('Here is the $emit event.') // 触发 `vclick` 自定义事件
    }
  }
}
</script>

<style scoped>

</style>
