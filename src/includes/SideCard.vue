<template>
  <div>
    <v-chip color="#F9EED2" text-color="#E3AA1C" class="px-4 mx-0" x-small>
      {{ chip }}
    </v-chip>
    <div
      class="mt-3"
      style="
        max-width: 163px;
        height: 40px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 20px;
        color: #7f919b;
      "
    >
      {{ Text }}

      <v-btn
        dark
        color="#311B92"
        text
        class="text-lowercase pl-8"
        style="
          position: absolute;
          width: 47px;
          height: 20px;
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 10px;
          line-height: 20px;
          color: #311b92;
        "
      >
        click here
        <v-icon class="pt-1" x-small style="width: 8px; height: 6.36px"
          >mdi-arrow-right-thick</v-icon
        >
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Text: {
      type: String,
      required: true,
    },
    chip: {
      type: String,
      required: true,
    },
  },
  name: "SideCard",
};
</script>

<style scoped></style>
