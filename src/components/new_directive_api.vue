<template>
  <div>
    <h2>new directive api</h2>
    <div v-demo:foo="message"></div>
  </div>
</template>

<script>
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
