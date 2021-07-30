<template>
  <v-app>
    <MainLayout />
    <v-main class="primer">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "./views/MainLayout.vue";

export default {
  name: "App",

  components: {
    MainLayout,
  },

  data: () => ({
    methods: {
      //
    },
  }),
};
</script>
