<template>
  <v-app>
    <MainLayout />
    <v-main class="primer" >
      <router-view />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "./includes/Snackbar.vue";
import MainLayout from "./views/MainLayout.vue";

export default {
  name: "App",

  components: {
    MainLayout,
    Snackbar,
  },

  data: () => ({
    methods: {
      //
    },
  }),
};
</script>
