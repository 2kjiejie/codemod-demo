<template>
  <div>
    <h1>import composition api from vue</h1>
    <div>
      <h2>Overview</h2>
      <p>In vue2 , we can use vue3 features such as setup by referencing @vue/composition-api.</p>
      <p>When migrating to vue3, we can change @vue/component-api to vue</p>
      <h2>2.x Syntax</h2>
      <p>'import {defineComponent } from "@vue/composition-api"'</p>
      <h2>3.x Syntax</h2>
      <p>'import { defineComponent } from "vue" '</p>
    </div>
    <div style="border: blue 1px solid; margin-bottom: 100px">
      <h2>Example</h2>
      <p>{{ state.count }}</p>
      <button @click="addCount">add</button>
      <p>(state.count and the click function is defined in the setup())</p>
    </div>
  </div>
</template>

<script>
import {reactive} from '@vue/composition-api'

export default {
  setup() {
    const state = reactive({
      count: 0
    })
    const addCount = () => {
      state.count++
    }
    return {state, addCount}
  }
}
</script>

<style scoped>

</style>
