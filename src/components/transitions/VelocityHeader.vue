<template>
  <div>
    <h1 ref="hdr" class="is-size-1 has-text-centered">
      Header
    </h1>
    <p ref="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus laborum assumenda laboriosam aspernatur pariatur harum explicabo maiores ex itaque.</p>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'VelocityHeader',
  mounted() {
    const el = this.$refs;
    el.para
      .velocity(
        { opacity: 1 },
        { duration: 500, delay: 1000 }
      )
    el.hdr
      .velocity(
        { opacity: 1 },
        { duration: 1500, delay: 500 }
      )
      .velocity(
        { top: '-15px', opacity: 0 },
        { duration: 250, delay: 3000 }
      )
      .then(() => {
        el.para.velocity(
          { opacity: 0 },
          { duration: 500 }
        )
      })
  }
}
</script>

<style lang="scss">
  p { opacity: 0 }
</style>