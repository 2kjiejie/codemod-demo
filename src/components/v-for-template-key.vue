<template>
  <div>
    <h1>v-for-template-key</h1>
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

</style>
