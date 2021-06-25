<template>
  <div>
    <h2>v-model</h2>
    <v-model-child v-model="lovingVue"></v-model-child>
    {{lovingVue}}
  </div>
</template>

<script>
import VModelChild from "./v-model-child";
export default {
  name: "v-model",
  components: {VModelChild},
  data () {
    return {
      lovingVue : true,
    }
  }
}
</script>

<style scoped>

</style>
