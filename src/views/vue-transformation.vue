<template>
  <div>
    <h1>***If the components bellow remain intact after transformation, vue-codemod is successful.***</h1>
    <h1>v-for-v-if-precedence-change</h1>
    <v-for-v-if-precedence-change title="'Bell' would disappear if the transformation fails"></v-for-v-if-precedence-change>
    <h1>v-bind-order-sensitive</h1>
    <v-bind-order-sensitive title="The color would change if the transformation fails"></v-bind-order-sensitive>
    <h1>v-else-if-key</h1>
    <v-else-if-key title="The word would be 'NO' if the transformation fails"></v-else-if-key>
    <h1>transition-group-root</h1>
    <transition-group-root></transition-group-root>
    <h1>v-for-template-key</h1>
    <v-for-template-key></v-for-template-key>
    <h1>slot-scope-attribute</h1>
    <slot-scope-attribute></slot-scope-attribute>
    <h1>slot-attribute</h1>
    <slot-attribute title="those tags need to be deleted in vue3"></slot-attribute>
  </div>
</template>

<script>
import vForVIfPrecedenceChange from "../components/v-for-v-if-precedence-change";
import vBindOrderSensitive from "../components/v-bind-order-sensitive";
import vElseIfKey from "../components/v-else-if-key";
import TransitionGroupRoot from "../components/transition-group-root";
import VForTemplateKey from "../components/v-for-template-key";
import SlotScopeAttribute from "../components/slot-scope-attribute-parent";
import SlotAttribute from "../components/slot-attribute";

export default {
  name: 'vue-transformation',
  components: {
    SlotScopeAttribute,
    VForTemplateKey,
    TransitionGroupRoot,
    vForVIfPrecedenceChange,
    vBindOrderSensitive,
    vElseIfKey,
    SlotAttribute
  }
}
</script>

<style scoped>

</style>