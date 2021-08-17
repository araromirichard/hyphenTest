<template>
  <div>
    <div>
      <v-data-table
        dense
        :headers="headers"
        :items="inbox"
        hide-default-footer
        disable-pagination
        @click="loadRoute"
        item-key="id"
        width="1340"
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
        <template v-slot:[`item.action`]="{}" class="d-flex justify-center">
          <v-btn
            @click="loadRoute"
            exact-path
            rounded
            depressed
            dark
            small
            color="#2BD5AE"
            class="text-lowercase px-2 mr-2"
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
            class="text-lowercase px-2"
            >review</v-btn
          >
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <router-link
            :to="{ name: 'Invoice', params: { id: item.id } }"
            tag="tr"
          >
            {{ item.id }}
          </router-link>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
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
    loadRoute: function (id) {
      this.$router.push({ name: "Invoice", params: { id } });
    },
  },

  // filters: {
  //   byTransType: function () {
  //     return console.log(this.item.transactionType);
  //   },
  // },
};
</script>

<style scoped></style>
