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
          <v-icon
            small
            :color="`${item.status === 'processed' ? '#2BD5AE' : '#E3AA1C'}`"
          >
            mdi-circle-medium
          </v-icon>
          <span>
            {{ item.status }}
          </span>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          <span>
            {{ item.date | date }}
          </span>
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
          date: new Date(),
          status: "processing",
        },
        {
          id: 2,
          transactionType: "invoice",
          amount: 400000.0,
          ref: 400000.0,
          requester: "Emma Thomas",
          date: new Date(),
          status: "processed",
        },
        {
          id: 3,
          transactionType: "expense",
          amount: 100000.0,
          ref: 100000.0,
          requester: "Sussan Boma",
          date: new Date(),
          status: "processed",
        },
        {
          id: 4,
          transactionType: "invoice",
          amount: 250000.0,
          ref: 250000.0,
          requester: "John Bello",
          date: new Date(),
          status: "pending",
        },
        {
          id: 5,
          transactionType: "expense",
          amount: 150000.0,
          ref: 150000.0,
          requester: "Pat Ede",
          date: new Date(),
          status: "processing",
        },
        {
          id: 6,
          transactionType: "invoice",
          amount: 3000.0,
          ref: 3000.0,
          requester: "Obinna Nwafor",
          date: new Date(),
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

<style>
.active {
  color: #311b92;
}
tbody tr:nth-of-type(odd) {
  background-color: #f8f9fc;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row) {
  border-bottom: none;
}
table td,
table th {
  height: 40px;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: none;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  padding: 0 36px;
  transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.pageTitle {
  margin-top: 25px;
  margin-bottom: 7px;
  margin-left: 42px;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.45px;
  color: #311b92;
}

.pageDespt {
  margin-bottom: 27px;
  margin-left: 42px;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: #7f919b;
}
</style>
