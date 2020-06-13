<template>
  <div class="main has-background-grey-lighter content">
    Start: <time-input id="start-time" :setTime="startTime" @updated="setStartTime" />
    End: <time-input id="end-time" :setTime="endTime" @updated="setEndTime" />

    <button @click="setStartTime">Click Me</button>
  </div>
</template>

<script>
  import TimeInput from './components/time-inputs-single/TimeInput.vue'

  export default {
    name: "app",
    data() {
      return {
        startTime: '14:45',
        endTime: '15:15'
      }
    },
    components: {
      TimeInput
    },
    methods: {
      calcMinutes(time) {
        const timeArr = time.split(':')
        let mins = 0
        mins = parseInt(timeArr[0]) * 60
        mins += parseInt(timeArr[1])
        // console.log(time, mins)
        return mins
      },
      parseTimeFromMins(mins) {

      },
      setStartTime(newTime) {
        console.log(this.calcMinutes(this.endTime) < this.calcMinutes(newTime))
        if (this.calcMinutes(this.endTime) < this.calcMinutes(newTime)) {
          this.setEndTime(this.startTime)
        } else {
          this.startTime = newTime
        }
      },
      setEndTime(newTime) {
        console.log(this.calcMinutes(this.endTime) < this.calcMinutes(newTime))
        if (this.calcMinutes(this.endTime) < this.calcMinutes(newTime)) {
          this.setEndTime(this.startTime)
        } else {
          this.endTime = newTime
        }
      },
    }
  }
</script>

<style lang="stylus">
</style>
