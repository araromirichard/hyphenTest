<template>
  <div class="pl-4">
    <v-row>
      <v-col cols="2">
        <v-row class="d-flex flex-column">
          <v-col>
            <div class="justify-start d-flex">
              <img
                :src="require('@/assets/insights-icon.svg')"
                style="margin-top: 162px; margin-left: 22px"
              />

              <h6
                class="text-h5 header-title ml-4"
                style="
                  margin-top: 162px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 18px;
                  line-height: 22px;
                  color: #596a73;
                "
              >
                First Steps
              </h6>
            </div>
          </v-col>
          <v-col class="pt-0 mt-0">
            <p
              class="hint pt-1 mt-0 pl-5 mx-0"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 20px;
                color: #7f919b;
              "
            >
              Follow these steps to complete setting up your account
            </p>
          </v-col>
          <v-col class="pt-0 mt-0">
            <div>
              <template>
                <span
                  class="pl-6"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 12px;
                    text-align: center;
                    color: #16be98;
                  "
                  >Account status</span
                >
                <v-progress-linear
                  color="#16BE98"
                  value="40"
                  height="16"
                  width="30"
                  rounded
                  background-color="#F9EED2"
                ></v-progress-linear>
                <span
                  class="pl-6"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 12px;
                    text-align: center;
                    letter-spacing: 0.530303px;
                    color: #7f919b;
                  "
                  >40% completed</span
                >
              </template>
              <div class="pl-6 pt-8">
                <v-chip
                  color="#D5F7EF"
                  text-color="#2BD4AE"
                  class="pa-2 mx-2"
                  x-small
                >
                  Done
                </v-chip>
                <p
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 20px;

                    color: #7f919b;
                  "
                >
                  Complete setup form
                </p>
              </div>
            </div>

            <!-- side-card component -->
            <div class="pl-4">
              <v-divider
                class="mb-6 mt-3"
                style="
                  width: 194px;
                  height: 1px;
                  border: 1px dashed #f9eed2;
                  margin-left: 5px;
                "
              ></v-divider>
              <SideCard
                Text="Complete your pBot AI powered email address name"
                chip="step 2"
              />
              <v-divider
                class="mb-6 mt-3"
                style="
                  width: 194px;
                  height: 1px;
                  border: 1px dashed #f9eed2;
                  margin-left: 5px;
                "
              ></v-divider>
              <SideCard
                Text="Create your first workflow, choose a template"
                chip="step 3"
              />
              <v-divider
                class="mb-6 mt-3"
                style="
                  width: 194px;
                  height: 1px;
                  border: 1px dashed #f9eed2;
                  margin-left: 5px;
                "
              ></v-divider>
              <SideCard
                Text="Invite relevant colleagues and partners to your pbot account "
                chip="step 4"
              />
              <v-divider
                class="mb-6 mt-3"
                style="
                  width: 194px;
                  height: 1px;
                  border: 1px dashed #f9eed2;
                  margin-left: 5px;
                "
              ></v-divider>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <div>
          <h1
            class="pl-4"
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              line-height: 29px;
              color: #311b92;
              padding-top: 88px;
            "
          >
            Welcome Bunmi
          </h1>
          <p
            class="mt-2 pl-4"
            style="
              padding-bottom: 49px;
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 22px;
              color: #7f919b;
            "
          >
            Here are a few things to do today
          </p>
        </div>
        <v-row style="margin-right: 50px">
          <v-col v-for="card in cards" :key="card.title" cols="3" class="ml-4">
            <v-card
              max-width="300px"
              min-height="150"
              class="d-flex flex-column"
              color="#FBF4E4"
              flat
            >
              <v-row>
                <v-col>
                  <v-card-title class="text-subtitle-2 py-8 px-2">{{
                    card.title
                  }}</v-card-title>
                  <v-card-text
                    class="card-text pl-4"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 900;
                      font-size: 24px;
                      line-height: 29px;
                      text-transform: uppercase;
                      color: #311b92;
                    "
                    v-if="card.title === 'Total Payments'"
                  >
                    N{{ card.text }}K
                  </v-card-text>
                  <v-card-text
                    class="card-text pl-4"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 900;
                      font-size: 24px;
                      line-height: 29px;
                      text-transform: uppercase;
                      color: #311b92;
                    "
                    v-else
                  >
                    {{ card.text }}
                  </v-card-text>
                </v-col>
                <v-col class="d-flex flex-row justify-end pt-8 pr-8">
                  <v-avatar size="56" color="white">
                    <img
                      style="height: 20px"
                      :src="card.src"
                      alt=""
                    /> </v-avatar
                ></v-col>
              </v-row>
              <div>
                <v-divider></v-divider>
                <v-btn large right plain color="#7F919B"
                  >view
                  <v-icon
                    right
                    class="text-black ml-0"
                    x-small
                    size="26"
                    color="#311B92"
                  >
                    mdi-arrow-right-thick
                  </v-icon></v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9" class="d-flex flex-row py-4 pl-6">
            <v-row>
              <v-col>
                <!-- account-summary component -->
                <account-summary class="mb-16" />
              </v-col>
              <v-col>
                <!-- info-summary component -->
                <div class="d-flex flex-column">
                  <info-summary-card />
                </div>
              </v-col>
            </v-row>
          </v-col>
          <!-- recent-process-table component -->
          <v-col cols="9">
            <div>
              <recent-process-table class="mb-6" />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AccountSummary from "../../includes/AccountSummary.vue";
import InfoSummaryCard from "../../includes/InfoSummaryCard.vue";
import RecentProcessTable from "../../includes/RecentProcessTable.vue";
import SideCard from "../../includes/SideCard.vue";
export default {
  name: "Insight",
  components: { AccountSummary, InfoSummaryCard, RecentProcessTable, SideCard },
  data() {
    return {
      cards: [
        {
          title: "Total Processes",
          src: require("@/assets/oppositeArrows.svg"),
          text: "231",
        },
        {
          title: "Total Payments",
          src: require("@/assets/cashBundle.svg"),
          text: "239",
        },
        {
          title: "Pending Approvals",
          src: require("@/assets/Y-arrows.svg"),
          text: "0",
        },
      ],
    };
  },
};
</script>

<style scoped>
.progress-bar-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #16be98;
}
.v-progress-linear--rounded {
  border-radius: 14px;
  margin-left: 10px;
}

.progress-determinant {
  border-radius: 14px;
}

.v-card__title {
  left: 20px;
  top: 21px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #7f919b;
}

/* .card-text {
  font-family: Inter;
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 29px;

  color: #311b92;
} */
.v-divider {
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0px;
  max-height: 0px;
  border: 1px solid #f9eed2;
  border-width: thin 0 0 0;
  transition: inherit;
}
determinate {
  border-radius: 14px !important;
}
</style>
