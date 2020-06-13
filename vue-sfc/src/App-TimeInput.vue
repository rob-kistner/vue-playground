<template>
  <div class="main has-background-light content">
    <TimeInput />
  </div>
</template>

<script>
import TimeInput from './components/TimeInput'

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    TimeInput
  }
}
</script>

<style lang="scss">
  @import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css');

  .main {
    height: 100vh;
  }

</style>
