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
        <template v-slot:[`item.id`]="{ item }">
          <router-link
            :to="{ name: 'Invoice', params: { id: item.id } }"
            tag="tr"
          >
            <tr>
              <td>{{ item.id }}</td>
            </tr>
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
          date: 45,
          status: "processing",
        },
        {
          id: 2,
          transactionType: "invoice",
          amount: 400000.0,
          ref: "#EXP084492",
          requester: "Emma Thomas",
          date: 45,
          status: "processed",
        },
        {
          id: 3,
          transactionType: "expense",
          amount: 100000.0,
          ref: "#EXP084492",
          requester: "Sussan Boma",
          date: 45,
          status: "processed",
        },
        {
          id: 4,
          transactionType: "invoice",
          amount: 250000.0,
          ref: "#EXP084492",
          requester: "John Bello",
          date: 45,
          status: "In review",
        },
        {
          id: 5,
          transactionType: "expense",
          amount: 150000.0,
          ref: "#EXP084492",
          requester: "Pat Ede",
          date: 45,
          status: "review needed",
        },
        {
          id: 6,
          transactionType: "invoice",
          amount: 3000.0,
          ref: "#EXP084492",
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
