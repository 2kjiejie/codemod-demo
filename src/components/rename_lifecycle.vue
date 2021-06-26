<template>
  <div>
    <h1>rename lifecycle</h1>
    <div>
      <h2>OverView</h2>
      <ul>
        <li>The destroyed lifecycle option has been renamed to unmounted</li>
        <li>The beforeDestroy lifecycle option has been renamed to</li>
      </ul>
    </div>
    <div style="border: blue solid 1px; margin-bottom: 100px">
      <h2>Example</h2>
      <rename_lifecycle_child v-if="seen" :msg="msg"></rename_lifecycle_child>
      <button @click="distroy">distroy</button>
      <button @click="created">created</button>
      <p>change the msg through the lifecycle function: </p>
      {{msg}}
    </div>
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
      seen:true,
      msg:'hello'
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
