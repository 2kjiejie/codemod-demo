<template>
  <div>
    <h2>define component</h2>
    <div id="mount-point"></div>
  </div>
</template>

<script>
import Vue from "../../node_modules/vue/dist/vue.js";

const Profile = Vue.extend({
  template: `
    <div>
    <p>component build by vue.extend in vue2(defineComponent in vue3)</p>
    <p>msg:  {{ msg }}</p>
    </div>
  `,
  data() {
    return {
      msg: 'message in the new component'
    }
  }
});

let profile=new Profile().$mount()

export default {
  name: "define_component",
  mounted() {
    let divid=document.getElementById('mount-point')
    divid.appendChild(profile.$el)
  }
}
</script>

<style scoped>

</style>