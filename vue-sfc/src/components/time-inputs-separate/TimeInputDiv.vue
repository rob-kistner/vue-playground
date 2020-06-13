<template>
  <div class="container">
    
    Start Time: 
    <div class="timeinput">
      <hours
        id="startHours"
        :setHours="startHours"
        @updated="updatedStartHours"
      />:<minutes
        id="startMinutes"
        :setMinutes="startMinutes"
        @updated="updatedStartMinutes"
      />
    </div>

    <button @click="setToTwelve">Set to 12pm</button>
  </div>
</template>

<script>
import Hours from './TimeInputHours.vue'
import Minutes from './TimeInputMinutes.vue'

export default {
  components: {
    Hours,
    Minutes,
  },
  data() {
    return {
      startHours: 9,
      startMinutes: 0,
      endHours: 10,
      endMinutes: 0,
    }
  },
  methods: {
    updatedStartHours(hours) {
      this.startHours = hours
      this.calcTime()
    },
    updatedStartMinutes(minutes) {
      this.startMinutes = minutes
      this.calcTime()
    },
    calcTime() {
      console.log(`${this.startHoursFormatted}:${this.startMinutesFormatted}`)
    },
    setToTwelve() {
      this.startHours = 12
    }
  },
  computed: {
    startHoursFormatted() {
      return (this.startHours < 10) ? `0${this.startHours}` : this.startHours
    },
    startMinutesFormatted() {
      return (this.startMinutes == 0) ? '00' : `${this.startMinutes}`
    },
  },
}
</script>

<style scoped lang="sass">
  .timeinput
    display: inline-block
    border: solid 1px #aaa
    background-color: #fff
    padding: 0.25rem 0.5rem
    border-radius: 4px
</style>