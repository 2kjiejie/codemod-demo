<template>
  <div>
    <div>
      <h1>slot-scope-attribute</h1>
      <h2>2.x Syntax</h2>
      <p>In 2.x, to receive props passed to a slot, the parent component can use <code>template</code> with the <code>slot-scope</code>
        attribute</p>
      <h2>3.x Syntax</h2>
      <p>In 3.x, in the parent scope, we can use <code>v-slot</code> with a value to define a name for the
        <code>slot</code>. props we’ve been provided.</p>
      <h2>Migration Strategy</h2>
      <p>We can replace <code>slot-scope</code> with <code>v-slot</code>.</p>
      <h2>Example</h2>
      <p>The contents below should remain unchanged after transformation.</p>
    </div>
    <div title="The contents below should remain unchanged after transformation.">
      <todo-list :todos="todos">
        <template slot-scope="slotProps">
          <span v-if="slotProps.todo.isComplete">✓</span>
          <span>{{ slotProps.todo.text }}</span>
        </template>
      </todo-list>
    </div>
  </div>
</template>

<script>
import todoList from './slot-scope-attribute-child'

export default {
  data() {
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
