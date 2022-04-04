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
        <v-switch
          flat
          dense
          class="pl-4 mb-2"
          color="#16be98"
          v-model="autoPay"
          label="Auto pay"
        ></v-switch>
      </v-card>
    </div>
    <v-layout
      row
      wrap
      class="align-center my-2 px-8"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 ml-2 mr-4 primary--text font-weight-bold">ID</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 mx-2 primary--text font-weight-bold">Customer</p>
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
          <p class="mb-0 primary--text font-weight-bold">Bank</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Order Ref</p>
        </div>
      </v-flex>

      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Tag</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>

      <v-flex md1>
        <div>
          <p class="mb-0 pl-md-1 primary--text font-weight-bold">Entry Date</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 pl-md-8 primary--text font-weight-bold">Actions</p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-row>
        <v-col
          cols="12"
          v-for="(Receivables, i) in filteredReceivables"
          :key="i"
          class="py-0 ma-0"
        >
          <ReceivableTable
            v-if="$vuetify.breakpoint.mdAndUp"
            :index="i"
            :id="i + 1"
            :paymentRef="Receivables.ref"
            :customer="Receivables.customer"
            :tag="Receivables.tag"
            :date="Receivables.date | date"
            :amount="Receivables.amount"
            :status="Receivables.status"
          />
          <!-- Data table for mobile -->
          <ReceivablesTableCard
            v-if="$vuetify.breakpoint.smAndDown"
            :index="i"
            :id="i + 1"
            :paymentRef="Receivables.ref"
            :customer="Receivables.customer"
            :tag="Receivables.tag"
            :date="Receivables.date | date"
            :amount="Receivables.amount"
            :status="Receivables.status"
          />
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import ReceivablesTableCard from "./ReceivablesTableCard.vue";
import ReceivableTable from "./ReceivableTable.vue";
export default {
  components: {
    ReceivableTable,
    ReceivablesTableCard,
  },
  data() {
    return {
      autoPay: false,
      amount: "N2,300,000",
      Ref: "#EXP084492",
      tag: "Emmanuel John",
      Subtotal: "172500",
      dragging: false,
      dialog: false,
      receivables: [
        {
          id: 1,
          customer: "John Bull",
          amount: "200,000,000",
          ref: "#EXP084492",
          tag: "John Bello",
          date: new Date(),
          status: "paid",
          action: "",
        },
        {
          id: 2,
          customer: "Ken Chibuzor",
          amount: "2,300,000",
          ref: "#EXP084492",
          tag: "Emmanuel John",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 3,
          customer: "Durosimi Paul",
          amount: "20,000,000",
          ref: "#EXP084492",
          tag: "Samuel Olawale",
          date: new Date(),
          status: "paid",
          action: "",
        },
        {
          id: 4,
          customer: "Chioma Williams",
          amount: "1,200,500",
          ref: "#EXP084492",
          tag: "FIRS",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 5,
          customer: "Bisi Oguntade",
          amount: "200,000,000",
          ref: "#EXP084492",
          tag: "Brain&Hammer Ltd",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 6,
          customer: "Julius Obe",
          amount: "11,000,000",
          ref: "#EXP084492",
          tag: "Julius Berger",
          date: new Date(),
          status: "pending",
          action: "",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
      // this.workflowName = e;
      // console.log(e);
    },
    onDroppedFiles($event) {
      this.dragging = false;
      let files = [...$event.dataTransfer.items]
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile());

      console.table(files);
    },
    setSearchText(value) {
      this.search = value;
    },
  },
  computed: {
    filteredReceivables() {
      if (this.search) {
        return this.receivables.filter((Receivables) => {
          return (
            Receivables.tag.toLowerCase().match(this.search.toLowerCase()) ||
            Receivables.status.toLowerCase().match(this.search.toLowerCase) ||
            Receivables.amount.toString().match(this.search) ||
            Receivables.id.toString().match(this.search)
          );
        });
      } else return this.receivables;
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
