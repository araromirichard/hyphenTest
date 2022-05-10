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
export default {
  name: "Create-form",
  components: {
    //Overlaybtns
  },
  data() {
    return {
      switch1: true,
      formInputData: null,
      creatingForm: false,
      field_names: null,
      configuration: {
        formTitle: "",
        isPrivate: false,
        formName: this.$route.query.data,
        formId: "",
      },
      // formData: null,
      formData: {
        rows: {},
        controls: {
          "control-0a31d15b-f711-4b0c-bfdf-9ececa8e949f": {
            name: "role",
            type: "dropDown",
            items: [
              {
                text: "Admin",
                value: "Admin",
              },
              {
                text: "User",
                value: "User",
              },
            ],
            label: "",
            apiURL: "",
            dataMode: "list",
            multiple: false,
            subLabel: "",
            uniqueId: "control-0a31d15b-f711-4b0c-bfdf-9ececa8e949f",
            apiTextKey: "text",
            apiValueKey: "value",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Role",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-265fe913-0417-4bb5-ad79-aecca8f27ecb": {
            name: "firstName",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-265fe913-0417-4bb5-ad79-aecca8f27ecb",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "First Name",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-49632885-3264-42bc-95c7-740f530aa48a": {
            name: "lastName",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-49632885-3264-42bc-95c7-740f530aa48a",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Last Name",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-4cdd843b-9532-4467-87e0-9db6cc656b14": {
            name: "businessCategory",
            type: "dropDown",
            items: [],
            label: "",
            apiURL: "",
            dataMode: "list",
            multiple: false,
            subLabel: "",
            uniqueId: "control-4cdd843b-9532-4467-87e0-9db6cc656b14",
            apiTextKey: "text",
            apiValueKey: "value",
            isShowLabel: true,
            validations: [],
            defaultValue: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Business Categorin",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-666caea0-c3e4-4d3c-808f-cc5ba6124064": {
            name: "paymentTerms",
            type: "dropDown",
            items: [],
            label: "",
            apiURL: "",
            dataMode: "list",
            multiple: false,
            subLabel: "",
            uniqueId: "control-666caea0-c3e4-4d3c-808f-cc5ba6124064",
            apiTextKey: "text",
            apiValueKey: "value",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Payment Terms",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-764278ef-8708-4845-8579-500c22879ed6": {
            name: "email",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-764278ef-8708-4845-8579-500c22879ed6",
            isShowLabel: true,
            validations: [
              {
                ruleType: "isEmail",
                errorMessage: "Wrong email address format",
                additionalValue: "",
              },
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Email",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-8c495482-5182-4649-b558-4bd00e7c36b2": {
            name: "postName",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-8c495482-5182-4649-b558-4bd00e7c36b2",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Post Code",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-a36b4696-1a14-4960-b0bc-1906ac0cf8b2": {
            name: "accountCode",
            type: "dropDown",
            items: [],
            label: "",
            apiURL: "",
            dataMode: "list",
            multiple: false,
            subLabel: "",
            uniqueId: "control-a36b4696-1a14-4960-b0bc-1906ac0cf8b2",
            apiTextKey: "text",
            apiValueKey: "value",
            isShowLabel: true,
            validations: [],
            defaultValue: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Accounting Code",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-aee3056d-2cc9-48af-8172-b65f77ea0577": {
            name: "",
            type: "label",
            label: "Contact",
            subLabel: "",
            uniqueId: "control-aee3056d-2cc9-48af-8172-b65f77ea0577",
            isShowLabel: false,
            validations: [],
            defaultValue: "",
            forAttribute: null,
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-c677cde0-928c-4f50-8f54-95f38c1a9c68": {
            name: "state",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-c677cde0-928c-4f50-8f54-95f38c1a9c68",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "State",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-cfe1324e-c072-4190-8dc8-338d1f67c126": {
            name: "city",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-cfe1324e-c072-4190-8dc8-338d1f67c126",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "City",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-d388ec48-d5a6-4555-921d-0fadf6b83633": {
            name: "",
            type: "label",
            label: "Business",
            subLabel: "",
            uniqueId: "control-d388ec48-d5a6-4555-921d-0fadf6b83633",
            isShowLabel: false,
            validations: [],
            defaultValue: "",
            forAttribute: null,
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-e09c90a2-5184-46ba-800e-28ea43ae8a60": {
            name: "phone",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-e09c90a2-5184-46ba-800e-28ea43ae8a60",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Phone",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-ef69f56a-2e99-4b1e-9d65-3196a8590762": {
            name: "companyName",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-ef69f56a-2e99-4b1e-9d65-3196a8590762",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Company Name",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-f1ef6cce-14c2-437e-b4e5-604484f8e54b": {
            name: "companyAddress",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-f1ef6cce-14c2-437e-b4e5-604484f8e54b",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Company Street Address",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-f2c33699-beb6-427e-b864-bc316fca7d0c": {
            name: "businessAddress",
            type: "input",
            label: "",
            subLabel: "",
            uniqueId: "control-f2c33699-beb6-427e-b864-bc316fca7d0c",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Address",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-f5829661-e089-4fe5-89c2-4b784f0fe0f2": {
            name: "country",
            type: "dropDown",
            items: [],
            label: "",
            apiURL: "",
            dataMode: "list",
            multiple: false,
            subLabel: "",
            uniqueId: "control-f5829661-e089-4fe5-89c2-4b784f0fe0f2",
            apiTextKey: "text",
            apiValueKey: "value",
            isShowLabel: true,
            validations: [],
            defaultValue: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Country",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
        },
        sections: {
          "section-9f1e8974-b955-4620-8c5a-5ed3053b812c": {
            rows: [],
            type: "normal",
            controls: [
              "control-aee3056d-2cc9-48af-8172-b65f77ea0577",
              "control-f1ef6cce-14c2-437e-b4e5-604484f8e54b",
              "control-265fe913-0417-4bb5-ad79-aecca8f27ecb",
              "control-49632885-3264-42bc-95c7-740f530aa48a",
              "control-764278ef-8708-4845-8579-500c22879ed6",
              "control-e09c90a2-5184-46ba-800e-28ea43ae8a60",
              "control-0a31d15b-f711-4b0c-bfdf-9ececa8e949f",
              "control-d388ec48-d5a6-4555-921d-0fadf6b83633",
              "control-ef69f56a-2e99-4b1e-9d65-3196a8590762",
              "control-a36b4696-1a14-4960-b0bc-1906ac0cf8b2",
              "control-666caea0-c3e4-4d3c-808f-cc5ba6124064",
              "control-f2c33699-beb6-427e-b864-bc316fca7d0c",
              "control-8c495482-5182-4649-b558-4bd00e7c36b2",
              "control-cfe1324e-c072-4190-8dc8-338d1f67c126",
              "control-c677cde0-928c-4f50-8f54-95f38c1a9c68",
              "control-f5829661-e089-4fe5-89c2-4b784f0fe0f2",
              "control-4cdd843b-9532-4467-87e0-9db6cc656b14",
            ],
            headline: "Add Vendor Form",
            uniqueId: "section-9f1e8974-b955-4620-8c5a-5ed3053b812c",
            sortOrder: 1,
            subHeadline: "This is the sub-headline of the new section",
            isShowHeadline: true,
            headlineAdditionalClass: "",
            subHeadlineAdditionalClass: "",
          },
        },
        formConfig: {
          headline: "",
          formMethod: "POST",
          subHeadline: "",
          formActionURL: "api.onpbot.com/v1/forms/2/submit",
          renderFormTag: false,
          isShowHeadline: false,
          enableServerSideValidation: false,
          serverSideValidationEndpoint: "",
        },
      },
    };
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    async saveData() {
      this.checkFieldNames();
      const formPayload = this.createRequestData;
      console.log(JSON.stringify(formPayload), null, 2);
      //console.log(this.formData);
      if (this.checkGridClassAndFormActions()) {
        try {
          this.creatingForm = true;
          await this.$store
            .dispatch("formBuilder/createForm", formPayload)
            .then(
              this.showToast({
                sclass: "success",
                show: true,
                message:
                  "created Form " +
                  this.configuration.formName +
                  " successfully",
                timeout: 3000,
              })
            );
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
          this.formData = null;
        }
      }
    },
    checkFieldNames() {
      var controlsObject = this.formData.controls;

      const newArray = Object.keys(controlsObject).map((key) => {
        return {
          name: controlsObject[key].name,
        };
      });
      console.log(JSON.stringify(newArray, null, 2));

      const newObj = Object.assign({}, newArray);
      // if (this.field_names == null) {
      //   this.field_names = Object.values(newObj);
      // }
      this.field_names = Object.values(newObj);
      console.log(this.field_names);
    },
    checkGridClassAndFormActions() {
      //check that the formData array is not empty...
      if (this.formData == null && this.formData == undefined) return;
      //declare and assign the value of organization to a variable
      var organId = this.user.organization.id;

      this.formData.formConfig.formActionURL = `https://api.onpbot.com/v1/forms/${organId}/submit`;
      this.formData.sections[Object.keys(this.formData.sections)].headline =
        this.configuration.formName;
      console.log(this.formData.formConfig.formActionURL);

      //set the grid class of all fields to always be cols-12 and md-size-100
      for (const key in this.formData.controls) {
        this.formData.controls[key].containerClass =
          "col-md-12 md-layout-item md-size-100";
      }

      console.log();

      return true;
    },
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      token: "auth/token",
    }),
    ...mapState({
      organization: "organization",
    }),

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
      };
    },
  },
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
