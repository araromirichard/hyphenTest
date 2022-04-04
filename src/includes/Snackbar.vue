<template>
  <v-snackbar
    v-model="toast.show"
    :timeout="toast.timeout"
    top
    right
    text
    :color="toast.sclass"
  >
    {{ toast.message }}
    <v-spacer></v-spacer>
    <v-btn :color="toast.sclass" text click="showToast({ show: false })">
      <v-icon left v-if="toast.sclass == 'success'"> mdi-check-bold </v-icon>
      <v-icon left v-if="toast.sclass == 'error'"> mdi-close-box </v-icon>
      <v-icon left v-if="toast.sclass == 'warning'"> mdi-alert </v-icon>
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Snackbar",

  data() {
    return {};
  },
  computed: {
    ...mapGetters({ toast: "ui/toast" }),
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
  },
};
</script>

<style></style>
