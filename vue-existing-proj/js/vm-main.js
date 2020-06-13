
// template markup will be in the calling .html file
// by adding 'inline-template' param to the component tag
Vue.component('greeting',
{
  template: '#greeting',
  data() {
    return {
      myval: 'one',
      myData: []
    }
  },
  props: [
    'newprop'
  ],
  methods: {
    doMethod() {
      console.log(`myval is ${this.myval}`)
    }
  },
  created() {
    axios.get('./js/data/testdata.json')
      .then(res => this.myData = res.data)
  }
})

/* ----------------------------------------
  Render main app
---------------------------------------- */
const vm = new Vue({
  el: '#app'
})
