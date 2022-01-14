<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" md="4" class="#faf2df" style="background-color: #fffbf1">
      <v-row class="d-flex justify-center align-center">
        <v-col
          cols="12"
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
        </v-col>
      </v-row>
      <v-row v-if="isAnException">
        <v-col cols="10" offset="1">
          <v-card
            width="100%"
            height="128"
            flat
            elevation="0"
            style="
              background: #ffffff;
              border: 1px solid #ff6a6a;
              box-sizing: border-box;
              border-radius: 4px;
            "
          >
            <v-row>
              <v-col cols="12" class="px-10 pt-8 d-flex justify-space-between">
                <p class="error--text font-weight-bold">Exception(s)</p>
                <v-avatar color="#FF6A6A" size="22">
                  <span class="white--text text-caption">{{
                    numOfExceptions
                  }}</span>
                </v-avatar>
              </v-col>
              <v-divider
                class="mx-8"
                style="border: 1px solid rgba(212, 216, 223, 0.377431)"
              ></v-divider>
              <v-col cols="12" class="d-flex justify-center pl-8">
                <v-chip
                  class="px-2 mx-1"
                  small
                  color="#ffc3c3"
                  text-color="#B33900"
                  >Invoice number</v-chip
                >
                <v-chip
                  class="px-2 mx-1"
                  small
                  color="#ffc3c3"
                  text-color="#B33900"
                  >VAT</v-chip
                >
                <v-chip
                  class="px-2 mx-1"
                  small
                  color="#ffc3c3"
                  text-color="#B33900"
                  >Bank Name</v-chip
                >
                <v-chip
                  class="px-2 mx-1"
                  small
                  color="#ffc3c3"
                  text-color="#B33900"
                  >Total</v-chip
                >
                <v-chip
                  class="px-2 mx-1"
                  small
                  color="#ffc3c3"
                  text-color="#B33900"
                  >Line Items</v-chip
                >
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col class="d-flex justify-end mt-2">
              <v-btn depressed class="text-capitalize primary--text mr-2">
                <v-icon class="px-2" small> mdi-pencil-outline </v-icon>
                Notify Vendor
              </v-btn>
              <v-btn depressed class="text-capitalize primary--text">
                <v-icon class="px-2" small> mdi-pencil-outline </v-icon>
                Review
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- BasicData component added here... -->
      <v-row>
        <v-col cols="12">
          <BasicData />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="8" v-if="$vuetify.breakpoint.mdAndUp">
      <v-layout class="d-flex flex-column">
        <v-row>
          <v-col cols="12" class="d-flex justify-md-space-between">
            <v-breadcrumbs :items="breadcrumbs" style="margin-left: 70px">
              <template v-slot:divider>
                <v-icon class="px-0">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-btn plain to="/inbox" class="mt-14 mr-15">
              <v-icon large color="primary">mdi-chevron-left</v-icon>
              <span
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 19px;
                  color: var(--v-primary-base);
                "
                >Back</span
              >
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mx-auto mt-10">
          <v-col cols="12">
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
                  contain
                  src="@/assets/Simple-Invoice-Template-with-Shipping.png"
                >
                </v-img>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
import BasicData from "../../includes/BasicData.vue";

export default {
  name: "Invoice",
  data() {
    return {
      isAnException: false,
      Exceptions: [],
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

  mounted() {
    this.isAnException = this.$route.query.exception || false;
  },
  components: {
    BasicData,
  },

  computed: {
    numOfExceptions() {
      if (this.Exceptions) {
        return this.Exceptions.length;
      } else {
        return 0;
      }
    },
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
