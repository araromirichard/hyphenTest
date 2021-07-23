<template>
  <div>
    <v-card>
      <v-card-title
        class="card-items text--secondary font-weight-bold pt-lg-16"
      >
        Sign up
        <v-spacer></v-spacer>
        /2
      </v-card-title>
      <v-form class="ma-auto" ref="form">
        <v-card-text class="card-items">
          <v-text-field
            label="Company Name"
            single-line
            outlined
            type="text"
            required
            class="font-weight-regular text-subtitle-2 label--text"
            v-model="companyName"
            :rules="companyName"
          ></v-text-field>

          <v-text-field
            label="Country where company is based"
            single-line
            outlined
            class="font-weight-regular text-subtitle-2 label--text pb-0 mb-0"
            v-model="country"
            type="text"
            required
            :rules="countryRules"
          ></v-text-field>
          <v-text-field
            label="Your accounting system"
            single-line
            outlined
            class="font-weight-regular text-subtitle-2 label--text pb-0 mb-0"
            v-model="accountSystem"
            type="text"
            required
            :rules="accountSystemRules"
          ></v-text-field>
          <v-text-field
            label="Your role"
            single-line
            outlined
            class="font-weight-regular text-subtitle-2 label--text pb-0 mb-0"
            v-model="role"
            type="text"
            required
            :rules="roleRules"
          ></v-text-field>
        </v-card-text>

        <router-link to="onboarding">
          <v-card-actions class="card-items">
            <v-btn
              block
              color="primary"
              elevation="20"
              large
              class="text-capitalize"
              @click="submit"
            >
              Submit</v-btn
            >
          </v-card-actions>
        </router-link>
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
  font-family: Inter;
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
  font-family: Lato;
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
  font-family: Lato;
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
</style>
