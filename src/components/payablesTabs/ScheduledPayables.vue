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
    <v-layout row wrap class="align-center my-2 px-8">
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 ml-2 mr-4 primary--text font-weight-bold">ID</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 mx-4 primary--text font-weight-bold">Approved by</p>
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
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Staus</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Payee</p>
          <v-btn class="ml-1" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div>
          <p class="mb-0 pl-md-4 primary--text font-weight-bold">Entry Date</p>
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
          v-for="(payment, i) in filteredPayments"
          :key="i"
          class="py-0 ma-0"
        >
          <PaymentTable
            :index="i"
            :id="i + 1"
            :paymentRef="payment.ref"
            :approvedBy="payment.approvedBy"
            :payee="payment.payee"
            :date="payment.date | date"
            :amount="payment.amount"
            :status="payment.status"
            :iconColor="payment.status === 'scheduled' ? '#2BD5AE' : '#E3AA1C'"
          />
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import PaymentTable from "./PaymentTable.vue";
export default {
  components: {
    PaymentTable,
  },
  data() {
    return {
      autoPlay: false,
      amount: "N2,300,000",
      Ref: "#EXP084492",
      Payee: "Emmanuel John",
      Subtotal: "172500",
      dragging: false,
      dialog: false,
      payments: [
        {
          id: 1,
          approvedBy: "John Bull",
          amount: "200,000,000",
          ref: "#EXP084492",
          payee: "John Bello",
          date: new Date(),
          status: "scheduled",
          action: "",
        },
        {
          id: 2,
          approvedBy: "Ken Chibuzor",
          amount: "2,300,000",
          ref: "#EXP084492",
          payee: "Emmanuel John",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 3,
          approvedBy: "Durosimi Paul",
          amount: "20,000,000",
          ref: "#EXP084492",
          payee: "Samuel Olawale",
          date: new Date(),
          status: "paid",
          action: "",
        },
        {
          id: 4,
          approvedBy: "Chioma Williams",
          amount: "1,200,500",
          ref: "#EXP084492",
          payee: "FIRS",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 5,
          approvedBy: "Bisi Oguntade",
          amount: "200,000,000",
          ref: "#EXP084492",
          payee: "Brain&Hammer Ltd",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 6,
          approvedBy: "Julius Obe",
          amount: "11,000,000",
          ref: "#EXP084492",
          payee: "Julius Berger",
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
    filteredPayments() {
      if (this.search) {
        return this.payments.filter((payment) => {
          return (
            payment.payee.toLowerCase().match(this.search.toLowerCase()) ||
            payment.status.toLowerCase().match(this.search.toLowerCase) ||
            payment.amount.toString().match(this.search) ||
            payment.id.toString().match(this.search)
          );
        });
      } else
        return this.payments.filter(function (payment) {
          return payment.status.match("scheduled");
        });
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
</style>
