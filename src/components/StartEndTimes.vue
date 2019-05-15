<template>
  <div>
    <div class="start-time">
      <input type="number"
        id="start-time-hr"
        name="start-time-hr"
        class="input time"
        @input="handleHour"
        :value="starttime.hour"
        >
      <input type="number"
        id="start-time-min"
        name="start-time-min"
        min="0"
        max="45"
        step="15"
        class="input time"
        @keyup="handleMinutes"
        :value="starttime.minutes"
        readonly
        >
      <input type="button"
        id="start-time-ampm"
        name="start-time-ampm"
        class="button ampm"
        @click.prevent="handleAMPMClick"
        @keypress.prevent="handleAMPMKeys"
        :value="starttime.ampm"
        >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starttime: {
        hour: '9',
        minutes: '00',
        ampm: 'AM'
      },
      endtime: {
        hour: '9',
        minute: '00',
        ampm: 'AM'
      },
      legitMinutes: [0, 15, 30, 45]
    }
  },
  methods: {
    handleHour(e) {
      // console.log(e)
    },
    handleMinutes(e) {
      console.log(e.key)
      // if(e.target.value === '0') e.target.value = '00'
      // if(!this.legitMinutes.includes(parseInt(e.target.value))) {
      //   e.target.value == '00'
      // }
    },
    handleAMPMClick(e) {
      console.log(e)
    },
    handleAMPMKeys(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.start-time {
  display: flex;
  max-width: 50%;
}
.time {
  flex: 2 0;
  text-align: center;
}
.ampm {
  flex: 1 0;
}
</style>
