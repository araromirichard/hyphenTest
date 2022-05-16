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
      <v-flex md1>
        <div class="d-flex align-center pa-0 ma-0">
          <p class="mb-0 mx-1 pa-0 primary--text font-weight-bold">Company</p>
          <v-btn class="" color="grey lighten-1" icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex md2 class="d-flex flex-row">
        <div class="d-flex align-center">
          <p class="mb-0 primary--text font-weight-bold">Name</p>
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
          v-for="(vendor, i) in filteredVendors"
          :key="i"
          class="py-0 ma-0"
        >
          <VendorTable
            v-if="$vuetify.breakpoint.mdAndUp"
            :index="i"
            :id="vendor.id"
            :company="
              vendor.organization[Object.keys(vendor.organization)].company
                .company_name
            "
            :name="vendor.vendorname"
            :due="vendor.due"
            :email="vendor.email"
            :phone="vendor.phone"
            :outstanding="vendor.outstanding"
          />
          <!-- Data table for mobile -->
          <vendorTableCard
            v-if="$vuetify.breakpoint.smAndDown"
            :index="i"
            :id="vendor.id"
            :company="
              vendor.organization[Object.keys(vendor.organization)].company
                .company_name
            "
            :name="vendor.vendorname"
            :due="vendor.due"
            :email="vendor.email"
            :phone="vendor.phone"
            :outstanding="vendor.outstanding"
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
  // {
  //       "id": 4,
  //       "vendorname": "GigaLayer",
  //       "email": "samson.aligba@gmail.com",
  //       "address": null,
  //       "city": null,
  //       "state": null,
  //       "zip": null,
  //       "bankname": null,
  //       "bankaccount": null,
  //       "currency": null,
  //       "pbotid": "hypnfcwjvo8",
  //       "verified": false,
  //       "taxid": null,
  //       "user": {
  //           "id": 1,
  //           "username": "ironmonkey",
  //           "email": "ironmonk@mail.com",
  //           "provider": "local",
  //           "confirmed": true,
  //           "blocked": null,
  //           "role": 1,
  //           "organization": 2,
  //           "token": 1,
  //           "phone": null,
  //           "first_name": "Lagbaja",
  //           "last_name": "Okon",
  //           "created_at": "2022-02-28T08:43:19.659Z",
  //           "updated_at": "2022-03-09T11:47:10.926Z"
  //       },
  //       "routingnum": null,
  //       "terms": null,
  //       "apply_tax": true,
  //       "approved": null,
  //       "category": null,
  //       "created_at": "2022-05-09T08:37:40.988Z",
  //       "updated_at": "2022-05-09T08:37:41.188Z",
  //       "hypn_id": "hypnfcwjvo8",
  //       "WHT": {
  //           "id": 4,
  //           "vendor_type": "Company",
  //           "Category": "Consultancy"
  //       },
  //       "invoices": [],
  //       "organization": [
  //           {
  //               "id": 2,
  //               "orgname": "Kalokalo",
  //               "multitenant": false,
  //               "token": 1,
  //               "current_plan_ends": null,
  //               "plan_id": null,
  //               "vendor": 4,
  //               "setting": null,
  //               "year_start": null,
  //               "year_end": null,
  //               "hypn_id": "9Q9_d1646037825805",
  //               "created_at": "2022-02-28T08:43:45.819Z",
  //               "updated_at": "2022-05-09T09:00:31.697Z",
  //               "accounting_software": null,
  //               "parent": null,
  //               "company": {
  //                   "id": 2,
  //                   "company_name": "Kalokalo",
  //                   "registration_number": "12365479",
  //                   "country": "Nigeria",
  //                   "registration_doc": null
  //               },
  //               "office": [
  //                   {
  //                       "id": 5,
  //                       "address": "14, Kajola Road, Off Uwelu ",
  //                       "state": "Lagos",
  //                       "city": "Lekki",
  //                       "country": "Nigeria",
  //                       "postcode": 110245
  //                   }
  //               ],
  //
  //               "wallet_provider": [],
  //
  //                   "hash": "test_Logo_aa3f529d59",
  //                   "ext": ".png",
  //                   "mime": "image/png",
  //                   "size": 48.23,
  //                   "url": "https://hypn-imgs.s3.eu-west-1.amazonaws.com/test_Logo_aa3f529d59.png",
  //                   "previewUrl": null,
  //                   "provider": "aws-s3",
  //                   "provider_metadata": null,
  //                   "created_at": "2022-04-21T20:38:46.113Z",
  //                   "updated_at": "2022-04-21T20:38:46.113Z"
  //               }
  //           }
  //       ],
  //       "transactions": []
  //   }
  computed: {
    ...mapGetters({
      vendors: "contacts/getAllVendors",
    }),
    filteredVendors() {
      if (this.search) {
        return this.vendors.filter((vendor) => {
          return (
            vendor.organization[
              Object.keys(vendor.organization)
            ].company.company_name
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            vendor.email.toLowerCase().match(this.search.toLowerCase()) ||
            vendor.vendorname.toLowerCase().match(this.search.toLowerCase())
          );
        });
      } else return this.vendors;
    },
  },

  mounted() {
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
