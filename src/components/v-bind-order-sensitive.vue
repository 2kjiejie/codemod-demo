<template>
<div>
  <h1>v-bind-order-sensitive</h1>
  <div class='red' :class="color" >
    <h2>v-bind-order-sensitive</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: "v-bind-order-sensitive",
  data() {
    return {
      color: 'box'
    }
  }
}
</script>

<style scoped>
.box {
  background: bisque;
  width: 400px;
}
.red {
  background: red;
  width: 300px;
}
</style>