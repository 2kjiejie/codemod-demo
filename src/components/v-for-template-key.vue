<template>
  <div>
    <div>
      <h1>v-for-template-key</h1>
      <h2>2.x Syntax</h2>
      <p>In Vue 2.x, a <code>template</code> tag could not have a key. Instead, you could place the keys on each of its children.</p>
      <h2>3.x Syntax</h2>
      <p>In Vue 3.x, the <code>key</code> should be placed on the <code>template</code> tag instead.</p>
      <h2>Migration Strategy</h2>
      <p>We can place the <code>key</code> attribute on the <code>template</code> tag.</p>
      <h2>Example</h2>
      <p>The contents below should remain unchanged after transformation.</p>
    </div>
    <div title="The contents below should remain unchanged after transformation.">
      <template v-for="item in items">
        <li
            :key="'bodying-id' + item.game.id + 'bodying-name'"
            role="presentation"
        >
          Game Id: {{item.game.id}}
        </li>
        <div>
          <li
              :key="'bottom-' + item.id"
              role="presentation"
          >
            Game Name: {{item.game.name}}
          </li>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-for-template-key",
  data () {
    return {
      items: [
        {
          id: 1, game: {id: 100, name: "It Takes Two"}
        },
        {
          id: 2, game: {id: 101, name: "2K21"}
        },
        {
          id: 3, game: {id: 102, name: "OverCooked"}
        },
      ]
    }
  }
}
</script>

<style scoped>
li {
  background-color: aliceblue;
  width: 400px;
}
</style>
