<template>
  <v-card elevation="3" width="100%"> </v-card>
</template>

<script>
export default {
  props: {
    height: String,
    maxHeight: String,
  },
};
</script>

<style scoped>
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
