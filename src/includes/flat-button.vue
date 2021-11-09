<template>
  <v-btn
    :disabled="disabled"
    :to="to"
    :height="height"
    :width="width"
    color="primary"
    elevation="20"
    large
    class="text-capitalize mx-auto"
  >
    {{ label }}</v-btn
  >
</template>

<script>
export default {
  name: "FlatButton",
  props: {
    to: {
      type: String,
    },
    disabled: {
      type: Boolean,
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
