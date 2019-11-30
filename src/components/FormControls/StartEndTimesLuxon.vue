<template>
  <div class="start-end-times">

    <div class="field">
      <label class="label">Start Time</label>
      <div class="control time-display start-time">
        <input type="text"
          id="startHours"
          name="startHours"
          class="input-time hrs"
          :value="startHour"
          readonly
          @keyup="handleHours($event, 'startTime')"
          @click="handleHours($event, 'startTime')"
        >
        <span class="colon">:</span>
        <input type="text"
          id="startMins"
          name="startMins"
          class="input-time mins"
          :value="startMinutes"
          readonly
          @keyup="handleMinutes($event, 'startTime')"
          @click="handleMinutes($event, 'startTime')"
        >
        <input type="text"
          id="startAmPm"
          name="startAmPm" 
          class="input-time ampm"
          :value="startAmPm"
          readonly
          @click="switchMeridien('startTime')"
          @keyup.up="switchMeridien('startTime')"
          @keyup.down="switchMeridien('startTime')"
        >
        <input type="hidden"
          :id="startTimeFieldName"
          :name="startTimeFieldName"
          :value="startTimeFormatted"
        >
      </div>
    </div>

    <div class="field">
      <label class="label">End Time</label>
      <div class="control time-display end-time">
        <input type="text"
          id="endHours"
          name="endHours"
          class="input-time hrs"
          :value="endHour"
          readonly
          @keyup="handleHours($event, 'endTime')"
          @click="handleHours($event, 'endTime')"
        >
        <span class="colon">:</span>
        <input type="text"
          id="endMins"
          name="endMins"
          class="input-time mins"
          :value="endMinutes"
          readonly
          @keyup="handleMinutes($event, 'endTime')"
          @click="handleMinutes($event, 'endTime')"
        >
        <input type="text"
          id="endAmPm"
          name="endAmPm"
          class="input-time ampm"
          :value="endAmPm"
          readonly
          @click="switchMeridien('endTime')"
          @keyup.up="switchMeridien('endTime')"
          @keyup.down="switchMeridien('endTime')"
        >
        <input type="hidden"
          :id="endTimeFieldName"
          :name="endTimeFieldName"
          :value="endTimeFormatted"
        >
      </div>
    </div>

    <div class="field">
      <label class="label">Total Time</label>
      <div class="control">
        <input type="text"
          id="endHours"
          name="endHours"
          class="input is-static total-time"
          :value="totalTimeFormatted"
          readonly
          tabindex="-1"
        >
        <input type="hidden"
          :id="totalTimeFieldName"
          :name="totalTimeFieldName"
          :value="totalTime"
        >
      </div>
    </div>

  </div>
</template>

<script>
/* ----------------------------------------
  USAGE:
  ----------------------------------------
    <start-end-times-luxon></start-end-times-luxon>
      or
    <start-end-times-luxon />
---------------------------------------- */
import { DateTime } from 'luxon'

// local constants
const MAX_HOURS = 23 // 11 pm
const MIN_HOURS = 0  // 12 am
const MAX_MINUTES = (23 * 60) + 45 // 11:45 pm
const MIN_MINUTES = 0 // 12 am
const DATE_FULL = 'yyyy-MM-dd h:mm a' // entire date format
const DATE_ONLY = 'yyyy-MM-dd' // just the date format
const TIME_FULL = 'h:mm a' // entire date format

export default {
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  },
  props: {
    startTimeFieldName : { default: 'start_time' },
    endTimeFieldName   : { default: 'end_time' },
    totalTimeFieldName : { default: 'total_time' },
    startTimeValue     : { default: '9:00 am' },
    endTimeValue       : { default: '10:30 am' },
    entryDateValue     : { default: DateTime.local().toFormat(DATE_ONLY) }
  },
  mounted() {
    this.startTime = this.setDateTime( this.startTimeValue )
    this.endTime = this.setDateTime( this.endTimeValue )
  },
  computed: {
    startHour() {
      return DateTime.fromISO(this.startTime).toFormat('h')
    },
    startMinutes()
    {
      return DateTime.fromISO(this.startTime).toFormat('mm')
    },
    startAmPm()
    {
      return DateTime.fromISO(this.startTime).toFormat('a')
    },
    startTimeFormatted()
    {
      return DateTime.fromISO(this.startTime).toFormat(TIME_FULL)
    },
    endHour()
    {
      return DateTime.fromISO(this.endTime).toFormat('h')
    },
    endMinutes()
    {
      return DateTime.fromISO(this.endTime).toFormat('mm')
    },
    endAmPm()
    {
      return DateTime.fromISO(this.endTime).toFormat('a')
    },
    endTimeFormatted()
    {
      return DateTime.fromISO(this.endTime).toFormat(TIME_FULL)
    },
    totalTime()
    {
      let start = DateTime.fromISO(this.startTime)
      let end = DateTime.fromISO(this.endTime)
      return end.diff(start, 'hours').toObject().hours
    },
    totalTimeFormatted()
    {
      return this.totalTime + ((this.totalTime <= 1) ? ' hr' : ' hrs')
    },
  },
  watch: {
    startTime: function() {
      if (!this.startEndValid()) this.endTime = this.startTimes
    },
    endTime: function() {
      if (!this.startEndValid()) this.endTime = this.startTime
    },
  },
  methods: {
    // compile datetime and time, allows resetting date
    setDateTime( timeToUse )
    {
      let prefix = this.entryDateValue + ' '
      return DateTime.fromFormat(prefix + timeToUse, DATE_FULL)
    },
    addHours( whichTime, hoursToAdd = 1 )
    {
      let tmp = this[whichTime].plus({ hours: hoursToAdd })
      this[whichTime] = this.setDateTime(tmp.toFormat(TIME_FULL))
    },
    minusHours( whichTime, hoursToMinus = 1 )
    {
      let tmp = this[whichTime].minus({ hours: hoursToMinus })
      this[whichTime] = this.setDateTime(tmp.toFormat(TIME_FULL))
    },
    addMinutes( whichTime, minutesToAdd = 15 )
    {
      let tmp = this[whichTime].plus({ minutes: minutesToAdd })
      if (!((this.getTotalMinutes(whichTime) + minutesToAdd) > MAX_MINUTES))
        this[whichTime] = this.setDateTime(tmp.toFormat(TIME_FULL))
    },
    minusMinutes( whichTime, minutesToMinus = 15 )
    {
      let tmp = this[whichTime].minus({ minutes: minutesToMinus })
      if (!((this.getTotalMinutes(whichTime) - minutesToMinus) < MIN_MINUTES))
        this[whichTime] = this.setDateTime(tmp.toFormat(TIME_FULL))
    },
    getTotalMinutes( whichTime )
    {
      return (this[whichTime].hour * 60) + this[whichTime].minute
    },
    // swap AM & PM time
    // @returns DateTime obj
    switchMeridien( whichTime ) {
      let tmp;
      if ((this[whichTime].hour + 12) > MAX_HOURS) {
        tmp = this[whichTime].minus({ hours: 12 })
      } else {
        tmp = this[whichTime].plus({ hours: 12 })
      }
      this[whichTime] = this.setDateTime(tmp.toFormat(TIME_FULL))
    },
    // Checks if end time is later than start time
    // @returns boolean
    startEndValid() {
      let start = DateTime.fromISO(this.startTime)
      let end = DateTime.fromISO(this.endTime)
      return end.diff(start, 'hours')
        .toObject()
        .hours >= MIN_HOURS
    },
    // update hours
    handleHours(e, whichTime) {
      if (e.key) {
        if (e.key==='ArrowUp') {
          this.addHours(whichTime)
        } else if (e.key==='ArrowDown') {
          this.minusHours(whichTime)
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
          this.minusMinutes(whichTime)
        }
      } else if (e.type==='click') {
        this.addMinutes(whichTime)
      }
    },
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
  background-color: #fff;
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
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border-color: $tvc-ltblue;
  }
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