import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(Vuex);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    address: null
  },
  mutations: {
    setAddress (state, addressIn) {
      state.address = addressIn
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
