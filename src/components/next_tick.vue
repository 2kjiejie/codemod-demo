<template>
  <div>
    <h1>Global API Treeshaking</h1>
    <div>
      <h2>2.x Syntax</h2>
      <pre class="language-js" style="border: grey solid 1px"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// something DOM-related</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
      <h2>3.x Syntax</h2>
      <pre class="language-js" style="border: grey solid 1px"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// something DOM-related</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
    </div>
    <div style="border: solid 1px blue;margin-bottom: 100px">
      <h2>Example</h2>
      <h3>Vue nextTick</h3>
      <p>{{message}}</p>
      <h3>this.$nextTick</h3>
      <p id="h">{{msg}}</p>
      <button @click="changed">change message</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import store from "../store";

Vue.nextTick(() => {
  store.state.message = "message from nextTick function"
})
export default {
  name: "next_tick",
  data() {
    return {
      msg: "message in this.$next_tick"
    }
  },
  computed:{
    message(){
      return this.$store.state.message
    }
  },
  methods: {
    changed() {
      const msg2 = this.msg
      this.msg = "*" + this.msg + "*"
      let that = this;
      that.$nextTick(function () {
        let domTxt = document.getElementById('h').innerText;
        console.log(domTxt);
        if (domTxt === msg2) {
          console.log("文本修改后dom内容没有立即更新")
        } else {
          console.log("文本被修改后dom内容马上被更新了")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
