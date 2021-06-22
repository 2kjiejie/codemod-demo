<template>
  <div>
    <h1>v-for-v-if-precedence-change</h1>
    <v-for-v-if-precedence-change></v-for-v-if-precedence-change>
    <h1>v-bind-order-sensitive</h1>
    <v-bind-order-sensitive></v-bind-order-sensitive>
    <h1>v-else-if-key</h1>
    <v-else-if-key></v-else-if-key>
    <h1>transition-group-root</h1>
    <transition-group-root></transition-group-root>
    <h1>v-for-template-key</h1>
    <v-for-template-key></v-for-template-key>
    <h1>slot-scope-attribute</h1>
    <slot-scope-attribute></slot-scope-attribute>
  </div>
</template>

<script>
import vForVIfPrecedenceChange from "./components/v-for-v-if-precedence-change";
import vBindOrderSensitive from "./components/v-bind-order-sensitive";
import vElseIfKey from "./components/v-else-if-key";
import TransitionGroupRoot from "./components/transition-group-root";
import VForTemplateKey from "./components/v-for-template-key";
import SlotScopeAttribute from "./components/slot-scope-attribute-parent";

export default {
  name: 'App',
  components: {
    SlotScopeAttribute,
    VForTemplateKey,
    TransitionGroupRoot,
    vForVIfPrecedenceChange,
    vBindOrderSensitive,
    vElseIfKey
  }
}
</script>

<style scoped>

</style>