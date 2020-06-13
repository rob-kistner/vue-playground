<template>
  <a href="#"
    @click.prevent="increment"
    @keydown="handleKeydown"
    >
    {{displayMinutes}}
  </a>
</template>

<script>
export default {
  data() {
    return {
      minutes: 0,
      limits: [0,15,30,45]
    }
  },
  props: {
    'setMinutes': {
      type: Number
    },
    'id': {
      default: 'minutes'
    }
  },
  methods: {
    increment: function() {
      if (this.minutes == 45) {
        this.minutes = 0
       } else {
        this.minutes = this.limits[this.limits.indexOf(this.minutes)+1]
       } 
       this.update()
    },
    decrement: function() {
      if (this.minutes == 0) {
        this.minutes = 45
      } else {
        this.minutes = this.limits[this.limits.indexOf(this.minutes)-1]
      }
      this.update()
    },
    handleKeydown: function(e) {
      if (e.keyCode == 37 || e.keyCode == 40)
        this.decrement()
      else if (e.keyCode == 38 || e.keyCode == 39)
        this.increment()
    },
    update: function() {
      this.$emit('updated', this.minutes)
    }
  },
  created() {
    this.minutes = parseInt(this.setMinutes)
  },
  computed: {
    displayMinutes: function() {
      return (this.minutes == 0) ? '00' : ''+this.minutes
    }
  }
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