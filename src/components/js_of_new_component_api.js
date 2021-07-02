//used by new_component_api
import Vue from "vue";

Vue.component('button_counter', {
    name: 'button_counter',
    data() {
        return {
            count: 0
        }
    },
    template: `
      <div>
      <button @click="count++">
        Clicked {{ count }} times
      </button>
      </div>
    `
})
