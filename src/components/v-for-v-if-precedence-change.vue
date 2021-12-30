<template>
  <div>
    <h1>v-for-v-if-precedence-change</h1>
    <h2>2.x Syntax</h2>
    <p>In 2.x, when using <code>v-if</code> and <code>v-for</code> on the same element, v-for would take precedence.</p>
    <h2>3.x Syntax</h2>
    <p>In 3.x, <code>v-if</code> will always have the higher precedence than <code>v-for</code>.</p>
    <h2>Migration Strategy</h2>
    <p>We can use a template tag with <code>v-for</code> to wrap the element with <code>v-if</code>.</p>
    <h2>Example</h2>
    <p>If the transformation fails, "Bell" would disappear.</p>
    <ul title="'Bell' would disappear if the transformation fails">
      <li
          v-for='user in users'
          v-if='user.isActive'
          :key='user.id'
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-for-v-if-precedence-change",
  data() {
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
ul {
  font-size: 48px;
  background: lightgray;
  text-align: center;
}
</style>
