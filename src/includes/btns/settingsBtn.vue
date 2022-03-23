<template>
  <v-btn outlined elevation="1" color="#19283D" class="px-3 text-capitalize">
    {{ btnTitle }}
  </v-btn>
</template>

<script>
export default {
  name: "setting-btn",
  props: {
    btnTitle: String,
  },
};
</script>

<style scoped></style>
