<template>
  <v-card
    elevation="0"
    tile
    max-height="100vh"
    min-height="100%"
    class="pa-0 ma-0"
  >
    <v-container fluid class="pa-0 ma-0">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="8"
          max-height="100%"
          class="primer d-flex justify-center"
        >
          <v-scroll-y-transition leave-absolute mode="out-in">
            <SignUp v-if="isSignup" class="ma-auto" />
            <Login v-else-if="isLogin" />
            <Recover-password v-else-if="isRecovery" />
            <reset-password v-else-if="isReset" />
          </v-scroll-y-transition>
        </v-col>
        <v-col
          max-height="100%"
          style="position: relative"
          cols="12"
          md="4"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-img
            max-height="100vh"
            min-height="100%"
            src="@/assets/pexels-edward-jenner-4252894-min.png"
          >
            <v-overlay opacity="0.67" style="position: absolute">
              <div
                class="text-break mx-auto"
                style="max-width: 354px"
                v-if="$route.name == 'Login'"
              >
                <span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 34px;
                    letter-spacing: 0.278409px;
                  "
                  >Simplify company money operations</span
                >

                <p
                  class="pt-6"
                  style="
                    max-width: 283px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 0.278409px;
                  "
                >
                  Hyphen is empowering the finance office. <br />
                  Enabling every company with visibility, approval and workflow
                  technology to grow cashflow
                </p>
              </div>
              <div class="text-break mx-auto" style="max-width: 354px" v-else>
                <span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 34px;
                    letter-spacing: 0.278409px;
                  "
                  >Flexible, no code finance operations for every company</span
                >

                <p
                  class="pt-6"
                  style="
                    max-width: 283px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 0.278409px;
                  "
                >
                  <strong>Setup in 5mins or less</strong><br />
                  Hyphen team will help onboard you and your company with great
                  care and worldclass service
                </p>

                <p class="pt-2">
                  <v-icon large>mdi-chevron-left</v-icon>
                </p>
              </div>
            </v-overlay>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Login from "../components/Login";
import RecoverPassword from "../components/forgotPassword.vue";
import SignUp from "../components/SignUp";
import ResetPassword from "../components/resetPassword.vue";

export default {
  name: "FormLayout",
  data() {
    return {};
  },

  components: {
    Login,
    SignUp,
    RecoverPassword,
    ResetPassword,
  },

  computed: {
    isSignup() {
      return this.$route.name === "SignUp";
    },
    isLogin() {
      return this.$route.name === "Login";
    },
    isRecovery() {
      return this.$route.name === "forgot-password";
    },
    isReset() {
      return this.$route.name === "reset-password";
    },
  },
};
</script>

<style>
.full-height {
  min-height: 100%;
  /* max-height: 100vh; */
}
</style>
