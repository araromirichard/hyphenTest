<template>
  <div>
    <div>
      <v-card
        height="60px"
        width="100%"
        flat
        class="d-flex"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
      </v-card>
    </div>
    <v-layout>
      <v-data-table
        dense
        :headers="headers"
        :items="inbox"
        hide-default-footer
        disable-pagination
        item-key="id"
        width="1340px"
        class="elevation-0 table-text"
      >
        <!-- <template v-slot:[`item.id`]="{ item }"> </template> -->
        <template v-slot:[`item.transactionType`]="{ item }">
          <v-chip
            :color="`${
              item.transactionType === 'expense' ? '#F9EED2' : '#D5F7EF'
            }`"
            :text-color="`${
              item.transactionType === 'expense' ? '#E3AA1C' : '#2BD5AE'
            }`"
            x-small
          >
            {{ item.transactionType }}
          </v-chip>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div class="d-flex">
            <v-icon
              small
              :color="`${item.status === 'processed' ? '#2BD5AE' : '#E3AA1C'}`"
            >
              mdi-circle-medium
            </v-icon>
            <span>
              {{ item.status }}
            </span>
          </div>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          <span>
            {{ item.date | date }}
          </span>
        </template>
        <template v-slot:[`item.action`]="{}">
          <div class="d-flex">
            <v-btn
              exact-path
              rounded
              depressed
              dark
              small
              color="#2BD5AE"
              class="text-lowercase px-2 my-1 mr-2"
              style="color: #311b92"
            >
              view
            </v-btn>
            <v-btn
              rounded
              depressed
              dark
              small
              color="#311B92"
              class="text-lowercase px-2 my-1"
              >review</v-btn
            >
          </div>
        </template>
      </v-data-table>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoProcess: true,
      inbox: [
        {
          id: 1,
          transactionType: "expense",
          amount: 300000.0,
          ref: "#EXP084492",
          requester: "John Bello",
          date: new Date(),
          status: "processing",
          action: "",
        },
        {
          id: 2,
          transactionType: "invoice",
          amount: 400000.0,
          ref: "#EXP084492",
          requester: "Emma Thomas",
          date: new Date(),
          status: "processed",
          action: "",
        },
        {
          id: 3,
          transactionType: "expense",
          amount: 100000.0,
          ref: "#EXP084492",
          requester: "Sussan Boma",
          date: new Date(),
          status: "processed",
          action: "",
        },
        {
          id: 4,
          transactionType: "invoice",
          amount: 250000.0,
          ref: "#EXP084492",
          requester: "John Bello",
          date: new Date(),
          status: "In review",
          action: "",
        },
        {
          id: 5,
          transactionType: "expense",
          amount: 150000.0,
          ref: "#EXP084492",
          requester: "Pat Ede",
          date: new Date(),
          status: "review needed",
          action: "",
        },
        {
          id: 6,
          transactionType: "invoice",
          amount: 3000.0,
          ref: "#EXP084492",
          requester: "Obinna Nwafor",
          date: new Date(),
          status: "pending",
          action: "",
        },
      ],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          class: "primary--text",
          value: "id",
        },
        {
          text: "Approved by",
          class: "primary--text",
          value: "approvedBy",
        },
        {
          text: "Amount",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "amount",
        },
        {
          text: "Currency",
          class: "primary--text",
          value: "currency",
        },
        {
          text: "Ref no.",
          class: "primary--text",
          value: "ref",
        },
        {
          text: "Status",
          class: "primary--text",
          value: "status",
        },
        {
          text: "Payee",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "payee",
        },
        { text: "Entry Date", class: "primary--text", value: "date" },
        {
          text: "Action",
          class: "primary--text",
          value: "action",
          sortable: false,
          align: "center",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.switch-card {
  height: 53px;
  background: rgba(127, 145, 155, 0.052607);
}

.switch {
  width: 15.28px;
  height: 15.28px;
}

.export-btn {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.636364px;

  color: #301f78;
}
i.sli-font {
  font-size: 12px;
  display: inline-block;
}
.material-icons {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #301f78;
}
</style>
