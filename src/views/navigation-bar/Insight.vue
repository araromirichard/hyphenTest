<template>
  <div>
    <v-row>
      <v-col cols="2" class="d-flex flex-row">
        <v-row class="d-flex flex-column">
          <v-col class="">
            <v-avatar>
              <img
                :src="require('@/assets/insights-icon.svg')"
                style="padding-top: 169px; padding-left: 22px"
              />
            </v-avatar>
            <h6 class="text-h5 header-title pl-4" style="padding-top: 167px">
              First Steps
            </h6>
          </v-col>
          <v-col class="pt-0 mt-0">
            <p
              class="hint pt-1 mt-0 pl-5 mx-0"
              style="text-align: justify; text-justify: none"
            >
              Follow these steps to complete setting up your account
            </p>
          </v-col>
          <v-col class="pt-0 mt-0">
            <div>
              <template>
                <h6 class="progress-bar-title">Account status</h6>
                <v-progress-linear
                  color="#16BE98"
                  value="40"
                  height="20"
                  rounded
                  style="background-color: #f9eed2"
                ></v-progress-linear>
                <h6 class="sub-text-info">40% completed</h6>
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

            <div>
              <SideCard />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <div>
          <h1 class="text-h4 pl-4" style="padding-top: 124px; color: #311b92">
            Welcome Bunmi
          </h1>
          <p class="text-h5 pl-4" style="padding-bottom: 49px; color: #7f919b">
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
                    v-if="card.title === 'Total Payments'"
                  >
                    N{{ card.text }}K
                  </v-card-text>
                  <v-card-text class="card-text pl-4" v-else>
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
                  <v-icon right size="26" color="#311B92">
                    mdi-arrow-right
                  </v-icon></v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9" class="d-flex flex-row py-4 pl-6">
            <v-row>
              <v-col><account-summary /> </v-col>
              <v-col>
                <div class="d-flex flex-column">
                  <info-summary-card />
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9">
            <div>
              <recent-process-table />
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
.header-title {
  height: 22px;
  left: 13px;
  top: 167px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height */

  color: #596a73;
}
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
.sub-text-info {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.530303px;

  color: #7f919b;
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

.card-text {
  font-family: Inter;
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-transform: uppercase;

  color: #311b92;
}
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
</style>
