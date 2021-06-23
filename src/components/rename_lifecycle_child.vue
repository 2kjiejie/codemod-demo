<template>
  <div>
    <p>-----rename_lifecycle-----</p>
  </div>
</template>

<script>
export default {
  name: "rename_lifecycle_child",
  destroyed() {
    window.alert('child component has been destroyed')
  },
  beforeDestroy() {
    window.alert('beforeDestroy')
  }
}
</script>

<style scoped>

</style>