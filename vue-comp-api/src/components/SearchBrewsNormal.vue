<template>
  <div class="brews">

   <h2>Search Brews</h2>

   <section>

     <form @submit.prevent="submitted">
       <input type="text" v-model="val">
       <button>Search</button>
     </form>

    <div v-if="breweries.length > 0">
      <div class="search-results">
       <ul v-for="brewery in breweries" :key="brewery.id">
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
           <span class="title">Website: </span>
           <a :href="brewery.website_url" target="_new"><span class="brew">{{brewery.website_url}}</span></a>
         </li>
       </ul>
      </div>
    </div>
    <p v-else class="no-results">Enter a brewery search term above</p>
   </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        val: '',
        breweries: [],
      }
    },
    methods: {
      async submitted(e) {
        e.preventDefault();
        const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${this.val}`)
        const json = await response.json()
        console.log(json)
        this.breweries = json
      }
    }
  }
</script>

<style lang="sass">
  
  $form-control-bg: #8be3ce
  $form-control-color: #04412b

  // search form
  @mixin form-control()
    font-size: 1rem
    padding: .375rem .75rem
    color: $form-control-color
    border: none
    border-radius: 4px
  button
    @include form-control
    margin-left: 1rem
    background: $form-control-bg
  input[type="text"]
    @include form-control

    // results list
  ul
    padding: .5rem 1rem
    list-style-type: none
    margin: 1rem 0
    background: #333
    border-radius: 6px
  li
    margin: 0 0 0.5rem
  .search-results
    padding: 1.5rem 0
  .title
    //
  .brew
    font-weight: 600
    color: #fff
  .no-results
    margin: 2rem 0
    font-size: 1.2rem
</style>