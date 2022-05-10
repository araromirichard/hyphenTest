<template>
  <v-container class="pa-0 ma-0">
    <v-row align="center" class="pa-0 ma-0">
      <v-col
        class="px-0"
        cols="10"
        offset="1"
        md="8"
        offset-md="2"
        style="min-height: 100vh"
      >
        <v-card elevation="0" color="transparent" v-if="pageOne">
          <v-row class="pa-0 ma-0 d-flex flex-row">
            <v-col cols="12" md="8" class="pa-0">
              <p
                class="
                  text-md-h4 text-h5
                  font-weight-bold
                  mt-2
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
            <v-col cols="12" md="4" class="">
              <p
                class="text-caption pt-16 text--disabled pb-md-2 mt-md-2"
                :style="{
                  paddingTop: `${$vuetify.breakpoint.smAndUp ? '40px' : '3px'}`,
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
            <v-form class="ma-auto" ref="form">
              <v-card-text class="pa-0">
                <v-row class="pt-2 mb-0">
                  <v-col cols="12" md="6">
                    <v-text-field
                      ref="first_name"
                      color="primary"
                      hide-details="auto"
                      placeholder="First Name"
                      single-line
                      outlined
                      type="text"
                      prepend-inner-icon="mdi-account-outline"
                      class="font-weight-regular"
                      v-model="signUpDetails.first_name"
                      :rules="rules.first_name"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      ref="last_name"
                      color="primary"
                      hide-details="auto"
                      placeholder="Last Name"
                      prepend-inner-icon="mdi-account-outline"
                      single-line
                      outlined
                      type="text"
                      class="font-weight-regular"
                      v-model="signUpDetails.last_name"
                      :rules="rules.last_name"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  ref="username"
                  color="primary"
                  hide-details="auto"
                  placeholder="Username"
                  single-line
                  outlined
                  type="text"
                  prepend-inner-icon="mdi-account-outline"
                  class="font-weight-regular pt-3"
                  v-model="signUpDetails.username"
                  :rules="rules.username"
                >
                </v-text-field>

                <v-text-field
                  ref="email"
                  color="primary"
                  hide-details="auto"
                  prepend-inner-icon="mdi-email-outline"
                  placeholder="Business Email"
                  single-line
                  outlined
                  type="email"
                  class="pt-6 pb-0 mb-0 font-weight-regular text-lowercase"
                  v-model="signUpDetails.email"
                  :rules="rules.email"
                ></v-text-field>

                <v-text-field
                  ref="phoneNumber"
                  color="primary"
                  hide-details="auto"
                  prepend-inner-icon="mdi-phone-outline"
                  placeholder="Mobile Phone. e.g. +234080990000"
                  single-line
                  outlined
                  class="py-6 font-weight-regular"
                  v-model="signUpDetails.phoneNumber"
                  :rules="rules.phoneNumber"
                ></v-text-field>

                <v-text-field
                  ref="password"
                  color="primary"
                  hide-details="auto"
                  prepend-inner-icon="mdi-lock-outline"
                  placeholder="Password"
                  single-line
                  outlined
                  class="font-weight-regular"
                  v-model="signUpDetails.password"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                  :rules="rules.password"
                ></v-text-field>
              </v-card-text>

              <v-card-actions class="justify-center px-0">
                <v-btn
                  block
                  width="88px"
                  height="54px"
                  color="primary"
                  elevation="20"
                  :loading="isCreating"
                  large
                  class="text-capitalize"
                  @click="createAccount"
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

            <v-card-actions
              class="justify-center mx-auto"
              style="margin-top: 15px"
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
                    color: var(--v-primary-base);
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
import SignUp2 from "./SignUp2";

import { mapActions } from "vuex";
export default {
  name: "SignUp",

  data() {
    return {
      showPass: false,
      signUpDetails: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
      rules: {
        first_name: [(v) => !!v || "This field is required "],
        last_name: [(v) => !!v || "This field is required "],
        username: [(v) => !!v || "This field is required "],
        email: [
          (v) => !!v || "E-mail is ",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        phoneNumber: [
          (v) => !!v || "This field is required ",
          (v) => v.length == 14 || "Number is invalid",
          // (v) =>
          //   /(^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$)/.test(v) ||
          //   "Number is invalid",
        ],
        password: [
          (v) => !!v || "This field is ",
          (v) => /(?=.*?[A-Z])/.test(v) || "At least 1 Upper Case",
          (v) => /(?=.*?[a-z])/.test(v) || "At least 1 Lower Case",
          (v) => /(?=.*?[0-9])/.test(v) || "At least 1 Number",
          (v) =>
            /(?=.*?[#?!@$%^&*-])/.test(v) ||
            "At least 1 Special Character/Symbol",
          (v) => /.{6,}/.test(v) || "At least 6 Characters",
        ],
      },

      pageOne: true,
      isCreating: false,
    };
  },
  components: {
    SignUp2,
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    async createAccount() {
      Object.keys(this.form).forEach((f) => {
        //throw error to ui if there is any
        this.$refs[f].validate(true);
      });

      if (this.canCreateOrg) {
        try {
          this.isCreating = true;
          await this.$store.dispatch("auth/register", this.signUpDetails);
          // console.log(JSON.stringify(req, null, 2));

          this.showToast({
            sclass: "success",
            show: true,
            message: "Account created successfully",
            timeout: 3000,
          });

          //now show organisation details component
          this.pageOne = false;
        } catch (err) {
          this.showToast({
            sclass: "error",
            show: true,
            message: err.msg,
            timeout: 3000,
          });
        } finally {
          this.isCreating = false;
        }
      }
    },
  },
  computed: {
    form() {
      return {
        first_name: this.signUpDetails.first_name,
        last_name: this.signUpDetails.last_name,
        username: this.signUpDetails.username,
        email: this.signUpDetails.email,
        phoneNumber: this.signUpDetails.phoneNumber,
        password: this.signUpDetails.password,
      };
    },

    canCreateOrg() {
      // loop through rules, if all pass user can create org
      const rules = Object.keys(this.rules);
      return rules
        .map((rule) => {
          return Object.keys(this.rules[rule])
            .map((field, index) => {
              return this.rules[rule][index](this.signUpDetails[rule]);
            })
            .every((val) => val == true);
        })
        .every((val) => val == true);
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

/* .v-text-field >>> input {
  font-size: 1em;
  font-weight: 300;
} */

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

  color: var(--v-primary-base);
}
.v-application .elevation-4 {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 3%), 0px 2px 2px 0px rgb(0 0 0 / 4%),
    0px 1px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
