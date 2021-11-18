<template>
  <v-card
    outlined
    min-height="166"
    style="
      background: #ffffff;
      border: 1px solid rgba(48, 31, 120, 0.07);
      box-sizing: border-box;
      border-radius: 8px;
    "
    :style="{
      marginTop: `${$vuetify.breakpoint.smAndUp ? '58px' : '26px'}`,
    }"
  >
    <v-row class="pt-8">
      <v-col cols="12" class="d-flex justify-space-between">
        <h6
          class="text-subtitle-2 text-md-h6 primary--text pl-md-6 pl-2"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            line-height: 22px;
          "
        >
          {{ budgetTitle }}
        </h6>
        <v-spacer></v-spacer>
        <p class="text-caption pr-md-6 pr-2" style="color: #16be98">
          {{ percentUsed }}% used
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h6
          class="pl-2 pl-md-6 text-subtitle-1 disabled--text"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            line-height: 16px;
            letter-spacing: 0.545455px;
          "
        >
          Budget
        </h6>
        <span
          class="pl-2 pl-md-6"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.545455px;
            color: rgba(0, 35, 56, 0.5);
          "
          ><strong>N{{ budgetAmount }}</strong></span
        >
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sparkline
            line-width="1"
            smooth="3"
            color="#2BD5AE"
            :stroke-linecap="lineCap"
            :height="height"
            :width="width"
            :value="value"
            auto-draw
          ></v-sparkline>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "budgetCard",
  props: {
    budgetTitle: {
      type: String,
      required: true,
    },
    budgetAmount: {
      type: String,
      required: true,
    },
    percentUsed: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      height: "35",
      width: "300",
      lineCap: "round",
      value: [0, 5, 3, 6, 3, 6, 3, 5, 0, 7],
    };
  },
};
</script>

<style scoped>
.first {
  margin-left: 50px;
  max-width: 400px;
}
</style>
