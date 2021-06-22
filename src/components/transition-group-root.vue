<template>
  <div class="hello">
    <h3> tag is "ul": </h3>
    <transition-group tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>
    <h3> tag is "scope": </h3>
    <transition-group>
      <span v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "transition-group-root",
  data() {
    return {
      show: true,
      items: [
          1,2,3,4,5
      ]
    }

  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.list-item {
  background: aliceblue;
}
</style>