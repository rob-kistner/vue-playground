<template>
  <div>
    <input type="text" name="recfilter" id="recfilter" v-model="filtertext" v-on:keyup="filterRecs">
    <ul>
      <li v-for="record in records" :key="record.id">{{record}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      url: '/data/clients.json',
      records: [],
      filtertext: ''
    }
  },
  mounted() {
    axios
      .get(this.url)
      .then(res => {
        this.records = res.data
      })
  },
  methods: {
    filterRecs(e) {
      const myArray = {"1": "CO", "2": "XY", "3": "AB"}
      console.log(Object.values(myArray).includes(e.target.value))
      // console.log(Object.values(myArray).includes(this.filtertext))
      // let newRecs = this.records.filter(item => {
      //   return Object.values(item).includes(_this.filtertext)
      // })
    }
  }
}
</script>

<style>

</style>
