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
              Form Builder / {{ formData.form_title }}
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
                  >https://hypn.so/{{ $route.params.id }}</span
                >
              </v-sheet>
            </div>
          </div>
          <FormBuilder style="" v-model="formData.form_fields"></FormBuilder>
        </div>
        <v-row>
          <v-col class="my-2 mx-md-5 d-flex justify-end">
            <v-btn
              @click="updateFormData"
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
      formData: null,
      configuration: {
        formTitle: "",
        isPrivate: true,
        formName: "",
      },
    };
  },
  methods: {
    ...mapActions(
      { showToast: "ui/showToast" }
      //{ getForm: "formBuilder/GetForm" }
    ),
    async fetchFormsById() {
      let response = await this.$store.dispatch(
        "formBuilder/getSingleForm",
        this.$route.params.id
      );
      console.log(JSON.stringify(response.data.data.form_fields, null, 2));
      this.formData = response.data.data;
    },
    async updateFormData() {
      try {
        await this.$store
          .dispatch("formBuilder/updateForm", {
            id: this.$route.params.id,
            payload: this.updateRequestData,
          })
          .then(
            this.showToast({
              sclass: "success",
              show: true,
              message: "Form " + this.formData.form_title + " Updated",
              timeout: 3000,
            })
          );
        //console.log(JSON.stringify(payload, null, 2));
      } catch (error) {
        console.log(error);
        if (error) {
          this.showToast({
            sclass: "error",
            show: true,
            message: "Form " + this.formData.form_title + " could not Updated",
            timeout: 3000,
          });
        }
      }
    },
  },

  async mounted() {
    await this.fetchFormsById();
  },
  computed: {
    ...mapGetters({
      forms: "formBuilder/forms",
    }),

    //payload to send as update request
    updateRequestData() {
      return {
        form_fields: this.formData,
        is_private: this.configuration.isPrivate,
      };
    },
  },
  watch: {
    //
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
