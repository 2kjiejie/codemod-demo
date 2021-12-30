<template>
  <div>
    <h1>v-else-if-key</h1>
    <h2>2.x Syntax</h2>
    <p>In 2.x, it was recommended to use keys on <code>v-if/v-else/v-else-if</code> branches.</p>
    <h2>3.x Syntax</h2>
    <p>In 3.x, <code>key</code> attribute on <code>v-if/v-else/v-else-if</code> branches is no longer recommended, since
      unique keys are now automatically generated on conditional branches if you don't provide them. </p>
    <h2>Migration Strategy</h2>
    <p>In most cases, removing those keys can be the best choice.</p>
    <h2>Example</h2>
    <p> The word would be 'NO' if the transformation fails</p>
    <div title="The word would be 'NO' if the transformation fails">
      <p v-if="condition" key="yes"><strong>Yes</strong></p>
      <div v-else-if="condition1" key="no">No</div>
      <div v-else key="no">No</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-else-if-key",
  data() {
    return {
      condition: true,
      condition1: true,
    }
  }
}
</script>

<style scoped>
strong {
  font-size: 40px;
  text-shadow: 3px 3px 3px #666666;
}
</style>
