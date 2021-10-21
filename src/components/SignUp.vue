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
      <v-form @submit.prevent="signUp" class="ma-auto" ref="form">
        <v-card-text class="card-items">
          <v-row class="pt-2">
            <v-col cols="12" md="6">
              <v-text-field
                hide-details="auto"
                label="First Name"
                single-line
                outlined
                type="text"
                required
                class="font-weight-regular"
                v-model="signUpDetails.firstName"
                :rules="nameRules"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                hide-details="auto"
                label="Last Name"
                single-line
                outlined
                type="text"
                required
                class="font-weight-regular"
                v-model="signUpDetails.lastName"
                :rules="nameRules"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            hide-details="auto"
            label="Email"
            single-line
            outlined
            type="email"
            required
            class="py-6 font-weight-regular text-lowercase"
            v-model="signUpDetails.email"
            :rules="emailRules"
          ></v-text-field>

          <v-text-field
            hide-details="auto"
            placeholder="Phone number"
            single-line
            outlined
            class="font-weight-regular pb-0 mb-0"
            v-model="signUpDetails.phoneNumber"
            type="number"
            required
            :rules="phoneNumberRules"
          ></v-text-field>
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
            type="submit"
            block
            width="346"
            height="54"
            color="primary"
            elevation="14"
            large
            class="text-capitalize"
            @click="pageTwo = !pageTwo"
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

    <SignUp2 v-else />
  </div>
</template>

<script>
import SignUp2 from "./SignUp2";

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
      nameRules: [
        (value) => !!value || "Name is required",
        (value) =>
          (value && value.length <= 10) ||
          "First Name must be less than 10 characters",
      ],
      emailRules: [
        (value) => !!value || "Email is required",
        (value) => value.indexOf("@") !== 0 || "Email should have a Username",
        (value) => value.includes("@") || "Email should include the @ symbol",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email should contain a valid domain",
      ],
      phoneNumberRules: [
        (value) => !!value || "Phone Number is required",
        (value) =>
          (value && value.length == 11) ||
          "First Name must be less than 10 characters",
        (value) => {
          const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*/;
          return pattern.test(value) || "Phone Number is invalid";
        },
      ],
    };
  },
  components: {
    SignUp2,
  },
  methods: {
    signUp() {
      if (this.$refs.form.validate()) {
        console.log(this.signUpDetails);
        console.log("User Details", JSON.stringify(this.signUpDetails));
      }
    },
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
  font-size: 0.8em;
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
