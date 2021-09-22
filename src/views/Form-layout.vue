<template>
  <v-row no-gutters>
    <v-col cols="12" sm="8" height="100%" class="d-flex justify-center">
      <v-scroll-y-transition leave-absolute mode="out-in">
        <SignUp v-if="isSignup" class="ma-auto" />
        <Login v-else-if="isLogin" />
      </v-scroll-y-transition>
    </v-col>
    <v-col cols="12" sm="4" height="100%" class="white full-height"></v-col>
  </v-row>
</template>

<script>
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default {
  name: "FormLayout",

  components: {
    Login,
    SignUp,
  },

  computed: {
    isSignup() {
      return this.$route.name === "SignUp";
    },
    isLogin() {
      return this.$route.name === "Login";
    },
  },
};
</script>

<style ]>
.full-height {
  height: 100%;
  min-height: 100vh;
}
</style>
