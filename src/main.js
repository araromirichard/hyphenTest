import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DateFilter from "./filters/date";
import { VueFormBuilderPlugin } from "v-form-builder";
import "../src/assets/styles/formbuilder.css";
import "v-form-builder/dist/v-form-builder.css";
import JsonCSV from "vue-json-csv";

import SimpleLineIcons from "vue-simple-line";
Vue.config.productionTip = false;

//imported components
Vue.component("simple-line-icons", SimpleLineIcons);

// export json to csv
Vue.component("downloadCsv", JsonCSV);

// install now
Vue.use(VueFormBuilderPlugin);

//register date filter
Vue.filter("date", DateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
