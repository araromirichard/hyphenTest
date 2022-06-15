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
            >Edit Vendor</span
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
        <div class="px-8 d-flex" style="background: #fdfaf2">
          <v-tabs
            @change="viewActiveTab"
            v-model="tab"
            background-color="#fdfaf2"
          >
            <v-tab v-for="item in CustomerType" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card style="background-color: transparent" flat>
              <div class="my-7 mx-10">
                <p class="pa-0 ma-0 text--disabled text-subtitle-2">
                  Include details about this vendor, contact person, business
                  address, default payment terms, etc
                </p>
              </div>
              <v-form ref="form" lazy-validation>
                <v-row class="mx-10">
                  <v-col cols="12"
                    ><v-text-field
                      v-model="vendorDetails.address"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Company Street Address"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.contact.first_name"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="First Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="vendorDetails.contact.last_name"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Last Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
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
                  <v-col cols="6"
                    ><v-text-field
                      v-model="vendorDetails.contact.phone"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Phone"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
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
                <v-card-actions class="justify-end pa-8">
                  <v-btn
                    class="mr-5"
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
                <v-row class="mx-10">
                  <v-col cols="12"
                    ><v-text-field
                      v-model="vendorDetails.vendorname"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Company Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-select
                      :items="accountingCode"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Accounting Code"
                    ></v-select
                  ></v-col>
                  <v-col cols="6"
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
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.address"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Address"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      :rules="tin"
                      v-model.number="vendorDetails.zip"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Post Code"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.city"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="City"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="vendorDetails.state"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="State"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
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
                  <v-col cols="6"
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
                  <v-col cols="6" class="pl-0"
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
                  <v-col cols="6"
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
                <v-card-actions class="justify-end pa-8 mb-8">
                  <v-btn
                    @click="switchTabs('next')"
                    dark
                    width="121"
                    height="45"
                    class="mr-5"
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
              <v-form class="mt-10" ref="form" lazy-validation>
                <v-row class="mx-10">
                  <v-col cols="12"
                    ><v-text-field
                      v-model="vendorDetails.bankname"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Enter Bank Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.bankaccount"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Bank Acccount Number"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model.number="vendorDetails.taxid"
                      :rules="tin"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="TIN"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-md-0"
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
                  <v-col cols="12">
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
                <v-card-actions class="justify-end pa-8">
                  <v-btn
                    @click="saveAction"
                    dark
                    width="121"
                    height="45"
                    class="mr-5"
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
import { mapGetters, mapActions } from "vuex";

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
          category: "",
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
      tin: [
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      ],
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
    ...mapGetters({
      singleVendor: "contacts/getVendor",
    }),
  },
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch("contacts/getSingleVendor", id).then((response) => {
      if (response.status == 200) {
        this.vendorDetails.vendorname = response.data.vendorname;
        this.vendorDetails.contact.first_name =
          response.data.contact.first_name;
        this.vendorDetails.contact.last_name = response.data.contact.last_name;
        this.vendorDetails.email = response.data.email;
        this.vendorDetails.contact.phone = response.data.contact.phone;
        this.vendorDetails.contact.role = response.data.contact.role;
        this.vendorDetails.terms = response.data.terms;
        this.vendorDetails.zip = response.data.zip;
        this.vendorDetails.city = response.data.city;
        this.vendorDetails.state = response.data.state;
        this.vendorDetails.category = response.data.category;
        this.vendorDetails.WHT.category = response.data.WHT.category;
        this.vendorDetails.apply_tax = response.data.apply_tax;
        this.vendorDetails.bankname = response.data.bankname;
        this.vendorDetails.taxid = response.data.taxid;
        this.vendorDetails.bankaccount = response.data.bankaccount;
        this.vendorDetails.currency = response.data.currency;
        this.vendorDetails.approved = response.data.approved;
      }
    });
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
