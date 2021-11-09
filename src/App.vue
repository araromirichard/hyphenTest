<template>
  <v-app>
    <MainLayout />
<<<<<<< HEAD
    <v-main class="primer" >
=======
    <v-main class="primer">
      <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown" mode="out-in">
>>>>>>> 7f44d07fc6b22fb1150d11b6f9051be2f88132f8
      <router-view />
       </transition>
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
<style>
 @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
 </style>
