<template>
  <div class="brews">
    <h2>Search Brews</h2>
    <section>
      <form @submit.prevent="submitted">
        <input type="text" v-model="val" />
        <button>Search</button>
      </form>

      <div v-if="list.length > 0">
        <div class="search-results">
          <ul v-for="brewery in list" :key="brewery.id">
            <li>
              <h3 class="brew">{{brewery.name}}</h3>
            </li>
            <li>
              <span class="title">Brewery Type: </span>
              <span class="brew">{{brewery.brewery_type}}</span>
            </li>
            <li>
              <span class="title">Address: </span>
              <span class="brew">{{brewery.street}}, {{brewery.city}}, {{brewery.state}} {{brewery.postal_code}}</span>
            </li>
            <li>
              <span class="title">Website:</span>
              <a :href="brewery.website_url" target="_new">
                <span class="brew">{{brewery.website_url}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p v-else class="no-results">Enter a brewery search term above</p>
    </section>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/composition-api'
import useBrewList from '@/composables/use-brew-list'

export default {
  setup() {
    const { val, list, submitted } = useBrewList()
    return { val, list, submitted }
  },
};
</script>

<style lang="sass">
@import '@/assets/search-brews'
</style>