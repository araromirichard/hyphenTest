<template>
  <div>
    <div>
      <v-card
        width="100%"
        flat
        class="d-flex"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
        <v-switch
          flat
          dense
          class="pl-4 mb-2"
          color="#16be98"
          v-model="autoProcess"
          label="Auto process"
        ></v-switch>
        <SendToWorkflowDialog @closeDialog="closeModal" />
        <v-chip class="mt-5" small
          ><span
            class="
              font-family:
              Inter;
              font-style:
              normal;
              font-weight:
              normal;
              font-size:
              10px;
              line-height:
              10px;
              color:
              #7F919B;
            "
          >
            {{ workflowName }}
          </span>
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn color="#2BD5AE" class="my-4 export-btn mr-9" elevation="3"
          ><span class="material-icons pr-1"> import_export </span
          ><span
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 500;
              font-size: 11px;
              line-height: 12px;
              text-align: center;
              letter-spacing: 0.636364px;
              color: #301f78;
            "
            >Export</span
          >
        </v-btn>
      </v-card>
    </div>
    <v-layout row wrap class="align-center my-2 px-8">
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 ml-2 mr-4 primary--text font-weight-bold">ID</p>
          <p class="mb-0 mx-4 primary--text font-weight-bold">Type</p>
        </div>
      </v-flex>

      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 pl-4 primary--text font-weight-bold">Amount</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Ref No.</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Staus</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
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
        v-for="invoice in filteredInvoices"
        :key="invoice.id"
        class="py-0 ma-0"
      >
        <DataTable
          :index="invoice"
          :id="invoice.id"
          :invoiceRef="invoice.ref"
          :type="invoice.type"
          :requester="invoice.requester"
          :date="invoice.date | date"
          :amount="invoice.amount"
          :status="invoice.status"
          :iconColor="invoice.status === 'processed' ? '#2BD5AE' : '#E3AA1C'"
          :chipColor="invoice.type === 'expense' ? '#F9EED2' : '#D5F7EF'"
          :textColor="invoice.type === 'expense' ? '#E3AA1C' : '#2BD5AE'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SendToWorkflowDialog from "../includes/overlays/SendToWorkflowDialog.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    SendToWorkflowDialog,
    DataTable,
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
        },
        {
          id: 2,
          type: "invoice",
          amount: 400000.0,
          ref: "#EXP084492",
          requester: "Emma Thomas",
          date: new Date(),
          status: "processed",
        },
        {
          id: 3,
          type: "expense",
          amount: 100000.0,
          ref: "#EXP084492",
          requester: "Sussan Boma",
          date: new Date(),
          status: "processed",
        },
        {
          id: 4,
          type: "invoice",
          amount: 250000.0,
          ref: "#EXP084492",
          requester: "John Bello",
          date: new Date(),
          status: "In review",
        },
        {
          id: 5,
          type: "expense",
          amount: 150000.0,
          ref: "#EXP084492",
          requester: "Pat Ede",
          date: new Date(),
          status: "review needed",
        },
        {
          id: 6,
          type: "invoice",
          amount: 3000.0,
          ref: "#EXP084492",
          requester: "Obinna Nwafor",
          date: new Date(),
          status: "pending",
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
          return invoice.requester.match(this.search);
        });
      } else return this.invoices;
    },
  },
};
</script>

<style>
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
</style>
