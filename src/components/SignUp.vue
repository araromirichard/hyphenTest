<template>
  <div>
    <v-card class="mb-16 ma-auto elevation-4" max-width="514" v-if="pageTwo">
      <v-card-title
        class="px-0"
        style="
          margin-left: 86px;
          margin-top: 58px;
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.484848px;
          color: #596a73;
        "
      >
        <span class="mt-10 text--secondary">Sign up</span>
      </v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form class="ma-auto" ref="form">
          <v-card-text class="card-items">
            <v-row class="pt-2">
              <v-col cols="12" md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="First Name"
                  rules="required"
                >
                  <v-text-field
                    hide-details="auto"
                    label="First Name"
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
                    label="Last Name"
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
              name="email"
              rules="required|email"
            >
              <v-text-field
                hide-details="auto"
                label="Email"
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
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 11,
                regex: `/((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/`,
              }"
            >
              <v-text-field
                hide-details="auto"
                placeholder="Phone number"
                single-line
                outlined
                label="Phone Number"
                class="font-weight-regular pb-0 mb-0"
                v-model="signUpDetails.phoneNumber"
                required
                :counter="11"
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
            <div class="message-details d-flex justify-end">
              <router-link
                to="#"
                style="text-decoration: none; color: inherit; padding: none"
              >
                <p class="pt-3">Forgot Password?</p>
              </router-link>
            </div>
          </v-card-text>

          <v-card-actions class="card-items pt-5">
            <v-btn
              :disabled="invalid"
              block
              width="346"
              height="54"
              color="primary"
              elevation="14"
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
                Next</span
              ></v-btn
            >
          </v-card-actions>
        </v-form>
      </validation-observer>
      <div class="d-flex mx-auto justify-center pt-8 pb-16 card-items">
        <div class="hint">
          <div class="py-auto d-flex align-content-center">
            <span class="span-text pl-6 py-auto">Already have an account?</span>
            <router-link
              to="login"
              style="text-decoration: none; color: inherit; padding-top: 4px"
              ><span class="span-text-link py-auto">
                Sign In Here</span
              ></router-link
            >
          </div>
        </div>
      </div>
    </v-card>
    <!-- second form for sign up starts -->
    <SignUp2 v-else />
    <!-- second form for sign up endss -->
  </div>
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
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
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
.v-text-field >>> label {
  font-size: 12px;
  padding-left: 4px;
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
