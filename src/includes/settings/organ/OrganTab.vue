<template>
  <div>
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
              ref="uploader"
              class="d-none"
              type="file"
              @change="onFileChanged"
            />

            <span
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isSelecting: false,
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
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      console.log(this.selectedFile);

      this.showToast({
        sclass: "success",
        show: true,
        message: "Logo Uploaded Successfully",
        timeout: 3000,
      });
    },
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
