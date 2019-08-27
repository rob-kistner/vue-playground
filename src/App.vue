<template>
  <div id="app" class="section">
    <div class="container">
      <form>
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
