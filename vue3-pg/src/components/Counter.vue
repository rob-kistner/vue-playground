<template>
  <div class="counter">
    <h3>Counter</h3>
    <p>Count: <strong>{{ count }}</strong></p>
    <p>Count Double: <strong>{{ countDouble }}</strong></p>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  import { ref, computed, watch } from 'vue'

  export default {
    name: 'Counter',
    setup() {

        // --- COUNTER -------------------------------------
        // variable
      let count = ref(0)
        // computed variable
      const countDouble = computed(() => count.value * 2)
        // watcher
      watch(count, newVal => {
        console.log('Count changed', newVal)
        if(newVal == 5) {
          changeMessage()
        }
      })
        // methods
      const inc = () => count.value += 1
      const dec = () => count.value -= 1

        // --- MESSAGE -------------------------------------
        // variable
      let msg = ref('default text')
        // watcher
      watch(msg, newVal => {
        console.log('msg changed', newVal)
      })
        // method
      const changeMessage = () => {
        msg.value = 'msg changed'
      }

        // ----------------------------------------
      return {
        count,
        inc,
        dec,
        countDouble,
        msg,
        changeMessage
      }
    }

  }
</script>

<style lang="stylus" scoped>
  
  .counter
    display:  inline-block
    clear:    both
    border:   6px solid #ddd
    padding:  2rem
    margin:   2rem 0

  h3
    margin-top: 0

  button
    border:           none
    font-size:        1.5rem
    background-color: #666
    color:            #fff
    border-radius:    3px
    min-width:        30px
    margin-left:      0.5rem

  button:first-child
    background-color  red

</style>