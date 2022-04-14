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
        style="background-color: rgb(253, 249, 239); min-height: 100vh"
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
      //formData: null,
      formData: {
        rows: {},
        controls: {
          "control-20a6c790-71cb-418f-821a-cf325103dd16": {
            name: "amountInWords",
            type: "input",
            label: "Amount In Words",
            subLabel: "",
            uniqueId: "control-20a6c790-71cb-418f-821a-cf325103dd16",
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
            placeholderText: "Amount In Words",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-33edadc6-82e1-4f70-80fe-6d205db1c2b3": {
            name: "policyType",
            type: "radio",
            items: [
              {
                text: "Individual",
                value: "individual",
              },
              {
                text: "Corporate",
                value: "corporate",
              },
            ],
            label: "Policy Type",
            position: "left",
            subLabel: "",
            uniqueId: "control-33edadc6-82e1-4f70-80fe-6d205db1c2b3",
            displayMode: "bothSide",
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
            placeholderText: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-3acd4c79-e5bb-4b4d-a8a5-9d05310a929e": {
            name: "firstName",
            type: "input",
            label: "First Name",
            subLabel: "",
            uniqueId: "control-3acd4c79-e5bb-4b4d-a8a5-9d05310a929e",
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
          "control-56ff7e1a-4767-4fbc-844e-6d12d8ade794": {
            name: "amount",
            type: "number",
            label: "Amount",
            isReal: true,
            subLabel: "",
            uniqueId: "control-56ff7e1a-4767-4fbc-844e-6d12d8ade794",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            decimalPlace: 0,
            defaultValue: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Amount",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-74b1a458-3c65-4584-b407-b998cb1e515d": {
            name: "bankName",
            type: "input",
            label: "Bank Name",
            subLabel: "",
            uniqueId: "control-74b1a458-3c65-4584-b407-b998cb1e515d",
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
            placeholderText: "Bank Name",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-7a5fc651-da4b-404a-8fe4-cbb3f50dc301": {
            name: "telephone",
            type: "input",
            label: "Telephone",
            subLabel: "",
            uniqueId: "control-7a5fc651-da4b-404a-8fe4-cbb3f50dc301",
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
            placeholderText: "Telephone",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-7f3c58fd-c045-4ce5-a5ea-a865597a0b7b": {
            name: "firstPaymentDate",
            type: "date",
            label: "First Payment Date",
            format: "DD/MM/YYYY",
            maxDate: null,
            maxDays: 0,
            minDate: null,
            minDays: 0,
            firstDay: 0,
            subLabel: "",
            uniqueId: "control-7f3c58fd-c045-4ce5-a5ea-a865597a0b7b",
            returnType: "format",
            singleMode: true,
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
            numberOfMonths: 1,
            numberOfColumns: 1,
            placeholderText: "First Payment Date",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-89bc2ef1-d32e-4604-8e33-6790e424772f": {
            name: "bankAccountNumber",
            type: "input",
            label: "Bank Account Number",
            subLabel: "",
            uniqueId: "control-89bc2ef1-d32e-4604-8e33-6790e424772f",
            isShowLabel: true,
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
              {
                ruleType: "regex",
                errorMessage: "This field value doesn't match with the rule",
                additionalValue: "[0-9]",
              },
            ],
            defaultValue: "",
            typeAttribute: "text",
            containerClass: "col-md-12 md-layout-item md-size-100",
            placeholderText: "Bank account number",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-8e7aa311-1097-4fe1-a2fc-90bca9d0a2ca": {
            name: "state",
            type: "input",
            label: "State",
            subLabel: "",
            uniqueId: "control-8e7aa311-1097-4fe1-a2fc-90bca9d0a2ca",
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
          "control-9b3a9d6d-114d-4e12-b04e-3756baa05e90": {
            name: "town",
            type: "input",
            label: "Town",
            subLabel: "",
            uniqueId: "control-9b3a9d6d-114d-4e12-b04e-3756baa05e90",
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
            placeholderText: "Town",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-b81cb94b-6620-4da8-ac6f-efd549655f61": {
            name: "paymentType",
            type: "radio",
            items: [
              {
                text: "Fixed Amount",
                value: "fixed",
              },
              {
                text: "Variable Amount",
                value: "variable",
              },
            ],
            label: "Payment Type",
            position: "left",
            subLabel: "",
            uniqueId: "control-b81cb94b-6620-4da8-ac6f-efd549655f61",
            displayMode: "bothSide",
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
            placeholderText: "Payment Type",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-b9a24719-62ef-48ad-b3d1-aa6d029bfd00": {
            name: "email",
            type: "input",
            label: "Email",
            subLabel: "",
            uniqueId: "control-b9a24719-62ef-48ad-b3d1-aa6d029bfd00",
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
          "control-ba1d3813-debd-434d-a151-3ce70a896552": {
            name: "frequency",
            type: "radio",
            items: [
              {
                text: "Daily",
                value: "daily",
              },
              {
                text: "Weekly",
                value: "weekly",
              },
              {
                text: "Monthly",
                value: "monthly",
              },
              {
                text: "Annually",
                value: "annually",
              },
              {
                text: "Bi-annually",
                value: "bianually",
              },
              {
                text: "Quarterly",
                value: "quarterly",
              },
            ],
            label: "Frequency",
            position: "left",
            subLabel: "",
            uniqueId: "control-ba1d3813-debd-434d-a151-3ce70a896552",
            displayMode: "next",
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
            placeholderText: "Frequency",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-d5e244d6-91fb-40d8-88bb-a727eba9b7b7": {
            name: "gender",
            type: "input",
            label: "Gender",
            subLabel: "",
            uniqueId: "control-d5e244d6-91fb-40d8-88bb-a727eba9b7b7",
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
            placeholderText: "Gender",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-d7463689-82ec-48b6-8c7a-6200a9ddbb72": {
            name: "lastName",
            type: "input",
            label: "Last Name",
            subLabel: "",
            uniqueId: "control-d7463689-82ec-48b6-8c7a-6200a9ddbb72",
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
          "control-da75aca2-39a2-4924-81a7-84d0914e0c4e": {
            name: "mobile",
            type: "input",
            label: "Mobile Number",
            subLabel: "",
            uniqueId: "control-da75aca2-39a2-4924-81a7-84d0914e0c4e",
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
            placeholderText: "Mobile Number",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-e8071227-74d6-4bc7-830f-8654d5a4082e": {
            name: "narration",
            type: "input",
            label: "Narration",
            subLabel: "",
            uniqueId: "control-e8071227-74d6-4bc7-830f-8654d5a4082e",
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
            placeholderText: "Narration",
            additionalFieldClass: "",
            additionalLabelClass: "",
            additionalContainerClass: "",
          },
          "control-efc17c51-2990-40c7-bece-e30686dfc898": {
            name: "address",
            type: "input",
            label: "Address",
            subLabel: "",
            uniqueId: "control-efc17c51-2990-40c7-bece-e30686dfc898",
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
        },
        sections: {
          "section-6b878f3d-c4cc-4c67-bee7-fd4bc4a6a086": {
            rows: [],
            type: "normal",
            controls: [
              "control-3acd4c79-e5bb-4b4d-a8a5-9d05310a929e",
              "control-d7463689-82ec-48b6-8c7a-6200a9ddbb72",
              "control-efc17c51-2990-40c7-bece-e30686dfc898",
              "control-9b3a9d6d-114d-4e12-b04e-3756baa05e90",
              "control-8e7aa311-1097-4fe1-a2fc-90bca9d0a2ca",
              "control-d5e244d6-91fb-40d8-88bb-a727eba9b7b7",
              "control-7a5fc651-da4b-404a-8fe4-cbb3f50dc301",
              "control-da75aca2-39a2-4924-81a7-84d0914e0c4e",
              "control-b9a24719-62ef-48ad-b3d1-aa6d029bfd00",
              "control-33edadc6-82e1-4f70-80fe-6d205db1c2b3",
              "control-74b1a458-3c65-4584-b407-b998cb1e515d",
              "control-89bc2ef1-d32e-4604-8e33-6790e424772f",
              "control-56ff7e1a-4767-4fbc-844e-6d12d8ade794",
              "control-20a6c790-71cb-418f-821a-cf325103dd16",
              "control-e8071227-74d6-4bc7-830f-8654d5a4082e",
              "control-b81cb94b-6620-4da8-ac6f-efd549655f61",
              "control-ba1d3813-debd-434d-a151-3ce70a896552",
              "control-7f3c58fd-c045-4ce5-a5ea-a865597a0b7b",
            ],
            headline: "Direct Debit Mandate Form",
            uniqueId: "section-6b878f3d-c4cc-4c67-bee7-fd4bc4a6a086",
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
          formActionURL: "",
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
