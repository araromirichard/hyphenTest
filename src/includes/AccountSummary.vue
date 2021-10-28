<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <v-card flat max-height="285px" min-width="100%">
          <v-card-title>
            <img
              :src="require('@/assets/cashBundle.svg')"
              style="padding: 6px"
            />
            <span class="card-title">Scheduled Payments</span>
            <v-spacer></v-spacer>
            <span class="payment-total">450,000.00</span>
          </v-card-title>
          <v-card-text
            style="min-height: 36px; background: rgba(127, 145, 155, 0.052607)"
          ></v-card-text>
          <template>
            <v-data-table
              dense
              :headers="headers"
              :items="payments"
              hide-default-footer
              disable-pagination
              item-key="referenceID"
              class="elevation-0 table-text"
            >
              <template v-slot:[`item.date`]="{ item }">
                <span>
                  {{ item.date | date }}
                </span>
              </template>
            </v-data-table>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
          date: new Date(),
        },
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: new Date(),
        },
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: new Date(),
        },
        {
          referenceId: "a151-e52924f7d2a4",
          amount: 3000.0,
          date: new Date(),
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
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */

  color: #301f78;
}

.payment-total {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */

  color: #7e69d8;
}

.table-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #7f919b;
}
</style>
