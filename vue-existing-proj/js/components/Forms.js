// template markup will be in the calling .html file
// by adding 'inline-template' param to the component tag
// ------------------------------------------------------
Vue.component('text-input', {
  template: '#text-input',
  name: "text-input",
  data() {
    return {
      errormsg: ''
    }
  },
  props: {
    id: {
      default: null
    },
    label: {
      default: 'Label'
    },
    placeholder: {
      default: 'Placeholder'
    },
    model: {
      default: 'model'
    }
  },
  methods: {
    changeHandler() {
      this.model = this.model.trim()
      console.log(this.model)
    }
  }
})

var vm = new Vue({ el: '#app' })
