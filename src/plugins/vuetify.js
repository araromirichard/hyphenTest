import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#19283D",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#16BE98",
        highlight: "#e8f9f6",
        warning: "#FFC107",
        primer: "#F8F7F4",
        heading: "#596A73",
        label: "#002338",
        avatar: "#301F78",
        disabled: "#7F919B",
      },
    },
    options: { customProperties: true },
  },
});
