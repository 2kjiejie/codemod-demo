<template>
  <button type="button" @click="clickHandler" class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  emits: ["vclick"],
  name: "remove-v-on-native-child",

  methods: {
    clickHandler() {
      this.$emit('vclick') // 触发 `vclick` 事件

    }
  }
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: bisque;
  border-radius: 6px;
}
</style>
