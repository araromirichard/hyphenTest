<template>
  <div>
    <div class="container--fluid">
      <v-card flat>
        <v-card-title>
          <img :src="require('@/assets/Opp-arrows.svg')" style="padding: 8px" />
          <span class="card-title">Recent Processes</span>
          <v-spacer></v-spacer>
          <v-btn plain class="pr-8 text-capitalize"
            ><span class="payment-total">view all</span></v-btn
          >
        </v-card-title>
        <v-card-text
          style="height: 36px; background: rgba(127, 145, 155, 0.052607)"
        ></v-card-text>
        <v-data-table
          dense
          :headers="headers"
          :items="recentProcess"
          hide-default-footer
          disable-pagination
          item-key="referenceID"
          class="elevation-0 table-text"
        >
          <template v-slot:[`item.budget`]="{ item }">
            <v-chip class="px-4" color="#F9EED2" text-color="#E3AA1C" x-small>
              {{ item.budget }}
            </v-chip>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <v-icon
              small
              :color="`${item.status === 'processed' ? '#E3AA1C' : '#2BD5AE'}`"
            >
              mdi-circle-medium
            </v-icon>
            <span>
              {{ item.status }}
            </span>
          </template>
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
          status: "Processed",
          type: "Invoice",
          budget: "marketing",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Payroll for may",
          amount: 23000.0,
          status: "Processing",
          type: "Invoice",
          budget: "payroll",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Bootcamp for HR department",
          amount: 23000.0,
          status: "Processed",
          type: "Invoice",
          budget: "office",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "New work desk supply",
          amount: 23000.0,
          status: "In review",
          type: "Invoice",
          budget: "material",
        },
        {
          referenceId: "a151-e52924f7d2a4",
          description: "Training for sales team",
          amount: 23000.0,
          status: "Processed",
          type: "Invoice",
          budget: "material",
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
