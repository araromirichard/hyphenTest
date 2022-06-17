<template>
  <v-snackbar
    v-model="toast.show"
    :timeout="toast.timeout"
    top
    right
    :color="toast.sclass"
  >
    {{ toast.message }}
    <v-btn small outlined dark icon class="ml-4">
      <v-icon small v-if="toast.sclass == 'success'"> mdi-check-bold </v-icon>
      <v-icon small v-if="toast.sclass == 'error'"> mdi-close-box </v-icon>
      <v-icon small v-if="toast.sclass == 'warning'"> mdi-alert </v-icon>
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
