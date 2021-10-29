<template>
  <div class="ml-10">
    <div class="mx-14 my-0 pt-10 d-flex justify-sm-space-between">
      <h3
        class="text-bold"
        style="
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 39px;
          color: #301f78;
        "
      >
        Forms
      </h3>
      <v-spacer></v-spacer>
      <v-btn
        height="54"
        width="121"
        color="primary"
        elevation="20"
        large
        class="text-capitalize mx-auto"
      >
        <img :src="require('@/assets/pbot_icons/file.svg')" />
        <span
          style="
            padding-left: 8px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: 0.636364px;
            color: #ffffff;
          "
        >
          New Form
        </span>
      </v-btn>
    </div>
    <div class="py-6">
      <v-card
        flat
        elevation="6"
        width="90%"
        min-height="674"
        class="ml-14 my-10"
      >
        <template> <tab-data-table-forms class="pt-8" /> </template>
      </v-card>
    </div>
  </div>
</template>

<script>
import TabDataTableForms from "../../components/TabDataTableForms.vue";
export default {
  components: { TabDataTableForms },
  name: "Form",
};
</script>

<style scoped>
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
