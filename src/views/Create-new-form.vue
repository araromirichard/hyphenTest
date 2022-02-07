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
              Form Builder
            </h6>
            <v-spacer></v-spacer>
            <div class="px-8 pt-6">
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
                  >https://forms.onpbot.com/your-form-name-h</span
                >
              </v-sheet>
            </div>
          </div>

          <FormBuilder style="" v-model="formData"></FormBuilder>
        </div>
        <v-row>
          <v-col class="my-2 mx-md-5 d-flex justify-end">
            <v-btn
              @click="saveData"
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
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    //Overlaybtns
  },
  data() {
    return {
      formInputData: null,
      configuration: {
        formTitle: "",
        isPrivate: true,
        formName: "",
        formId: 2,
      },
      formData: {
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
          "section-e22cb6b8-54a5-42f5-bff4-c29149859fa6": {
            uniqueId: "section-e22cb6b8-54a5-42f5-bff4-c29149859fa6",
            headline: "Bulk Wholesale Purchase Order",
            headlineAdditionalClass: "",
            subHeadline: "This is the sub-headline of the new section",
            subHeadlineAdditionalClass: "",
            isShowHeadline: true,
            sortOrder: 1,
            type: "normal",
            rows: [],
            controls: [
              "control-534cb29a-bf28-4ae3-a5cd-4403eda62240",
              "control-4d77fb7c-2d89-480b-8768-d4990ef3b185",
              "control-8753a146-78c2-47ab-9d6a-bd38b96dd886",
              "control-0f4247c6-cfc7-4935-9b99-d113bafd6e1a",
              "control-6a1a40dc-9034-4ae2-8735-0cd52829714b",
              "control-10226b9a-1b35-49b3-afb2-778e6c95d9e6",
              "control-b27c7a4f-b105-481e-bc09-c2ee1a8bce74",
              "control-88b521ec-fafc-4e75-a586-824dfa4abd65",
              "control-14599fc7-3650-427b-b6d7-e6510b8fd5b5",
              "control-901f59d0-12d4-49a9-b22a-bcf00d1e99fd",
            ],
          },
        },
        rows: {},
        controls: {
          "control-534cb29a-bf28-4ae3-a5cd-4403eda62240": {
            uniqueId: "control-534cb29a-bf28-4ae3-a5cd-4403eda62240",
            type: "date",
            name: "Date",
            label: "Today's Date",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Today's Date",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            format: "DD/MM/YYYY",
            firstDay: 0,
            numberOfMonths: 1,
            numberOfColumns: 1,
            minDate: null,
            maxDate: null,
            singleMode: true,
            minDays: 0,
            maxDays: 0,
            returnType: "format",
          },
          "control-4d77fb7c-2d89-480b-8768-d4990ef3b185": {
            uniqueId: "control-4d77fb7c-2d89-480b-8768-d4990ef3b185",
            type: "input",
            name: "firstName",
            label: "First Name",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "First Name",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            typeAttribute: "text",
          },
          "control-8753a146-78c2-47ab-9d6a-bd38b96dd886": {
            uniqueId: "control-8753a146-78c2-47ab-9d6a-bd38b96dd886",
            type: "input",
            name: "lastName",
            label: "Last Name",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Last Name",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            typeAttribute: "text",
          },
          "control-0f4247c6-cfc7-4935-9b99-d113bafd6e1a": {
            uniqueId: "control-0f4247c6-cfc7-4935-9b99-d113bafd6e1a",
            type: "input",
            name: "Email",
            label: "Input Field",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Enter Email",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [
              {
                ruleType: "isEmail",
                errorMessage: "Wrong email address format",
                additionalValue: "",
              },
            ],
            typeAttribute: "text",
          },
          "control-6a1a40dc-9034-4ae2-8735-0cd52829714b": {
            uniqueId: "control-6a1a40dc-9034-4ae2-8735-0cd52829714b",
            type: "input",
            name: "Phone",
            label: "Phone Number",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "+23470000000000",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            typeAttribute: "text",
          },
          "control-10226b9a-1b35-49b3-afb2-778e6c95d9e6": {
            uniqueId: "control-10226b9a-1b35-49b3-afb2-778e6c95d9e6",
            type: "number",
            name: "Quantity",
            label: "Quantity",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Quantity",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            isReal: false,
            decimalPlace: 1,
          },
          "control-b27c7a4f-b105-481e-bc09-c2ee1a8bce74": {
            uniqueId: "control-b27c7a4f-b105-481e-bc09-c2ee1a8bce74",
            type: "input",
            name: "itemNumber",
            label: "Item #",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Enter Item Number",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            typeAttribute: "text",
          },
          "control-88b521ec-fafc-4e75-a586-824dfa4abd65": {
            uniqueId: "control-88b521ec-fafc-4e75-a586-824dfa4abd65",
            type: "input",
            name: "itemName",
            label: "Item Name",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "Enter Item Name",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            typeAttribute: "text",
          },
          "control-14599fc7-3650-427b-b6d7-e6510b8fd5b5": {
            uniqueId: "control-14599fc7-3650-427b-b6d7-e6510b8fd5b5",
            type: "text",
            name: "additionalInfo",
            label: "Provide any additional information here:",
            subLabel: "",
            isShowLabel: true,
            placeholderText: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            rows: 5,
          },
          "control-901f59d0-12d4-49a9-b22a-bcf00d1e99fd": {
            uniqueId: "control-901f59d0-12d4-49a9-b22a-bcf00d1e99fd",
            type: "button",
            name: "",
            label: "Submit",
            subLabel: "",
            isShowLabel: false,
            placeholderText: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            additionalContainerClass: "",
            additionalFieldClass: "",
            additionalLabelClass: "",
            defaultValue: "",
            validations: [],
            buttonClass:
              "btn btn-success md-button md-raised md-success md-theme-default",
            buttonType: "submit",
            emitEventCode: "",
            emitEventData: "",
            isRunValidation: false,
          },
        },
      },
      // formData: null,
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    async saveData() {
      const formPayload = this.createRequestData;
      console.log(formPayload);
      //console.log(this.formData);

      try {
        await this.$store.dispatch("formBuilder/createForm", formPayload);
      } catch (error) {
        console.log(error);
      }

      this.showToast({
        sclass: "success",
        show: true,
        message: "Form Template Created",
        timeout: 3000,
      });
    },
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      token: "auth/token",
    }),

    getFormName() {
      if (this.formData == null && this.formData == undefined) return;
      console.log(JSON.stringify(this.formData, null, 2));

      //declaring a variable and trying to get the form title name from the formData Object....
      var fmName = "";
      try {
        fmName =
          this.formData.sections[Object.keys(this.formData.sections)].headline;

        console.log(fmName);
        return fmName;
      } catch (error) {
        return "can not create fnName";
      }
    },
    getFormId() {
      if (this.formData == null && this.formData == undefined) return;

      //declaring a variable and trying to get the form title name from the formData Object to create the formId....
      var formId = "";
      try {
        formId = this.getFormName.split(" ").join("").toLowerCase();

        console.log(formId);
        return formId;
      } catch (error) {
        return "xx";
      }
    },
    //return full object to send to
    createRequestData() {
      return {
        organization: this.user.organization.toString(),
        form_title: this.getFormName,
        form_fields: this.formData,
        is_private: this.configuration.isPrivate,
        form_id: this.getFormId,
        hash: "",
      };
    },
  },
  // mounted() {
  //   // console.log({store: this.$store, data: this.$data, user: this.user})
  //   console.log({
  //     user: this.user,
  //     token: this.token,
  //     organization: this.user.organization.toString(),
  //   });
  // },
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
/* .section-config {
  display: none !important;
} */
.form-configuration-block {
  display: none !important;
}
.full-height {
  min-height: 100%;
  max-height: 100vh;
}
</style>
