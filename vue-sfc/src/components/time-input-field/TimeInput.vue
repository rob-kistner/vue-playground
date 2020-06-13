<template>
  <div id="app" class="section">
    <div class="container">
      <form>
        <div class="field">
          <label class="label">Test TextField</label>
          <div class="control">
            <input type="text" class="input" placeholder="placeholder text">
          </div>
        </div>
        <start-end-times />
        <number-input name="mynum" />
      </form>
    </div>
  </div>
</template>

<script>
import StartEndTimes from './StartEndTimesLuxon'
import NumberInput from './NumberInput'

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    StartEndTimes,
    NumberInput
  }
}
</script>

<style scoped lang="scss">
  
</style>
