<template>
  <v-row no-gutters>
    <v-col cols="12" sm="8" height="100%" class="d-flex justify-center">
      <Login
    /></v-col>
    <v-col cols="12" sm="4" height="100%" class="white full-height"></v-col>
  </v-row>
</template>

<script>
import Login from "../components/Login";

export default {
  name: "FormLayout",

  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
.full-height {
  height: 100%;
  min-height: 100vh;
}
</style>
