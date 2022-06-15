<template>
  <div>
    <v-dialog
      elevation="0"
      v-model="dialog"
      max-width="590"
      overlay-color="#301F78"
      overlay-opacity="0.282397"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          class="text-capitalize mt-6 mt-md-0"
          style="
            background: var(--v-primary-base);
            box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
          "
          :style="{
            width: `${$vuetify.breakpoint.smAndDown ? '120px' : '209px'}`,
            height: `${$vuetify.breakpoint.smAndDown ? '44px' : '54px'}`,
          }"
        >
          <img :src="require('@/assets/pbot_icons/file.svg')" />
          <span class="btn-text"> New Form </span>
        </v-btn>
      </template>
      <v-card
        max-width=""
        flat
        class="m-0"
        style="background: #f8f7f4; border-radius: 8px"
      >
        <v-card-title
          style="
            background: #ffffff;
            border-radius: 8px 8px 0px 0px;
            height: 54px;
          "
        >
          <img
            :src="require('@/assets/icons/task-square.png')"
            width="20"
            height="20"
          />
          <span
            class="ml-5"
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 19px;
              color: #19283d;
            "
            >Create Form</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="closeFormDialog"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <template>
          <v-tabs
            slider-size="4"
            background-color="#FDFAF2"
            v-model="tab"
            align-with-title
            style="border-bottom: 1px solid #d9dee1"
          >
            <v-tabs-slider color="primary"></v-tabs-slider>

            <v-tab> New form </v-tab>
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" style="background-color: #f8f7f4">
          <v-tab-item class="mt-13">
            <validation-observer ref="observer" v-slot="{}">
              <form @submit.prevent ref="form">
                <template>
                  <span class="field__title">Form Name</span>
                  <validation-provider
                    v-slot="{ errors }"
                    name="formName"
                    rules="required"
                  >
                    <v-text-field
                      background-color="#fff"
                      :error-messages="errors"
                      class="form__field"
                      placeholder="give this form a name"
                      hide-details="auto"
                      outlined
                      color="primary"
                      v-model="formName"
                    ></v-text-field>
                  </validation-provider>
                </template>
                <template class="d-flex">
                  <span class="field__title">Form Description</span>
                  <validation-provider
                    v-slot="{ errors }"
                    name="formDescription"
                    rules="required"
                  >
                    <v-text-field
                      background-color="#fff"
                      :error-messages="errors"
                      class="form__field"
                      hide-details="auto"
                      placeholder="Give the Form a description"
                      single-line
                      outlined
                      color="primary"
                      v-model="formDescription"
                    ></v-text-field>
                  </validation-provider>
                </template>
                <div
                  id="switch__sect"
                  class="d-flex justify-space-between px-4 pr-md-9 pl-md-10"
                >
                  <v-switch
                    v-if="$vuetify.breakpoint.mdAndUp"
                    dense
                    hide-details="auto"
                    @change="changeValue"
                    class="ml-md-9"
                    v-model="payment"
                    label="Take Payment"
                    style="font-size: 12px"
                  ></v-switch>
                  <v-checkbox
                    v-if="$vuetify.breakpoint.smAndDown"
                    dense
                    v-model="payment"
                    label="Take Payment"
                    @change="changeValue"
                    hide-details="auto"
                    style="font-size: 9px"
                  ></v-checkbox>
                  <v-switch
                    v-if="$vuetify.breakpoint.mdAndUp"
                    dense
                    hide-details="auto"
                    class="ml-4"
                    @change="allowSignature"
                    v-model="signature"
                    label="Take Signature"
                  ></v-switch>
                  <v-checkbox
                    v-if="$vuetify.breakpoint.smAndDown"
                    dense
                    v-model="signature"
                    label="Take Signature"
                    @change="allowSignature"
                    hide-details="auto"
                  ></v-checkbox>

                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    plain
                    class="text-lowercase align-self-end pr-8 pt-4"
                    @click="show = !show"
                  >
                    options
                    <v-icon> mdi-chevron-down </v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-expand-transition>
                    <div v-show="show" class="mt-4">
                      <v-divider></v-divider>
                      <v-row class="mt-6 mx-6 mx-md-14">
                        <v-col cols="12" md="6">
                          <template>
                            <span class="">Form type</span>
                            <validation-provider
                              v-slot="{ errors }"
                              name="selectedFormType"
                              rules="required"
                            >
                              <v-select
                                class="mt-4"
                                :error-messages="errors"
                                v-model="selectedFormType"
                                hide-details="auto"
                                background-color="#ffffff"
                                outlined
                                :items="formType"
                                placeholder="Select One"
                              >
                              </v-select>
                            </validation-provider>
                          </template>
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                          v-show="selectedFormType == 'api'"
                        >
                          <template>
                            <span class="">Endpoint</span>
                            <validation-provider
                              v-slot="{ errors }"
                              name="Endpoint"
                              rules="required"
                            >
                              <v-text-field
                                class="mt-4"
                                :error-messages="errors"
                                v-model="API.endpoint"
                                hide-details="auto"
                                prefix="https://"
                                background-color="#ffffff"
                                outlined
                                placeholder=""
                              >
                              </v-text-field>
                            </validation-provider>
                          </template>
                        </v-col>
                      </v-row>
                      <v-row class="mx-6 mx-md-14 mt-4">
                        <v-col
                          class="py-0"
                          cols="12"
                          v-show="selectedFormType == 'api'"
                        >
                          <template>
                            <span class="mb-4">Bearer Token</span>

                            <v-text-field
                              class="mt-4"
                              v-model="API.token"
                              background-color="#ffffff"
                              outlined
                              placeholder="Token"
                              hint="Note: You get this from your API provider if required, otherwise leave blank"
                            >
                            </v-text-field>
                          </template>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expand-transition>
                </div>
                <template class="mt-6">
                  <v-card-actions
                    class="d-flex justify-center justify-md-end mt-2 mr-md-14"
                  >
                    <v-btn
                      @click="show = false"
                      dark
                      width="121"
                      height="45"
                      color="#F4F5F6"
                      elevation="0"
                      class="text-capitalize mt-8 mb-16 mr-5"
                    >
                      <v-icon small color="primary">mdi-close</v-icon>
                      <span class="primary--text">Cancel</span>
                    </v-btn>
                    <v-btn
                      link
                      @click="createForm"
                      dark
                      width="121"
                      height="45"
                      color="primary"
                      class="text-capitalize mt-8 mb-16"
                    >
                      <v-icon>mdi-chevron-right</v-icon>
                      <span>Next</span>
                    </v-btn>
                  </v-card-actions>
                </template>
              </form>
            </validation-observer>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty, select a value",
});

export default {
  components: { ValidationObserver, ValidationProvider },
  name: "Form",
  data() {
    return {
      show: false,
      dialog: false,
      payment: null,
      signature: null,

      formName: "",
      formDescription: "",
      selectedFormType: {},
      API: {
        endpoint: "",
        token: "",
      },
      tab: 0,

      formType: [
        { text: "Standard", value: "standard" },
        { text: "Direct Debit", value: "directdebit" },
        { text: "API", value: "api" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      is_payment: "formBuilder/getPaymentStatus",
      is_signature: "formBuilder/getSignatureStatus",
    }),
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeFormDialog() {
      this.dialog = false;
    },

    openDialog() {
      this.dialog = true;
    },
    //check and change the store value of is_payment switch
    changeValue() {
      if (this.payment == true) {
        this.signature = false;
      }
      this.$store.dispatch("formBuilder/updatePaymentStatus", this.payment);
    },
    //check and change the store value of add_signature switch
    allowSignature() {
      if (this.signature == true) {
        this.payment = false;
      }
      this.$store.dispatch("formBuilder/updateSignatureStatus", this.signature);
    },

    createForm() {
      if (this.formName != "" || this.formDescription != "") {
        // let routeData = this.$router.push(
        //   "/form/create-new-form/?name=" + this.formName
        // );
        if (!this.show) {
          this.show === true;
        }
        this.$router.push({
          name: "Create-form",
          query: { data: this.formName },
        });
        // let routeData = this.$router.resolve({
        //   name: "Create-form",
        //   query: { data: this.formName },
        // });
        this.$store.dispatch(
          "formBuilder/getFormDescription",
          this.formDescription
        );
        if (this.API.endpoint != "" && this.API.token != "") {
          this.$store.dispatch("formBuilder/getApiObject", this.API);
        }
        if (
          Object.keys(this.selectedFormType).length === 0 &&
          this.selectedFormType.constructor === Object
        ) {
          this.selectedFormType = "standard";
          console.log(JSON.stringify(this.selectedFormType, null, 2));
          this.$store.dispatch(
            "formBuilder/updateSelectedFormType",
            this.selectedFormType
          );
        } else if (this.selectedFormType == "API") {
          this.$store.dispatch("formBuilder/updateSelectedFormType", this.API);
        } else {
          console.log(JSON.stringify(this.selectedFormType, null, 2));
          this.$store.dispatch(
            "formBuilder/updateSelectedFormType",
            this.selectedFormType
          );
        }
        this.closeFormDialog();
        // window.open(routeData.href, "_blank");
      } else {
        this.showToast({
          sclass: "error",
          show: true,
          message: "Form name and Form Description is required",
          timeout: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.v-input .v-label {
  font-size: 12px !important;
}
.field__title {
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.45px;
  color: #7f919b;
}
.form__field {
  margin-top: 12px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 30px;
  /* background: #ffffff; */
  /* border: 1px solid rgba(212, 216, 223, 0.377431); */
  border-radius: 3px;
}

.btn-text {
  padding-left: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.636364px;
  color: #ffffff;
}
@media only screen and (min-width: 600px) {
  /* For tablets: */
  .form__field {
    margin-top: 12px;
    margin-left: 67px;
    margin-right: 67px;
    margin-bottom: 30px;
    /* background: #ffffff; */
    /* border: 1px solid rgba(212, 216, 223, 0.377431); */
    border-radius: 3px;
  }
  .field__title {
    margin-bottom: 20px;
    margin-top: 30px;
    margin-left: 67px;
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.45px;
    color: #7f919b;
  }
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .form__field {
    margin-top: 12px;
    margin-left: 67px;
    margin-right: 67px;
    margin-bottom: 30px;
    /* background: #ffffff; */
    /* border: 1px solid rgba(212, 216, 223, 0.377431); */
    border-radius: 3px;
  }
  .field__title {
    margin-bottom: 20px;
    margin-top: 30px;
    margin-left: 67px;
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.45px;
    color: #7f919b;
  }
}
</style>
