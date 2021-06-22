<template>
  <div>
    <h2>import composition api from vue</h2>
    <p>{{state.count}}</p>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
//!!!!需要npm i @vue/composition-api -S
import { reactive } from '@vue/composition-api'
export default {
  setup(){
    const state=reactive({
      count:0
    })
    const addCount=()=>{
      state.count++
    }
    return{state,addCount}
  }
}
</script>

<style scoped>

</style>