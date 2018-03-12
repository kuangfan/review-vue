<template>
  <div class="example-child">
    <p>{{value}}<button type="button" @click="plus">+</button><button type="button" @click="minus">-</button></p>
  </div>
</template>
<script>
export default {
  props: ['value'],
  data () {
    return {
      newValue: parseInt(this.value)
    }
  },
  watch: {
    value () {
      this.newValue = parseInt(this.value)
    },
    newValue () {
      this.$emit('update:value', this.newValue)
    }
  },
  methods: {
    plus () {
      this.newValue++
    },
    minus () {
      this.newValue--
    }
  }
}
</script>
<style lang="less" scoped>
button{
  margin: 0 5px;
}
</style>
