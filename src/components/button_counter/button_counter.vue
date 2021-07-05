<template>
  <div>
    <button @click="count++">
      Clicked {{ count }} times
    </button>
  </div>
</template>

<script>
export default {
  name: 'button_counter',
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style scoped>

</style>
