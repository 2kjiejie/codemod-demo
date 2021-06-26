<template>
  <div>
    <h1>remove set and delete</h1>
    <div>
      <p>
        The functions this.$set() and this.$delete() has been deleted in the vue3.
      </p>
      <h2>2.x Syntax</h2>
      <div style="border: grey 1px solid">
        <p>this.$set(this.$data.msg,'2',' from remove_set_and_delete')</p>
        <p>this.$delete(this.$data.msg, '2')</p>
      </div>
      <h2>3.x Syntax</h2>
      <div style="border: grey 1px solid">
        <p>this.$data.msg['2'] = ' from remove_set_and_delete'</p>
        <p>delete this.$data.msg['2']</p>
      </div>
    </div>
    <div style="border: blue solid 1px;margin-top: 50px">
      <h2>Example</h2>
      <ul>
        <li v-for="(message,index) in msg">{{ message }}---{{ index }}</li>
      </ul>
      <button @click="set">set</button>
      <button @click="del">delete</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "remove_set_and_delete",
  data() {
    return {
      msg: [
        'hello',
        'world',
        'from data'
      ]
    }
  },
  methods: {
    set() {
      this.$set(this.$data.msg, '2', ' from remove_set_and_delete')
    },
    del() {
      this.$delete(this.$data.msg, '2')
    }
  }
}
</script>

<style scoped>

</style>
