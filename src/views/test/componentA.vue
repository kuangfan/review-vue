<template>
  <div class="component-a">
    <input type="number" v-model="valueA" @keyup="changeValue">
  </div>
</template>
<script>
import {bus} from './bus'
export default {
  created () {
    bus.$on('change-value', (val) => {
      this.valueA = val
    })
  },
  data () {
    return {
      valueA: 123
    }
  },
  methods: {
    changeValue () {
      bus.$emit('input-value', this.valueA)
    }
  }
}
</script>
