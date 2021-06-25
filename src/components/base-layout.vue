<template>
<div>
  <slot name="one"></slot>
  <slot></slot>
  <slot name="title">slot title</slot>
</div>
</template>

<script>
export default {
  name: "base-layout"
}
</script>

<style scoped>

</style>
