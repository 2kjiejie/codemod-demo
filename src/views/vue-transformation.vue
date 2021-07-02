<template>
  <div>
    <h1>***If the components bellow remain intact after transformation, vue-codemod is successful.***</h1>
    <v-for-v-if-precedence-change ></v-for-v-if-precedence-change>
    <v-bind-order-sensitive title="The color would change if the transformation fails"></v-bind-order-sensitive>
    <v-else-if-key></v-else-if-key>
    <transition-group-root></transition-group-root>
    <v-for-template-key></v-for-template-key>
    <slot-scope-attribute></slot-scope-attribute>
    <slot-attribute title="those tags need to be deleted in vue3"></slot-attribute>
    <slot-default title="those tags need to be deleted in vue3"></slot-default>
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
import SlotDefault from "../components/slot-default";

export default {
  name: 'vue-transformation',
  components: {
    SlotScopeAttribute,
    VForTemplateKey,
    TransitionGroupRoot,
    vForVIfPrecedenceChange,
    vBindOrderSensitive,
    vElseIfKey,
    SlotAttribute,
    SlotDefault
  }
}
</script>

<style scoped>

</style>
