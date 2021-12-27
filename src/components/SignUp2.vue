<template>
  <v-card class="pb-10 mt-16" elevation="4">
    <v-row class="pa-0 ma-0 d-flex flex-row">
      <v-col cols="12" md="8" class="pa-0">
        <p
          class="
            text-md-h4 text-h5
            font-weight-bold
            pb-md-4
            mt-8
            mb-0
            text--secondary
          "
          :style="{
            paddingLeft: `${$vuetify.breakpoint.smAndUp ? '84px' : '36px'}`,
            paddingTop: `${$vuetify.breakpoint.smAndUp ? '44px' : '34px'}`,
          }"
        >
          Create your account
        </p>
      </v-col>
      <v-col cols="12" md="4" class="pl-9 pl-md-4 pa-0">
        <p
          class="text-caption pt-16 text--disabled pb-md-7 mt-md-8"
          :style="{
            paddingTop: `${$vuetify.breakpoint.smAndUp ? '44px' : '3px'}`,
          }"
        >
          Step 2 of 2
        </p>
      </v-col>
    </v-row>
    <div class="">
      <p
        class="text-break"
        style="
          padding-left: 84px;
          padding-right: 78px;
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.278409px;
          color: #7f919b;
        "
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        Hello {{user.username}}, to get great value from pbot please provide information about
        your company below
      </p>
    </div>
    <div
      :style="{
        paddingLeft: `${$vuetify.breakpoint.smAndUp ? '86px' : '36px'}`,
        paddingRight: `${$vuetify.breakpoint.smAndUp ? '78px' : '34px'}`,
      }"
    >
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form
          @submit.prevent="onSubmit "
          class="ma-auto"
          ref="form"
        >
          <v-card-text class="pa-0">
            <v-row class="pt-2">
              <v-col cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="Company Name"
                  rules="required"
                >
                  <v-text-field
                    hide-details="auto"
                    :error-messages="errors"
                    height="48"
                    placeholder="Company Name"
                    single-line
                    outlined
                    type="text"
                    required
                    class="font-weight-regular text-subtitle-2 pb-0 mt-3 mb-6"
                    v-model="companyDetails.orgname"
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="Account System"
                  rules="required"
                >
                  <v-select
                    hide-details="auto"
                    :error-messages="errors"
                    placeholder="Country of Operation"
                    single-line
                    outlined
                    class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                    v-model="companyDetails.country"
                    :items="operatingCountries"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="CAC"
                  rules="required"
                >
                  <v-text-field
                    hide-details="auto"
                    :error-messages="errors"
                    placeholder="CAC Reg Number/Tax ID"
                    single-line
                    outlined
                    class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                    v-model="companyDetails.cac"
                    type="text"
                  ></v-text-field>
                </validation-provider>
                <!-- <validation-provider
                  v-slot="{ errors }"
                  name="Account System"
                  rules="required"
                >
                  <v-select
                    hide-details="auto"
                    :error-messages="errors"
                    placeholder="Company Team Size"
                    single-line
                    outlined
                    class="font-weight-regular text-subtitle-2 pb-0 mb-6"
                    v-model="companyDetails.size"
                    :items="companyTeamSize"
                    item-value="value"
                    item-text="string"
                    required
                  ></v-select>
                </validation-provider> -->
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="justify-center px-0">
            <v-btn
              :disabled="invalid"
              @click="onSubmit"
              block
              width="88px"
              height="54px"
              color="primary"
              class="text-capitalize"
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
                Continue
              </span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
      <v-card-actions
        class="justify-center mx-auto"
        style="margin-top: 29px"
        :style="{
          marginBottom: `${$vuetify.breakpoint.xs ? '24px' : '73px'}`,
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
              color: #311b92;
            "
          >
            <span class="pl-md-4 pr-md-8 py-4"> Sign In Here</span>
          </router-link>
        </v-chip>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { required, email } from "vee-validate/dist/rules";
// import {
//   extend,
//   ValidationObserver,
//   ValidationProvider,
//   setInteractionMode,
// } from "vee-validate";

// setInteractionMode("eager");

// extend("required", {
//   ...required,
//   message: "{_field_} can not be empty",
// });

// extend("email", {
//   ...email,
//   message: "Email must be valid",
// });
export default {
  data() {
    return {
      snackbar: {
        snackbar: false,
        text: null,
        sclass: null,
        timeout: 1000,
      },
      isCreating:false,
      companyDetails: {
        orgname: "",
        country: "",
        accountSystem: "",
        cac: "",
        size: "",
        email: "",
      },
      operatingCountries: [
        "Nigeria",
        "United States of America",
        "UAE",
        "Ghana",
      ],
      // companyTeamSize: [
      //    {
      //    string:'Les than 10',
      //     value: 9
      //  },
      //   {
      //    string:'Less than 50',
      //     value: 49
      //  },
      //   {
      //    string:'Less than 100',
      //     value: 99
      //  },
      //   {
      //    string:'More than 100',
      //     value: 101
      //  }
      // ],
    };
  },
  // components: {
  //   ValidationProvider,
  //   ValidationObserver,
  // },

  // {
  //     "orgname": "Mulaa 44 Ltd",
  //     "members": [
  //       "9"
  //     ],
  //     "multitenant": false,
  //     "bank": [
  //       {
  //         "account_name": "Mulaa Analytics",
  //         "bank_name": "GTB",
  //         "routing_number": "",
  //         "account_type": "current",
  //         "account_number": "9030303033",
  //         "authid": ""
  //       }
  //     ],
  //     "company": {
  //       "company_name": "Mulaa Analytics",
  //       "registration_number": "293303033",
  //       "country": "Nigeria"
  //     },
  //     "office": [
  //       {
  //         "address": "18 cooper road ",
  //         "state": "Lagos",
  //         "city": "Ikoyi",
  //         "country": "Nigeria",
  //         "postcode": 102105
  //       }
  //     ],
  //     "leadership": [
  //       {
  //         "first_name": "Samson",
  //         "last_name": "Aligba",
  //         "percentage": "30",
  //         "email": "sa@mulaa.me",
  //         "phone": "08029735939",
  //         "position": "MD"
  //       }
  //     ]
  //   }
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    async onSubmit() {
      if (this.$refs.observer.validate()) {
  
        const payload = {
          orgname: this.companyDetails.orgname,
          // members: [this.companyDetails.size],
          company: {
            company_name: this.companyDetails.orgname,
            registration_number: this.companyDetails.cac,
            country: this.companyDetails.country,
          },
        };

        try {
          this.isCreating
          const req = await this.$store.dispatch(
            "organizations/createOrganization",
            payload
          );
          console.log(JSON.stringify(req, null, 2));

           this.$router.push('/welcome')
        } catch (error) {
          console.log(JSON.stringify(error, null, 2));
          this.showToast({
            sclass: "error",
            show: true,
            message: error.msg,
            timeout: 3000,
          });
        }finally{
          this.isCreating = false
        }
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>

<style scoped>
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

.v-application .elevation-4 {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 3%), 0px 2px 2px 0px rgb(0 0 0 / 4%),
    0px 1px 5px 0px rgb(0 0 0 / 4%) !important;
}
</style>
