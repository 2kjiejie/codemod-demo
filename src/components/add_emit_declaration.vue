<template>
  <div>
    <h1>add emit declaration</h1>
    <div>
      <h2>Overview</h2>
      <p>
        Vue 3 now offers an emits option, similar to the existing props option. This option can be used to define the
        events that a component can emit to its parent.
      </p>
      <h2>2.x Behavior</h2>
      <p>
        In Vue 2, you can define the props that a component receives, but you can't declare which events it can emit:
      </p>
      <pre class="language-vue" style="border: solid 1px grey"><code><span class="token tag"><span
          class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span
      class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
        class="token punctuation">&gt;</span></span>{{ text }}<span class="token tag"><span class="token tag"><span
            class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
        class="token attr-name"><span class="token namespace">v-on:</span>click</span><span
        class="token attr-value"><span class="token punctuation attr-equals">=</span><span
        class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>accepted<span
        class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span
        class="token punctuation">&gt;</span></span>OK<span class="token tag"><span class="token tag"><span
            class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
      class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
    class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span
            class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">[</span><span
            class="token string">'text'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span
            class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>

      <h2>3.x Behavior</h2>
      <p>
        Similar to props, the events that the component emits can now be defined with the emits option:
      </p>
      <div style="border: solid 1px grey">
      <pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span
          class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span
      class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
        class="token punctuation">&gt;</span></span>{{ text }}<span class="token tag"><span class="token tag"><span
            class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
        class="token attr-name"><span class="token namespace">v-on:</span>click</span><span
        class="token attr-value"><span class="token punctuation attr-equals">=</span><span
        class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>accepted<span
        class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span
        class="token punctuation">&gt;</span></span>OK<span class="token tag"><span class="token tag"><span
            class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
      class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
    class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span
            class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">[</span><span
            class="token string">'text'</span><span class="token punctuation">]</span><span
            class="token punctuation">,</span>
    emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'accepted'</span><span
            class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span
            class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
      </div>
      <p>
        The option also accepts an object, which allows the developer to define validators for the arguments that are
        passed with the emitted event, similar to validators in props definitions.
      </p>
      <h2>Migration Strategy</h2>
      <p>
        It is highly recommended that you document all of the events emitted by each of your components using emits.
      </p>
      <p>
        This is especially important because of the removal of the .native modifier. Any listeners for events that
        aren't declared with emits will now be included in the component's $attrs, which by default will be bound to the
        component's root node.
      </p>
    </div>
    <div style="border: blue solid 1px">
      <h2>
        Example：
      </h2>
      <add_emit_declaration_child :text="msg" @increment="add" @decrement="reduce"></add_emit_declaration_child>
      <p>
        msg in the father template:{{ msg }}
      </p>
    </div>
    <div style="border-bottom: 100px; height: 100px"></div>
  </div>
</template>

<script>
import add_emit_declaration_child from '@/components/add_emit_declaration_child'

export default {
  name: "add-emit-declaration",
  components: {
    add_emit_declaration_child
  },
  data() {
    return {
      msg: 'the method to add the emits module',
      text: '{{text}}'
    }
  },
  methods: {
    add() {
      this.msg = "***" + this.msg + "***"
    },
    reduce() {
      if (this.msg.indexOf('*') !== -1) {
        this.msg = this.msg.slice(3, this.msg.length - 3)
      }
    }
  }
}
</script>

<style scoped>

</style>
