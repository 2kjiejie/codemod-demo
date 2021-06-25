<template>
  <div>
    <h2>remove set and delete</h2>
    <ul>
      <li v-for="(message,index) in msg">{{message}}---{{index}}</li>
    </ul>
    <button @click="set">set</button>
    <button @click="del">delete</button>
  </div>
</template>

<script>
export default {
  name: "remove_set_and_delete",
  data(){
    return{
      msg:[
          'hello',
          'world',
          'from data'
      ]
    }
  },
  methods:{
    set(){
      this.$set(this.$data.msg,'2',' from remove_set_and_delete')
    },
    del(){
      this.$delete(this.$data.msg,'2')
    }
  }
}
</script>

<style scoped>

</style>
