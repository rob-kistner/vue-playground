<template>
  <main class="section">
    <appear />
  </main>
</template>

<script>
  import Appear from '@/components/animations/Appear.vue'

  export default {
    name: "app",
    data() {
      return {

      }
    },
    components: {
      Appear
    },
  }
</script>

<style lang="stylus">
  @import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css')
  @import url('http://robk-cdn.s3-website-us-east-1.amazonaws.com/css/spacing.css')
</style>
