<template>
  <div>
    <div>
      <v-card
        height="60px"
        width="100%"
        flat
        class="d-flex align-center"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
        <v-spacer></v-spacer>
        <download-csv class="btn btn-default" :data="filteredVendors">
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
          <p class="mb-0 mx-1 pa-0 primary--text font-weight-bold">vendor</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2 class="d-flex flex-row">
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Ref</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Open Balance</p>
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
      <!-- <v-flex md1>
        <div class="d-flex justify-center">
          <p class="mb-0 pl-md-4 primary--text font-weight-bold">State</p>
        </div>
      </v-flex> -->
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
          v-for="(vendor, i) in filteredVendors"
          :key="i"
          class="py-0 ma-0"
        >
          <VendorTable
            v-if="$vuetify.breakpoint.mdAndUp"
            :index="i"
            :id="vendor.id"
            :hyphnId="vendor.hypn_id"
            :vendorname="vendor.vendorname"
            :bankAccount="vendor.bankaccount"
            :email="vendor.email"
            :phone="vendor.phone"
            :state="vendor.state"
          />
          <!-- Data table for mobile -->
          <vendorTableCard
            v-if="$vuetify.breakpoint.smAndDown"
            :index="i"
            :id="vendor.id"
            :hyphnId="vendor.hypn_id"
            :vendorname="vendor.vendorname"
            :state="vendor.state"
            :email="vendor.email"
            :phone="vendor.phone"
            :bankAccount="vendor.bankaccount"
          />
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import VendorTable from "./VendorTable.vue";
import vendorTableCard from "./vendorTableCard.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "vendorsContact",
  components: {
    VendorTable,
    vendorTableCard,
  },
  data() {
    return {
      dialog: false,
      //vendors: [],
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
    ...mapGetters({
      vendors: "contacts/getAllVendors",
    }),
    filteredVendors() {
      if (this.search) {
        return this.vendors.filter((vendor) => {
          return (
            vendor.bankaccount.toLowerCase().match(this.search.toLowerCase()) ||
            vendor.email.toLowerCase().match(this.search.toLowerCase()) ||
            vendor.vendorname.toLowerCase().match(this.search.toLowerCase())
          );
        });
      } else return this.vendors;
    },
  },

  async mounted() {
    try {
      return await this.$store.dispatch("contacts/fetchAllVendors");
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
