<template>
  <div>
    <p></p>
    <router-link :to="{name:'home'}">Home</router-link>
    ||
    <router-link :to="{name:'transformations'}">transformations</router-link>
    ||
    <router-link :to="{name:'vue-transformation'}">vue-transformation</router-link>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>

</template>

<script>
import transformations from "@/views/transformations";
import vueTransformation from "./views/vue-transformation"

export default {
  name: 'App',
  components: {
    transformations,
    vueTransformation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
