<template>
  <v-card class="ma-auto my-auto elevation-4" max-width="514">
    <v-card-title
      class="text--secondary font-weight-bold"
      style="
        margin-left: 86px;
        margin-top: 70px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.484848px;
        color: #596a73;
      "
    >
      <span class="mt-10 text--secondary">Sign in</span>
    </v-card-title>
    <v-form class="ma-auto" ref="form">
      <v-card-text class="card-items">
        <v-text-field
          hide-details="auto"
          label="Your Name"
          single-line
          outlined
          type="text"
          required
          class="font-weight-regular text-subtitle-2 label--text"
          v-model="fullName"
          :rules="fullNameRules"
        ></v-text-field>

        <v-text-field
          hide-details="auto"
          label="Password"
          single-line
          outlined
          class="mt-8 font-weight-regular text-subtitle-2 label--text pb-0 mb-0"
          v-model="password"
          type="password"
          required
          :rules="passwordRules"
        ></v-text-field>
        <div class="message-details d-flex justify-end">
          <router-link to="#" style="text-decoration: none; color: inherit">
            <p
              class="pt-1"
              style="
                font-family: Lato;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.278409px;
                color: #301f78;
              "
            >
              Forgot Password?
            </p>
          </router-link>
        </div>
      </v-card-text>

      <v-card-actions class="card-items">
        <v-btn
          block
          color="primary"
          elevation="20"
          large
          height="54px"
          width="346px"
          class="text-capitalize"
          @click="submit"
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
            >Sign in</span
          >
        </v-btn>
      </v-card-actions>
    </v-form>
    <div class="d-flex mx-auto justify-center pt-7 pb-16 card-items">
      <div class="hint">
        <div class="py-auto d-flex align-content-center">
          <span class="span-text pl-6 py-auto">Don’t have an account yet?</span>
          <router-link
            to="sign-up"
            style="text-decoration: none; color: inherit; padding-top: 4px"
            ><span class="span-text-link py-auto">
              Sign Up Here</span
            ></router-link
          >
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      fullName: "",
      password: "",
      fullNameRules: [
        (value) => !!value || "Name field is required",
        (value) =>
          (value && value.length <= 10) ||
          "Name must be less than 10 characters",
      ],
      passwordRules: [
        (value) => !!value || "Password is required",
        (value) => {
          const pattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#+%+&+*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        },
      ],
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.fullName, this.password);
      }
    },
  },
};
</script>

<style scoped>
.card-items {
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
  font-size: 0.8em;
  font-weight: 100;
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
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 3%), 0px 3px 3px 0px rgb(0 0 0 / 4%),
    0px 3px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
