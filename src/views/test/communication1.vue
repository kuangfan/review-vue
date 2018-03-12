<template>
  <div class="communication">
    <h1>非父子组件通信</h1>
    <div class="legend">
      <p>在 Vue 中，非父子组件的关系可以使用一个空的vue实例作为事件总线来传递。</p>
    </div>
    <div class="example">
      组件A：<com-a></com-a>
      组件B：<com-b></com-b>
    </div>
  </div>
</template>
<script>
import componentA from './componentA'
import componentB from './componentB'
export default {
  components: {
    'com-a': componentA,
    'com-b': componentB
  }
}
</script>
<style lang="less" scoped>
.communication{
  h1{
    padding: 0 20px;
  }
}
.legend{
  padding: 0 20px;
  overflow: hidden;
  img{
    max-width: 100%;
  }
  p{
    font-size: 14px;
    word-break: break-all;
  }
}
.example{
  padding: 20px;
  input{
    width: 100%;
    display: block;
    padding: 5px 10px;
    box-sizing: border-box;
  }
}
</style>
