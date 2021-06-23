<template>
  <div>
    <h2>new directive api</h2>
    <div v-demo:foo="message"></div>
  </div>
</template>

<script>
import Vue from "../../node_modules/vue/dist/vue.js";
Vue.directive('demo',{
  bind:function (el,binding,vnode){
    var s=JSON.stringify()
    el.innerHTML=`
      name:${binding.name} <br>
      value:${binding.value} <br>
      expression:${binding.expression} <br>
      argument:${binding.arg} <br>
    `
  }
})
export default {
  name: "new_directive_api",
  data(){
    return{
      message:'message'
    }
  }
}
</script>

<style scoped>

</style>