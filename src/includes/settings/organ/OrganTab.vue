<template>
  <div>
    <!-- <pre>{{ organObj.leadership[0].first_name }}</pre> -->
    <v-row>
      <v-col>
        <div class="ml-13 mt-6 px-md-12">
          <v-subheader class="section-title pl-0 pb-0">Logo</v-subheader>
          <v-sheet
            class="rounded-md"
            style="display: table; text-align: center"
            color="grey lighten-3"
            width="200"
            height="160"
          >
            <input
              ref="logo"
              class="d-none"
              type="file"
              @change="onFileChanged"
            />

            <span
              v-if="isInitial"
              class="pb-6"
              style="bottom: 0; display: table-cell; vertical-align: bottom"
              ><v-btn
                class="py-2 text-capitalize"
                elevation="1"
                outlined
                small
                color="primary"
                :loading="isSelecting"
                @click="handleFileImport"
              >
                Upload Picture
              </v-btn></span
            >
            <span
              v-if="isSaving"
              class="pb-6"
              style="bottom: 0; display: table-cell; vertical-align: bottom"
              >{{ fileName }}<img src="" alt=""
            /></span>
          </v-sheet>
        </div>
        <div class="mx-13 mt-6">
          <v-form>
            <v-row class="mx-md-10 my-md-2 mb-8">
              <v-col cols="12">
                <v-text-field
                  v-model="companyDetails.companyName"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Company Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="companyDetails.selectedCurrency"
                  :items="currency"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Currency"
                >
                </v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.regNumber"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="RC/Registration No."
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-md-10 my-md-2 mb-8">
              <v-subheader class="my-4 section-title">
                Office/Location
              </v-subheader>
              <v-col cols="12">
                <v-text-field
                  v-model="companyDetails.address"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Address"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="companyDetails.selectedCountry"
                  :items="country"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Country"
                >
                </v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="companyDetails.selectedState"
                  :items="state"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="State"
                >
                </v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.city"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="City"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.Postcode"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Postcode"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <div class="pa-0 mx-md-10">
              <v-subheader class="px-0 px-md-4 my-4 section-title">
                Leadership
              </v-subheader>
            </div>
            <v-row class="mx-md-10 my-md-2 mb-8">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.leadership.firstName"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="First Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.leadership.lastName"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Last Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.leadership.email"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Email"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.leadership.phone"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Phone"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.leadership.position"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="City"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="companyDetails.leadership.percent"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Postcode"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-card-actions class="justify-end pa-md-8 pr-md-11">
              <v-btn
                class="submit-btn"
                :loading="isSending"
                @click="submitData"
                dark
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
                  no-svg
                />
                <span class="btn-name text-capitalize pl-3">Save</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isInitial: true,
      isSaving: false,
      isSelecting: false,
      isSending: false,
      selectedFile: null,
      companyDetails: {
        companyName: "",
        selectedCurrency: [],
        selectedCountry: [],
        selectedState: [],
        city: "",
        Postcode: "",
        regNumber: "",
        leadership: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          percent: "",
        },
      },
      currency: ["NGN", "USD"],
      country: [],
      state: [],
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    handleFileImport() {
      this.isSelecting = true;

      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      // Trigger click on the FileInput
      this.$refs.logo.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      this.fileName = this.selectedFile.name;
      this.isInitial = false;
      this.isSaving = true;
      console.log(this.selectedFile);
    },
    async uploadLogo() {
      //initialize the formData
      const formData = new FormData();
      // add the data needed for uploading the logo...
      formData.append("files", this.selectedFile);
      formData.append("ref", "organization");
      formData.append("refId", this.user.organization);
      formData.append("field", "logo");
      // upload  logo data to the server

      try {
        const res = await this.$store
          .dispatch("organizations/organizationLogoUpload", formData)
          .then(console.log(JSON.stringify(res, null, 2)))

          .then(
            this.showToast({
              sclass: "success",
              show: true,
              message: "Uploaded logo successfully..",
              timeout: 3000,
            })
          );
      } catch (error) {
        console.log(error);
        if (error) {
          this.showToast({
            sclass: "error",
            show: true,
            message: "logo upload failed",
            timeout: 3000,
          });
        }
      }

      this.showToast({
        sclass: "success",
        show: true,
        message: "Logo Uploaded Successfully",
        timeout: 3000,
      });
    },
    submitData() {
      this.isSending = true;
      console.log("func fired");
      this.uploadLogo().then((this.isSending = false));
    },
  },
  computed: {
    ...mapGetters({
      organObj: "organizations/organObj",
      user: "auth/user",
    }),
  },

  mounted() {
    this.$store
      .dispatch("organizations/getOrganizationById")
      .then((response) => {
        if (response.status == 200) {
          this.companyDetails.companyName = response.data.company.company_name;
          this.companyDetails.regNumber =
            response.data.company.registration_number;
          this.companyDetails.leadership.firstName =
            response.data.leadership[0].first_name;
          this.companyDetails.leadership.lastName =
            response.data.leadership[0].last_name;
          this.companyDetails.leadership.email =
            response.data.leadership[0].email;
          this.companyDetails.leadership.phone =
            response.data.leadership[0].phone;
        }
      });

    console.log(JSON.stringify(this.organObj, null, 2));
  },
};
</script>

<style scoped>
.btnDiv {
  position: absolute;
  bottom: 0;
}
.section-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}
.v-subheader {
  align-items: center;
  display: flex;
  height: 23px;
  font-size: 0.98rem;
  font-weight: 500;
}
.save-btn {
  background: var(--v-primary-base);
  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}
.btn-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.636364px;
  color: #ffffff;
}
</style>
