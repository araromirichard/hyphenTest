<template>
  <v-btn text :color="color" class="text-capitalize">
    <span class="pr-2"> {{ btnTitle }} </span>
    <simple-line-icons
      icon="reload"
      :color="color"
      style="
        font-family: simple-line-icons;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
      "
      no-svg
    />
  </v-btn>
</template>

<script>
export default {
  name: "resetBtn",
  props: {
    btnTitle: String,
    color: String,
  },
};
</script>

<style scoped></style>
