<template>
  <div>
    <v-card flat elevation="4" min-height="904" width="1300">
      <v-card
        flat
        elevation="2"
        height="98"
        width="1300"
        class="rounded-t-lg"
        style="margin-right: 57; background: rgba(127, 145, 155, 0.052607)"
      >
        <v-row class="d-flex">
          <img
            style="font-size: 24px; margin-top: 37px; margin-left: 49px"
            :src="require('@/assets/pbot_icons/ManagerApproval.svg')"
            alt="Manager-approval-icon"
          />
          <v-card-title
            class="ml-4 justify-center align-center"
            style="
              padding: 0px;
              margin-top: 34px;
              font-family: Inter;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 29px;
              color: #311b92;
            "
          >
            Approval by MD & Snr. Managers
          </v-card-title>
          <v-spacer></v-spacer>
          <v-switch
            dense
            color="#16BE98"
            hide-details="auto"
            class="d-flex, row-reverse mr-16 justify-center align-center"
          >
            <template #prepend>
              <v-label>
                <span style="font-size: 12px"> Disable </span>
              </v-label>
            </template>
          </v-switch>
        </v-row>
      </v-card>
      <template>
        <v-stepper
          style="top: 92px; left: 44px"
          elevation="0"
          min-height="806"
          color="#301F78"
          v-model="e6"
          vertical
        >
          <v-stepper-step color="#311B92" :complete="e6 > 1" step="1">
            <v-span
              style="
                margin-top: 40px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 19px;
                color: #311b92;
              "
            >
              Choose workflow trigger
            </v-span>
            <span
              class="mt-6"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 200;
                font-size: 14px;
                line-height: 15px;
                letter-spacing: 0.45px;
                color: #596a73;
              "
              >All automation begins with a data source, choose one below to
              initiate your automation rule</span
            >
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card flat color="#ffffff" class="mb-12 d-flex" height="200px">
              <v-row class="mt-6">
                <v-card
                  class="ml-5"
                  flat
                  width="100"
                  height="72"
                  style="border: 1px solid rgba(48, 31, 120, 0.07)"
                >
                  <img
                    style="#301f78"
                    :src="require('@/assets/pbot_icons/cardIcons.png')"
                    alt="card-icon"
                /></v-card>
                <v-card
                  class="ml-5"
                  flat
                  width="100"
                  height="72"
                  style="border: 1px solid rgba(48, 31, 120, 0.07)"
                ></v-card>
                <v-card
                  class="ml-5"
                  flat
                  width="100"
                  height="72"
                  style="border: 1px solid rgba(48, 31, 120, 0.07)"
                ></v-card>
                <v-card
                  class="ml-5"
                  flat
                  width="100"
                  height="72"
                  style="
                    border: 1px solid rgba(48, 31, 120, 0.07);
                    border-radius: 8px;
                  "
                ></v-card>
              </v-row>
            </v-card>
            <v-btn
              @click="e6 = 2"
              dark
              width="121"
              height="45"
              style="
                background: #311b92;
                box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                border-radius: 4px;
              "
            >
              <simple-line-icons
                icon="arrow-right"
                color="#FFFFFF"
                style="
                  font-family: simple-line-icons;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 16px;
                "
                no-svg
              />
              <span
                class="text-capitalize pl-3"
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
                >next</span
              >
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            Configure analytics for this app
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4"> View setup instructions </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper>
      </template>
    </v-card>
  </div>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";

export default {
  data() {
    return {
      e6: 1,
    };
  },
  components: { SimpleLineIcons },
};
</script>

<style scoped>
.v-application .elevation-2 {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 2%), 0px 4px 5px 0px rgb(0 0 0 / 2%),
    0px 1px 10px 0px rgb(0 0 0 / 1%) !important;
}
.v-application .elevation-4 {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 3%), 0px 4px 5px 0px rgb(0 0 0 / 3%),
    0px 1px 10px 0px rgb(0 0 0 / 3%) !important;
}

/* .step-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
} */
</style>
