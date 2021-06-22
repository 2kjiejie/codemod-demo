<template>
  <div>
    <h2>remove set and delete</h2>
    <p>
      message: {{message}}
    </p>
    <button @click="set">set</button>

  </div>
</template>

<script>
export default {
  name: "remove_set_and_delete",
  data(){
    return{
      message:'hello'
    }
  },
  methods:{
    set(){
      this.$set(this.$data,'message','hello  from remove_set_and_delete')
    }
  }
}
</script>

<style scoped>

</style>