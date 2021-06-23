<template>
  <div>
    <h1>rename lifecycle</h1>
    <rename_lifecycle_child v-if="seen"></rename_lifecycle_child>
    <button @click="distroy">distroy</button>
    <button @click="created">created</button>
  </div>
</template>

<script>
import rename_lifecycle_child from "@/components/rename_lifecycle_child";
export default {
  name: "rename_lifecycle",
  components:{
    rename_lifecycle_child
  },
  data(){
    return{
      seen:true
    }
  },
  methods:{
    distroy(){
      this.seen=false
    },
    created(){
      this.seen=true
    }
  }
}
</script>

<style scoped>

</style>