<template>
  <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
  >
</template>

<script>
export default {
  name: "v-model-child",
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
}
</script>

<style scoped>

</style>
