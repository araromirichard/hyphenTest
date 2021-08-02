<template>
  <div>
    <div>
      <v-card flat>
        <v-card-title>
          <img :src="require('@/assets/Opp-arrows.svg')" style="padding: 6px" />
          <span class="card-title">Recent Processes</span>
          <v-spacer></v-spacer>
          <span class="payment-total">view all</span>
        </v-card-title>
        <v-data-table
          dense
          :headers="headers"
          :items="recentProcess"
          hide-default-footer
          disable-pagination
          item-key="referenceID"
          class="elevation-0 table-text"
        >
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentProcessTable",
  data() {
    return {
      recentProcess: [
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payment for cloud Services",
          amount: 23000.0,
          status: "Proceed",
          type: "Invoice",
          budget: "marketing",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payment for cloud Services",
          amount: 23000.0,
          status: "Proceed",
          type: "Invoice",
          budget: "marketing",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payment for cloud Services",
          amount: 23000.0,
          status: "Proceed",
          type: "Invoice",
          budget: "marketing",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payment for cloud Services",
          amount: 23000.0,
          status: "Proceed",
          type: "Invoice",
          budget: "marketing",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payment for cloud Services",
          amount: 23000.0,
          status: "Proceed",
          type: "Invoice",
          budget: "marketing",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payment for cloud Services",
          amount: 23000.0,
          status: "Proceed",
          type: "Invoice",
          budget: "marketing",
        },
      ],
      headers: [
        {
          text: "Reference",
          align: "start",
          sortable: false,
          value: "referenceId",
        },
        { text: "Description", value: "description" },
        { text: "Amount", value: "amount" },
        { text: "Status", value: "status" },
        { text: "Type", value: "type" },
        { text: "Budget", value: "budget" },
      ],
    };
  },
};
</script>

<style scoped>
.card-title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #301f78;
}

.payment-total {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #7e69d8;
}

.table-text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #7f919b;
}
</style>
