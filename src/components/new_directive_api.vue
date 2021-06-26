<template>
  <div>
    <h1>new directive api</h1>
    <div>
      <h2>Overview</h2>
      <p>
        The hook functions for directives have been renamed to better align with the component lifecycle.
      </p>
      <h2>2.x Syntax</h2>
      <p>
        In Vue 2, custom directives were created by using the hooks listed below to target an element’s lifecycle, all
        of which are optional:
      </p>
      <ul>
        <li> bind - Occurs once the directive is bound to the element. Occurs only once.</li>
        <li> inserted - Occurs once the element is inserted into the parent DOM.</li>
        <li> update - This hook is called when the element updates, but children haven't been updated yet.</li>
        <li> componentUpdated - This hook is called once the component and the children have been updated.</li>
        <li> unbind - This hook is called once the directive is removed. Also called only once.</li>
      </ul>
      <h2>3.x Syntax</h2>
      <p>
        In Vue 3, however, we’ve created a more cohesive API for custom directives. As you can see, they differ greatly from our component lifecycle methods even though we’re hooking into similar events. We’ve now unified them like so:
      </p>
      <ul>
        <li>        created - new! This is called before the element's attributes or event listeners are applied.</li>
        <li>        bind → beforeMount</li>
        <li>        inserted → mounted</li>
        <li>        beforeUpdate: new! This is called before the element itself is updated, much like the component lifecycle hooks.</li>
        <li>        update → removed! There were too many similarities to updated, so this is redundant. Please use updated instead.</li>
        <li>        componentUpdated → updated</li>
        <li>        beforeUnmount: new! Similar to component lifecycle hooks, this will be called right before an element is unmounted.</li>
        <li>        unbind -> unmounted</li>
      </ul>
    </div>
    <div style="border: solid 1px blue;margin-bottom: 100px">
      <h2>Example</h2>
      <div v-demo:foo="message"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "new_directive_api",
  data() {
    return {
      message: 'message'
    }
  }
}
</script>

<style scoped>

</style>
