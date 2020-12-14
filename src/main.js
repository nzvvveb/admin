import Vue from "vue";
import BootstrapVue from "bootstrap-vue"
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Default from './layout/wrappers/BaseLayout.vue';
import Pages from './layout/wrappers/PagesLayout.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);


Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
