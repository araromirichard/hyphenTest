<template>
  <div>
    <v-card class="mb-16 ma-auto elevation-4" max-width="514">
      <v-card-title
        class="px-0 absolute"
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
        <span class="mt-10 text--secondary"> Sign up </span>
        <v-spacer></v-spacer>
        <span class="mt-10 text--disabled mr-16 pr-5">/2</span>
      </v-card-title>
      <validation-observer ref="observer" v-slot="{}">
        <v-form @submit.prevent class="ma-auto" ref="form">
          <v-card-text class="card-items">
            <validation-provider
              v-slot="{ errors }"
              name="Company Name"
              rules="required"
            >
              <v-text-field
                hide-details="auto"
                :error-messages="errors"
                height="48"
                label="Company Name"
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
              name="Country"
              rules="required"
            >
              <v-text-field
                hide-details="auto"
                :error-messages="errors"
                label="Country where company is based"
                single-line
                outlined
                class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                v-model="companyDetails.country"
                type="text"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Account System"
              rules="required"
            >
              <v-text-field
                hide-details="auto"
                :error-messages="errors"
                label="Your accounting system"
                single-line
                outlined
                class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                v-model="companyDetails.accountSystem"
                type="text"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Role"
              rules="required"
            >
              <v-text-field
                hide-details="auto"
                :error-messages="errors"
                label="Your role"
                single-line
                outlined
                class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                v-model="companyDetails.role"
                type="text"
              ></v-text-field>
            </validation-provider>
          </v-card-text>

          <router-link to="onboarding">
            <v-card-actions class="card-items pt-0">
              <v-btn
                @click="submit"
                block
                width="346"
                height="54"
                color="primary"
                elevation="20"
                large
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
                  Submit
                </span>
              </v-btn>
            </v-card-actions>
          </router-link>
        </v-form>
      </validation-observer>
      <div class="d-flex mx-auto justify-center pt-8 pb-16 card-items">
        <div class="hint">
          <div class="d-flex align-content-center" style="margin-bottom: 92px">
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
      <!-- feedBack message for users starts -->
      <SnackbarAlert
        :SnackbarAlert="SnackbarAlert.SnackbarAlert"
        :text="SnackbarAlert.text"
        :sclass="SnackbarAlert.sclass"
        :timeout="SnackbarAlert.timeout"
      />

      <!-- feedBack message for users ends -->
    </v-card>
  </div>
</template>

<script>
import SnackbarAlert from "../includes/SnackbarAlert.vue";
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

// extend("digits", {
//   ...digits,
//   message: "{_field_} needs to be {length} digits. ({_value_})",
// });

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

// extend("max", {
//   ...max,
//   message: "{_field_} may not be greater than {length} characters",
// });

// extend("regex", {
//   ...regex,
//   message: "{_field_} {_value_} does not match {regex}",
// });

// extend("email", {
//   ...email,
//   message: "Email must be valid",
// });
export default {
  data() {
    return {
      SnackbarAlert: {
        SnackbarAlert: false,
        text: null,
        sclass: null,
        timeout: 2000,
      },
      companyDetails: {
        companyName: "",
        country: "",
        accountSystem: "",
        role: "",
      },
    };
  },
  components: {
    SnackbarAlert,
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    submit() {
      if (this.$refs.observer.validate()) {
        console.log(this.companyDetails);
        console.log("Company Details", JSON.stringify(this.companyDetails));
        this.SnackbarAlert.SnackbarAlert = true;
        this.SnackbarAlert.text = "Sign Up Successfully!";
        this.SnackbarAlert.sclass = "success";
        this.SnackbarAlert.timeout = 3000;
      }
    },
  },
};
</script>

<style scoped>
.card-items {
  padding-bottom: 0px;
  padding-left: 84px;
  padding-right: 84px;
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
  text-transform: capitalize;
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
.v-card__title {
  padding-bottom: 16px;
}
.v-application .elevation-4 {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 3%), 0px 2px 2px 0px rgb(0 0 0 / 4%),
    0px 1px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
