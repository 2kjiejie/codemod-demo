
<script>
export default {
  name: "scoped-slots-to-slots",
  render: function (createElement) {
    return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
