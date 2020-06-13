<template>
  <div class="field">
    <label :for="name" class="label">{{label}}</label>
    <div class="control">
      <input type="number" 
        class="input" 
        :name="name" 
        :id="name" 
        :step="step"
        :value="value"
        @keydown="handleKeyDown"
        @input="changeNumber"
        >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  data() {
    return {

    }
  },
  props: {
    label: {
      default: 'Number'
    },
    name: {
      required: true
    },
    step: {
      default: 1
    },
    min: {
      default: 0
    },
    max: {
      default: 100
    },
    value: {
      default: null
    }
  },
  methods: {
    handleKeyDown(e) {
      if (e.key === 'e') e.preventDefault()
    },
    changeNumber(e) {
      e.preventDefault()
      if(parseInt(e.target.value) < this.min) {
        e.target.value = this.min
      } else if(parseInt(e.target.value) > this.max) {
        e.target.value = this.max
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .field {
    width: 3rem;

    & input {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
      }
      text-align: center;
      user-select: none;
    }
  }
</style>
