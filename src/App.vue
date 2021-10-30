<template>
  <v-app>
    <MainLayout />
    <v-main class="primer">
      <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown" mode="out-in">
      <router-view />
       </transition>
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
<style>
 @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
 </style>
