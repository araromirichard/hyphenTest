<template>
  <div>
    <v-container class="pa-0">
      <div>
        <v-card
          v-if="$vuetify.breakpoint.mdAndUp"
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
          <SendToWorkflowDialog
            @closeDialog="closeModal"
            :tValue="switchState"
          />
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
          <download-csv class="btn btn-default" :data="filteredInvoices">
            <v-hover v-slot="{ hover }">
              <v-btn
                outlined
                @click="alertCSVDownload"
                color="primary"
                class="my-4 export-btn mr-9 hover-btn"
                :style="{
                  'background-color': hover ? '#2bd5ae' : '',
                  border: hover ? 'none' : '',
                }"
                elevation="2"
                ><span class="material-icons pr-1"> import_export </span
                ><span
                  class="primary--text"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 11px;
                    line-height: 12px;
                    text-align: center;
                    letter-spacing: 0.636364px;
                  "
                  >Export</span
                >
              </v-btn>
            </v-hover>
          </download-csv>
        </v-card>
        <div
          v-if="$vuetify.breakpoint.mdAndDown"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="py-3 ma-0 text-subtitle-1 text-center primary--text">
            {{ workflowName }}
          </div>
          <div class="pa-0 ma-0 d-flex justify-center align-center">
            <v-checkbox
              class="pl-2 mb-0 py-0"
              color="#16be98"
              v-model="autoProcess"
            >
              <template v-slot:label>
                <span class="mb-0 py-0" style="font-size: 12px"
                  >Auto process</span
                >
              </template>
            </v-checkbox>
            <SendToWorkflowDialog
              @closeDialog="closeModal"
              :tValue="switchState"
            />
          </div>
        </div>
      </div>

      <!-- inbox tabs for desktop screens -->
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
          class="py-0 ma-md-0"
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
            :textColor="invoice.invoicetype === 'expense' ? '#E3AA1C' : '#2BD5AE'"
          />

          <!-- Data table for mobile -->
          <DataTableCard
            v-if="$vuetify.breakpoint.smAndDown"
            :index="invoice.id"
            :invoiceRef="invoice.invoicenumber"
            :type="invoice.invoicetype"
            :requester="invoice.vendor.vendorname"
            :date="invoice.created_at | date"
            :amount="invoice.total"
            :status="invoice.status"
            :category="invoice.category"
            :chipColor="invoice.type === 'expense' ? '#2BD5AE' : '#E3AA1C'"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SendToWorkflowDialog from "../includes/overlays/SendToWorkflowDialog.vue";
import DataTable from "./DataTable.vue";
import DataTableCard from "./DataTableCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    SendToWorkflowDialog,
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
      switchState: false,
      
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeModal(e) {
      if (e) {
        //this.dialog = true;
        this.switchState = true;
      } else this.switchState = false;
      this.dialog = false;
      this.workflowName = e;
      console.log(e);
    },
    setSearchText(value) {
      this.search = value;
    },
    alertCSVDownload() {
      this.showToast({
        sclass: "success",
        show: true,
        message: "CSV downloaded!",
        timeout: 3000,
      });
    },
  },
  computed: {
    ...mapState({
      organization: "organization",
      formCards: "formBuilder",
      allInvoices: "invoices",
    }),
    // ...mapGetters({
    // }),
    filteredInvoices() {
      if (this.search) {
        return this.allInvoices.allInvoices.filter((invoice) => {
          return (
            invoice.requester.toLowerCase().match(this.search.toLowerCase()) ||
            invoice.status.toLowerCase().match(this.search.toLowerCase) ||
            invoice.amount.toString().match(this.search)
          );
        });
      } else {
        return this.allInvoices.allInvoices;
      }
    },
  },
};
</script>

<style>
.v-input__slot {
  margin-bottom: 0px;
}
.switch-card {
  height: 53px;
  background: rgba(127, 145, 155, 0.052607);
}

.switch {
  width: 15.28px;
  height: 15.28px;
}

hover-btn:hover {
  background-color: lightseagreen;
  color: midnightblue;
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
