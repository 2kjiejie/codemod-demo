<template>
  <div>
    <h2>add emit declaration</h2>
    <add_emit_declaration_child :text="msg" @increment="add" @decrement="reduce"></add_emit_declaration_child>
    <p></p>
    父组件中msg:{{msg}}
  </div>
</template>

<script>
import add_emit_declaration_child from '@/components/add_emit_declaration_child'
export default {
  name: "add-emit-declaration",
  components: {
    add_emit_declaration_child
  },
  data(){
    return{
      msg:'the method to add the emits module'
    }
  },
  methods:{
    add(){
      this.msg="***"+this.msg+"***"
    },
    reduce(){
      if (this.msg.indexOf('*')!==-1){
        this.msg=this.msg.slice(3,this.msg.length-3)
      }
    }
  }
}
</script>

<style scoped>

</style>
