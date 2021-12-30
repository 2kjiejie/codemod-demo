<template>
  <div>
    <div>
      <h1>transition-group-root</h1>
      <h2>2.x Syntax</h2>
      <p>In Vue 2, <code>transition-group</code>, like other custom components, needed a root element, which by default
        was a <code>span</code> but was customizable via the tag prop.</p>
      <h2>3.x Syntax</h2>
      <p>If you didn't have one defined and your styling or other behaviors relied on the presence of the
        <code>span</code> root element to work properly, simply add tag="span" to the <code>transition-group</code></p>
      <h2>Migration Strategy</h2>
      <p>Simply add a <code>tag</code> prop to the <code>transition-group</code></p>
      <h2>Example</h2>
      <p> The background color of span will be red if the transformation is successful. (In vue2 it is aliceblue).</p>
    </div>
    <div class="hello" title="The background color of span will be red if the transformation is successful.">
      <h3> tag is "ul": </h3>
      <transition-group tag="ul">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </transition-group>
      <h3> tag is "span": </h3>
      <transition-group>
      <span v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </span>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "transition-group-root",
  data() {
    return {
      show: true,
      items: [
        1, 2, 3, 4, 5
      ]
    }

  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.list-item {
  background: aliceblue;
}

span {
  background: yellow;
}
</style>
