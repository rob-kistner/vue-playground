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
        <start-end-times-luxon />
        <number-input name="mynum" />
      </form>
    </div>
  </div>
</template>

<script>
import StartEndTimesLuxon from './FormControls/StartEndTimesLuxon'
import NumberInput from './FormControls/NumberInput'

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    StartEndTimesLuxon,
    NumberInput
  }
}
</script>

<style scoped lang="scss">
  
</style>
