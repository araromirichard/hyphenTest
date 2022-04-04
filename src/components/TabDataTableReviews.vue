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
      <v-flex md1>
        <div class="d-flex align-center justify-center">
          <p class="mb-0 primary--text font-weight-bold text-center">ID</p>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center justify-center">
          <p class="mb-0 primary--text font-weight-bold text-center">Type</p>
        </div>
      </v-flex>

      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 pl-4 primary--text font-weight-bold">Amount</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center justify-center">
          <p class="mb-0 pl-4 primary--text font-weight-bold text-center">
            Category
          </p>
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
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Status</p>
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
        v-for="(invoice, i) in filteredInvoices"
        :key="i"
        class="py-0 ma-0"
      >
        <DataTable
          v-if="$vuetify.breakpoint.mdAndUp"
          :index="invoice.id"
          :invoiceRef="invoice.invoicenumber"
          :type="invoice.invoicetype"
          :requester="invoice.vendor.vendorname"
          :date="invoice.created_at | date"
          :amount="invoice.total"
          :status="invoice.status"
          :category="invoice.category"
          :iconColor="invoice.status === 'processed' ? '#2BD5AE' : '#E3AA1C'"
          :chipColor="invoice.invoicetype === 'expense' ? '#F9EED2' : '#D5F7EF'"
          :textColor="invoice.invoicetype === 'expense' ? '#E3AA1C' : '#2BD5AE'"
        />

        <!-- Data table for mobile -->
        <DataTableCard
          v-if="$vuetify.breakpoint.mdAndDown"
          :index="invoice.id"
          :invoiceRef="invoice.invoicenumber"
          :type="invoice.invoicetype"
          :requester="invoice.vendor.vendorname"
          :date="invoice.created_at | date"
          :amount="invoice.total"
          :status="invoice.status"
          :category="invoice.category"
          :chipColor="invoice.invoicetype === 'expense' ? '#2BD5AE' : '#E3AA1C'"
          :statusColor="invoice.status === 'processed' ? '#2BD5AE' : '#E3AA1C'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";
import DataTableCard from "./DataTableCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    DataTable,
    DataTableCard,
  },
  data() {
    return {
      autoProcess: true,
      search: "",
      selectedRows: [],
      sendToWorkflow: true,
      workflowName: "workflow name…",
<<<<<<< HEAD
=======
     
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
    };
  },
  methods: {
    closeModal(e) {
      this.dialog = false;
      this.workflowName = e;
      console.log(e);
    },

    // alert(item) {
    //   alert("Hello " + item.name);
    // },
    setSearchText(value) {
      this.search = value;
    },
  },
  computed: {
    ...mapState({
      allInvoices: "invoices",
    }),
    filteredInvoices() {
      if (this.search) {
        return this.allInvoices.allInvoices.filter((invoice) => {
          return invoice.requester.match(this.search);
        });
      } else
        return this.allInvoices.allInvoices.filter(function (invoice) {
          //return invoice.status.includes("review");
          if (invoice.status == "review") {
            return invoice;
          }
        });
    },
  },
};
</script>

<style scoped></style>
