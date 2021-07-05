<template>
  <div>
    <button v-bind="$attrs" v-on="$listeners"> Click {{$attrs.id}} times</button>
  </div>
</template>

<script>
export default {
  name: "remove-listener-child",
  inheritAttrs: false,
}
</script>

<style scoped>

</style>