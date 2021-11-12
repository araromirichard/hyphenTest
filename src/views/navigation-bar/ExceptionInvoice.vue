<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="#faf2df" style="background-color: #fffbf1">
        <div
          :style="{
            display: `${$vuetify.breakpoint.mdAndDown ? 'flex' : 'block'}`,
          }"
        >
          <h6
            class="
              pt-8
              pl-md-10
              pt-md-13
              disabled--text
              font-weight-regular
              text-h6
            "
          >
            Total amount
          </h6>
          <h3
            class="
              pt-8 pt-md-1
              pl-10
              amount
              text-h6 text-md-h4
              font-weight-black
            "
          >
            N2,300,000
          </h3>
        </div>
        <!-- BasicData component added here... -->
        <v-row>
          <BasicData />
        </v-row>
      </v-col>
      <v-col cols="12" md="8">
        <v-layout class="d-flex flex-column">
          <v-row>
            <v-breadcrumbs :items="breadcrumbs" style="margin-left: 70px">
              <template v-slot:divider>
                <v-icon class="px-0">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-btn plain to="/inbox" class="mt-14 mr-15">
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
          <v-row class="mx-auto mt-10">
            <v-card
              elevation="3"
              max-height="870px"
              min-width="870px"
              style="background-color: #ffffff"
            >
              <v-sheet
                color="white"
                max-width="683px"
                class="mx-auto my-14 align-center"
              >
                <v-img
                  cover
                  src="@/assets/Simple-Invoice-Template-with-Shipping.png"
                >
                </v-img>
              </v-sheet>
            </v-card>
          </v-row>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
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
  font-size: large !important;
}
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
