<template>
  <div class="modal" @keypress="$emit('close')">
    <slot></slot>
    <button @click="$emit('close')">Dismiss</button>
  </div>
  <div class="modal-cover"></div>
</template>

<script>
  export default {
    name: 'Modal',
      // declaring events component will emit
    emits: [ 'close' ]
  }
</script>

<style lang="stylus" scoped>
  .modal
    position: absolute
    left: 50%
    top: 50%
    z-index 1
    -webkit-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)
    width: 80%
    max-width: 640px
    background-color: white
    margin: 0 auto
    padding: 1rem 2.5rem
    border-radius: 0.4rem
    box-shadow: 0 0 15px rgba(black, 0.2),
                0 0 7px rgba(black, 0.15)

    & *.first-child
      margin-top: 0
    & *.last-child
      margin-bottom: 0

    // doesn't work in 'scoped' styles, because the 
    // 'p' tags belong to the slot defined in app…
    p
      font-size: 1.4rem
      font-weight: 300
      line-height: 1.5
    // instead use '::v-slotted()' to target tags
    // inside a slot within the component
    ::v-slotted(p)
      font-size: 1.4rem
      font-weight: 300
      line-height: 1.5

    button
      padding: 0.5rem 1rem
      font-size: 1.1rem
      text-transform: uppercase

  .modal-cover
    position absolute
    top 0
    left 0
    width 100vw
    height 100vh
    background-color rgba(0,0,0,0.4)
</style>