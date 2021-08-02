<template>
  <div>
    <div>
      <v-card flat height="275px">
        <v-card-title>
          <img :src="require('@/assets/cashBundle.svg')" style="padding: 6px" />
          <span class="card-title">Scheduled Payments</span>
          <v-spacer></v-spacer>
          <span class="payment-total">450,000.00</span>
        </v-card-title>
        <v-data-table
          dense
          :headers="headers"
          :items="payments"
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
  name: "AccountSummary",
  data() {
    return {
      payments: [
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: 45,
        },
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: 45,
        },
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: 45,
        },
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: 45,
        },
      ],
      headers: [
        {
          text: "Reference",
          align: "start",
          sortable: false,
          value: "referenceId",
        },
        { text: "Amount", value: "amount" },
        { text: "Date", value: "date" },
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
