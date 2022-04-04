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
        <v-card color="transparent" elevation="0">
          <p
            class="display-1 font-weight-bold text--secondary"
            :style="{
              paddingLeft: `${$vuetify.breakpoint.smAndUp ? '84px' : '36px'}`,
              paddingTop: `${$vuetify.breakpoint.smAndUp ? '50%' : '34px'}`,
            }"
          >
            Forgot Your Password ?
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
                  :disabled="isSending"
                  type="email"
                  required
                  v-model="email"
                  prepend-inner-icon="mdi-email-outline"
                  :rules="rules.email"
                ></v-text-field>
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
                  :loading="isSending"
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
                  Send mail
                </v-btn>
              </v-card-actions>
            </v-form>
          </div>
        </v-card>

        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          class="align-center mt-0 text-center text-break"
        ></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "forgot-password",

  mounted() {},

  data() {
    return {
      showPass: false,
      email: "",
      isSending: false,

      errorMsg: "",
      rules: {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
      },
    };
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    async submitForm() {
      this.$refs.form.validate();
      const payload = JSON.stringify(this.email, null, 2);
      console.log(payload);
      try {
        this.isSending = true;
        await this.$store
          .dispatch("auth/sendResetPasswordEmailLink", payload)
          .then(
            this.showToast({
              sclass: "success",
              show: true,
              message: "Email Sent, Please Check Your Email",
              timeout: 5000,
            })
          );
      } catch (error) {
        this.showToast({
          sclass: "error",
          show: true,
          message: error.msg,
          timeout: 3000,
        });
      } finally {
        this.isSending = false;
      }
    },
  },

  computed: {
    //
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

.v-application .elevation-4 {
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 3%), 0px 3px 3px 0px rgb(0 0 0 / 4%),
    0px 3px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
