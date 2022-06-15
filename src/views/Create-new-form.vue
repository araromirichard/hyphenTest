<template>
  <v-card elevation="0" tile class="d-flex justify-center align-center">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
        style="min-height: 100vh"
        class="white d-flex flex-column align-center"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-container>
          <v-row>
            <v-col>
              <div class="pb-5">
                <h6
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 29px;
                    letter-spacing: -0.73px;
                    color: #7f919b;
                  "
                >
                  Form preview
                </h6>
                <p
                  class="text-break"
                  style="
                    max-width: 257px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 20px;
                    color: #596a73;
                  "
                >
                  Below is a preview of your published form. Use your form to
                  collect finance related data from your co-workers, suppliers,
                  advisors, auditors, etc
                </p>
              </div>
              <div
                class="d-flex flex-column justify-center align-center"
                style="
                  border: 1px dotted #ccc;
                  border-radius: 4px;
                  background-color: #fff;
                "
              >
                <v-row>
                  <v-col cols="12">
                    <v-layout style="padding-top: 20px">
                      <template>
                        <FormRenderer
                          :form-configuration="formData"
                          v-if="formData"
                        />
                      </template>
                    </v-layout>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col
        class="d-flex flex-column justify-center pa-2"
        style="background-color: rgb(248, 247, 244); min-height: 100vh"
        cols="12"
        md="9"
      >
        <div>
          <div class="d-flex justify-center align-center">
            <h6
              class="pl-5 pt-md-5"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
                letter-spacing: -0.73px;
                color: var(--v-primary-base);
              "
              :style="{
                paddingTop: `${
                  $vuetify.breakpoint.mdAndDown ? '10px' : '16px'
                }`,
                paddingLeft: `${
                  $vuetify.breakpoint.mdAndDown ? '8px' : '16px'
                }`,
              }"
            >
              Form Builder / {{ configuration.formName }}
            </h6>
            <v-spacer></v-spacer>

            <div class="px-8 pt-6">
              <v-switch
                color="#16be98"
                v-model="configuration.isPrivate"
                :label="`Private Form?: ${configuration.isPrivate.toString()}`"
              ></v-switch>
              <v-sheet
                outlined
                rounded="lg"
                width="273px"
                height="48px"
                style=""
                class="d-flex align-center"
              >
                <v-icon small color="disabled" class="px-2"
                  >mdi-clipboard-text-outline</v-icon
                >
                <span
                  class="text-center text-truncate"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 10px;
                    line-height: 20px;
                    color: #596a73;
                  "
                  >https://hypn.so/{id}</span
                >
              </v-sheet>
            </div>
          </div>

          <FormBuilder style="" v-model="formData"></FormBuilder>
        </div>
        <!-- <v-btn @click="show"> console </v-btn> -->
        <v-row>
          <v-col class="my-2 mx-md-5 d-flex justify-end">
            <v-btn
              @click="saveData"
              :loading="creatingForm"
              dark
              width="136"
              height="45"
              style="
                padding: 14px;
                background: #16be98;
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
                class="btnSucces text-capitalize py-4 pl-3"
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
                >save form</span
              >
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
//import formBuider from "@/api/formbuilder.js";
import { mapActions, mapGetters, mapState } from "vuex";
//import formFormat from "../mixins/functions";
export default {
  name: "Create-form",
  components: {
    //Overlaybtns
  },
  data() {
    return {
      switch1: true,
      field_names: null,
      formInputData: null,
      creatingForm: false,
      configuration: {
        formTitle: "",
        isPrivate: false,
        formName: this.$route.query.data,
        formId: "",
      },
      formData: null || {
        formConfig: {
          headline: "",
          subHeadline: "",
          isShowHeadline: false,
          renderFormTag: false,
          formActionURL: "",
          formMethod: "POST",
          enableServerSideValidation: false,
          serverSideValidationEndpoint: "",
        },
        sections: {
          "section-232862ac-c95c-4221-ac71-d5d9a65bc605": {
            uniqueId: "section-232862ac-c95c-4221-ac71-d5d9a65bc605",
            headline: "New Section",
            headlineAdditionalClass: "",
            subHeadline: "This is the sub-headline of the new section",
            subHeadlineAdditionalClass: "",
            isShowHeadline: true,
            sortOrder: 1,
            type: "normal",
            rows: [],
            controls: ["control-859f84d7-fe9c-4870-89fa-12a2c080bf03"],
          },
        },
        rows: {},
        controls: {
          "control-859f84d7-fe9c-4870-89fa-12a2c080bf03": {
            uniqueId: "control-859f84d7-fe9c-4870-89fa-12a2c080bf03",
            type: "input",
            name: "standard input",
            label: "Field 1",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Enter a Placeholder",
            containerClass: "col-md-4 md-layout-item md-size-33",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            typeAttribute: "text",
          },
        },
      },
    };
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    async saveData() {
      this.checkFieldNames();
      const formPayload = this.createRequestData;
      console.log(JSON.stringify(formPayload, null, 2));
      console.log("hello");
      if (this.checkGridClassAndFormActions()) {
        try {
          this.creatingForm = true;
          const resp = await this.$store.dispatch(
            "formBuilder/createForm",
            formPayload
          );

          console.log(JSON.stringify(resp, null, 2));

          this.showToast({
            sclass: "success",
            show: true,
            message:
              "created Form " + this.configuration.formName + " successfully",
            timeout: 3000,
          });
        } catch (error) {
          console.log(error);
          if (error) {
            this.showToast({
              sclass: "error",
              show: true,
              message:
                "Form " + this.configuration.formName + " could not Updated",
              timeout: 3000,
            });
          }
        } finally {
          this.creatingForm = false;
          // this.formData = null;
        }
      }
    },
    checkFieldNames() {
      var controlsObject = this.formData.controls;

      const newArray = Object.keys(controlsObject).map((key) => {
        return {
          label: controlsObject[key].label,
          key: controlsObject[key].name,
          type: controlsObject[key].type,
          options: controlsObject[key].items,
        };
      });
      // console.log(JSON.stringify(newArray, null, 2));

      const newObj = Object.assign({}, newArray);
      // if (this.field_names == null) {
      //   this.field_names = Object.values(newObj);
      // }
      this.field_names = Object.values(newObj);
      //   console.log(this.field_names);
    },

    checkGridClassAndFormActions() {
      //check that the formData array is not empty...
      if (this.formData == null && this.formData == undefined) return;
      //declare and assign the value of organization to a variable
      var organId = this.user.organization.id;

      this.formData.formConfig.formActionURL = `https://api.onpbot.com/v1/forms/${organId}/submit`;
      this.formData.sections[Object.keys(this.formData.sections)].headline =
        this.configuration.formName;
      // console.log(this.formData.formConfig.formActionURL);

      //set the grid class of all fields to always be cols-12 and md-size-100
      for (const key in this.formData.controls) {
        this.formData.controls[key].containerClass =
          "col-md-12 md-layout-item md-size-100";
        this.formData.controls[key].name = this.formData.controls[key].name
          .toLowerCase()
          .replaceAll(" ", "_");
      }

      return true;
      //format the name value and replace spaces with underscore
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      token: "auth/token",
      formDescription: "formBuilder/getFormDescription",
    }),
    ...mapState({
      organization: "organization",
    }),

    //return a single field on load

    //return full object to send to
    createRequestData() {
      return {
        organization: this.user.organization.id.toString(),
        form_title: this.configuration.formName,
        form_fields: this.formData,
        is_private: this.configuration.isPrivate,
        is_payment: this.$store.state.formBuilder.makePayment,
        has_signature: this.$store.state.formBuilder.needSignature,
        form_type: this.$store.state.formBuilder.selectedFormType,
        field_names: this.field_names,
        form_description: this.formDescription,
      };
    },
  },
  // mixins: [formFormat],
};
</script>

<style>
@import "../assets/styles/bootstrap.min.css";
.vue-form-builder .copyright-text {
  display: none !important;
}
.btn-success {
  color: #fff;
  background-color: #16be98 !important;
  border-color: #16be98 !important;
}
.btn-success {
  width: 136px !important;
  height: 45px !important;
  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24) !important;
  border-radius: 4px !important;
}
.headline-block {
  display: none !important;
}
.section-config {
  display: none !important;
}
.form-configuration-block {
  display: none !important;
}
.full-height {
  min-height: 100%;
  max-height: 100vh;
}
</style>
