<template>
  <todo-list :todos="todos">
    <template slot-scope="slotProps">
      <span v-if="slotProps.todo.isComplete">✓</span>
      <span>{{slotProps.todo.text}}</span>
    </template>
  </todo-list>
</template>

<script>
import todoList from './slot-scope-attribute-child'
export default {
  data () {
    return {
      todos: [
        {
          id: 0,
          text: 'Math',
          isComplete: false
        },
        {
          text: 'English',
          id: 1,
          isComplete: true
        },
        {
          text: 'Biology',
          id: 2,
          isComplete: false
        },
        {
          text: 'History',
          id: 3,
          isComplete: false
        }
      ]
    }
  },

  components: {
    todoList
  },

}
</script>

<style scoped>

</style>