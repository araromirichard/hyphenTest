<template>
  <div class="px-4 py-2">
    <v-dialog v-model="dialog" max-width="530">
      <v-card color="#FEFCF8" class="rounded-lg">
        <v-card-title
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
            >Company Onboarding</span
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
            <v-tab
              class="mt-2"
              v-for="item in items"
              :key="item"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 800;
                font-size: 12px;
                line-height: 15px;
                text-transform: uppercase;
              "
              >{{ item }}
            </v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="tab" style="background: #fefcf8">
          <v-tab-item>
            <v-card style="background-color: #fefcf8" flat>
              <div class="my-7 mx-10">
                <p class="pa-0 ma-0 text--disabled text-subtitle-2">
                  To comply with regulatory authorities, we need to collect a
                  few more information about this company. We take data privacy
                  very seriously, please see our privacy policy
                  <span class="pa-0 ma-0"
                    ><v-btn
                      class="text--primary text-capitalize px-0"
                      text
                      x-small
                      >here</v-btn
                    ></span
                  >
                </p>
              </div>

              <!-- company form starts here -->
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form>
                  <v-row class="mx-10 mb-8">
                    <v-col class="p-0" cols="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Company Street Address"
                        rules="required|alpha"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.streetAddress"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Company Street Address"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="12" md="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Business Type"
                        rules="required"
                      >
                        <v-select
                          :error-messages="errors"
                          v-model="company.businessType"
                          :items="companyTypeArray"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Business Type"
                        >
                        </v-select>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="12" md="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Industry"
                        rules="required"
                      >
                        <v-select
                          :error-messages="errors"
                          v-model="company.industry"
                          :items="industryTypeArray"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Industry"
                        >
                        </v-select>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Accounting software"
                        rules="required|alpha"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.accountingSoftware"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Name of your accounting software"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col>
                      <template>
                        <v-card
                          @click="handleFileImport"
                          v-model="cac"
                          @drop.prevent="onDroppedFiles($event)"
                          @dragover.prevent="dragging = true"
                          @dragenter.prevent="dragging = true"
                          @dragleave.prevent="dragging = false"
                          width="515"
                          height="126"
                          class="mx-auto justify-center d-flex"
                          style=""
                          :style="{
                            border: dragging
                              ? '1px dashed #424f95'
                              : '1px dashed rgba(127, 145, 155, 0.551929)',
                          }"
                          flat
                        >
                          <span
                            class="d-flex mx-auto my-auto"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: normal;
                              font-size: 12px;
                              line-height: 18px;
                              text-align: center;
                              color: #7f919b;
                            "
                            >{{ placeholder }}
                            <v-icon
                              v-if="cac"
                              @click="removeFile"
                              small
                              tag="button"
                              color="red"
                              class="mx-4"
                              >mdi-close</v-icon
                            ></span
                          >
                        </v-card>
                      </template>
                      <template>
                        <input
                          ref="uploader"
                          class="d-none"
                          type="file"
                          @change="onFileSelected"
                        />
                      </template>
                    </v-col>
                  </v-row>
                  <v-card-actions class="justify-end px-12 px-md-0">
                    <v-btn
                      :disabled="invalid"
                      @click="switchTabs('next')"
                      class="mx-auto mx-md-12 mb-12"
                
                      :style="{
                        background: `${invalid ? '#e6eaeb' : '#19283D'}`,
                      }"
                      :width="$vuetify.breakpoint.smAndDown ? '100%' : '121'"
                      height="45"
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
                        :style="{
                          color: `${invalid ? '#050c13' : '#ffffff'}`,
                        }"
                        no-svg
                      />
                      <span
                        class="btn-name text-capitalize pl-3"
                        :style="{
                          color: `${invalid ? '#050c13' : '#ffffff'}`,
                        }"
                        >Next</span
                      >
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </validation-observer>
            </v-card>
          </v-tab-item>

          <!-- tab content for leadership -->
          <v-tab-item>
            <h6 class="intro justify-content-md-start mx-md-6 px-6">
              A company director, whose name appearson company registration
              document or authorised to approve bank payments
            </h6>
            <v-card style="background-color: transparent" flat>
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form>
                  <v-row class="mb-8 mx-10 mt-8">
                    <v-col class="p-0" cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="First Name"
                        rules="required|alpha"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.leadership.firstName"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="First Name"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Last Name"
                        rules="required|alpha"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.leadership.lastName"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Last Name"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Executive position"
                        rules="required|alpha"
                      >
                        <v-text-field
                          :error-messages="errors"
                          hint="e.g. MD/CEO, Director, etc"
                          v-model="company.leadership.executivePosition"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Executive Position"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.leadership.email"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Email"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Phone"
                        rules="required|alpha_num"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.leadership.phone"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Phone number"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="BVN"
                        rules="required|digits"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.leadership.bvn"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="BVN"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="12" md="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="selected ID"
                        rules="required"
                      >
                        <v-select
                          :error-messages="errors"
                          v-model="company.leadership.selectedIdType"
                          :items="idTypeArray"
                          background-color="#ffffff"
                          outlined
                          hide-details="auto"
                          placeholder="Select ID type to upload"
                        >
                        </v-select>
                      </validation-provider>
                    </v-col>
                    <v-col class="p-0" cols="6">
                      <template>
                        <v-card
                          @click="handleFileImport"
                          v-model="idCard"
                          @drop.prevent="onDroppedFiles($event)"
                          @dragover.prevent="dragging = true"
                          @dragenter.prevent="dragging = true"
                          @dragleave.prevent="dragging = false"
                          height="56 "
                          width="100%"
                          class="mx-auto justify-center d-flex"
                          style=""
                          :style="{
                            border: dragging
                              ? '1px dashed #424f95'
                              : '1px dashed rgba(127, 145, 155, 0.551929)',
                          }"
                          flat
                        >
                          <span
                            class="d-flex mx-auto my-auto"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: normal;
                              font-size: 12px;
                              line-height: 18px;
                              text-align: center;
                              color: #7f919b;
                            "
                            >{{ placeholderId }}
                            <v-icon
                              v-if="cac"
                              @click="removeFile"
                              small
                              tag="button"
                              color="red"
                              class="mx-4"
                              >mdi-close</v-icon
                            ></span
                          >
                        </v-card>
                      </template>
                      <template>
                        <input
                          ref="file"
                          class="d-none"
                          type="file"
                          @change="onFileSelected"
                        />
                      </template>
                    </v-col>
                  </v-row>
                  <v-card-actions class="justify-end px-0">
                    <v-btn
                      :disabled="invalid"
                      @click="saveKycData"
                      class="submit-btn mx-12 mb-12"
                      :style="{
                        background: `${invalid ? '#e6eaeb' : '#19283D'}`,
                      }"
                      type="submit"
                      :width="$vuetify.breakpoint.smAndDown ? '100%' : '121'"
                      height="45"
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
                        :style="{
                          color: `${invalid ? '#050c13' : '#ffffff'}`,
                        }"
                        no-svg
                      />
                      <span
                        class="btn-name text-capitalize pl-3"
                        :style="{
                          color: `${invalid ? '#050c13' : '#ffffff'}`,
                        }"
                        >Submit</span
                      >
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </validation-observer>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  required,
  email,
  alpha,
  alpha_num,
  digits,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("alpha", {
  ...alpha,
  message: "{_field_} can only contain alphabeth",
});
extend("digits", {
  ...digits,
  message: "{_field_} can only contain numbers",
});
extend("alpha_num", {
  ...alpha_num,
  message: "{_field_} can only contain alphabeth or numbers",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  name: "company",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      dragging: false,
      dialog: false,
      placeholder: "Upload Company Registration Document. CAC Certificate",
      placeholderId: "Please upload a copy of selected ID",
      company: {
        accountSoftware: "",
        streetAddress: "",
        businessType: "",
        industry: "",
        leadership: {
          firstName: "",
          lastName: "",
          excecutivePosition: "",
          bvn: "",
          email: "",
          phone: "",
          selectedIdType: "",
        },
      },
      idCard: null,
      cac: null,
      tab: null,
      companyTypeArray: ["Partnership", "Limited Liability", "Cooperative"],
      industryTypeArray: [
        "Agric produce",
        "Betting/Lottery",
        "Book Stores",
        "Bus Lines",
        "Cable/Satellite/Pay Television",
        "Clothing and Accessories",
        "Commercial footware",
        "Credit Lending Companies",
        "Cryptocurrency",
        "Departmental Stores",
        "Digital Goods/ Entertainment",
        "Education",
        "Electronics Store",
        "Financial Institutions/Fund Manager/Investent",
        "Generel Contractior",
        "General Merchandise Stores",
        "Grocery Stores and Supermarkets",
        "Hospitality/Lodging",
        "Insurance",
        "Money Transfer",
        "Non-Financial Institution",
        "Professional Services",
        "Real Estate/Facility Management",
        "Religious Organizatons",
        "Security Broker/Dealer_Custom",
        "Security Broker/Dealers",
        "Tax/Accounting/Audit",
        "Taxicabs",
        "Telecommunication",
        "Ticketing/Event",
        "Transportation Services",
        "Travel/Airlines",
        "Travel Agencies/Tour",
        "Utilities/Electric/Gas",
        "Video Games Arcades/Establishments",
        "Others",
      ],
      idTypeArray: ["NIN", "International Passpot", "Drivers_License, PVC"],

      items: ["Company", "Leadership"],
    };
  },
  methods: {
    handleFileImport() {
      // Trigger click on the FileInput
      this.$refs.uploader.click();
    },

    onFileSelected(event) {
      this.cac = event.target.files[0];
      console.log(this.cac);
      this.placeholder = this.cac.name;
    },
    onDroppedFiles(e) {
      this.dragging = false;

      this.cac = e.dataTransfer.files[0];
      console.log(this.cac);
      this.placeholder = this.cac.name;
    },
    removeFile(e) {
      e.preventDefault;
      this.cac = null;
      return this.placeholder;
    },
    switchTabs(direction) {
      //console.log(direction);
      //switch case to check and activate the next tab
      switch (direction) {
        case "next":
          if (this.tab <= this.items.length - 1) {
            this.tab++;
            return;
          }
          if (this.tab == this.items.length) {
            this.saveKycData();
          }

          break;

        default:
          break;
      }
    },

    saveKycData() {
      //
      const payload = {
        account_software: this.company.accountSoftware,
        office: [{ address: this.company.streetAddress }],
        business_type: this.company.businessType,
        industry: this.company.industry,
        leadership: [
          {
            first_name: this.company.leadership.firstName,
            last_name: this.company.leadership.lastName,
            position: this.company.leadership.excecutivePosition,
            email: this.company.leadership.email,
            phone: this.company.leadership.phone,
          },
        ],
      };

      console.log(JSON.stringify(payload, null, 2));
    },
    canSubmit() {
      // loop through rules, if all passes then data can be submitted....
      // const rules = Object.keys(this.rules);
      // return rules
      //   .map((rule) => {
      //     return Object.keys(this.rules[rule])
      //       .map((field, index) => {
      //         return this.rules[rule][index](this.company[rule]);
      //       })
      //       .every((val) => val == true);
      //   })
      //   .every((val) => val == true);
    },

    submitForm(event) {
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].validate(true);
      });
      if (this.canSubmit) {
        event.preventDefault();
        console.log(JSON.stringify(this.form, null, 2));
      }
    },
    show(value) {
      this.dialog = value;
    },
  },
  computed: {
    //
  },
};
</script>

<style scoped>
.intro-container {
  width: 426px;
}
.intro {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  color: #7f919b;
  padding-top: 29px;
}
.drag-drop-card {
  margin-top: 30px;
  margin-bottom: 30px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
