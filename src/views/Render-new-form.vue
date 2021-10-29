<template>
  <div style="background: #fefcf8">
    <v-container>
      <v-row justify-md="center" style="margin-top: 158px">
        <v-col cols="12" md="3">
          <v-card
            class="pa-2 d-flex justify-end"
            elevation="0"
            tile
            style="background-color: transparent"
          >
            <div>
              <v-sheet
                elevation="10"
                height="165"
                max-width="250"
                color="#FF6A6A"
                class="d-flex align-center justify-center rounded-t text-center"
              >
                <span
                  style="
                    padding-right: 80px;
                    padding-left: 80px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 15px;
                    color: #ffffff;
                  "
                  >COMPANY LOGO</span
                >
              </v-sheet>
              <v-sheet
                elevation="20"
                height="166"
                max-width="250"
                color="#fff fff"
                class="d-flex flex-column justify-center rounded-b-sm"
              >
                <span
                  class="pl-6 pt-5 pb-2"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 22px;
                    color: rgba(0, 35, 56, 0.5);
                  "
                  >{{ formTitle }}
                </span>
                <p
                  class="text-break pl-6"
                  style="
                    max-width: 191px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 20px;
                    color: #7f919b;
                    mix-blend-mode: normal;
                    opacity: 0.5;
                  "
                >
                  {{ formDescription }}
                </p>
              </v-sheet>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            class="pa-2"
            elevation="0"
            tile
            style="background-color: transparent"
          >
            <v-card elevation="20" max-width="550" min-height="866">
              <v-layout class="mx-16" style="padding-top: 51px">
                <template>
                  <FormRenderer
                    :form-configuration="formData"
                    v-model="formInputData"
                    v-if="formData"
                  />
                </template> </v-layout
            ></v-card>
          </v-card>

          <!-- <template>
            <FormRenderer
              :form-configuration="formData"
              v-model="formInputData"
              v-if="formData"
            />
          </template> -->
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-btn @click="loadForm"> load Form </v-btn> -->
  </div>
</template>

<script>
//import { FormRenderer } from "v-form-builder";
export default {
  components: {
    //FormRenderer
  },
  data() {
    return {
      formDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      formTitle: "Form Name",
      formData: null,
      formInputData: null,
      demoData: `{"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST","enableServerSideValidation":false,"serverSideValidationEndpoint":""},"sections":{"section-ecf524fd-2017-4966-9e80-19858eb79cb5":{"uniqueId":"section-ecf524fd-2017-4966-9e80-19858eb79cb5","headline":"","headlineAdditionalClass":"","subHeadline":"","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"normal","rows":[],"controls":["control-462f41a9-f800-4dff-80ac-fa8d5a759f96","control-0c2c194d-6f48-40c3-bec6-d69ea7b6589e","control-b53d73c5-34fe-469f-91ae-8b4df3e99a09","control-357b3272-ffe8-4766-832b-ceff493006ba","control-8eb53859-04da-4722-9bdd-8d0eac8a0627","control-0491a556-97fb-40cb-b537-4646cf4fb9f5","control-40ab76ff-7286-4846-8873-b63dc0086fb8","control-92cf89f9-7256-44fd-a615-2c0119a9cd15"]}},"rows":{},"controls":{"control-462f41a9-f800-4dff-80ac-fa8d5a759f96":{"uniqueId":"control-462f41a9-f800-4dff-80ac-fa8d5a759f96","type":"input","name":"bankName","label":"Bank Name","subLabel":"","isShowLabel":true,"placeholderText":"Bank Name","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-0c2c194d-6f48-40c3-bec6-d69ea7b6589e":{"uniqueId":"control-0c2c194d-6f48-40c3-bec6-d69ea7b6589e","type":"input","name":"bankAccountNumber","label":"Bank Account Number","subLabel":"","isShowLabel":true,"placeholderText":"Bank Account Number","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-b53d73c5-34fe-469f-91ae-8b4df3e99a09":{"uniqueId":"control-b53d73c5-34fe-469f-91ae-8b4df3e99a09","type":"input","name":"bankRoutingNumber","label":"Bank Routing Number","subLabel":"","isShowLabel":true,"placeholderText":"Bank Routing Number","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-357b3272-ffe8-4766-832b-ceff493006ba":{"uniqueId":"control-357b3272-ffe8-4766-832b-ceff493006ba","type":"input","name":"address","label":"Input Field","subLabel":"","isShowLabel":true,"placeholderText":"Street Address","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-8eb53859-04da-4722-9bdd-8d0eac8a0627":{"uniqueId":"control-8eb53859-04da-4722-9bdd-8d0eac8a0627","type":"input","name":"city","label":"City","subLabel":"","isShowLabel":true,"placeholderText":"City","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-0491a556-97fb-40cb-b537-4646cf4fb9f5":{"uniqueId":"control-0491a556-97fb-40cb-b537-4646cf4fb9f5","type":"input","name":"state","label":"State","subLabel":"","isShowLabel":true,"placeholderText":"State","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-40ab76ff-7286-4846-8873-b63dc0086fb8":{"uniqueId":"control-40ab76ff-7286-4846-8873-b63dc0086fb8","type":"input","name":"country","label":"Country","subLabel":"","isShowLabel":true,"placeholderText":"Country","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-92cf89f9-7256-44fd-a615-2c0119a9cd15":{"uniqueId":"control-92cf89f9-7256-44fd-a615-2c0119a9cd15","type":"button","name":"","label":"Submit","subLabel":"","isShowLabel":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"buttonClass":"btn btn-success md-button md-raised md-success md-theme-default","buttonType":"button","emitEventCode":"saveData","emitEventData":"formInputData","isRunValidation":false}}}`,
    };
  },

  methods: {
    loadForm() {
      this.$set(this, "formData", JSON.parse(this.demoData));
    },

    // showData() {
    //   console.log(this.formInputData);
    // },
  },
  created() {
    this.loadForm();
    this.$formEvent.$on("showData", (value) => {
      console.log(value);
      console.log(JSON.stringify(this.formInputData));
    });
  },
};
</script>

<style scoped>
@import "../assets/styles/bootstrap.min.css";
.v-application .elevation-20 {
  box-shadow: 0px 5px 3px -2px rgb(0 0 0 / 3%), 0px -4px 7px 2px rgb(0 0 0 / 3%),
    0px -4px 41px 8px rgb(0 0 0 / 2%) !important;
}
.v-application .elevation-10 {
  box-shadow: 0px 5px 3px -2px rgb(0 0 0 / 3%), 0px -4px 7px 2px rgb(0 0 0 / 3%),
    0px -4px 41px 8px rgb(0 0 0 / 2%) !important;
}
.theme--light.v-card {
  background-color: #ffffff;
  color: #7f919b !important;
}
.form-control ::placeholder {
  color: #7f919b !important;
}
</style>
