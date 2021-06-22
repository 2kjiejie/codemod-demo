<template>
<div>
  <ul>
    <li
        v-for='user in users'
        v-if='user.isActive'
        :key='user.id'
    >
      {{user.name}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "v-for-v-if-precedence-change",
  data () {
    return {
      users: [
        {id: 1, name: "Kane", isActive: true},
        {id: 2, name: "John", isActive: false},
        {id: 3, name: "Bell", isActive: true},
      ]
    }
  }
}
</script>

<style scoped>

</style>