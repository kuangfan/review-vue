<template>
  <div class="component-b">
    {{valueB}}<button type="button" @click="plus">+</button><button type="button" @click="minus">-</button>
  </div>
</template>
<script>
import {bus} from './bus'
export default {
  created () {
    bus.$on('input-value', (val) => {
      this.valueB = val
    })
  },
  data () {
    return {
      valueB: 123
    }
  },
  watch: {
    valueB () {
      bus.$emit('change-value', this.valueB)
    }
  },
  methods: {
    plus () {
      this.valueB++
    },
    minus () {
      this.valueB--
    }
  }
}
</script>
