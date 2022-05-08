<template>
  <div>
    <div>
      <v-card
        height="60px"
        width="100%"
        flat
        class="d-flex mb-8 mb-md-0 align-center"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
        <v-spacer></v-spacer>
        <download-csv class="btn btn-default" :data="filteredCustomers">
          <v-hover v-slot="{ hover }">
            <v-btn
              outlined
              @click="alertCSVDownload"
              color="primary"
              class="my-4 export-btn mr-2 mr-md-9 hover-btn"
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
                  line-height: 12px;
                  text-align: center;
                  letter-spacing: 0.636364px;
                "
                :style="{
                  fontSize: `${
                    $vuetify.breakpoint.mdAndDown ? '9  px' : '11px'
                  }`,
                }"
                >Export</span
              >
            </v-btn>
          </v-hover>
        </download-csv>
      </v-card>
    </div>
    <v-layout
      row
      wrap
      class="align-center my-2 px-8"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-flex md2>
        <div class="d-flex align-center pa-0 ma-0">
          <p class="mb-0 mx-1 pa-0 primary--text font-weight-bold">ID</p>
          <p class="mb-0 ml-4 primary--text font-weight-bold">Company</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2 class="d-flex flex-row">
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">First Name</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
        <div class="d-flex align-center">
          <p class="mb-0 pl-4 primary--text font-weight-bold">Last Name</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Due</p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Email</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Phone</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex justify-center">
          <p class="mb-0 pl-md-4 primary--text font-weight-bold">
            Outstanding (N)
          </p>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex justify-center align-center">
          <p class="mb-0 pl-md-8 primary--text font-weight-bold">Actions</p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-row>
        <v-col
          cols="12"
          v-for="(customer, i) in filteredCustomers"
          :key="i"
          class="py-0 ma-0"
        >
          <ContactTable
            v-if="$vuetify.breakpoint.mdAndUp"
            :index="i"
            :id="i + 1"
            :company="customer.company"
            :firstName="customer.firstName"
            :lastName="customer.lastName"
            :due="customer.due"
            :email="customer.email"
            :phone="customer.phone"
            :outstanding="customer.outstanding"
          />

          <!-- Data table for mobile -->
          <ContactTableCard
            v-if="$vuetify.breakpoint.smAndDown"
            :index="i"
            :id="i + 1"
            :company="customer.company"
            :firstName="customer.firstName"
            :lastName="customer.lastName"
            :due="customer.due"
            :email="customer.email"
            :phone="customer.phone"
            :outstanding="customer.outstanding"
          />
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import ContactTable from "./ContactTable.vue";

import { mapActions } from "vuex";
import ContactTableCard from "./ContactTableCard.vue";
export default {
  name: "CustomersContact",
  components: {
    ContactTable,
    ContactTableCard,
    //ContactTableCard,
  },
  data() {
    return {
      dialog: false,
      customers: [
        {
          id: 1,
          company: "Run Town Energy",
          firstName: "Random",
          lastName: "Joe",
          due: 4,
          email: "null@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
        {
          id: 2,
          company: "Okumu Oil Palm",
          firstName: "Better",
          lastName: "Human",
          due: 1,
          email: "nulleeee@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
        {
          id: 3,
          company: "Zapphaire events",
          firstName: "Old",
          lastName: "Soul",
          due: 4,
          email: "null@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
        {
          id: 4,
          company: "Run Town Energy",
          firstName: "Random",
          lastName: "Joe",
          due: 4,
          email: "null@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
        {
          id: 1,
          company: "Run Town Energy",
          firstName: "Random",
          lastName: "Joe",
          due: 4,
          email: "null@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
        {
          id: 5,
          company: "Run Town Energy",
          firstName: "Random",
          lastName: "Joe",
          due: 4,
          email: "null@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
        {
          id: 6,
          company: "Run Town Energy",
          firstName: "Random",
          lastName: "Joe",
          due: 4,
          email: "null@mailinator.com",
          phone: "+2348029293938",
          outstanding: "3,495,900",
          action: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
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
    filteredCustomers() {
      if (this.search) {
        return this.customers.filter((customer) => {
          return (
            customer.company.toLowerCase().match(this.search.toLowerCase()) ||
            customer.email.toLowerCase().match(this.search.toLowerCase()) ||
            customer.lastName.toLowerCase().match(this.search.toLowerCase()) ||
            customer.firstName.toLowerCase().match(this.search.toLowerCase())
          );
        });
      } else return this.customers;
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
