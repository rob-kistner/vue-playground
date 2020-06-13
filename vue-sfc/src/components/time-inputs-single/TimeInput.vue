<template>
  <div class="time-input" :ref="id">
    <a href="#" 
      @click.prevent="incrementHours" 
      @keydown="handleKeyDownHours"
      ref="hours"
      >{{displayHours}}</a>
    <span class="timesep">:</span>
    <a href="#" 
      @click.prevent="incrementMinutes" 
      @keydown="handleKeyDownMinutes"
      ref="minutes"
      >{{displayMinutes}}</a>
    <a href="#"
      @click.prevent="toggleMeridiem"
      @keydown="handleKeyDownMeridiem"
      ref="meridiem"
    >{{displayMeridiem}}</a>
    <input type="hidden" :id="id" :value="currentTimeValue">
  </div>
</template>

<script>
// key codes as script constants
const UP=38, DOWN=40, LEFT=37, RIGHT=39

export default {
  props: {
    'setTime': {
      type: String,
      default: '09:00'
    },
    'id': {
      type: String,
      default: 'time-input'
    },
  },
  data() {
    return {
      hours: 0,
      hours_limits: { start: 0, end: 23 },
      minutes: 0,
      minutes_limits: [ 0, 15, 30, 45 ],
    }
  },
  created() {
    this.parseTime(this.setTime)
  },
  methods: {
    parseTime(time) {
      const [hrs, mins] = time.split(':')
      this.hours = parseInt(hrs)
      this.minutes = parseInt(mins)
    },
    incrementHours: function() {
      this.hours == this.hours_limits.end ? 
        this.hours = this.hours_limits.start : 
        this.hours++
      this.update()
    },
    decrementHours: function() {
      this.hours == this.hours_limits.start ? 
        this.hours = this.hours_limits.end : 
        this.hours--
      this.update()
    },
    incrementMinutes: function() {
      if (this.minutes == 45) {
        this.minutes = 0
      } else {
        this.minutes = this.minutes_limits[this.minutes_limits.indexOf(this.minutes)+1]
      } 
      this.update()
    },
    decrementMinutes: function() {
      if (this.minutes == 0) {
        this.minutes = 45
      } else {
        this.minutes = this.minutes_limits[this.minutes_limits.indexOf(this.minutes)-1]
      }
      this.update()
    },
    toggleMeridiem: function() {
      if (this.hours < 13)
        this.hours += 12
      else
        this.hours -= 12
    },
    handleKeyDownHours: function(e) {
      if (e.keyCode == DOWN)
        this.decrementHours()
      else if (e.keyCode == UP)
        this.incrementHours()
      else if (e.keyCode == RIGHT)
        this.$refs.minutes.focus()
    },
    handleKeyDownMinutes: function(e) {
      if (e.keyCode == DOWN)
        this.decrementMinutes()
      else if (e.keyCode == UP)
        this.incrementMinutes()
      else if (e.keyCode == RIGHT)
        this.$refs.meridiem.focus()
      else if (e.keyCode == LEFT)
        this.$refs.hours.focus()
    },
    handleKeyDownMeridiem: function(e) {
      if (e.keyCode == UP || e.keyCode == DOWN)
        this.toggleMeridiem()
      else if (e.keyCode == LEFT)
        this.$refs.minutes.focus()
    },
    changeMerdiem: function() {
      if (this.hours >= 0 && this.hours < 13)
        this.meridiem = 'AM'
      else if (this.hours >= 13 && this.hours <= 23)
        this.merdiem = 'PM'
    },
    update: function() {
      this.$emit('updated', this.currentTimeValue)
    }
  },
  computed: {
    displayHours() {
      const hrsVal = (this.hours > 12) ? this.hours-12 : this.hours
      if (this.hours == 0) {
        return '12'
      } else if (this.hours != 0 & this.hours < 10) {
        return ` ${hrsVal}`
      } else {
        return `${hrsVal}`
      }
    },
    displayMinutes() {
      return (this.minutes == 0) ? '00' : `${this.minutes}`
    },
    displayMeridiem() {
      return (this.hours >= 12 && this.hours <= 24) ? 'PM' : 'AM'
    },
    currentTimeValue() {
      const hrs = (this.hours < 10) ? `0${this.hours}` : this.hours
      return `${hrs}:${this.displayMinutes}`
    },
    currentDisplayTime() {
      return `${this.displayHours}:${this.displayMinutes}`
    },
  },
  watch: {
    setTime: function() {
      return this.parseTime(this.setTime)
    }
  }
}
</script>

<style scoped lang="sass">
  $hilite: #00f
  $default: #aaa

  .time-input
    display: inline-block
    border: solid 1px #aaa
    background-color: #fff
    padding: 0.25rem 0.5rem
    border-radius: 4px

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