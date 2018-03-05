<template>
  <div class="communication">
    <h1>父子组件通信</h1>
    <img src="../../assets/props-events.png">
  </div>
</template>
<script>
export default {
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('已经了解了吗？')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
<style scoped>
.communication img{
  max-width: 100%;
}
</style>
