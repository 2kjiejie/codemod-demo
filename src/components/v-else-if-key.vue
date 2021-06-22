<template>
  <div>
    <p v-if="condition" key="yes"><strong>Yes</strong></p>
    <div v-else-if="condition1" key="no">No</div>
    <div v-else key="no">No</div>
  </div>
</template>

<script>
export default {
  name: "v-else-if-key",
  data () {
    return {
      condition: true,
      condition1: true,
    }
  }
}
</script>

<style scoped>

</style>