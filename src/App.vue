<template>
  <div id="app" class="section">
    <div class="container">
      <start-end-times></start-end-times>
    </div>
  </div>
</template>

<script>
import StartEndTimes from './components/StartEndTimes'

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    StartEndTimes
  }
}
</script>

<style lang="scss">
  
</style>
