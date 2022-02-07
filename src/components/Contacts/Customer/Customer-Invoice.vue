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
    <v-layout
      row
      wrap
      class="align-center my-2 px-8"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-flex md1>
        <div class="d-flex align-center pa-0 ma-0">
          <p class="mb-0 mx-1 pa-0 primary--text font-weight-bold">ID</p>
        </div>
      </v-flex>
      <v-flex md3 class="d-flex flex-row">
        <div class="d-flex align-center">
          <p class="mb-0 ml-4 primary--text font-weight-bold">Reference No.</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Status</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Due Date</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md4>
        <div class="d-flex justify-center">
          <p class="mb-0 pl-md-4 primary--text font-weight-bold">
            Amount Outstanding (N)
          </p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-row>
        <v-col
          cols="12"
          v-for="(invoice, i) in customerInvoices"
          :key="i"
          class="py-0 ma-0"
        >
          <customerInvoiceCard
            v-if="$vuetify.breakpoint.mdAndUp"
            :index="i"
            :id="i + 1"
            :outstanding="invoice.outstanding"
            :RefNumber="invoice.ref"
            :status="invoice.status"
            :dueDate="invoice.date | date"
            :iconColor="invoice.iconColor"
          />
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import CustomerInvoiceCard from "./CustomerInvoiceCard.vue";
//import ContactTableCard from "./PayableTableCard.vue";
//import { mapActions } from "vuex";
export default {
  name: "Customer-Invoice",
  components: {
    CustomerInvoiceCard,
    //ContactTableCard,
  },
  data() {
    return {
      dialog: false,
      customerInvoices: [
        {
          id: 1,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "due",
          iconColor: "#2BD5AE",
        },
        {
          id: 1,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "due",
          iconColor: "#2BD5AE",
        },
        {
          id: 1,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "paid",
          iconColor: "#2BD5AE",
        },
        {
          id: 2,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "due",
          iconColor: "#2BD5AE",
        },
        {
          id: 3,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "sent",
          iconColor: "#2BD5AE",
        },
        {
          id: 4,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "paid",
          iconColor: "#2BD5AE",
        },
        {
          id: 5,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "sent",
          iconColor: "#2BD5AE",
        },
        {
          id: 6,
          outstanding: "3,495,900",
          ref: "Hyp-29484033",
          date: new Date(),
          status: "due",
          iconColor: "#2BD5AE",
        },
      ],
    };
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
  font-size: 12px !important;
  display: inline-block !important;
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
