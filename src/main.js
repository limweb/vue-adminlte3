window.$ = window.jQuery = window.jquery = require("jquery");
window.adminlte = require("admin-lte");
import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import "bootstrap";
Vue.config.productionTip = false;
window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
