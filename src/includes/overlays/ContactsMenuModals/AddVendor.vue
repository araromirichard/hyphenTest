<template>
  <div>
    <v-dialog v-model="dialog" max-width="574">
      <v-card min-height="722" color="#FEFCF8" class="rounded-lg">
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
              color: #301f78;
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
          <v-tabs v-model="tab" background-color="#fdfaf2">
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
              <v-form>
                <v-row class="mx-10">
                  <v-col cols="12"
                    ><v-text-field
                      v-model="vendorDetails.companyAddress"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Company Street Address"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorDetails.firstName"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="First Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="vendorDetails.lastName"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Last Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
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
                      v-model="vendorDetails.phone"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Phone"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-select
                      v-model="vendorDetails.role"
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
                    @click="saveAction"
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
                      v-model="businessDetails.companyName"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Company Street Address"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-select
                      v-model="businessDetails.selectedAccountingCode"
                      :items="accountingCode"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Accounting Code"
                    ></v-select
                  ></v-col>
                  <v-col cols="6"
                    ><v-select
                      v-model="businessDetails.selectedPaymentTerms"
                      :items="paymentTerms"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Payment Terms"
                    ></v-select
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="businessDetails.Address"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Address 1"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="businessDetails.postalCode"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Address 2"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="businessDetails.city"
                      background-color="#ffffff"
                      type="email"
                      outlined
                      hide-details="auto"
                      placeholder="City"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="businessDetails.state"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="State"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-select
                      v-model="businessDetails.selectedCountry"
                      :items="country"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Country"
                    ></v-select
                  ></v-col>
                  <v-col cols="6"
                    ><v-select
                      v-model="businessDetails.selectedBusinessCategory"
                      :items="businessCategory"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Business Category"
                    ></v-select
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-select
                      v-model="businessDetails.selectedTaxCategory"
                      :items="taxCategory"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Tax Category"
                    ></v-select
                  ></v-col>
                  <v-col cols="6"
                    ><v-select
                      v-model="businessDetails.selectedApplyWithholding"
                      :items="applyWithholding"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Apply Withholding"
                    ></v-select
                  ></v-col>
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
              <v-form class="mt-10">
                <v-row class="mx-10">
                  <v-col cols="12"
                    ><v-text-field
                      v-model="vendorBankDetails.bankName"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Enter Bank Name"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorBankDetails.bankAccountNumber"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Bank Acccount Number"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="vendorBankDetails.tin"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Address 2"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-text-field
                      v-model="vendorBankDetails.city"
                      background-color="#ffffff"
                      type="email"
                      outlined
                      hide-details="auto"
                      placeholder="City"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"
                    ><v-text-field
                      v-model="vendorBankDetails.state"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="State"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6" class="pl-0"
                    ><v-select
                      v-model="vendorBankDetails.selectedCountry"
                      :items="country"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Country"
                    ></v-select
                  ></v-col>
                  <v-col cols="6"
                    ><v-select
                      v-model="vendorBankDetails.selectedCurency"
                      :items="businessCategory"
                      background-color="#ffffff"
                      outlined
                      hide-details="auto"
                      placeholder="Business Category"
                    ></v-select
                  ></v-col>
                  <v-col cols="12"
                    ><v-switch
                      color="teal accent-3"
                      v-model="switch1"
                    ></v-switch>
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
export default {
  data() {
    return {
      dialog: false,
      switch1: true,
      vendorDetails: {
        companyAddress: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        selectedRole: "",
      },
      businessDetails: {
        companyName: "",
        selectedAccountingCode: "",
        selectedPaymentTerms: "",
        firstAddress: "",
        secondAddress: "",
        city: "",
        state: "",
        selectedCountry: "",
        selectedBusinessCategory: "",
        selectedTaxCategory: "",
        selectedApplyWithhoding: "",
      },
      vendorBankDetails: {
        bankName: "",
        bankAccountNumber: "",
        tin: "",
        city: "",
        state: "",
        selectedCountry: "",
        selectedCurency: "",
      },
      role: ["Admin", "Member"],
      accountingCode: [],
      paymentTerms: [],
      country: [],
      businessCategory: [],
      taxCategory: [],
      applyWithholding: [],
      tab: null,

      CustomerType: ["Contact", "Business", "Bank"],
    };
  },
  methods: {
    saveAction() {
      console.log(this.vendorDetails);
      console.log(this.businessDetails);
      //push out the details entered
      //this.$emit("input", data);
      this.dialog = false;
      this.dialog2 = true;
    },
    show(value) {
      this.dialog = value;
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
