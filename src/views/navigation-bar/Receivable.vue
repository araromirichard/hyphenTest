<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="px-2">
        <!-- page title-->
        <v-row align="center">
          <v-col class="d-flex justify-center align-center" cols="12">
            <h3
              class="font-weight-bold text-md-h4 primary--text pl-md-15"
              style="line-height: 39px"
            >
              Receivables
              <span
                class="pl-5 text-md-subtitle-1"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 19px;
                  color: #7f919b;
                  mix-blend-mode: normal;
                  opacity: 0.5;
                "
                >{{ ReceivableRecord }}</span
              >
            </h3>

            <v-spacer></v-spacer>

            <!-- <ReceivableDropdown
              btnText="Add New"
              icon="uploadIcon"
              width="148"
              height="54px"
              style="margin-right: 88px"
            /> -->
          </v-col>
        </v-row>

        <v-container class="px-2">
          <v-row class="ma-0 pa-0" align="center">
            <v-col class="pa-0 ma-0" cols="12" sm="12" md="6">
              <v-card
                flat
                height="180px"
                :max-width="`${$vuetify.breakpoint.mdAndDown ? '100%' : '78%'}`"
                class="d-flex flex-row ml-0 ml-md-14"
                style="margin-top: 35px"
                :style="{
                  marginLeft: `${$vuetify.breakpoint.mdAndUp ? '60px' : ''}`,
                }"
              >
                <v-row>
                  <v-col cols="3">
                    <v-avatar
                      color="#FDF9EF"
                      :size="`${$vuetify.breakpoint.mdAndDown ? '60' : '90'}`"
                      style="margin-top: 44px"
                      :style="{
                        marginLeft: `${
                          $vuetify.breakpoint.mdAndUp ? '30px' : ''
                        }`,
                      }"
                    >
                      <v-icon dark color="primary"> mdi-check </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col cols="8">
                    <h5 class="cardTitle pa-0">Total Receivables</h5>
                    <h6 class="cardSubTitle pa-0">
                      <span>Total unpaid invoices </span>
                      {{ totalUnpaidInvoices }}
                    </h6>
                    <v-progress-linear
                      rounded
                      style="margin-left: 15px; margin-top: 8px"
                      v-model="currentBillPercentage"
                      color="#96EAD7"
                      height="12"
                      background-color="#E3AA1C"
                    ></v-progress-linear>
                    <p
                      class="text-break mt-2 d-inline float-start"
                      style="
                        margin-left: 15px;
                        max-width: 5rem;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 16px;
                        letter-spacing: 0.545455px;
                        color: rgba(0, 35, 56, 0.5);
                      "
                    >
                      current
                      <span class="font-weight-bold">{{ currentInvoice }}</span>
                    </p>
                    <p
                      class="text-break mt-2 d-inline float-end text-md-right"
                      style="
                        margin-left: 15px;
                        max-width: 5rem;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 16px;
                        letter-spacing: 0.545455px;
                        color: rgba(0, 35, 56, 0.5);
                      "
                    >
                      overdue
                      <span class="font-weight-bold">{{ overdueInvoice }}</span>
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col class="pa-0 ma-0" cols="12" sm="12" md="6">
              <v-card
                flat
                height="180px"
                :max-width="`${$vuetify.breakpoint.mdAndDown ? '100%' : '78%'}`"
                class="d-flex flex-row"
                style="margin-top: 35px"
                :style="{
                  marginLeft: `${$vuetify.breakpoint.mdAndUp ? '78px' : ''}`,
                  marginRight: `${$vuetify.breakpoint.mdAndUp ? '78px' : ''}`,
                }"
              >
                <v-row>
                  <v-col cols="3">
                    <v-avatar
                      color="#FDF9EF"
                      :size="`${$vuetify.breakpoint.mdAndDown ? '60' : '90'}`"
                      style="margin-top: 44px"
                      :style="{
                        marginLeft: `${
                          $vuetify.breakpoint.mdAndUp ? '30px' : '12px'
                        }`,
                      }"
                    >
                      <span class="total-Customers">{{ totalCustomers }}</span>
                    </v-avatar>
                  </v-col>
                  <v-col cols="8">
                    <h5 class="cardTitle pa-0">Total Customers</h5>
                    <h6 class="cardSubTitle pa-0">
                      <span>onboarded in the last </span>
                      {{ billPeriod }} months
                    </h6>
                    <pure-vue-chart
                      v-if="$vuetify.breakpoint.mdAndDown"
                      :points="[1, 3, 2, 3, 4, 2, 1, 4]"
                      :width="150"
                      :height="50"
                      bar-color="#96ead7"
                      style="margin-left: 15px; margin-top: 8px"
                    />
                    <pure-vue-chart
                      v-if="$vuetify.breakpoint.smAndUp"
                      :points="[1, 3, 2, 3, 4, 2, 1, 4, 2, 3]"
                      :width="200"
                      :height="40"
                      bar-color="#96ead7"
                      style="margin-left: 15px; margin-top: 8px"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="mt-md-12">
          <v-row class="mx-md-10 pa-0">
            <v-col
              class="d-flex flex-column align-center justify-center"
              cols="12"
            >
              <v-card
                v-if="$vuetify.breakpoint.mdAndUp"
                flat
                width="100%"
                style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
              >
                <v-tabs v-model="tab">
                  <v-tab
                    class="mt-2"
                    v-for="item in items"
                    :key="item.tab"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 800;
                      font-size: 12px;
                      line-height: 15px;
                      text-transform: uppercase;
                    "
                    >{{ item.tab }}</v-tab
                  >

                  <v-spacer></v-spacer>

                  <v-btn
                    v-if="isClicked"
                    @click="toggleSearch"
                    plain
                    class="text-black mt-1 pt-4"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 20px;
                      letter-spacing: 0.55px;
                      text-transform: uppercase;
                      color: #7f919b;
                    "
                  >
                    search
                    <v-icon small right class="pr-1"> mdi-magnify </v-icon>
                  </v-btn>
                  <v-expand-x-transition v-else>
                    <v-text-field
                      v-model="search"
                      @blur="isClicked = true && !search"
                      class="seacrh-field mt-2 mr-2"
                      dense
                      clearable
                      autofocus
                      hide-details="true"
                      persistent-placeholder
                      placeholder="Search"
                      append-icon="mdi-magnify"
                      filled
                    >
                    </v-text-field>
                  </v-expand-x-transition>
                </v-tabs>
              </v-card>

              <v-card width="100%" class="pb-12" flat>
                <component
                  v-bind:is="items[tab].content"
                  class="ml-0"
                ></component>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- tabs for mobile devices -->
    <v-row class="px-0 mx-0" v-if="$vuetify.breakpoint.mdAndDown">
      <v-col class="ma-0 pa-0" cols="12">
        <v-bottom-navigation fixed class="pa-0 mx-0" dark>
          <v-tabs
            center-active
            class="ma-0"
            background-color="primary"
            v-model="tab"
          >
            <v-tab
              class="mt-2"
              v-for="item in items"
              :key="item.tab"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 15px;
                text-transform: uppercase;
              "
              >{{ item.tab }}</v-tab
            >
          </v-tabs>
        </v-bottom-navigation>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PureVueChart from "pure-vue-chart";
import AllReceivables from "@/components/receivableTabs/AllReceivables.vue";
import PaidReceivables from "../../components/receivableTabs/PaidReceivables.vue";
//import ReceivableDropdown from "../../includes/ReceivableDropdown.vue";

export default {
  name: "Receivables",
  data() {
    return {
      ReceivableRecord: "234 Records",
      totalCustomers: 54,
      currentInvoice: "N234,560",
      overdueInvoice: "N234,560",
      billPeriod: "6",
      currentBillPercentage: 65,
      totalUnpaidInvoices: "N1,234,560",
      isClicked: true,
      tab: 0,
      search: "",
      items: [
        { tab: "All", content: "AllReceivables" },
        { tab: "Paid", content: "PaidReceivables" },
      ],
      inboxMenus: [
        {
          title: "Upload",
          subtitle: "pdf or jpg invoice",
          icon: "mdi-tray-arrowDown",
        },
        {
          title: "Form",
          subtitle: "create form",
          icon: "mdi-tray-arrow-down ",
        },
        {
          title: "Bank Account",
          subtitle: "connect your bank account",
          icon: "mdi-tray-arrowDown",
        },
        {
          title: "EMAIL TO:",
          subtitle: "brandname0923@process.finance",
          icon: "",
        },
      ],
    };
  },
  components: {
    AllReceivables,

    PaidReceivables,

    PureVueChart,
    //ReceivableDropdown,
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
  },
};
</script>

<style scoped>
.v-input .search-field .v-input__slot:before,
.v-input .search-field .v-input__slot:after {
  border: none !important;
  border-color: transparent !important;
}
.transTotal {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7f919b;
}

.v-menu__content {
  box-shadow: none;
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
th {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: var(--v-primary-base);
}

.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.cardTitle {
  margin-top: 32px;
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  color: rgba(0, 35, 56, 0.5);
}
.cardSubTitle {
  margin-top: 5px;
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.545455px;
  color: rgba(0, 35, 56, 0.5);
}
#histogram {
  fill: #96ead7 !important;
}

.total-Customers {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 29px;
  color: #311b92;
}
</style>
