<template>
  <v-list dense max-height="24px">
    <v-subheader
      class="py-10 pl-16"
      style="
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: rgb(86 95 101);
      "
    >
      Basic Data
    </v-subheader>

    <v-list-item>
      <v-list-item-title
        class="pl-16"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #301f78;
        "
        >Invoice no.</v-list-item-title
      >

      <v-spacer></v-spacer>
      <v-text-field
        hide-details="auto"
        full-width
        disabled
        solo
        flat
        dense
        background-color="transparent"
        class="align-center"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          color: #7f919b;
        "
        placeholder="Enter Invoice no"
      ></v-text-field>
    </v-list-item>
    <v-divider
      inset
      style="
        border: 1px dashed rgba(48, 31, 120, 0.1);
        transform: rotate(-0.65deg);
      "
    ></v-divider>
    <v-list-item>
      <v-list-item-title
        class="pl-16"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #301f78;
        "
        >Date</v-list-item-title
      >

      <v-spacer></v-spacer>
      <v-text-field
        hide-details="auto"
        full-width
        disabled
        solo
        flat
        dense
        background-color="transparent"
        class="align-center"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          color: #7f919b;
        "
        placeholder="Enter Date"
      ></v-text-field>
    </v-list-item>
    <v-divider
      inset
      style="
        border: 1px dashed rgba(48, 31, 120, 0.1);
        transform: rotate(-0.65deg);
      "
    ></v-divider>
    <v-list-item>
      <v-list-item-title
        class="pl-16"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #301f78;
        "
        >VAT</v-list-item-title
      >

      <v-spacer></v-spacer>
      <v-text-field
        hide-details="auto"
        full-width
        disabled
        solo
        flat
        dense
        background-color="transparent"
        class="align-center"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          color: #7f919b;
        "
        placeholder="VAT Amount"
      ></v-text-field>
    </v-list-item>
    <v-divider
      inset
      style="
        border: 1px dashed rgba(48, 31, 120, 0.1);
        transform: rotate(-0.65deg);
      "
    ></v-divider>
    <v-list-item>
      <v-list-item-title
        class="pl-16"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #301f78;
        "
        >Due Date</v-list-item-title
      >

      <v-spacer></v-spacer>
      <v-text-field
        hide-details="auto"
        full-width
        disabled
        solo
        flat
        dense
        background-color="transparent"
        class="align-center"
        style="
          text-align: right;
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          color: #7f919b;
        "
        placeholder="Enter Due Date"
      ></v-text-field>
    </v-list-item>
    <v-divider
      inset
      style="
        border: 1px dashed rgba(48, 31, 120, 0.1);
        transform: rotate(-0.65deg);
      "
    ></v-divider>
  </v-list>
</template>

<script>
export default {
  name: "BasicData",
  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
.v-text-field {
  width: 280px;
}
</style>
