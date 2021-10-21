<template>
  <v-card
    outlined
    height="166"
    style="
      margin-top: 58px;
      background: #ffffff;
      border: 1px solid rgba(48, 31, 120, 0.07);
      box-sizing: border-box;
      border-radius: 8px;
    "
  >
    <div class="d-flex flex-row" style="padding-left: 25px; padding-top: 30px">
      <h6
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          color: #301f78;
        "
      >
        {{ budgetTitle }}
      </h6>
      <v-spacer></v-spacer>
      <p
        style="
          padding-right: 25px;
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.545455px;
          color: #16be98;
        "
      >
        {{ percentUsed }}% used
      </p>
    </div>
    <h6
      class="pl-6"
      style="
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.545455px;
        color: rgba(0, 35, 56, 0.5);
      "
    >
      Budget
    </h6>
    <span
      class="pl-6"
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
    <div style="padding-left: 25px; padding-bottom: 32px">
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
    </div>
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
      width: "200",
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
