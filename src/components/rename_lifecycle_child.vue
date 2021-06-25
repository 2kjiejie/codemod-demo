<template>
  <div>
    <p>-----rename_lifecycle-----</p>
  </div>
</template>

<script>
export default {
  name: "rename_lifecycle_child",
  props:['msg'],
  destroyed() {
    this.$parent.msg=this.$parent.msg+'--destroyed'
  },
  beforeDestroy() {
    this.$parent.msg=this.$parent.msg+'--beforeDestroy'
  }
}
</script>

<style scoped>

</style>
