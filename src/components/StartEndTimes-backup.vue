<template>
  <div>
    <div class="start-time">
      <a id="startHrs" class="time-display" @click="incrementStartHrs">
        {{startHrs}}
      </a>
      <span class="colon">:</span>
      <a id="startMins" class="time-display" @click="incrementStartMins">
        {{startMins}}
      </a>
      <button id="startAmPm" class="time-button" @click="changeStartAmPm">{{startAmPm}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startHoursIdx: 8,
      startMinutesIdx: 0,
      startAmPm: 'AM',
      endHoursIdx: 8,
      endMinutesIdx: 0,
      endAmPm: 'AM',
      minutesVals: ['00','15','30','45'],
      hourVals: ['1','2','3','4','5','6','7','8','9','10','11','12']
    }
  },
  computed: {
    startHrs() {
      return this.hourVals[this.startHoursIdx]
    },
    startMins() {
      return this.minutesVals[this.startMinutesIdx]
    }
  },
  methods: {
    decrementStartHrs() {
      if(this.startHoursIdx === 0) {
        this.startHoursIdx = 11
      } else {
        this.startHoursIdx--
      }
    },
    incrementStartHrs() {
      if(this.startHoursIdx === this.hourVals.length-1) {
        this.startHoursIdx = 0
      } else {
        this.startHoursIdx++
      }
    },
    changeStartAmPm() {
      if(this.startAmPm === 'AM') {
        this.startAmPm = 'PM'
      } else {
        this.startAmPm = 'AM'
      }
    },
    decrementStartMins() {

    },
    incrementStartMins() {

    },
  }
}
</script>

<style scoped lang="scss">
.time-field {
  display: flex;
  border: 1px solid #aaa;
  padding: 0.25rem;
  border-radius: 4px;
}
.time-display {
  display: flex;
  width: 1.5rem;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  &:focus {
    border: 1px dotted red;
  }
}
.start-time {
  display: flex;
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
