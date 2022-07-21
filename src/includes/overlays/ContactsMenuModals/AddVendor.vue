<template>
  <div>
    <v-dialog v-model="dialog" max-width="574">
      <v-card min-height="722" color="#f8f7f4" class="rounded-lg">
        <v-card-title
          class="mb-8"
          style="background: #ffffff; border-radius: 8px 8px 0px 0px"
        >
          <span
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 19px;
              color: #19283d;
            "
            >Add Vendor</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="dialog = false"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <div class="px-0 px-md-8 d-flex" style="background: #fdfaf2">
          <v-tabs
            mobile-breakpoint="50"
            @change="viewActiveTab"
            v-model="tab"
            background-color="#fdfaf2"
            slider-size="4"
          >
            <v-tab v-for="item in CustomerType" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card style="background-color: transparent" flat>
              <div class="my-7 mx-4 mx-md-10">
                <p class="pa-0 ma-0 text--disabled text-subtitle-2">
                  Include details about this vendor, contact person, business
                  address, default payment terms, etc
                </p>
              </div>
              <v-form ref="form" lazy-validation>
                <v-row class="mx-4 mx-md-10">
                  <v-col cols="12" class="px-0">
                    <v-text-field
                      v-model="vendorDetails.address"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Company Street Address"
                    >
                    </v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.contact.first_name"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="First Name"
                    ></v-text-field
                  ></v-col>
                  <v-col md="6" class="pr-0"
                    ><v-text-field
                      v-model="vendorDetails.contact.last_name"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Last Name"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-text-field
                      :rules="email"
                      v-model="vendorDetails.email"
                      background-color="#ffffff"
                      type="email"
                      outlined
                      hide-details="auto"
                      placeholder="Email"
                    ></v-text-field
                  ></v-col>
                  <v-col md="6" class="pr-0"
                    ><v-text-field
                      v-model="vendorDetails.contact.phone"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Phone"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.contact.role"
                      :items="role"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Roles"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-card-actions class="justify-end py-8 px-4">
                  <v-btn
                    class="mx-0 mr-md-5"
                    @click="switchTabs('next')"
                    dark
                    width="121"
                    height="45"
                    style="
                      background: var(--v-primary-base);
                      box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                      border-radius: 4px;
                    "
                  >
                    <simple-line-icons
                      icon="arrow-right"
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
                      class="text-capitalize pl-3"
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
                      >next</span
                    >
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-tab-item>

          <!-- BUSINESS TAB -->
          <v-tab-item>
            <v-card style="background-color: transparent" flat>
              <v-form class="mt-7">
                <v-row class="mx-4 mx-md-10">
                  <v-col class="px-0"
                    ><v-text-field
                      v-model="vendorDetails.vendorname"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Company Name"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-select
                      :items="accountingCode"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Accounting Code"
                    ></v-select
                  ></v-col>
                  <v-col md="6" class="pr-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.terms"
                      :items="paymentTerms"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Payment Terms"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-text-field
                      :rules="digit"
                      v-model.number="vendorDetails.zip"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Post Code"
                    ></v-text-field
                  ></v-col>
                  <v-col md="6" class="pr-0"
                    ><v-text-field
                      v-model="vendorDetails.city"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="City"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.state"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="State"
                    ></v-text-field
                  ></v-col>
                  <v-col md="6" class="pr-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.country"
                      :items="country"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Country"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.category"
                      :items="businessCategory"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Business Category"
                    ></v-select
                  ></v-col>
                  <v-col md="6" class="pr-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.WHT.category"
                      :items="taxCategory"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Tax Category"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col md="6" class="pl-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.apply_tax"
                      :items="applyWithholding"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Apply Withholding"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-card-actions class="justify-end py-8 px-4 mb-8">
                  <v-btn
                    @click="switchTabs('next')"
                    dark
                    width="121"
                    height="45"
                    class="mx-0 mr-md-5"
                    style="
                      background: var(--v-primary-base);
                      box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                      border-radius: 4px;
                    "
                  >
                    <simple-line-icons
                      icon="arrow-right"
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
                      class="text-capitalize pl-3"
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
                      >next</span
                    >
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-tab-item>

          <!-- BANK TAB -->
          <v-tab-item>
            <v-card style="background-color: transparent" flat>
              <v-form class="mt-8" ref="form" lazy-validation>
                <v-row class="d-flex flex-column mx-4 mx-md-10">
                  <v-col class="py-0">
                    <v-hover v-slot="{ hover }">
                      <v-btn
                        v-bind="size"
                        outlined
                        color="#525e6e"
                        class="my-md-4 text-capitalize mr-8 hover-btn"
                        :style="{
                          'background-color': hover ? '#2bd5ae' : '',
                          border: hover ? 'none' : '',
                        }"
                      >
                        <v-icon color="#525E6E" v-bind="iconSize"
                          >mdi-chevron-right</v-icon
                        >
                        <span>Invite Vendor</span>
                      </v-btn>
                    </v-hover>
                  </v-col>
                  <v-col class="pt-0">
                    <p class="text--secondary text-caption pt-2 pt-md-0">
                      Click the button above to invite this vendor to enter and
                      confirm banking information. Alternativly, you can fill
                      the banking informationn below
                    </p>
                  </v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col class="pl-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.bankname"
                      :items="banks"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Bank Name"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.bankaccount"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Bank Acccount Number"
                    ></v-text-field
                  ></v-col>
                  <v-col class=""
                    ><v-text-field
                      v-model.number="vendorDetails.taxid"
                      :rules="tin"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="TIN"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10">
                  <v-col class="pl-0"
                    ><v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      v-model="vendorDetails.currency"
                      :items="currency"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Currency"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-row class="mx-4 mx-md-10 pt">
                  <v-col>
                    <v-switch
                      color="teal accent-3"
                      v-model="vendorDetails.approved"
                    >
                    </v-switch>
                    <p class="text-subtitle-2">
                      This vendor is approved to do business with your
                      organization
                    </p>
                  </v-col>
                </v-row>
                <v-card-actions class="justify-end py-md-8 px-md-6">
                  <v-btn
                    @click="saveAction"
                    dark
                    width="121"
                    height="45"
                    class="mx-0 mr-md-6"
                    style="
                      background: var(--v-primary-base);
                      box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                      border-radius: 4px;
                    "
                  >
                    <simple-line-icons
                      icon="arrow-right"
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
                      class="text-capitalize pl-3"
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
                      >Save</span
                    >
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {  mapActions } from "vuex";

//import { mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,

      vendorDetails: {
        address: "",
        email: "",
        contact: {
          first_name: "",
          last_name: "",
          phone: "",
          role: "",
        },
        vendorname: "",
        //accounting_code: "",
        terms: "",
        zip: "",
        city: "",
        state: "",
        country: "",
        category: "",
        WHT: {
          category: null,
        },
        apply_tax: true,
        bankname: "",
        bankaccount: "",
        taxid: "",
        currency: "",
        approved: false,
      },

      role: ["Admin", "Member"],
      accountingCode: [],
      paymentTerms: ["Net 30", "Net 45", "Net 60", "Net 90"],
      country: ["Nigeria", "Ghana", "USA"],
      currency: ["NGN", "USD"],
      banks: [
        "Access Bank",
        "Citibank",
        "Diamond Bank",
        "Ecobank",
        "Fidelity Bank",
        "First Bank",
        "First City Monument Bank",
        "Guarantee Trust Bank",
        "Heritage Bank",
        "Keystone Bank",
        "MainStreet Bank",
        "Skye Bank",
        "Stanbic IBTC Bank",
        "Standard Chartered Bank",
        "Sterling Bank",
        "Union Bank",
        "Unity Bank",
        "Wema Bank",
        "Zenith Bank",
      ],
      businessCategory: [
        "Advertising",
        "Accounting",
        "Insurance",
        "Maintenace",
        "Legal",
        "Telecoms",
        "Utilities",
        "Rent",
        "Salaries",
        "Travel",
        "Transportation",
        "Charity",
        "Software",
        "Licenses & permits",
        "Raw material",
        "Employee Loans",
      ],
      taxCategory: [
        "Commission",
        "Consultancy",
        "Technical",
        "Agency",
        "Contracts",
        "Rent",
        "Management",
      ],
      applyWithholding: [true, false],
      tab: null,

      CustomerType: ["Contact", "Business", "Bank"],
      email: [
        //(v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      digit: [
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      ],
      tin: [[(v) => !!v || "This field is required"]],
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    viewActiveTab(e) {
      console.log({ e });
    },
    switchTabs(direction) {
      // console.log(direction);
      switch (direction) {
        case "next":
          if (this.tab <= this.CustomerType.length - 2) {
            this.tab++;
            return;
          }
          if (this.tab == this.CustomerType.length - 1) {
            this.saveAction();
          }
          break;

        default:
          break;
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    async saveAction() {
      const id = this.$route.params.id;

      //console.log(JSON.stringify(this.vendorDetails, null, 2));

      try {
        await this.$store.dispatch("contacts/updateVendorDetails", {
          id: id,
          payload: this.vendorDetails,
        });

        this.showToast({
          sclass: "success",
          show: true,
          message: "Vendor details Updated successfully..",
          timeout: 3000,
        });

        this.dialog = false;
      } catch (error) {
        console.log(error);

        this.showToast({
          sclass: "error",
          show: true,
          message: "failed to Update",
          timeout: 3000,
        });
      }
    },
    show(value) {
      this.dialog = value;
    },
  },

  computed: {
    //dynamic button size and icon
    size() {
      const size = { xs: "x-small", sm: "small", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
    iconSize() {
      const size = { xs: "x-small", sm: "small" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
  
};
</script>

<style scoped>
.chipText {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7f919b;
}
.headerText {
  margin-left: 52px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.45px;
  color: #7f919b;
}
i.sli-font {
  font-size: 12px;
  display: inline-block;
}
.select {
  margin-right: 260px;
  margin-left: 52px;
}
.theme--light.v-tabs-items {
  background-color: transparent !important;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 0;
}
</style>
