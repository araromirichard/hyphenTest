<template>
  <v-container class="pa-0 ma-0">
    <v-row align="center" class="pa-0 ma-0">
      <v-col
        class="px-0"
        cols="10"
        offset="1"
        md="6"
        offset-md="3"
        style="min-height: 100vh"
      >
        <v-card class="pb-10 mt-16" elevation="4" v-if="pageTwo">
          <v-row class="pa-0 ma-0 d-flex flex-row">
            <v-col cols="12" md="8" class="pa-0">
              <p
                class="
                  text-md-h4 text-h5
                  font-weight-bold
                  pb-md-7
                  mt-10
                  mb-0
                  text--secondary
                "
                :style="{
                  paddingLeft: `${
                    $vuetify.breakpoint.smAndUp ? '84px' : '36px'
                  }`,
                  paddingTop: `${
                    $vuetify.breakpoint.smAndUp ? '52px' : '34px'
                  }`,
                }"
              >
                Create your account
              </p>
            </v-col>
            <v-col cols="12" md="4" class="pl-9 pl-md-6">
              <p
                class="text-caption pt-16 text--disabled pb-md-7 mt-md-10"
                :style="{
                  paddingTop: `${$vuetify.breakpoint.smAndUp ? '52px' : '3px'}`,
                }"
              >
                Step 1 of 2
              </p>
            </v-col>
          </v-row>
          <div
            :style="{
              paddingLeft: `${$vuetify.breakpoint.smAndUp ? '86px' : '36px'}`,
              paddingRight: `${$vuetify.breakpoint.smAndUp ? '78px' : '34px'}`,
            }"
          >
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form class="ma-auto" ref="form">
                <v-card-text class="pa-0">
                  <v-row class="pt-2">
                    <v-col cols="12" md="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="First Name"
                        rules="required"
                      >
                        <v-text-field
                          hide-details="auto"
                          placeholder="First Name"
                          single-line
                          outlined
                          type="text"
                          required
                          :error-messages="errors"
                          class="font-weight-regular"
                          v-model="signUpDetails.firstName"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col cols="12" md="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Last Name"
                        rules="required"
                      >
                        <v-text-field
                          hide-details="auto"
                          placeholder="Last Name"
                          single-line
                          outlined
                          type="text"
                          required
                          :error-messages="errors"
                          class="font-weight-regular"
                          v-model="signUpDetails.lastName"
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Business Email"
                    rules="required|email"
                  >
                    <v-text-field
                      hide-details="auto"
                      placeholder="Business Email"
                      single-line
                      outlined
                      type="email"
                      required
                      class="py-6 font-weight-regular text-lowercase"
                      v-model="signUpDetails.email"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Phone Number"
                    :rules="{
                      required: true,
                      regex: `^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$`,
                    }"
                  >
                    <v-text-field
                      hide-details="auto"
                      placeholder="Mobile Phone. e.g. +234080990000"
                      single-line
                      outlined
                      class="font-weight-regular pb-0 mb-0"
                      v-model="signUpDetails.phoneNumber"
                      required
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                  <!-- <div class="message-details d-flex justify-end">
                <router-link
                  to="#"
                  style="text-decoration: none; color: inherit; padding: none"
                >
                  <p class="pt-3">Forgot Password?</p>
                </router-link>
              </div> -->
                </v-card-text>

                <v-card-actions class="justify-center px-0">
                  <v-btn
                    :disabled="invalid"
                    block
                    width="88px"
                    height="54px"
                    color="primary"
                    elevation="20"
                    large
                    class="text-capitalize"
                    @click="goNext"
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
                      Continue</span
                    ></v-btn
                  >
                </v-card-actions>
              </v-form>
            </validation-observer>
            <v-card-actions
              class="justify-center mx-auto"
              style="margin-top: 29px"
              :style="{
                marginBottom: `${$vuetify.breakpoint.xs ? '16px' : '73px'}`,
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
        <!-- second form for sign up starts -->
        <SignUp2 v-else />
        <!-- second form for sign up endss -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

import SignUp2 from "./SignUp2";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match format",
});

extend("email", {
  ...email,
  message:
    "Please use a company email you have access to, this will be used for login later",
});

export default {
  name: "SignUp",

  data() {
    return {
      signUpDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      pageTwo: true,
    };
  },
  components: {
    SignUp2,
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    goNext() {
      if (this.$refs.observer.validate()) {
        console.log(this.signUpDetails);
        console.log("User Details", JSON.stringify(this.signUpDetails));
        this.pageTwo = !this.pageTwo;
      }
    },
    // clear() {
    //   this.firstName = "";
    //   this.lastName = "";
    //   this.phoneNumber = "";
    //   this.email = "";
    //   this.$refs.observer.reset();
    // },
  },
};
</script>

<style scoped>
.card-items {
  padding-left: 86px;
  padding-right: 78px;
}

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
}

.message-details {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  letter-spacing: 0.278409px;
  /*float: right;*/
  color: #301f78;

  mix-blend-mode: normal;
  opacity: 0.5;
}
.v-text-field >>> button {
  font-size: 0.8em;
}

.form-link {
  height: 32px;
  width: 325px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  background: rgba(127, 145, 155, 0.08);
}

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
