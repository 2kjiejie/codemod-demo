<template>
  <div>
    <p>-----child template-----</p>
    text in the child template：
    <p></p>
    {{ text }}
    <br>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
    <p>----------------</p>
  </div>
</template>

<script>
export default {
  name: "add_emit_declaration_child",
  props: [
    'text'
  ],
  methods: {
    add: function () {
      this.$emit('increment')
    },
    reduce: function () {
      this.$emit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
