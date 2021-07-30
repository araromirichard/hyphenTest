<template>
  <div>
    <v-row>
      <v-col cols="2" class="d-flex flex-row">
        <v-row class="d-flex flex-column">
          <v-col class="d-flex flex-row">
            <img
              :src="require('@/assets/insights-icon.svg')"
              style="padding-top: 169px; padding-left: 22px"
            />
            <h6 class="header-title pl-4" style="padding-top: 167px">
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
                  height="25"
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
          </v-col>
          <div>
            <SideCard />
          </div>
        </v-row>
      </v-col>
      <v-col cols="10">The Second Prt Here</v-col>
    </v-row>
  </div>
</template>

<script>
import SideCard from "../../includes/Instruction-Card.vue";
export default {
  Components: {
    SideCard,
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
</style>
