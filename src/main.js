import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import SimpleLineIcons from "vue-simple-line";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  SimpleLineIcons,
  render: (h) => h(App),
}).$mount("#app");
