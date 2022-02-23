<template>
  <div>
    <div>
      <v-card
        width="100%"
        min-height="70px"
        flat
        class="d-flex"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
      </v-card>
    </div>
    <v-layout
      row
      wrap
      class="align-center my-2 px-8"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 ml-2 mr-4 primary--text font-weight-bold">ID</p>
          <p class="mb-0 mx-4 primary--text font-weight-bold">Type</p>
        </div>
      </v-flex>

      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Amount</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center justify-center">
          <p class="mb-0 primary--text font-weight-bold">Exception</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Ref No.</p>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Status</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Requester</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div>
          <p class="mb-0 pl-md-4 primary--text font-weight-bold">Date</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 pl-md-8 primary--text font-weight-bold">Actions</p>
        </div>
      </v-flex>
    </v-layout>
    <v-row>
      <v-col
        cols="12"
        v-for="(invoice, i) in filteredInvoices"
        :key="i"
        class="py-0 ma-0"
      >
        <ExceptionTable
          v-if="$vuetify.breakpoint.mdAndUp"
          :index="i"
          :id="i + 1"
          :invoiceRef="invoice.ref"
          :type="invoice.type"
          :requester="invoice.requester"
          :exception="invoice.exception"
          :date="invoice.date | date"
          :amount="invoice.amount"
          :status="invoice.status"
          :textColor="invoice.type === 'expense' ? '#E3AA1C' : '#2BD5AE'"
        />

        <!-- Data table for mobile -->

        <ExceptionTableCard
          v-else
          :index="i"
          :id="i + 1"
          :invoiceRef="invoice.ref"
          :type="invoice.type"
          :requester="invoice.requester"
          :date="invoice.date | date"
          :amount="invoice.amount"
          :status="invoice.status"
          :exception="invoice.exception"
          :chipColor="invoice.type === 'expense' ? '#2BD5AE' : '#E3AA1C'"
          :statusColor="invoice.status === 'processed' ? '#2BD5AE' : '#E3AA1C'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import DataTable from "./DataTable.vue";
import ExceptionTable from "./ExceptionTable.vue";
import ExceptionTableCard from "./ExceptionTableCard.vue";
export default {
  components: {
    //DataTable,
    ExceptionTable,
    ExceptionTableCard,
  },
  data() {
    return {
      autoProcess: true,
      search: "",
      selectedRows: [],
      sendToWorkflow: true,
      workflowName: "workflow name…",
      invoices: [
        {
          id: 1,
          type: "expense",
          amount: 300000.0,
          ref: "#EXP084492",
          requester: "John Bello",
          date: new Date(),
          status: "processing",
          exception: "2",
        },
        {
          id: 2,
          type: "invoice",
          amount: 400000.0,
          ref: "#EXP084492",
          requester: "Emma Thomas",
          date: new Date(),
          status: "processed",
          exception: "4",
        },
        {
          id: 3,
          type: "expense",
          amount: 100000.0,
          ref: "#EXP084492",
          requester: "Sussan Boma",
          date: new Date(),
          status: "processed",
          exception: "2",
        },
        {
          id: 4,
          type: "invoice",
          amount: 250000.0,
          ref: "#EXP084492",
          requester: "John Bello",
          date: new Date(),
          status: "In review",
          exception: "3",
        },
        {
          id: 5,
          type: "expense",
          amount: 150000.0,
          ref: "#EXP084492",
          requester: "Pat Ede",
          date: new Date(),
          status: "review needed",
          exception: "1",
        },
        {
          id: 6,
          type: "invoice",
          amount: 3000.0,
          ref: "#EXP084492",
          requester: "Obinna Nwafor",
          date: new Date(),
          status: "pending",
          exception: "3",
        },
      ],
    };
  },
  methods: {
    closeModal(e) {
      this.dialog = false;
      this.workflowName = e;
      console.log(e);
    },

    alert(item) {
      alert("Hello " + item.name);
    },
    setSearchText(value) {
      this.search = value;
    },
  },
  computed: {
    filteredInvoices() {
      if (this.search) {
        return this.invoices.filter((invoice) => {
          invoice.requester.toLowerCase().match(this.search.toLowerCase()) ||
            invoice.status.toLowerCase().match(this.search.toLowerCase) ||
            invoice.amount.toString().match(this.search) ||
            invoice.exception.toString().match(this.search);
        });
      } else return this.invoices;
    },
  },
};
</script>

<style scoped></style>
