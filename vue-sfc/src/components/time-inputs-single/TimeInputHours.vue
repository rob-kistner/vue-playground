<template>
  <a href="#"
    @click.prevent="increment"
    @keydown="handleKeydown"
    >
    {{displayHours}}
  </a>
</template>

<script>
export default {
  data() {
    return {
      hours: 0,
    }
  },
  props: {
    'id': {
      default: 'hours'
    },
    'setHours': {
      type: Number
    }
  },
  methods: {
    increment: function() {
      this.hours == 24 ? this.hours = 1 : this.hours++
      this.update()
    },
    decrement: function() {
      this.hours == 1 ? this.hours = 23 : this.hours--
      this.update()
    },
    handleKeydown: function(e) {
      if (e.keyCode == 37 || e.keyCode == 40)
        this.decrement()
      else if (e.keyCode == 38 || e.keyCode == 39)
        this.increment()
    },
    update: function() {
      this.$emit('updated', this.hours)
    },
  },
  created() {
    this.hours = parseInt(this.setHours)
    this.update()
  },
  computed: {
    displayHours: function() {
      const hrsVal = (this.hours > 12) ? this.hours-12 : this.hours
      return (hrsVal.length > 1) ? ` ${hrsVal}` : hrsVal
    }
  },
  watch: {
    setHours: function() {
      this.hours = parseInt(this.setHours)
    }
  },
}
</script>

<style scoped lang="sass">
  $hilite: #00f
  $default: #aaa

  a
    display: inline-block
    padding: 0.25rem 0.25rem
    color: #000
    text-decoration: none
    border: solid 1px transparent

    &:focus
      color: $hilite
      outline: none
      border-bottom: solid 1px $hilite
</style>