<template>
  <div>
    <v-container class="pa-0">
      <h1
        v-if="user"
        class="text-center text-h5 text-md-h3 px-0"
        style="padding-top: 124px; color: var(--v-primary-base)"
      >
        Hello {{ user.username }}
      </h1>
      <p
        class="text-center text-caption text-md-h6"
        style="padding-bottom: 49px; color: #7f919b"
      >
        Let’s get you started on hyphen
      </p>
      <v-container class="pa-0 ma-0 justify-center mx-auto">
        <v-row class="d-flex justify-center px-10 px-md-0">
          <v-col
            cols="12"
            md="3"
            sm="6"
            class="mx-auto mb-10 ma-md-0 px-md-6 pa-0"
          >
            <v-card class="" color="#FCF7ED" height="100%" elevation="5">
              <img
                :src="require('@/assets/person.svg')"
                style="
                  padding-top: 10%;
                  padding-bottom: 10%;
                  padding-right: 80%;
                  padding-left: 40%;
                "
              />
              <v-card-title class="justify-center"
                ><span
                  class="text-break"
                  style="
                  max-width: 150px
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: -0.73px;
                  "
                  >Help us know you better</span
                ></v-card-title
              >
              <v-card-text
                >Complete your account KYB by <br />
                providing a few documentation</v-card-text
              >
              <div class="px-2 pt-4 mx-6" style="padding-bottom: 68px">
                <v-btn large elevation="10" color="primary" @click="showDialog"
                  >Start</v-btn
                >
              </div>
            </v-card>
          </v-col>
          <v-col class="mb-10 ma-md-0 px-md-6 pa-0" cols="12" md="3" sm="6">
            <v-card class="card" color="#FCF7ED" height="100%" elevation="5">
              <img
                :src="require('@/assets/bank.svg')"
                style="
                  padding-top: 10%;
                  padding-bottom: 10%;
                  padding-right: 80%;
                  padding-left: 40%;
                "
              />
              <v-card-title class="justify-center"
                ><span
                  class="text-break"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: -0.73px;
                    max-width: 150px;
                  "
                >
                  Understand your cashflow better</span
                ></v-card-title
              >
              <v-card-text class="justify-center"
                ><span
                  class="text-break"
                  style="max-width: 30%; text-align: center"
                  >Connect your business bank accounts, to allow Hyphen confirm
                  and reconcile company spend</span
                ></v-card-text
              >
              <div class="px-2 pt-md-4 pb-5 mx-6">
                <v-btn @click="launchMono" large elevation="10" color="primary"
                  >Connect Bank</v-btn
                >
              </div>
              <v-card-text
                class="pb-5 text-break text-center mx-auto justify-center"
                style="max-width: 200px"
              >
                <span
                  style="
                    padding-bottom: 19px;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 16px;
                    text-align: center;
                    color: #7f919b;
                  "
                >
                  hyphen will not debit your account
                </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="ma-md-0 px-md-6 pa-0" cols="12" md="3" sm="6">
            <v-card class="" color="#FCF7ED" height="100%" elevation="5">
              <img
                :src="require('@/assets/person.svg')"
                style="
                  padding-top: 10%;
                  padding-bottom: 10%;
                  padding-right: 80%;
                  padding-left: 40%;
                "
              />
              <v-card-title class="justify-center ma-md-0"
                ><span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: -0.73px;
                  "
                >
                  Invite Stakeholders</span
                ></v-card-title
              >
              <p class="text-caption text-center px-4 mb-9 mb-sm-4 mb-md-4">
                Invite your co-worker, financial advisor, accountant into this
                company account for visibility and approvals
              </p>
              <div class="px-2 mx-6" style="padding-bottom: 20px">
                <v-btn large elevation="10" color="primary">Use Workflow</v-btn>
              </div>
              <v-card-text
                class="pb-5 text-break text-center mx-auto justify-center"
                style="max-width: 200px"
              >
                <span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    text-align: center;
                    color: #7f919b;
                  "
                >
                  Hyphen keeps an automatic audit trail for you to monitor all
                  activities
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="justify-center">
        <p
          style="
            padding-top: 50px;
            padding-bottom: 50px;
            text-align: center;
            font-size: 12px;
            line-height: 15px;
            text-decoration-line: underline;
            color: #7b4fff;
          "
          :style="{
            paddingBottom: `${$vuetify.breakpoint.mdAndUp ? '200px' : '50px'}`,
            paddingTop: `${$vuetify.breakpoint.mdAndUp ? '91px' : '50px'}`,
          }"
        >
          <router-link to="inbox"
            ><span
              class="my-0"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 29px;
                text-decoration-line: underline;
                color: #18293d;
              "
              >Go to Auditor</span
            ></router-link
          >
        </p>
      </div>
    </v-container>
    <Company ref="company" />
  </div>
</template>

<script>
import Company from "@/components/kyc/company.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedAction: null,
      publicPath: process.env.BASE_URL,
      dialog: false,
    };
  },
  components: {
    Company,
  },
  mounted() {
    //  this.$store.dispatch("auth/fetchUserDetails");
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },

    triggerDialog(item) {
      this.selectedAction = item;
      this.dialog = true;
    },
    showDialog() {
      this.$refs.company.show(true);
      //console.log(this.$refs[ref]);
    },

    async submitBankCode(response) {
      const { data } = await this.$store.dispatch(
        "organizations/addBank",
        response
      );
      console.log(JSON.stringify(data, null, 2));
    },

    //method to launch the Mono app
    launchMono() {
      const options = {
        onSuccess: (response) => {
          console.log(JSON.stringify(response));

          this.submitBankCode(response);

          // let resp =
          // console.log(JSON.stringify(resp, null, 2));
        },

        onClose: function () {
          console.log("user closed the widget.");
        },
      };
      this.$launchMono(options);
    },
  },
};
</script>

<style scoped>
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #7f919b;
}

.hint {
  /* position: absolute; */
  width: 178px;
  height: 40px;
  left: 222px;
  /* top: 197px; */

  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 18px;
  /* or 167% */

  color: #7f919b;
}

.theme--light.v-card {
  color: var(--v-primary-base);
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;
}

.theme--light.v-card > .v-card__text,
.theme--light.v-card > .v-card__subtitle {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  /* or 160% */

  text-align: center;

  color: #7f919b;
}
.v-application .elevation-5 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 2%), 0px 5px 8px 0px rgb(0 0 0 / 2%),
    0px 1px 14px 0px rgb(0 0 0 / 1%) !important;
}
</style>
