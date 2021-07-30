<template>
  <v-btn
    :to="to"
    :height="height"
    :width="width"
    block
    color="primary"
    elevation="20"
    large
    class="text-capitalize mx-auto"
    @click="submit"
  >
    {{ label }}</v-btn
  >
</template>

<script>
export default {
  props: {
    to: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
