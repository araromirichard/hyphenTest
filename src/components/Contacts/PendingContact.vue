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
        <v-spacer></v-spacer>
        <download-csv class="btn btn-default" :data="filteredPendingVendors">
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
      <v-flex md1>
        <div class="d-flex align-center pa-0 ma-0">
          <p class="mb-0 mx-1 pa-0 primary--text font-weight-bold">ID</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center pa-0 ma-0">
          <p class="mb-0 mx-1 pa-0 primary--text font-weight-bold">
            vendor Name
          </p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md1 class="d-flex flex-row">
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Hyphn Id</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Bank Account</p>
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
      <v-flex md1>
        <div class="d-flex justify-center">
          <p class="mb-0 pl-md-4 primary--text font-weight-bold">State</p>
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
          v-for="(vendor, i) in filteredPendingVendors"
          :key="i"
          class="py-0 ma-0"
        >
          <v-skeleton-loader
            :loading="isLoading"
            type="table"
            v-if="$vuetify.breakpoint.mdAndUp"
          >
            <VendorTable
              :index="i"
              :id="vendor.id"
              :bankAccount="vendor.bankaccount"
              :vendorname="vendor.vendorname"
              :hyphnId="vendor.hypn_id"
              :email="vendor.email"
              :state="vendor.state"
              :phone="vendor.phone"
            />
          </v-skeleton-loader>
          <!-- Data table for mobile -->
          <v-template v-if="$vuetify.breakpoint.smAndDown">
            <v-skeleton-loader :loading="isLoading" type="card">
              <vendorTableCard
                :index="i"
                :id="vendor.id"
                :bankAccount="vendor.bankaccount"
                :vendorname="vendor.vendorname"
                :state="vendor.state"
                :email="vendor.email"
                :phone="vendor.phone"
                :hyphnId="vendor.hypn_id"
              />
            </v-skeleton-loader>
          </v-template>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VendorTable from "./VendorTable.vue";
import vendorTableCard from "./vendorTableCard.vue";
export default {
  name: "pendingVendors",
  components: {
    VendorTable,
    vendorTableCard,
  },
  data() {
    return {
      isLoading: false,
      autoPay: false,
      amount: "N2,300,000",
      Ref: "#EXP084492",
      Payee: "Emmanuel John",
      Subtotal: "172500",
      dragging: false,
      dialog: false,
      //pendingVendors: [],
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
    ...mapGetters({
      pendingVendors: "contacts/PendingVendors",
    }),
    filteredPendingVendors() {
      if (this.search) {
        return this.pendingVendors.filter((vendor) => {
          return (
            vendor.bankaccount.toLowerCase().match(this.search.toLowerCase) ||
            vendor.email.toLowerCase().match(this.search.toLowerCase) ||
            vendor.vendorname.toString().match(this.search.toLowerCase)
          );
        });
      } else return this.pendingVendors;
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(
      () => {
        this.isLoading = false;
      },
      3000,
      this.pendingVendors
    );
    try {
      return this.$store.dispatch("contacts/fetchAllVendors");
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
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
