<template>
  <div class="outer nav-links">
    <p></p>

    <div class="sidebar links">
      <router-link :to="{name:'home'}">Home</router-link>
      <p></p>
      <router-link :to="{name:'transformations'}">transformations</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'add_emit_declaration'}">add_emit_declaration</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'import_composition_api_from_vue'}">import_composition_api_from_vue</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'new_component_api'}">new_component_api</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'new_directive_api'}">new_directive_api</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'remove_set_and_delete'}">remove_set_and_delete</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'rename_lifecycle'}">rename_lifecycle</router-link>
      <p></p>
      <router-link :to="{name:'vue-transformation'}">vue-transformation</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'v-for-v-if-precedence-change'}">v-for-v-if-precedence-change</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'v-bind-order-sensitive'}">v-bind-order-sensitive</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'v-else-if-key'}">v-else-if-key</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'transition-group-root'}">transition-group-root</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'v-for-template-key'}">v-for-template-key</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'slot-scope-attribute'}">slot-scope-attribute</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'slot-attribute'}">slot-attribute</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'slot-default'}">slot-default</router-link>
      <p></p>
      &nbsp;
      <router-link :to="{name:'remove-v-on-native'}">remove-v-on-native</router-link>
      <p></p>

    </div>
    <div class="content">
      <router-view :key="$route.path"></router-view>
    </div>

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
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


.sidebar {
  width: 300px;
  height: 100%;
  display: table-cell;
  position: fixed;
  z-index: 1;
  border-right: 1px solid grey;
}

.content {
  margin-left: 350px;
}

.outer {
  display: table;
  width: 100%;
}

.nav-links{
  display: flex;
}

.links{
  padding-right: 20px;
  list-style: none;
}

.links:hover{
  /*text-decoration: underline;*/
  color: blue;
}
</style>
