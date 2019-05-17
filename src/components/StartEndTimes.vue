<template>
  <div class="start-end-times">

    <div class="field">
      <label class="label">Start Time</label>
      <div class="control time-display start-time">
        <input type="text" id="startHours" name="startHours" class="input-time hrs"
          :value="startTimeHours"
          readonly
          @keyup="handleHours($event, 'startTime')"
          @click="handleHours($event, 'startTime')"
          >
        <span class="colon">:</span>
        <input type="text" id="startMins" name="startMins" class="input-time mins"
          :value="startTimeMinutes"
          readonly
          @keyup="handleMinutes($event, 'startTime')"
          @click="handleMinutes($event, 'startTime')"
          >
        <input type="text" id="startAmPm" name="startAmPm" class="input-time ampm"
          :value="startTimeAmPm"
          readonly
          @click="cyclePeriod('startTime')"
          @keyup.up="cyclePeriod('startTime')"
          @keyup.down="cyclePeriod('startTime')"
          >
        
        <input
          type="hidden"
          :id="startTimeFieldName"
          :name="startTimeFieldName"
          :value="startTimeFormatted"
          >
      </div>
    </div>

    <div class="field">
      <label class="label">End Time</label>
      <div class="control time-display end-time">
        <input type="text" id="endHours" name="endHours" class="input-time hrs"
          :value="endTimeHours"
          readonly
          @keyup="handleHours($event, 'endTime')"
          @click="handleHours($event, 'endTime')"
          >
        <span class="colon">:</span>
        <input type="text" id="endMins" name="endMins" class="input-time mins"
          :value="endTimeMinutes"
          readonly
          @keyup="handleMinutes($event, 'endTime')"
          @click="handleMinutes($event, 'endTime')"
          >
        <input type="text" id="endAmPm" name="endAmPm" class="input-time ampm"
          :value="endTimeAmPm"
          readonly
          @click="cyclePeriod('endTime')"
          @keyup.up="cyclePeriod('endTime')"
          @keyup.down="cyclePeriod('endTime')"
          >
        
        <input
          type="hidden"
          :id="endTimeFieldName"
          :name="endTimeFieldName"
          :value="endTimeFormatted"
          >
      </div>
    </div>

    <div class="field">
      <label class="label">Total Time</label>
      <div class="control">
        <input type="text" id="endHours" name="endHours" class="input is-static total-time"
          :value="totalTimeFormatted"
          readonly
          tabindex="-1"
          >
        <input
          type="hidden"
          :id="totalTimeFieldName"
          :name="totalTimeFieldName"
          :value="totalTime"
          >
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import moment from 'moment'

// globals
const fmt = 'h:mm A'
const hoursToCalc = 1
const minutesToCalc = 15
const reservedFieldNames = ['startHours', 'startMins', 'startAmPm', 'endHours', 'endMins', 'endAmPm']

export default {
  name: 'StartEndTimes',
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  },
  props: {
    startTimeFieldName: {
      default: 'start_time',
      format: String
    },
    endTimeFieldName: {
      default: 'end_time',
      format: String
    },
    totalTimeFieldName: {
      default: 'total_time'
    },
    defaultStartTime: {
      default: '9:00 AM'
    },
    defaultEndTime: {
      default: '9:30 AM'
    },
  },
  computed: {
    startTimeHours() {
      return moment(this.startTime, fmt).format('h')
    },
    startTimeMinutes() {
      return moment(this.startTime, fmt).format('mm')
    },
    startTimeAmPm() {
      return moment(this.startTime, fmt).format('a')
    },
    startTimeFormatted() {
      return moment(this.startTime, fmt).format('h:mm a')
    },
    endTimeHours() {
      return moment(this.endTime, fmt).format('h')
    },
    endTimeMinutes() {
      return moment(this.endTime, fmt).format('mm')
    },
    endTimeAmPm() {
      return moment(this.endTime, fmt).format('a')
    },
    endTimeFormatted() {
      return moment(this.endTime, fmt).format('h:mm a')
    },
    totalTime() {
      let start = moment(this.startTime)
      let end = moment(this.endTime)
      return end.diff(start, 'minutes') / 60
    },
    totalTimeFormatted() {
      return this.totalTime + (this.totalTime <= 1 ? ' hr' : ' hrs')
    },
  },
  watch: {
    startTime: function() {
      if (!this.timesAreValid()) this.endTime = this.startTime
    },
    endTime: function() {
      if (!this.timesAreValid()) this.endTime = this.startTime
    },
  },
  methods: {
    handleHours(e, whichTime) {
      if (e.key) {
        if (e.key==='ArrowUp') {
          this.addHours(whichTime)
        } else if (e.key==='ArrowDown') {
          this.subtractHours(whichTime)
        }
      } else if (e.type==='click') {
        this.addHours(whichTime)
      }
    },
    handleMinutes(e, whichTime) {
      if (e.key) {
        if (e.key==='ArrowUp') {
          this.addMinutes(whichTime)
        } else if (e.key==='ArrowDown') {
          this.subtractMinutes(whichTime)
        }
      } else if (e.type==='click') {
        this.addMinutes(whichTime)
      }
    },
    cyclePeriod(whichTime) {
      this[whichTime] = moment(this[whichTime], fmt).add(12, 'hours')
    },
    addHours(whichTime) {
      if ((moment(this[whichTime], fmt).hours() + hoursToCalc) < 24)
        this[whichTime] = moment(this[whichTime], fmt).add(hoursToCalc, 'hours')
    },
    subtractHours(whichTime) {
      if (!(moment(this[whichTime], fmt).hours() - hoursToCalc) <= 0)
        this[whichTime] = moment(this[whichTime], fmt).subtract(hoursToCalc, 'hours')
    },
    addMinutes(whichTime) {
      if (!(moment(this[whichTime], fmt).hours() === 23) && 
          !(moment(this[whichTime], fmt).minutes() === 45))
      this[whichTime] = moment(this[whichTime], fmt).add(minutesToCalc, 'minutes')
    },
    subtractMinutes(whichTime)  {
      if (!(moment(this[whichTime], fmt).hours() === 1) && 
          !(moment(this[whichTime], fmt).minutes() === 0))
      this[whichTime] = moment(this[whichTime], fmt).subtract(minutesToCalc, 'minutes')
    },
    timesAreValid() {
      return moment(this.endTime).diff(moment(this.startTime), 'minutes') >= 0 
    }
  },
  mounted() {
    this.startTime = moment(this.defaultStartTime, fmt)
    this.endTime = moment(this.defaultEndTime, fmt)
  }
}
</script>

<style scoped lang="scss">

$tvc-ltblue: #00aeef;
$tvc-blue: #004b98;
$field-border: #dbdbdb;
$input-focus-text: $tvc-blue;
$input-text-color: #363636;

// component wrapper
.start-end-times {
  display: flex;

  & .field {
    padding-right: 1rem;
  }
}

// wrapper field, imitates bulma standard text input field
.time-display {
  display: inline-flex;
  border: 1px solid $field-border;
  padding: 0 0.875rem;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(10,10,10,0.1);
}

// text inputs within display field
.input-time {
  border: 0;
  padding: 0.25rem 0.125rem;
  text-align: center;
  max-width: 1.75rem;
  font-size: 1rem;
  color: $input-text-color;
  background-color: transparent;
  border-top: solid 2px transparent;
  border-bottom: solid 2px transparent;
  -webkit-user-select: none;
  cursor: pointer;
  &.hrs {
    text-align: center; // right
  }
  &.mins {
    text-align: center; // left
  }
  &:focus {
    font-weight: 700;
    outline: 0;
    color: $input-focus-text;
    -webkit-user-select: none;
    user-select: none;
    border-color: $tvc-ltblue;
  }
}

// calculated total time
.total-time {

}

// time component separator
.colon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5rem;
  text-align: center;
}
</style>
