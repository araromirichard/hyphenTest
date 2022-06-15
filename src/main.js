import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import appMixin from "./plugins/app-mixin";
import DateFilter from "./filters/date";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import { VueFormBuilderPlugin } from "v-form-builder";
import "../src/assets/styles/formbuilder.css";
import "v-form-builder/dist/v-form-builder.css";
import JsonCSV from "vue-json-csv";
import VueSkeletonLoader from "skeleton-loader-vue";
import Clipboard from "v-clipboard";

import SimpleLineIcons from "vue-simple-line";
Vue.config.productionTip = false;

//imported components
Vue.component("simple-line-icons", SimpleLineIcons);

//importing the vue-validate globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// export json to csv
Vue.component("downloadCsv", JsonCSV);

// Register the vue-skeleton-loader
Vue.component("vue-skeleton-loader", VueSkeletonLoader);

// install now
Vue.use(VueFormBuilderPlugin);
Vue.use(Clipboard);
//register date filter
Vue.filter("date", DateFilter);

Vue.mixin(appMixin);

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");