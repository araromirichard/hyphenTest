<template>
  <v-container>
    <div
      class="
        mx-10 mx-sm-12 mx-md-14
        px-md-0
        my-0
        pt-10
        d-flex
        justify-sm-space-between
      "
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <h3
        class="text-bold primary--text"
        style="
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 39px;
        "
      >
        Forms
      </h3>
      <v-spacer></v-spacer>
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
            class="text-capitalize"
            style="
              width: 209px;
              height: 54px;
              background: var(--v-primary-base);
              box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
              border-radius: 4px;
            "
            :style="{
              width: `${$vuetify.breakpoint.mdAndDown ? '150px' : '209px'}`,
            }"
          >
            <img :src="require('@/assets/pbot_icons/file.svg')" />
            <span
              style="
                padding-left: 8px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                letter-spacing: 0.636364px;
                color: #ffffff;
              "
            >
              New Form
            </span>
          </v-btn>
        </template>
        <v-card
          max-width=""
          flat
          class="m-0"
          style="background: #fefcf8; border-radius: 8px"
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
                color: #301f78;
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
              background-color="#FDFAF2"
              v-model="tab"
              align-with-title
              style="border-bottom: 1px solid #d9dee1"
            >
              <v-tabs-slider color="primary"></v-tabs-slider>

              <v-tab> New form </v-tab>
            </v-tabs>
          </template>
          <v-tabs-items v-model="tab" style="background-color: #fefcf8">
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
                        :error-messages="errors"
                        class="form__field"
                        placeholder="give this form a name"
                        hide-details="auto"
                        single-line
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
                    class="d-flex justify-space-between pr-9 pl-10"
                  >
                    <v-switch
                      dense
                      hide-details="auto"
                      @change="changeValue"
                      class="ml-9"
                      v-model="payment"
                      label="Take Payment"
                      style="font-size: 12px"
                    ></v-switch>
                    <v-switch
                      dense
                      hide-details="auto"
                      class="ml-4"
                      @change="allowSignature"
                      v-model="signature"
                      label="Take Signature"
                      style="font-size: 12px"
                    ></v-switch>
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

                        <v-row class="mx-14 mt-6">
                          <v-col cols="6">
                            <template>
                              <span class="field__title mx-0">Form type</span>
                              <validation-provider
                                v-slot="{ errors }"
                                name="selectedFormType"
                                rules="required"
                              >
                                <v-select
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
                          <v-col cols="6" v-show="selectedFormType == 'API'">
                            <template>
                              <span class="field__title mx-0">Endpoint</span>
                              <validation-provider
                                v-slot="{ errors }"
                                name="Endpoint"
                                rules="required"
                              >
                                <v-text-field
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
                        <v-row class="mx-14 mt-4">
                          <v-col
                            class="py-0"
                            cols="12"
                            v-show="selectedFormType == 'API'"
                          >
                            <template>
                              <span class="field__title mx-0"
                                >Bearer Token</span
                              >
                              <validation-provider
                                v-slot="{ errors }"
                                name="Token"
                                rules="required"
                              >
                                <v-text-field
                                  :error-messages="errors"
                                  v-model="API.token"
                                  background-color="#ffffff"
                                  outlined
                                  placeholder="Token"
                                  hint="Note: You get this from your API provider if required, otherwise leave blank"
                                >
                                </v-text-field>
                              </validation-provider>
                            </template>
                          </v-col>
                        </v-row>
                      </div>
                    </v-expand-transition>
                  </div>
                  <template class="mt-6">
                    <v-card-actions class="d-flex justify-end mt-2 mr-14">
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
    <div class="d-flex" v-if="$vuetify.breakpoint.mdAndDown">
      <p
        :style="{ display: `${isClicked != true ? 'none' : ''}` }"
        class="pt-7 pl-5 primary--text"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 22px;
          letter-spacing: -0.73px;
        "
      >
        Forms
      </p>
      <v-spacer></v-spacer>
      <v-icon v-if="isClicked" @click="toggleSearch" class="pr-4 pt-7">
        mdi-magnify
      </v-icon>
      <v-expand-x-transition v-else>
        <v-text-field
          @input="searchDataTable"
          v-model="search"
          @blur="isClicked = true && !search"
          class="seacrh-field mt-4 mr-2"
          dense
          clearable
          autofocus
          hide-details="true"
          persistent-placeholder
          placeholder="Search"
          append-icon="mdi-magnify"
          filled
        >
        </v-text-field>
      </v-expand-x-transition>
    </div>
    <div class="py-6">
      <v-card
        flat
        elevation="6"
        width="93%"
        min-height="674"
        class="mx-auto my-md-10"
      >
        <template>
          <v-card
            v-if="$vuetify.breakpoint.mdAndUp"
            flat
            max-width="100%"
            style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
          >
            <v-tabs v-model="tab">
              <v-tab
                class="mt-2"
                v-for="item in items"
                :key="item.tab"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 15px;
                  text-transform: uppercase;
                "
                >{{ item.tab }}</v-tab
              >

              <v-spacer></v-spacer>

              <v-btn
                v-if="isClicked"
                @click="toggleSearch"
                plain
                class="text-black mt-1 pt-4"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 20px;
                  letter-spacing: 0.55px;
                  text-transform: uppercase;
                  color: #7f919b;
                "
              >
                search
                <v-icon small right class="pr-1"> mdi-magnify </v-icon>
              </v-btn>
              <v-expand-x-transition v-else>
                <v-text-field
                  @input="searchDataTable"
                  v-model="search"
                  @blur="isClicked = true && !search"
                  class="seacrh-field mt-2 mr-2"
                  dense
                  clearable
                  autofocus
                  hide-details="true"
                  persistent-placeholder
                  placeholder="Search"
                  append-icon="mdi-magnify"
                  filled
                >
                </v-text-field>
              </v-expand-x-transition>
            </v-tabs>
          </v-card>
          <component
            @open-modal="dialog = true"
            v-bind:is="items[tab].content"
            class="ml-0"
            ref="formCards"
          ></component>
        </template>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import FormEntriesCards from "../../components/FormEntriesCards.vue";
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
  components: { FormEntriesCards, ValidationObserver, ValidationProvider },
  name: "Form",
  data() {
    return {
      dialog: false,
      show: false,
      payment: null,
      signature: null,
      isClicked: true,
      search: "",
      formName: "",
      formDescription: "",
      selectedFormType: {},
      API: {
        endpoint: "",
        token: "",
      },
      tab: 0,
      items: [{ tab: "All", content: "FormEntriesCards" }],
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
    }),
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeFormDialog() {
      this.dialog = false;
    },

    //check and change the store value of is_payment switch
    changeValue() {
      this.$store.dispatch("formBuilder/updatePaymentStatus", this.payment);
    },
    //check and change the store value of add_signature switch
    allowSignature() {
      this.$store.dispatch("formBuilder/updateSignatureStatus", this.signature);
    },

    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    createForm() {
      if (this.formName != "" || this.formDescription != "") {
        // let routeData = this.$router.push(
        //   "/form/create-new-form/?name=" + this.formName
        // );
        if (!this.show) {
          return this.show === true;
        }
        let routeData = this.$router.resolve({
          name: "Create-form",
          query: { data: this.formName },
        });
        this.$store.dispatch(
          "formBuilder/getFormDescription",
          this.formDescription
        );
        if (this.API.endpoint != "" && this.API.token != "") {
          this.$store.dispatch("formBuilder/getApiObject", this.API);
        }
        if (this.selectedFormType == "API") {
          this.$store.dispatch("formBuilder/updateSelectedFormType", this.API);
        } else {
          this.$store.dispatch(
            "formBuilder/updateSelectedFormType",
            this.selectedFormType
          );
        }
        this.closeFormDialog();
        window.open(routeData.href, "_blank");
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
.form__field {
  margin-left: 67px;
  margin-right: 67px;
  margin-bottom: 30px;
  background: #ffffff;
  border: 1px solid rgba(212, 216, 223, 0.377431);
  border-radius: 3px;
}
</style>
