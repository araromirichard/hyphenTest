<template>
  <v-container>
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12">
        <validation-observer v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submitInput)">
            <div>
              <v-subheader
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
                Basic Data
              </v-subheader>

              <v-list-item>
                <v-list-item-title
                  style="
                    margin-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  :style="{
                    marginLeft: `${
                      $vuetify.breakpoint.mdAndDown ? '8px' : '84px'
                    }`,
                  }"
                  >Invoice no.</v-list-item-title
                >
                <v-spacer></v-spacer>
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
                    flat
                    dense
                    :class="!changeState ? changeState : ''"
                    reverse
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 15px;
                      line-height: 15px;
                      color: #7f919b;
                    "
                    placeholder="Enter Invoice"
                  ></v-text-field>
                </validation-provider>
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Date</v-list-item-title
                >

                <v-spacer></v-spacer>
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
                    v-model="basicDataInput.date"
                    @input="menu = false"
                    no-title
                    scrollable
                    :min="new Date() | date"
                  >
                  </v-date-picker>
                </v-menu>
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >VAT</v-list-item-title
                >

                <v-spacer></v-spacer>
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Due Date</v-list-item-title
                >

                <v-spacer></v-spacer>
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
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
                  margin-left: 48px;
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

              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Name</v-list-item-title
                >

                <v-spacer></v-spacer>
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Address</v-list-item-title
                >

                <v-spacer></v-spacer>
                <validation-provider
                  v-slot="{ errors }"
                  name="Vendor Address"
                  rules="required"
                >
                  <v-text-field
                    :error-messages="errors"
                    v-model="vendorData.address"
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Tax Id.</v-list-item-title
                >

                <v-spacer></v-spacer>
                <validation-provider
                  v-slot="{ errors }"
                  name="Tax ID"
                  rules="required"
                >
                  <v-text-field
                    :error-messages="errors"
                    v-model="vendorData.taxId"
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Email</v-list-item-title
                >

                <v-spacer></v-spacer>
                <validation-provider
                  v-slot="{ errors }"
                  name="Vendor Email"
                  rules="required|email"
                >
                  <v-text-field
                    :error-messages="errors"
                    v-model="vendorData.email"
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-list-item>
                <v-list-item-title
                  style="
                    padding-left: 84px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                  >Phone</v-list-item-title
                >

                <v-spacer></v-spacer>
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
                    v-model="vendorData.phone"
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
              </v-list-item>
              <v-divider
                inset
                style="
                  border: 1px dashed rgba(48, 31, 120, 0.1);
                  transform: rotate(-0.65deg);
                "
              ></v-divider>
              <v-btn
                @click="submitInput"
                width="300"
                dark
                block
                color="primary"
                class="mt-16"
                style="
                  margin-left: 76px;
                  width: 350px;
                  height: 54px;
                  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                  border-radius: 4px;
                "
              >
                <simple-line-icons
                  style="width: 15.98px; height: 15.97px"
                  class="m-0 text--white"
                  icon="cursor"
                  no-svg
                />
                <span
                  class="pl-3 text-capitalize"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                    letter-spacing: 0.636364px;
                  "
                  >Send to Payables</span
                >
              </v-btn>

              <div class="d-flex justify-left mt-12 ml-14">
                <InvoiceBtn @activate="activateField" />
              </div>
            </div>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.mdAndDown">
      <v-col cols="10" offset="1" class="d-flex flex-column align-center">
        <validation-observer v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submitInput)">
            <v-subheader
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
                margin-left: 48px;
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

            <div class="d-flex justify-center">
              <v-btn
                @click="submitInput"
                width="200px"
                dark
                color="primary"
                class="mt-8"
              >
                <simple-line-icons
                  style="width: 15.98px; height: 15.97px"
                  class="m-0 text--white"
                  icon="cursor"
                  no-svg
                />
                <span
                  class="pl-3 text-capitalize"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                    letter-spacing: 0.636364px;
                  "
                  >Send to Payables</span
                >
              </v-btn>
            </div>
            <div class="mt-8">
              <InvoiceBtn @activate="activateField" />
            </div>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";
import InvoiceBtn from "./InvoiceBtn.vue";
import { mapActions } from "vuex";

export default {
  name: "BasicData",
  data() {
    return {
      menu: false,
      menu2: false,

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
    };
  },
  components: {
    SimpleLineIcons,
    InvoiceBtn,
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    activateField() {
      return (this.changeState = !this.changeState);
    },
    submitInput(e) {
      e.preventDefault();
      console.log("Basic Data", JSON.stringify(this.basicDataInput));
      console.log("Vendor Data", JSON.stringify(this.vendorData));
      this.showToast({
        sclass: "success",
        show: true,
        message: "Sign Up succesfully",
        timeout: 3000,
      });
      return (this.changeState = true);
    },
  },

  computed: {
    backgroundColor() {
      return this.changeState ? "transparent" : "#ffffff";
    },
  },
};
</script>

<style scoped>
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
