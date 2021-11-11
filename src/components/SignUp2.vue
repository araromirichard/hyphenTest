<template>
  <v-card class="pb-10 mt-16" elevation="4">
    <v-row class="pa-0 ma-0 d-flex flex-row">
      <v-col cols="12" md="8" class="pa-0">
        <p
          class="
            text-md-h4 text-h5
            font-weight-bold
            pb-md-4
            mt-8
            mb-0
            text--secondary
          "
          :style="{
            paddingLeft: `${$vuetify.breakpoint.smAndUp ? '84px' : '36px'}`,
            paddingTop: `${$vuetify.breakpoint.smAndUp ? '44px' : '34px'}`,
          }"
        >
          Create your account
        </p>
      </v-col>
      <v-col cols="12" md="4" class="pl-9 pl-md-4 pa-0">
        <p
          class="text-caption pt-16 text--disabled pb-md-7 mt-md-8"
          :style="{
            paddingTop: `${$vuetify.breakpoint.smAndUp ? '44px' : '3px'}`,
          }"
        >
          Step 2 of 2
        </p>
      </v-col>
    </v-row>
    <div class="">
      <p
        class="text-break"
        style="
          padding-left: 84px;
          padding-right: 78px;
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.278409px;
          color: #7f919b;
        "
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        Hello {{ firstName }}, to get great value from pbot please provide
        information about your company below
      </p>
    </div>
    <div
      :style="{
        paddingLeft: `${$vuetify.breakpoint.smAndUp ? '86px' : '36px'}`,
        paddingRight: `${$vuetify.breakpoint.smAndUp ? '78px' : '34px'}`,
      }"
    >
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent class="ma-auto" ref="form">
          <v-card-text class="pa-0">
            <v-row class="pt-2">
              <v-col cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="Company Name"
                  rules="required"
                >
                  <v-text-field
                    hide-details="auto"
                    :error-messages="errors"
                    height="48"
                    placeholder="Company Name"
                    single-line
                    outlined
                    type="text"
                    required
                    class="font-weight-regular text-subtitle-2 pb-0 mt-3 mb-6"
                    v-model="companyDetails.companyName"
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="Account System"
                  rules="required"
                >
                  <v-select
                    hide-details="auto"
                    :error-messages="errors"
                    placeholder="Country of Operation"
                    single-line
                    outlined
                    class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                    v-model="companyDetails.country"
                    :items="operatingCountries"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="CAC"
                  rules="required"
                >
                  <v-text-field
                    hide-details="auto"
                    :error-messages="errors"
                    placeholder="CAC Reg Number/Tax ID"
                    single-line
                    outlined
                    class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                    v-model="companyDetails.cac"
                    type="text"
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Account System"
                  rules="required"
                >
                  <v-select
                    hide-details="auto"
                    :error-messages="errors"
                    placeholder="Company Team Size"
                    single-line
                    outlined
                    class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                    v-model="companyDetails.size"
                    :items="companyTeamSize"
                    required
                  ></v-select>
                </validation-provider>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="justify-center px-0">
            <v-btn
              :disabled="invalid"
              @click="submit"
              block
              width="88px"
              height="54px"
              color="primary"
              class="text-capitalize"
              elevation="20"
              large
              ><router-link
                @click.native="onboarding"
                to="onboarding"
                style="text-decoration: none"
              >
                <span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                    letter-spacing: 0.727273px;
                    color: #ffffff;
                  "
                >
                  Continue
                </span>
              </router-link>
            </v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
      <v-card-actions
        class="justify-center mx-auto"
        style="margin-top: 29px"
        :style="{
          marginBottom: `${$vuetify.breakpoint.xs ? '24px' : '73px'}`,
        }"
      >
        <v-chip
          class="px-auto"
          :style="{
            fontSize: `${$vuetify.breakpoint.xs ? '9px' : ''}`,
          }"
        >
          <span
            class="pl-md-3"
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              color: #7f919b;
            "
            >Already have an account?</span
          >
          <router-link
            to="login"
            style="
              text-decoration: none;
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              color: #311b92;
            "
          >
            <span class="pl-md-4 pr-md-8 py-4"> Sign In Here</span>
          </router-link>
        </v-chip>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  data() {
    return {
      firstName: "John",
      snackbar: {
        snackbar: false,
        text: null,
        sclass: null,
        timeout: 1000,
      },
      companyDetails: {
        companyName: "",
        country: "",
        accountSystem: "",
        cac: "",
        email: "",
      },
      operatingCountries: [
        "Nigeria",
        "United States of America",
        "UAE",
        "Ghana",
      ],
      companyTeamSize: [
        "Less than 10",
        "Less than 50",
        "Less than 100",
        "More than 100",
      ],
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    submit() {
      if (this.$refs.observer.validate()) {
        console.log(this.companyDetails);
        console.log("Company Details", JSON.stringify(this.companyDetails));
        this.showToast({
          sclass: "success",
          show: true,
          message: "Sign Up succesfully",
          timeout: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>
.card-input-field {
  background: #ffffff;
  border: 1px solid rgba(49, 27, 146, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
}

.card-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  line-height: 29px;
}

.v-text-field >>> input {
  font-size: 1em;
  font-weight: 300;
  text-transform: capitalize;
}

.message-details {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  letter-spacing: 0.278409px;
  float: right;
  color: #301f78;

  mix-blend-mode: normal;
  opacity: 0.5;
}
.v-text-field >>> button {
  font-size: 0.8em;
}

/* .form-link {
  height: 32px;
  width: 325px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  background: rgba(127, 145, 155, 0.08);
} */

.hint {
  height: 32px;
  width: 325px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  background: rgba(127, 145, 155, 0.08);
}
.span-text {
  height: 17px;
  left: 5.23%;
  right: 41.23%;
  top: calc(50% - 17px / 2 - 0.5px);
  padding-top: 6px;
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: 0.278409px;

  color: #7f919b;
}
.span-text-link {
  height: 18px;
  left: 61.23%;
  right: 11.38%;
  top: calc(50% - 18px / 2);
  padding-left: 6px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: bolder;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.278409px;

  color: #311b92;
}

.v-application .elevation-4 {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 3%), 0px 2px 2px 0px rgb(0 0 0 / 4%),
    0px 1px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
