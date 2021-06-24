<template>
  <div>
    <h2>global filter</h2>
    <p>before filter:</p>
    <input type="text" v-model="msg">
    <p>after filter:</p>
    {{msg | capitalize}}
  </div>
</template>

<script>
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