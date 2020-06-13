/* es-lint-disable */
import Vue from 'vue'
import Vuelidate from 'vuelidate'
// import './plugins/axios'
import App from './App.vue'

import 'bulma/css/bulma.css';

Vue.config.productionTip = false

Vue.use(Vuelidate)

const VM = new Vue({
  render: h => h(App)
}).$mount('#app')
