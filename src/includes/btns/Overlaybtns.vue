<template>
  <v-btn
    dark
    :width="width"
    :height="height"
    style="
      padding: 14px;
      background: var(--v-primary-base);
      box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
      border-radius: 4px;
    "
  >
    <simple-line-icons
      :icon="icon"
      color="#FFFFFF"
      style="
        font-family: simple-line-icons;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
      "
      no-svg
    />
    <span
      class="text-capitalize py-4 pl-3"
      style="
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.636364px;
        color: #ffffff;
      "
      >{{ btnTitle }}</span
    >
  </v-btn>
</template>

<script>
export default {
  props: ["btnTitle", "icon", "width", "height"],
};
</script>

<style scoped></style>
