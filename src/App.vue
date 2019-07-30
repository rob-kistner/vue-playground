<template>
  <div id="app" class="section">
    <div class="container">
      <form>
        <!-- <start-end-times
          startTimeFieldName="fldStartTime"
          defaultStartTime="9:15 AM"
          defaultEndTime="11:30 AM"
          >
        </start-end-times> -->
        <div class="field">
          <label class="label">Test Field</label>
          <div class="control">
            <input type="text" class="input" placeholder="placeholder text">
          </div>
        </div>
        <start-end-times-luxon>
        </start-end-times-luxon>
      </form>
    </div>
  </div>
</template>

<script>
// import StartEndTimes from './components/StartEndTimes'
import StartEndTimesLuxon from './components/StartEndTimesLuxon'

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    // StartEndTimes,
    StartEndTimesLuxon,
  }
}
</script>

<style scoped lang="scss">
  
</style>
