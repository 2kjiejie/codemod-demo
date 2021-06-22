<template>
  <div>
    <h2>import composition api from vue</h2>
    <p>{{state.count}}</p>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
  name: "import_composition_api_from_vue"
}
</script>

<style scoped>

</style>