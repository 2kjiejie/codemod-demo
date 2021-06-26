<template>
  <div>
    <h1>render to resoleComponent</h1>
    <div>
      <h2>Overview</h2>
      <p>
        This change will not affect &lt;template&gt; users.
      </p>
      <p>
        Here is a quick summary of what has changed:
      </p>
      <ul>
        <li>        h is now globally imported instead of passed to render functions as an argument</li>
        <li>        render function arguments changed to be more consistent between stateful and functional components</li>
        <li>        VNodes now have a flat props structure</li>
      </ul>
      <h2>Render Function Argument</h2>
      <h3>2.x Syntax</h3>
      <p>
        In 2.x, the render function would automatically receive the h function (which is a conventional alias for createElement) as an argument:
      </p>
      <div style="border: grey solid 1px">
      <pre class="language-js"><code><span class="token comment">// Vue 2 Render Function Example</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
      </div>
      <h3>3.x Syntax</h3>
      <p>
        In 3.x, h is now globally imported instead of being automatically passed as an argument.
      </p>
      <div style="border: grey solid 1px">
        <pre class="language-js"><code><span class="token comment">// Vue 3 Render Function Example</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
      </div>
      <h2>Render Function Signature Change</h2>
      <h3>2.x Syntax</h3>
      <p>
        In 2.x, the render function automatically received arguments such as h.
      </p>
      <h3>3.x Syntax</h3>
      <p>
        In 3.x, since the render function no longer receives any arguments, it will primarily be used inside of the setup() function. This has the added benefit of gaining access to reactive state and functions declared in scope, as well as the arguments passed to setup().
      </p>
      <h2>VNode Props Format</h2>
      <p>
        In 2.x, domProps contained a nested list within the VNode props:
      </p>
      <div style="border: grey solid 1px">
        <pre class="language-js"><code><span class="token comment">// 2.x</span>
<span class="token punctuation">{</span>
  staticClass<span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
  <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">'is-outlined'</span><span class="token operator">:</span> isOutlined <span class="token punctuation">}</span><span class="token punctuation">,</span>
  staticStyle<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#34495E'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  style<span class="token operator">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> buttonColor <span class="token punctuation">}</span><span class="token punctuation">,</span>
  attrs<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'submit'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  domProps<span class="token operator">:</span> <span class="token punctuation">{</span> innerHTML<span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  on<span class="token operator">:</span> <span class="token punctuation">{</span> click<span class="token operator">:</span> submitForm <span class="token punctuation">}</span><span class="token punctuation">,</span>
  key<span class="token operator">:</span> <span class="token string">'submit-button'</span>
<span class="token punctuation">}</span>
</code></pre>
      </div>
      <h3>3.x Syntax</h3>
      <p>
        In 3.x, the entire VNode props structure is flattened. Using the example from above, here is what it would look like now.
      </p>
      <div style="border: grey solid 1px">
        <pre class="language-js"><code><span class="token comment">// 3.x Syntax</span>
<span class="token punctuation">{</span>
  <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'button'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">'is-outlined'</span><span class="token operator">:</span> isOutlined <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  style<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#34495E'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> buttonColor <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token string">'submit'</span><span class="token punctuation">,</span>
  innerHTML<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  onClick<span class="token operator">:</span> submitForm<span class="token punctuation">,</span>
  key<span class="token operator">:</span> <span class="token string">'submit-button'</span>
<span class="token punctuation">}</span>
</code></pre>
      </div>
    </div>
    <div style="margin-bottom: 100px;border: blue solid 1px;margin-top: 50px">
      <h2>Example</h2>
      <render_to_resolveComponent_child></render_to_resolveComponent_child>
      <p></p>
    </div>
  </div>
</template>
<script>
import render_to_resolveComponent_child from "@/components/render_to_resolveComponent_child";
export default {
  components:{
    render_to_resolveComponent_child
  }
}
</script>

<style scoped>

</style>
