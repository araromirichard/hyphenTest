<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="4" class="#faf2df" style="background-color: #f3eee8">
        <!-- title for mobile and desktop screen starts -->
        <div
          v-if="Object.keys(singleInvoice).length"
          :style="{
            display: `${$vuetify.breakpoint.mdAndDown ? 'flex' : 'block'}`,
          }"
        >
          <p
            class="
              pt-8
              pl-12 pl-md-10
              pt-md-13
              disabled--text
              font-weight-regular
              text-h6
            "
          >
            Total amount
          </p>
          <p
            class="
              pt-8 pt-md-1
              pl-10
              amount
              text-h6 text-md-h4
              font-weight-black
            "
          >
            &#8358;{{ singleInvoice.total }}
          </p>
          <!-- {{ allInvoices.allInvoices }} -->
        </div>
        <!-- title for mobile and desktop screen ends -->

        <!-- Exception summary card starts here -->
        <v-row v-if="isAnException">
          <v-col cols="10" offset="1">
            <v-card
              width="100%"
              min-height="128"
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
                <v-col
                  cols="12"
                  class="px-10 pt-8 d-flex justify-space-between"
                >
                  <p class="error--text font-weight-bold">Exception(s)</p>
                  <v-avatar color="#FF6A6A" size="22">
                    <span class="white--text text-caption">{{
                      NumOfExceptions
                    }}</span>
                  </v-avatar>
                </v-col>
                <v-divider
                  class="mx-8"
                  style="border: 1px solid rgba(212, 216, 223, 0.377431)"
                ></v-divider>
                <v-col cols="12" class="d-flex flex-wrap py-8 pl-8">
                  <v-chip
                    class="px-2 my-1 mx-1"
                    small
                    color="#ffc3c3"
                    text-color="#B33900"
                    ><span>Invoice number</span></v-chip
                  >
                  <v-chip
                    class="px-2 my-1 mx-1"
                    small
                    color="#ffc3c3"
                    text-color="#B33900"
                    >VAT</v-chip
                  >
                  <v-chip
                    class="px-2 my-1 mx-1"
                    small
                    color="#ffc3c3"
                    text-color="#B33900"
                    >Bank Name</v-chip
                  >
                  <v-chip
                    class="px-2 my-1 mx-1"
                    small
                    color="#ffc3c3"
                    text-color="#B33900"
                    >Total</v-chip
                  >
                  <v-chip
                    class="px-2 my-1 mx-1"
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
                <v-btn
                  depressed
                  text
                  class="text-capitalize amber--text text--accent-4 mr-2"
                >
                  <v-icon class="px-2" small> mdi-pencil-outline </v-icon>
                  Notify Vendor
                </v-btn>
                <v-btn
                  text
                  depressed
                  class="text-capitalize amber--text text--accent-4"
                >
                  <v-icon class="px-2" small> mdi-pencil-outline </v-icon>
                  Review
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Exception summary card starts here -->

        <!-- BasicData component added here... -->
        <BasicData />
        <!-- End of BasicData -->
      </v-col>

      <!-- section for uploaded invoice image starts here  also not shown in mobile -->
      <v-col cols="12" md="8" v-if="$vuetify.breakpoint.mdAndUp">
        <v-layout class="d-flex flex-column">
          <div class="mx-md-9 d-flex flex-row">
            <v-breadcrumbs :items="breadcrumbsInvoice" class="px-md-2">
              <template v-slot:divider>
                <v-icon class="px-0">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-btn plain to="/inbox" class="mt-md-14">
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
          </div>
          <div class="mx-auto align-center mt-10">
            <v-container>
              <v-card
                elevation="3"
                max-height="870px"
                color="white"
                min-width="750px"
                max-width="1000px"
              >
                <v-skeleton-loader
                  width="100%"
                  height="80vh"
                  type="image,table"
                  :loading="loading"
                >
                  <v-img
                    class="mx-auto align-center"
                    max-width="90%"
                    max-height="80vh"
                    contain
                    :src="invoiceImage"
                  >
                  </v-img>
                </v-skeleton-loader>
              </v-card>
            </v-container>
          </div>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BasicData from "../../includes/BasicData.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Invoice",
  data() {
    return {
      isAnException: false,
      Exceptions: [],
      isDisabled: false,

      loading: true,
    };
  },

  methods: {
    ...mapActions({
      singleInvoiceObj: "invoices/getInvoiceById",
    }),

    async getInvoiceData() {
      try {
        await this.$store.dispatch(
          "invoices/getInvoiceById",
          this.$route.params.id
        );
        console.log(this.singleInvoice.invoicenumber);
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    },
  },
  async mounted() {
    this.isAnException = this.$route.query.exception || false;
    await this.getInvoiceData();
    console.log(this.singleInvoice.invoicenumber);
  },
  created() {
    //make skeleton loader stop
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
  components: {
    BasicData,
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      token: "auth/token",
      invoiceArrayStatus: "invoices/checkInvoiceArray",
      totalInvoice: "invoices/numOfInvoices",
      NumOfExceptions: "invoices/checkNumberOfExceptions",
      singleInvoice: "invoices/getSingleInvoice",
    }),
    ...mapState({
      organization: "organization",
      formCards: "formBuilder",
    }),

    breadcrumbsInvoice() {
      const arr = [
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
          text: "",
          to: "/inbox/:id",
          disabled: false,
        },
      ];
      for (const obj of arr) {
        if (obj.disabled == false) {
          obj.text = this.singleInvoice.invoicenumber;
          break;
        }
      }
      return arr;
    },

    invoiceImage() {
      const value = this.singleInvoice.invoiceimage;
      return "data:image/png;base64," + value;
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
