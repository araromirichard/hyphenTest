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
              <v-layout style="padding-top: 51px; margin-left: 66px">
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
      demoData: `{"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST","enableServerSideValidation":false,"serverSideValidationEndpoint":""},"sections":{"section-5df50de8-19d8-4611-8b04-8e54a6925289":{"uniqueId":"section-5df50de8-19d8-4611-8b04-8e54a6925289","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"normal","rows":[],"controls":["control-5e1b2c1d-5600-4299-ac12-6926dc48413e","control-d67c4dbb-43b4-418c-b36d-6dbfbcc5e277","control-75cafce9-2efa-47bf-a22e-eac930ab0e29"]}},"rows":{},"controls":{"control-5e1b2c1d-5600-4299-ac12-6926dc48413e":{"uniqueId":"control-5e1b2c1d-5600-4299-ac12-6926dc48413e","type":"input","name":"first","label":"Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-12","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-d67c4dbb-43b4-418c-b36d-6dbfbcc5e277":{"uniqueId":"control-d67c4dbb-43b4-418c-b36d-6dbfbcc5e277","type":"input","name":"second","label":"Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-12","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"typeAttribute":"text"},"control-75cafce9-2efa-47bf-a22e-eac930ab0e29":{"uniqueId":"control-75cafce9-2efa-47bf-a22e-eac930ab0e29","type":"button","name":"","label":"Send","subLabel":"","isShowLabel":false,"placeholderText":"","containerClass":"col-md-12","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"buttonClass":"success large dark depressed","buttonType":"button","emitEventCode":"","emitEventData":"","isRunValidation":false}}}`,
    };
  },

  methods: {
    loadForm() {
      this.$set(this, "formData", JSON.parse(this.demoData));
    },

    viewData() {
      console.log(this.formInputData);
    },
  },
  created() {
    this.loadForm();
  },
};
</script>

<style scoped>
.v-application .elevation-20 {
  box-shadow: 0px 5px 3px -2px rgb(0 0 0 / 3%), 0px -4px 7px 2px rgb(0 0 0 / 3%),
    0px -4px 41px 8px rgb(0 0 0 / 2%) !important;
}
.v-application .elevation-10 {
  box-shadow: 0px 5px 3px -2px rgb(0 0 0 / 3%), 0px -4px 7px 2px rgb(0 0 0 / 3%),
    0px -4px 41px 8px rgb(0 0 0 / 2%) !important;
}
</style>
