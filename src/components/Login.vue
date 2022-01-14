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
        <v-card class="pb-10 mt-16 ma-25" elevation="1">
          <p
            class="display-1 font-weight-bold pb-7 mt-10 text--secondary"
            :style="{
              paddingLeft: `${$vuetify.breakpoint.smAndUp ? '84px' : '36px'}`,
              paddingTop: `${$vuetify.breakpoint.smAndUp ? '90px' : '34px'}`,
            }"
          >
            Sign in
          </p>

          <div
            :style="{
              paddingLeft: `${$vuetify.breakpoint.smAndUp ? '86px' : '36px'}`,
              paddingRight: `${$vuetify.breakpoint.smAndUp ? '78px' : '34px'}`,
            }"
          >
            <v-form @submit="submitForm" class="ma-auto" ref="form">
              <v-card-text class="pa-0">
                <v-text-field
                  ref="email"
                  color="primary"
                  label="Your Email"
                  outlined
                  :disabled="isLoginin"
                  type="email"
                  required
                  v-model="loginData.email"
                  prepend-inner-icon="mdi-email-outline"
                  :rules="rules.email"
                ></v-text-field>

                <v-text-field
                  ref="password"
                  color="primary"
                  hide-details="auto"
                  label="Password"
                  prepend-inner-icon="mdi-lock-outline"
                  class="pb-0 mb-0 mt-4"
                  outlined
                  :disabled="isLoginin"
                  v-model="loginData.password"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                  required
                  :rules="rules.password"
                ></v-text-field>
                <div class="message-details d-flex justify-end my-2">
                  <v-btn
                    text
                    x-small
                    class="text-capitalize align-center"
                    @click.prevent="dialog = true"
                  >
                    <p
                      :style="{
                        fontSize: `${$vuetify.breakpoint.xs ? '10px' : ''}`,
                      }"
                      style="
                        font-family: inter;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 16px;
                        letter-spacing: 0.278409px;
                        color: #301f78;
                      "
                    >
                      Forgot Password?
                    </p>
                  </v-btn>
                </div>
              </v-card-text>

              <v-card-actions class="justify-center px-0">
                <v-btn
                  @click="submitForm"
                  block
                  color="primary"
                  elevation="5"
                  height="54px"
                  width="88px"
                  class="text-capitalize"
                  :loading="isLoginin"
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
                </v-btn>
              </v-card-actions>
            </v-form>
            <v-card-actions
              class="justify-center mx-auto"
              style="margin-top: 29px; margin-bottom: 73px"
            >
              <v-chip
                class="px-auto"
                :style="{
                  fontSize: `${$vuetify.breakpoint.xs ? '9px' : ''}`,
                }"
              >
                <br />
                <router-link
                  to="sign-up"
                  style="
                    text-decoration: none;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    color: var(--v-primary-base);
                  "
                >
                  <span
                    class="pl-md-3"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      color: var(--v-primary-base);
                    "
                    >Don’t have an account yet?</span
                  >
                </router-link>
              </v-chip>
            </v-card-actions>

            <template>
              <div>
                <v-dialog v-model="dialog" max-width="516">
                  <v-card color="#FEFCF8" class="rounded-lg">
                    <v-card-title
                      style="
                        background: #ffffff;
                        border-radius: 8px 8px 0px 0px;
                      "
                    >
                      <span
                        style="
                          font-family: Inter;
                          font-style: normal;
                          font-weight: 600;
                          font-size: 16px;
                          line-height: 19px;
                          color: #301f78;
                        "
                        >Recover Password</span
                      >
                      <v-spacer></v-spacer>
                      <v-icon
                        tag="button"
                        @click="dialog = false"
                        class="text-bolder"
                        color="#596A73"
                      >
                        mdi-close
                      </v-icon>
                    </v-card-title>
                    <form>
                      <div class="px-8 d-flex" style="background: #fdfaf2">
                        <p
                          style="
                            padding-top: 34px;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 18px;
                            letter-spacing: 0.45px;
                            color: #7f919b;
                          "
                        >
                          Send a <strong>password recovery mail</strong>
                        </p>
                      </div>
                      <div>
                        <v-text-field
                          background-color="#ffffff"
                          style="margin-left: 52px; margin-right: 45px"
                          hide-details="auto"
                          label="Please enter your email address"
                          single-line
                          outlined
                          type="email"
                          required
                          class="font-weight-regular label--text"
                          v-model="loginData.email"
                          :rules="rules.email"
                        ></v-text-field>
                      </div>
                      <template>
                        <v-card-actions
                          class="d-flex justify-end align-center mr-9"
                        >
                          <v-btn
                            type="submit"
                            dark
                            width="121"
                            height="45"
                            style="
                              margin-top: 24px;
                              margin-bottom: 41px;
                              background: #16be98;
                              box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                              border-radius: 4px;
                            "
                          >
                            <simple-line-icons
                              icon="arrow-right"
                              style="font-size: 16px"
                              size="small"
                              no-svg
                            />
                            <span
                              class="pl-4 m-0 text-capitalize"
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
                              >send</span
                            >
                          </v-btn>
                        </v-card-actions>
                      </template>
                    </form>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </div>
        </v-card>

        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          class="align-center mt-12 text-center text-break"
        >
          <span
            class="pt-12"
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 24px;
              letter-spacing: 0.278409px;
              color: #7f919b;
            "
          >
            We are commited to your privacy. pBot is fully encrypted and keeps
            all your sensitive information 100% secure and private</span
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    //
  },
  name: "Login",

  mounted() {},

  data() {
    return {
      dialog: false,
      showPass: false,
      loginData: {
        email: "",
        password: "",
      },
      isLoginin: false,
      forgotPassword: "",
      errorMsg: "",
      rules: {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        password: [(v) => !!v || "This field is required"],
      },
    };
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    async submitForm(event) {
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].validate(true);
      });

      if (this.canLogin) {
        event.preventDefault();

        try {
          this.isLoginin = true;
          await this.$store.dispatch("auth/login", {
            identifier: this.loginData.email,
            password: this.loginData.password,
          });

          this.showToast({
            sclass: "success",
            show: true,
            message: "Welcome back",
            timeout: 3000,
          });
          this.$router.push("/welcome");
        } catch (error) {
          this.showToast({
            sclass: "error",
            show: true,
            message: error.msg,
            timeout: 3000,
          });
        } finally {
          this.isLoginin = false;
        }
      }
    },
  },

  computed: {
    form() {
      return {
        email: this.loginData.email,
        password: this.loginData.password,
      };
    },

    canLogin() {
      // loop through rules, if all pass user can try to login
      const rules = Object.keys(this.rules);
      return rules
        .map((rule) => {
          return Object.keys(this.rules[rule])
            .map((field, index) => {
              return this.rules[rule][index](this.loginData[rule]);
            })
            .every((val) => val == true);
        })
        .every((val) => val == true);
    },
  },
};
</script>

<style scoped>
.dskTopTitleSpacing {
  padding-left: 84px;
  padding-top: 90px;
}
.mobileTitleSpacing {
  padding-left: 36px;
  padding-top: 38px;
}

/* .card-input-field {
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
} */

/* .v-text-field >>> input {
  font-size: 1em;
  font-weight: 300;
}
.v-text-field >>> label {
  font-size: 12px;
  padding-left: 4px;
} */
/* .message-details {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  letter-spacing: 0.278409px;
  color: #301f78;

  mix-blend-mode: normal;
  opacity: 0.5;
}
.v-text-field >>> button {
  font-size: 0.8em;
} */

/* .form-link {
  height: 32px;
  width: 325px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  background: rgba(127, 145, 155, 0.08);
} */

/* .hint {
  height: 32px;
  width: 325px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  background: rgba(127, 145, 155, 0.08);
} */
/* .span-text {
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
} */
.v-application .elevation-4 {
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 3%), 0px 3px 3px 0px rgb(0 0 0 / 4%),
    0px 3px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
