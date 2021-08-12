<template>
  <div>
    <div>
      <v-data-table
        dense
        :headers="headers"
        :items="inbox"
        hide-default-footer
        disable-pagination
        item-key="iD"
        width="1340"
        class="elevation-0 table-text"
      >
        <template v-slot:[`item.transactionType`]="{ item }">
          <v-chip x-small>
            {{ item.transactionType }}
          </v-chip>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inbox: [
        {
          id: 1,
          transactionType: "expense",
          amount: 300000.0,
          ref: 300000.0,
          requester: "John Bello",
          date: 45,
          status: "processing",
        },
        {
          id: 2,
          transactionType: "invoice",
          amount: 400000.0,
          ref: 400000.0,
          requester: "Emma Thomas",
          date: 45,
          status: "processed",
        },
        {
          id: 3,
          transactionType: "expense",
          amount: 100000.0,
          ref: 100000.0,
          requester: "Sussan Boma",
          date: 45,
          status: "processed",
        },
        {
          id: 4,
          transactionType: "invoice",
          amount: 250000.0,
          ref: 250000.0,
          requester: "John Bello",
          date: 45,
          status: "pending",
        },
        {
          id: 5,
          transactionType: "expense",
          amount: 150000.0,
          ref: 150000.0,
          requester: "Pat Ede",
          date: 45,
          status: "processing",
        },
        {
          id: 6,
          transactionType: "invoice",
          amount: 3000.0,
          ref: 3000.0,
          requester: "Obinna Nwafor",
          date: 45,
          status: "pending",
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
          text: "Type",
          class: "primary--text",
          value: "transactionType",
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
          text: "Requester",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "requester",
        },
        { text: "Date", class: "primary--text", value: "date" },
        { text: "Action", class: "primary--text", value: "action" },
      ],
    };
  },
};
</script>

<style scoped></style>
