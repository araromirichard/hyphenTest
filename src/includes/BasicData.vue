<template>
  <div>
    <!-- for desktop screen -->
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <validation-observer>
        <form>
          <div>
            <p
              class="py-md-10 py-5"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                color: #7f919b;
              "
              :style="{
                marginLeft: `${$vuetify.breakpoint.mdAndDown ? '8px' : '48px'}`,
              }"
            >
              Basic Data
            </p>

            <div>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Invoice no.</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Invoice Number"
                    rules="required"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="payableData.invoicenumber"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="!changeState ? changeState : ''"
                      reverse
                      class="ma-0 pa-0"
                      placeholder="Enter Invoice"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Date</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formatedDate"
                        hide-details="auto"
                        :disabled="changeState"
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        v-bind="attrs"
                        v-on="on"
                        :class="[!changeState ? changeState : '']"
                        reverse
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
                    </template>
                    <v-date-picker
                      v-model="basicDataInput.dueDate"
                      @input="menu = false"
                      no-title
                      scrollable
                      :min="new Date() | date"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">VAT</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="VAT"
                    rules="required"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="payableData.vat"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="[!changeState ? changeState : '']"
                      reverse
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
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Due Date</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="true"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="basicDataInput.dueDate"
                        hide-details="auto"
                        :disabled="changeState"
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        v-bind="attrs"
                        v-on="on"
                        :class="[!changeState ? changeState : '']"
                        reverse
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
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="basicDataInput.dueDate"
                      @input="menu = false"
                      no-title
                      scrollable
                      :min="new Date() | date"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>

              <v-divider
                class="mt-12"
                style="
                  border: 1px solid rgba(127, 145, 155, 0.107845);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <p
                class="py-md-10 py-5"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 19px;
                  color: #7f919b;
                "
                :style="{
                  marginLeft: `${
                    $vuetify.breakpoint.mdAndDown ? '8px' : '48px'
                  }`,
                }"
              >
                Vendor
              </p>

              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Name</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Vendor Name"
                    rules="required|alpha"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="singleInvoice.vendor.vendorname"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="[!changeState ? changeState : '']"
                      reverse
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 15px;
                        color: #7f919b;
                      "
                      placeholder="Enter Name"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Address</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Vendor Address"
                    rules="required"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="singleInvoice.vendor.address"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="[!changeState ? changeState : '']"
                      reverse
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 15px;
                        color: #7f919b;
                      "
                      placeholder="Enter Address"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Tax Id.</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Tax ID"
                    rules="required"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="singleInvoice.vendor.taxid"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="[!changeState ? changeState : '']"
                      reverse
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 15px;
                        color: #7f919b;
                      "
                      placeholder="Enter Tax Id."
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Email</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Vendor Email"
                    rules="required|email"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="singleInvoice.vendor.email"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="[!changeState ? changeState : '']"
                      reverse
                      style="
                        text-align: right;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 15px;
                        color: #7f919b;
                      "
                      placeholder="Enter your Email"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
              <v-row class="px-sm-8 py-0 mx-sm-0">
                <v-col cols="4" class="pl-10 py-1 ma-0">
                  <v-subheader class="primary--text">Phone</v-subheader>
                </v-col>
                <v-col cols="8" class="py-1 ma-0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Phone Number"
                    :rules="{
                      required: true,
                      regex: `^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$`,
                    }"
                  >
                    <v-text-field
                      :error-messages="errors"
                      v-model="payableData.vendor.phone"
                      hide-details="auto"
                      :disabled="changeState"
                      :background-color="backgroundColor"
                      solo
                      flat
                      dense
                      :class="[!changeState ? changeState : '']"
                      reverse
                      style="
                        text-align: right;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 15px;
                        color: #7f919b;
                      "
                      placeholder="Enter Phone"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-divider
                  inset
                  style="
                    border: 1px dashed rgba(48, 31, 120, 0.1);
                    transform: rotate(-0.65deg);
                  "
                ></v-divider>
              </v-row>
            </div>

            <div class="text-center pt-14" style="padding-bottom: 20px">
              <v-btn
                :disabled="$route.query.exception"
                @click="triggerAddToPayables"
                large
                elevation="10"
                :loading="isSending"
                color="primary"
              >
                <simple-line-icons
                  style="width: 15.98px; height: 15.97px"
                  class="m-0 text--white pl-14"
                  icon="cursor"
                  no-svg
                />
                <span class="pl-6 pr-14 text-capitalize">Send to Payables</span>
              </v-btn>
              <InvoiceBtn @activate="activateField" class="pt-8" />
            </div>
          </div>
        </form>
      </validation-observer>
    </div>
    <!-- for mobile screen -->
    <v-row v-if="$vuetify.breakpoint.mdAndDown">
      <v-col cols="10" offset="1" class="d-flex flex-column align-center">
        <validation-observer>
          <form>
            <v-subheader
              class="py-md-10 py-5"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 19px;
                color: #7f919b;
              "
              :style="{
                marginLeft: `${$vuetify.breakpoint.mdAndDown ? '' : '48px'}`,
              }"
            >
              Basic Data
            </v-subheader>

            <validation-provider
              v-slot="{ errors }"
              name="Invoice Number"
              rules="required"
            >
              <v-text-field
                :error-messages="errors"
                v-model="basicDataInput.invoiceNumber"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                outlined
                flat
                dense
                class="mt-6 mb-6"
                :class="!changeState ? changeState : ''"
                label="Enter Invoice"
              ></v-text-field>
            </validation-provider>

            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="basicDataInput.date"
                  hide-details="auto"
                  :disabled="changeState"
                  :background-color="backgroundColor"
                  solo
                  outlined
                  flat
                  dense
                  v-bind="attrs"
                  v-on="on"
                  class="mt-3 mb-6"
                  :class="[!changeState ? changeState : '']"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    line-height: 15px;
                    color: #7f919b;
                  "
                  label="Enter Date"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="basicDataInput.date"
                @input="menu = false"
                no-title
                scrollable
                :min="new Date() | date"
              >
              </v-date-picker>
            </v-menu>

            <validation-provider
              v-slot="{ errors }"
              name="VAT"
              rules="required"
            >
              <v-text-field
                :error-messages="errors"
                v-model="basicDataInput.vat"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                outlined
                dense
                flat
                class="mt-3 mb-6"
                :class="[!changeState ? changeState : '']"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 15px;
                  color: #7f919b;
                "
                label="VAT Amount"
              ></v-text-field>
            </validation-provider>

            <v-menu
              v-model="menu2"
              :close-on-content-click="true"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="basicDataInput.dueDate"
                  hide-details="auto"
                  :disabled="changeState"
                  :background-color="backgroundColor"
                  solo
                  outlined
                  flat
                  dense
                  v-bind="attrs"
                  v-on="on"
                  class="mt-3 mb-6"
                  :class="[!changeState ? changeState : '']"
                  style="
                    text-align: right;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    line-height: 15px;
                    color: #7f919b;
                  "
                  label="Enter Due Date"
                >
                </v-text-field>
              </template>
              <v-date-picker
                v-model="basicDataInput.dueDate"
                @input="menu = false"
                no-title
                scrollable
                :min="new Date() | date"
              >
              </v-date-picker>
            </v-menu>

            <v-divider
              class="mt-8"
              style="
                border: 1px solid rgba(127, 145, 155, 0.107845);
                transform: rotate(-0.65deg);
              "
            ></v-divider>
            <v-subheader
              class="mt-8 pb-10"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                color: #7f919b;
              "
            >
              Vendor
            </v-subheader>

            <validation-provider
              v-slot="{ errors }"
              name="Vendor Name"
              rules="required|alpha"
            >
              <v-text-field
                :error-messages="errors"
                v-model="vendorData.name"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                flat
                dense
                class="mt-3 mb-6"
                :class="[!changeState ? changeState : '']"
                outlined
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 15px;
                  color: #7f919b;
                "
                label="Enter Name"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Vendor Address"
              rules="required"
            >
              <v-text-field
                class="mt-3 mb-6"
                :error-messages="errors"
                v-model="vendorData.address"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                flat
                dense
                :class="[!changeState ? changeState : '']"
                outlined
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 15px;
                  color: #7f919b;
                "
                label="Enter Address"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Tax ID"
              rules="required"
            >
              <v-text-field
                class="mt-3 mb-6"
                :error-messages="errors"
                v-model="vendorData.taxId"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                flat
                dense
                :class="[!changeState ? changeState : '']"
                outlined
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 15px;
                  color: #7f919b;
                "
                placeholder="Enter Tax Id."
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Vendor Email"
              rules="required|email"
            >
              <v-text-field
                class="mt-3 mb-6"
                :error-messages="errors"
                v-model="vendorData.email"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                flat
                dense
                :class="[!changeState ? changeState : '']"
                outlined
                style="
                  text-align: right;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 15px;
                  color: #7f919b;
                "
                label="Enter your Email"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Phone Number"
              :rules="{
                required: true,
                regex: `^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$`,
              }"
            >
              <v-text-field
                class="mt-3 mb-6"
                :error-messages="errors"
                v-model="vendorData.phone"
                hide-details="auto"
                :disabled="changeState"
                :background-color="backgroundColor"
                solo
                flat
                dense
                :class="[!changeState ? changeState : '']"
                outlined
                style="
                  text-align: right;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 15px;
                  color: #7f919b;
                "
                label="Enter Phone"
              ></v-text-field>
            </validation-provider>

            <div class="text-center pt-14" style="padding-bottom: 20px">
              <v-btn
                @click="triggerAddToPayables"
                large
                elevation="10"
                color="primary"
              >
                <simple-line-icons
                  style="width: 15.98px; height: 15.97px"
                  class="m-0 text--white pl-14"
                  icon="cursor"
                  no-svg
                />
                <span class="pl-6 pr-14 text-capitalize">Send to Payables</span>
              </v-btn>
              <InvoiceBtn @activate="activateField" class="pt-8" />
            </div>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
    <!-- add to payables modal -->
    <AddToPayModal ref="addtopayable" />
  </div>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";
import InvoiceBtn from "./InvoiceBtn.vue";
import { mapActions, mapGetters } from "vuex";
import AddToPayModal from "./overlays/AddToPayModal.vue";

export default {
  name: "BasicData",
  data() {
    return {
      menu: false,
      menu2: false,
      isSending: false,
      changeState: true,
      basicDataInput: {
        invoiceNumber: "",
        vat: "",
        date: null,
        dueDate: null,
      },
      vendorData: {
        name: "",
        address: "",
        taxId: "",
        email: "",
        phone: "",
      },
      payableData: {
        vendor: {
          vendorname: "",
          address: "",
          taxid: "",
          email: "",
          phone: "",
        },
        invoicenumber: "",
        vat: "",
        date: null,
        dueDate: null,
      },
    };
  },
  components: {
    SimpleLineIcons,
    InvoiceBtn,
    AddToPayModal,
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    activateField() {
      return (this.changeState = !this.changeState);
    },

    triggerAddToPayables() {
      // this.$refs.addtopayable.openDialog();
      console.log(this.$refs.addtopayable.openDialog());
    },
   
  },

  computed: {
    ...mapGetters({
      singleInvoice: "invoices/getSingleInvoice",
    }),

    backgroundColor() {
      return this.changeState ? "transparent" : "#ffffff";
    },

    formatedDate() {
      const date = new Date(this.singleInvoice.created_at);

      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      return day + "/" + month + "/" + year;
    },

    // completePayableData() {
    //   let invoiceData = { ...this.basicDataInput, ...this.vendorData };
    //   return console.log(JSON.stringify(invoiceData, null, 2));
    // },
  },

  watch: {
    singleInvoice: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val != null) {
          this.payableData = val;
        }
      },
    },
  },
};
</script>

<style scoped>
.v-subheader {
  align-items: center;
  display: flex;
  height: 48px;
  font-size: 0.9rem !important;
  font-weight: 400;
  padding: 0 16px 0 16px;
}
.v-text-field {
  width: 260px;
}
.centered-input input {
  text-align: right;
}
i.sli-font {
  font-size: 16px;
  display: inline-block;
}

.v-btn--block {
  display: flex;
  flex: 1 0 auto;
  min-width: 380px !important;
  max-width: auto;
}
.changeState {
  background: #ffffff;
  border: 1px solid rgba(48, 31, 120, 0.07);
}
.defaultState {
  background: transparent;
  border: none;
}
</style>
