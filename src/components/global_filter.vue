<template>
  <div>
    <h2>global filter</h2>
    <p>before filter:</p>
    {{msg}}
    <p>after filter:</p>
    {{msg | capitalize}}
  </div>
</template>

<script>
import Vue from "../../node_modules/vue/dist/vue.js";
Vue.filter('capitalize',function (value){
  if (!value)return ''
  value=value.toString()
  return value.charAt(0).toUpperCase()+value.slice(1)
})
export default {
  name: "global_filter",
  data(){
    return{
      msg:'message in global_filter'
    }
  }
}
</script>

<style scoped>

</style>