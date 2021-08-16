<template>
  <v-row>
    <v-col
      class="#faf2df full-height"
      cols="3"
      style="width: 450px; background-color: #fffbf1"
    >
      <h6
        class="pt-13 pl-10"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
          color: #7f919b;
        "
      >
        Total amount
      </h6>
      <h3 class="pt-1 pl-10 amount">N2,300,000</h3>
      <!-- BasicData component added here... -->
      <v-row>
        <BasicData />
      </v-row>
    </v-col>
    <v-col class="full-height" cols="9">
      <v-row>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:divider>
            <v-icon class="px-0">mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-btn plain to="/inbox" class="mt-14">
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
        <v-sheet
          width="1000"
          height="802"
          color="white"
          class="ml-16 d-flex flex-column justify-space-between align-center"
        >
          <v-img
            width="650"
            height="730"
            src="@/assets/Simple-Invoice-Template-with-Shipping.png"
          >
          </v-img>
        </v-sheet>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BasicData from "../../includes/BasicData.vue";

export default {
  name: "Invoice",
  data() {
    return {
      isDisabled: false,
      breadcrumbs: [
        {
          text: "Inbox",
          to: "/inbox/",
          disabled: true,
        },
        {
          text: "Invoice",
          to: "#",
          disabled: true,
        },
        {
          text: "#Invoice_Id",
          to: "/inbox/:id",
          disabled: false,
        },
      ],
    };
  },

  components: {
    BasicData,
  },

  computed: {
    //isDisabled
  },
};
</script>

<style scoped>
.col-3 {
  flex: 0 0 30%;
  max-width: 33%;
}
.col-9 {
  flex: 0 0 70%;
  max-width: 67%;
}
.v-divider--inset:not(.v-divider--vertical) {
  margin-left: -20px !important;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  margin-left: 100px !important;
}
.v-text-field {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: transparent;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: 2px;
  margin-top: 8px;
}

.theme--light.v-sheet {
  background-color: transparent;
}

.amount {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #596a73;
}
.v-breadcrumbs {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin-top: 42px;
  padding: 18px 70px;
}
</style>
