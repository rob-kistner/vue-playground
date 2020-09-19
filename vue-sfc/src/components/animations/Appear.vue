<template>
  <div>
     <a href="#" class="button is-primary" @click="show = !show">
       Show It!
     </a>
    <transition name="fade">
      <p v-if="show">Dictum sagittis sociosqu commodo tempor pellentesque cursus rutrum auctor elementum, placerat dapibus augue gravida eleifend amet volutpat habitasse suspendisse, cras enim ipsum convallis montes aenean netus orci. Viverra maecenas quam libero a efficitur platea, porttitor ultrices lectus dictumst porta natoque sed, fringilla quis mi varius aptent. Mattis sed risus vehicula scelerisque maecenas tellus, ultricies augue interdum ipsum proin mus eget, efficitur taciti varius elementum adipiscing. Tellus commodo sodales penatibus fusce porttitor facilisis ornare curae, per hac aliquam phasellus nunc blandit.</p>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style scoped lang="stylus">

  $txt-offset = 20px
  $trans-params = 2s

  div
    & p
      padding: 2rem
      position: relative
  .button
    display: inline-block
    margin-bottom: 2rem
  
  .fade-enter
    transform-origin: 0 top
    transform: scaleY(0)
    opacity: 0
  .fade-enter-active
    transition: all $trans-params ease-in-out
  .fade-enter-to
    transform: scaleY(1)
    opacity: 1

  .fade-leave
    transform: scaleY(1)
    transform-origin: 0 top
    opacity: 1
  .fade-leave-active
    transition: all $trans-params ease-in-out
  .fade-leave-to
    transform: scaleY(0)
    transform-origin: 0 top
    opacity: 0

</style>