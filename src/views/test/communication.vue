<template>
  <div class="communication">
    <h1>父子组件通信</h1>
    <div class="legend">
      <img src="../../assets/img/props-events.png">
      <p>在 Vue 中，父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。</p>
    </div>
    <div class="example">
      <input type="number" v-model="value">
      <child-grid :value="value" @update:value="val => value = val"></child-grid>
    </div>
  </div>
</template>
<script>
import child from './child'
export default {
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('已经了解了吗？')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  data () {
    return {
      value: 123
    }
  },
  components: {
    'child-grid': child
  },
  computed: {
    valueNumber () {
      return parseInt(this.value)
    }
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
