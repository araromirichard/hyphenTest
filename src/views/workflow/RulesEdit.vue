<template>
  <v-container class="pa-0">
    <v-row class="pa-0">
      <v-col
        class="#faf2df full-height"
        cols="3"
        style="max-width: 450px; background-color: #fffbf1"
      >
        <v-tabs
          grow
          slider-color="#301F78"
          slider-size="4"
          background-color="#FDF9EF"
          style="margin-top: 160px; padding-left: 21px; mix-blend-mode: normal"
        >
          <v-tab> Details </v-tab>
          <v-tab class="pl-10"> Audit Trail </v-tab>
        </v-tabs>
        <v-divider></v-divider>
      </v-col>
      <v-col class="full-height" cols="9">
        <v-row class="mx-8" style="margin-top: 42px">
          <v-breadcrumbs :items="breadcrumbs" style="font-weight: 700">
            <template v-slot:divider>
              <v-icon class="px-0">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <v-spacer></v-spacer>
          <v-btn plain to="/workflow">
            <v-icon large color="#311b92">mdi-chevron-left</v-icon>
            <span
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: #311b92;
              "
              >Back</span
            >
          </v-btn>
        </v-row>
        <v-row>
          <ManagerApproval style="margin-top: 59px; margin-left: 47px" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ManagerApproval from "../../includes/ManagerApproval.vue";

export default {
  name: "Invoice",
  data() {
    return {
      isDisabled: false,
      breadcrumbs: [
        {
          text: "Workflow",
          to: "/#/",
          disabled: true,
        },
        {
          text: "rule",
          to: "#",
          disabled: true,
        },
        {
          text: "approval#90392",
          to: "#",
          disabled: false,
        },
      ],
    };
  },

  components: { ManagerApproval },

  computed: {},
};
</script>

<style scoped></style>
