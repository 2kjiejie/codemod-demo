<script>
import Vue from "../../node_modules/vue/dist/vue.js";
Vue.component('button_counter',{
  name:'button_counter',
  data(){
    return{
      count:0
    }
  },
  template:`
    <div>
      <h1>render to resoleComponent</h1>
      <button @click="count++">
        Clicked {{count}} times
      </button>
    </div>
  `
})
export default {
  render(h){
    return h('button_counter')
  }
}
</script>

<style scoped>

</style>