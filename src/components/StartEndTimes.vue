<template>
  <div>
    <label class="label">Start Time</label>
    <div class="time-display start-time">
      <input
        type="text"
        id="startHours"
        name="startHours"
        class="input-time hrs"
        :value="startTimeHours"
        @keyup="handleHours"
        @click="handleHours"
        readonly
        >
      <span class="colon">:</span>
      <input
        type="text"
        id="startMins"
        name="startMins"
        class="input-time mins"
        :value="startTimeMinutes"
        @keyup="handleMinutes"
        @click="handleMinutes"
        readonly
        >
      <input
        type="text"
        id="startAmPm"
        name="startAmPm"
        class="input-time ampm"
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
</template>

<script>
/* eslint-disable */
import moment from 'moment'

// globals
const fmt = 'h:mm A'
const hours = 1
const minutes = 15
const reservedFieldNames = ['startHours', 'startMins', 'startAmPm', 'endHours', 'endMins', 'endAmPm']

export default {
  name: 'StartEndTimes',
  data() {
    return {
      startTime: '09:00 am',
      endTime: '09:30 am'
    }
  },
  props: {
    startTimeFieldName: {
      default: 'start_time',
      format: String,
      validator: value => {

        return value !== ''
      }
    },
    endTimeFieldName: {
      default: 'end_time',
      format: String
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
  },
  methods: {
    handleHours(e) {
      if (e.key) {
        if (e.key==='ArrowUp') {
          this.addHours()
        } else if (e.key==='ArrowDown') {
          this.subtractHours()
        }
      } else if (e.type==='click') {
        this.addHours()
      }
    },
    handleMinutes(e) {
      if (e.key) {
        if (e.key==='ArrowUp') {
          this.addMinutes()
        } else if (e.key==='ArrowDown') {
          this.subtractMinutes()
        }
      } else if (e.type==='click') {
        this.addMinutes()
      }
    },
    cyclePeriod(whichTime) {
      this[whichTime] = moment(this[whichTime], fmt).add(12, 'hours')
    },
    addHours(e) {
      this.startTime = moment(this.startTime, fmt).add(hours, 'hours')
    },
    subtractHours(e) {
      this.startTime = moment(this.startTime, fmt).subtract(hours, 'hours')
    },
    addMinutes(e) {
      this.startTime = moment(this.startTime, fmt).add(minutes, 'minutes')
    },
    subtractMinutes(e) {
      this.startTime = moment(this.startTime, fmt).subtract(minutes, 'minutes')
    },
  }
}
</script>

<style scoped lang="scss">

$tvc-ltblue: #00aeef;
$tvc-blue: #004b98;
$field-border: #aaa;
$input-focus-text: $tvc-blue;

.time-display {
  display: inline-flex;
  border: 1px solid $field-border;
  padding: 0 0.875rem;
  border-radius: 4px;
}

.input-time {
  border: 0;
  padding: 0.5rem 0.125rem;
  text-align: center;
  max-width: 1.75rem;
  font-size: 1rem;
  background-color: transparent;
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
    border-top: solid 2px $tvc-ltblue;
    border-bottom: solid 2px $tvc-ltblue;
  }
}

.colon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5rem;
  text-align: center;
}

.time-button {
  background-color: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: #eaeaea;
  }
}
</style>
