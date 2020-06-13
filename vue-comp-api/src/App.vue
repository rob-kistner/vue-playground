<template>
  <div id="app" class="container">
    <SearchBrews />
  </div>
</template>

<script>
import SearchBrews from '@/components/SearchBrewsCompApi'

export default {
  name: 'App',
  components: {
    SearchBrews
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles'
</style>
