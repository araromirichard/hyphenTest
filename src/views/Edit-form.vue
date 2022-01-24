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
              paddingTop: `${$vuetify.breakpoint.mdAndDown ? '10px' : '16px'}`,
              paddingLeft: `${$vuetify.breakpoint.mdAndDown ? '8px' : '16px'}`,
            }"
          >
            Form Builder
          </h6>

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
import formBuider from "@/api/formbuilder.js";
import { mapActions } from "vuex";
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
      },
      formData: null,
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    saveData() {
      //get id from $route.params to access the particular form template...
      const id = parseInt(this.$route.params.id);
      const dataPayload = this.createRequestData;
      formBuider
        .updateForm(id, dataPayload)
        .then((response) => {
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(
            "an error occured while trying to update form Template:",
            error.response
          );
        });

      this.showToast({
        sclass: "success",
        show: true,
        message: "Form Template Updated",
        timeout: 3000,
      });
    },
  },

  mounted() {
    //get id from $route.params to access the particular form template...
    const id = parseInt(this.$route.params.id);
    //get formData
    formBuider
      .getForm(id)
      .then((response) => {
        this.formData = response.data.data;
      })
      .catch((error) => {
        console.log(
          "an error occured while trying to get form:",
          error.response
        );
      });
  },
  computed: {
    //return full object to send to
    createRequestData() {
      return {
        form_title: this.fmName,
        data: this.formData,
        is_private: this.configuration.isPrivate,
      };
    },

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
        return "";
      }
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
