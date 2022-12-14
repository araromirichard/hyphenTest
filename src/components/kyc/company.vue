<template>
  <div class="px-4 py-2">
    <v-dialog v-model="dialog" max-width="530">
      <v-card color="#f8f7f4" class="rounded-lg">
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
        <v-tabs-items v-model="tab" style="background: #f8f7f4">
          <v-tab-item>
            <v-card style="background-color: #f8f7f4" flat>
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
                <form enctype="multipart/form-data">
                  <v-row class="mx-10 mb-8">
                    <v-col class="p-0" cols="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Company Street Address"
                        rules="required"
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
                        rules="required"
                      >
                        <v-text-field
                          :error-messages="errors"
                          v-model="company.accountSoftware"
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
                          ref="uploader"
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
                            v-if="isInitial"
                            class="uploadInfo d-flex mx-auto my-auto"
                            >{{ placeholder }}
                          </span>
                          <span
                            v-if="isSaving"
                            class="uploadInfo d-flex mx-auto my-auto"
                            >{{ fileName }}
                            <v-icon
                              @click="removeFile($event, cac)"
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
                      :loading="moveToNext"
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
                </form>
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
                <form enctype="multipart/form-data">
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
                        rules="required"
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
                        rules="required|numeric"
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
                        <v-file-input
                          id="id-card"
                          clearable
                          background-color="#fff"
                          color="#9e9ebd"
                          prepend-icon=""
                          accept=".pdf, image/*"
                          placeholder="Please upload a copy of selected ID"
                          outlined
                          v-model="idCard"
                          ref="idCard"
                          @change="uploadFile"
                        >
                        </v-file-input>
                      </template>
                    </v-col>
                  </v-row>
                  <v-card-actions class="justify-end px-0">
                    <v-btn
                      :loading="updateKyc"
                      :disabled="invalid"
                      @click.prevent="saveKycData"
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
                </form>
              </validation-observer>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  required,
  email,
  alpha,
  alpha_num,
  numeric,
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
extend("numeric", {
  ...numeric,
  message: "{_field_} can only contain numbers",
});
extend("alpha_num", {
  ...alpha_num,
  message:
    "{_field_} can only contain alphabeth or numbers, remove special characters/symbols",
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
      moveToNext: false,
      updateKyc: false,
      dragging: false,
      dialog: false,
      fileName: null,
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
          executivePosition: "",
          bvn: "",
          email: "",
          phone: "",
          selectedIdType: "",
        },
      },
      idCard: null,
      cac: null,
      isInitial: true,
      isSaving: false,
      currentStatus: null,
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
    ...mapActions({ showToast: "ui/showToast" }),

    handleFileImport() {
      // Trigger click on the FileInput
      this.$refs.uploader.click();
    },
    handleIdPick() {
      // Trigger click on the FileInput
      this.$refs.file.click();
    },

    //fxn to attach and recieve means of identity
    uploadFile(e) {
      this.idCard = e.target.files[0];
      console.log(this.idCard);
      this.fileName = this.idCard.name;
      this.isInitial = false;
      this.isSaving = true;
    },

    //fxn to trigger input event in cac document
    onFileSelected(event) {
      this.cac = event.target.files[0];
      console.log(this.cac);
      this.fileName = this.cac.name;
      this.isInitial = false;
      this.isSaving = true;
    },

    //fxn for drag and drop
    onDroppedFiles(e) {
      this.dragging = false;

      this.cac = e.dataTransfer.files[0];
      console.log(this.cac);
      this.fileName = this.cac.name;
      this.isInitial = false;
      this.isSaving = true;
    },
    // reset form to initial state

    removeFile(e, selectedFile) {
      e.preventDefault;
      this.isInitial = true;
      this.isSaving = false;
      selectedFile = null;
      console.log(selectedFile);
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

    async uploadCAC() {
      //initialize the formData
      const formData = new FormData();
      // add the data needed for uploading the cac doc...
      formData.append("files", this.cac);
      formData.append("ref", "kyc.company");
      formData.append("refId", this.user.organization);
      formData.append("field", "registration_doc");

      console.log(this.cac);
      console.log(formData);

      try {
        await this.$store.dispatch("organizations/uploadCacDoc", formData).then(
          this.showToast({
            sclass: "success",
            show: true,
            message: "Upload CAC document successfully..",
            timeout: 3000,
          })
        );
      } catch (error) {
        console.log(error);
        if (error) {
          this.showToast({
            sclass: "error",
            show: true,
            message: "CAC document upload was unsuccessful..",
            timeout: 3000,
          });
        }
      }
    },
    async UploadIdCard() {
      //initialize the formData
      const formData = new FormData();
      // add the data needed for uploading the id card doc...
      formData.append("files", this.idCard);
      formData.append("ref", "kyc.ownership");
      formData.append("refId", this.user.organization);
      formData.append("field", "identity_url");
      // upload  idCard to the server

      console.log(this.idCard);
      console.log(formData);

      try {
        await this.$store.dispatch("organizations/uploadIdCard", formData).then(
          this.showToast({
            sclass: "success",
            show: true,
            message: "Uploaded Id Card successfully..",
            timeout: 3000,
          })
        );
      } catch (error) {
        console.log(error);
        if (error) {
          this.showToast({
            sclass: "error",
            show: true,
            message: "Id card upload failed",
            timeout: 3000,
          });
        }
      }
    },

    //submit form fields alone... without the attached files
    async saveKycData() {
      // send organization info to the server as an update request....
      this.updateKyc = true;

      const payload = {
        account_software: this.company.accountSoftware,
        office: [{ address: this.company.streetAddress }],
        business_type: this.company.businessType,
        industry: this.company.industry,
        leadership: [
          {
            first_name: this.company.leadership.firstName,
            last_name: this.company.leadership.lastName,
            position: this.company.leadership.executivePosition,
            email: this.company.leadership.email,
            phone: this.company.leadership.phone,
          },
        ],
      };
      const id = this.user.organization;
      if (this.canSubmit()) {
        console.log(JSON.stringify(payload, null, 2));

        //axios request starts from here..
        try {
          //axios req to send organ. info and leadership...
          await this.$store
            .dispatch("organizations/updateOrganization", id, payload)
            .then(
              this.showToast({
                sclass: "success",
                show: true,
                message: "Updated KYC successfully..",
                timeout: 3000,
              })
            );

          //calling axios post request to upload cac doc and id card..
          this.uploadCAC();
          this.UploadIdCard();
        } catch (error) {
          console.log(error);
          if (error) {
            this.showToast({
              sclass: "error",
              show: true,
              message: "Organization Kyc Update failed",
              timeout: 3000,
            });
          }
        } finally {
          this.updateKyc = false;
          this.dialog = false;
        }
      } else {
        this.showToast({
          sclass: "error",
          show: true,
          message: "please fill all fields before submiting the forms",
          timeout: 3000,
        });
      }
    },
    canSubmit() {
      //check if the dragdrop cards or the upload doc fields have values in them...

      if (this.idCard !== null && this.cac !== null) {
        return true;
      }
    },

    show() {
      this.dialog = true;
    },
  },
  computed: {
    //

    ...mapGetters({
      user: "auth/user",
      token: "auth/token",
    }),
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

.uploadInfo {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #7f919b;
}
.v-file-input .v-file-input >>> placeholder {
  font-size: 9px !important;
}
</style>
