import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import {VueMasonryPuglin} from 'vue-masonry'

Vue.config.productionTip = false

//Vue.use(VueMasonryPuglin)
console.log(VueMasonryPuglin);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

