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
      <v-form class="ma-auto" ref="form">
        <v-card-text class="card-items">
          <v-text-field
            height="48"
            label="Company Name"
            single-line
            outlined
            type="text"
            required
            class="font-weight-regular text-subtitle-2 t pb-0"
            v-model="companyName"
          ></v-text-field>

          <v-text-field
            label="Country where company is based"
            single-line
            outlined
            class="font-weight-regular text-subtitle-2 pb-0 mb-0"
            v-model="country"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            label="Your accounting system"
            single-line
            outlined
            class="font-weight-regular text-subtitle-2 pb-0 mb-0"
            v-model="accountSystem"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            label="Your role"
            single-line
            outlined
            class="font-weight-regular text-subtitle-2 pb-0 mb-0"
            v-model="role"
            type="text"
          ></v-text-field>
        </v-card-text>

        <router-link to="onboarding">
          <v-card-actions class="card-items pt-0">
            <v-btn
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
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: "",
      country: "",
      accountSystem: "",
      role: "",
    };
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
  text-decoration: none;
  letter-spacing: 0.278409px;
  float: right;
  color: #301f78;

  mix-blend-mode: normal;
  opacity: 0.5;
}
.v-text-field >>> button {
  font-size: 1em;
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
