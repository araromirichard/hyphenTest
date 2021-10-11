<template>
  <v-container>
    <div>
      <v-row align="center" class="mx-14">
        <div>
          <h3
            class="text-bold"
            style="
              font-style: normal;
              font-weight: bold;
              font-size: 32px;
              line-height: 39px;
              color: #301f78;
            "
          >
            Payables
            <span
              class="transTotal pl-5"
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
              >{{ payableRecord }}</span
            >
          </h3>
        </div>
        <v-spacer></v-spacer>

        <DropDownMenu
          btnText="Add New"
          icon="uploadIcon"
          width="148"
          height="54px"
          style="margin-right: 88px"
        />
      </v-row>
      <v-row>
        <v-card
          flat
          height="180px"
          width="630px"
          class="d-flex flex-row"
          style="margin-left: 65px; margin-top: 35px"
        >
          <v-row>
            <v-col cols="3">
              <v-avatar
                color="#FDF9EF"
                size="90"
                style="margin-left: 30px; margin-top: 44px"
              >
                <v-icon dark color="primary"> mdi-check </v-icon>
              </v-avatar>
            </v-col>
            <v-col cols="8">
              <h5 class="cardTitle pa-0">Total Payables</h5>
              <h6 class="cardSubTitle pa-0">
                <span>Total unpaid bills </span> {{ totalUnpaidBills }}
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
                current <span class="font-weight-bold">{{ currentBill }}</span>
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
                <span class="font-weight-bold">{{ overDueBill }}</span>
              </p>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          flat
          height="180px"
          width="630px"
          class="d-flex flex-row"
          style="margin-left: 65px; margin-top: 35px"
        >
          <v-row>
            <v-col cols="3">
              <v-avatar
                color="#FDF9EF"
                size="90"
                style="margin-left: 30px; margin-top: 44px"
              >
                <v-icon dark color="primary"> mdi-check </v-icon>
              </v-avatar>
            </v-col>
            <v-col cols="8">
              <h5 class="cardTitle pa-0">Histogram</h5>
              <h6 class="cardSubTitle pa-0">
                <span>Bills of the last </span> {{ billPeriod }} months
              </h6>
              <pure-vue-chart
                :points="[1, 3, 2, 3, 4, 2, 0]"
                :width="250"
                :height="60"
                bar-color="#96ead7"
                style="margin-left: 15px; margin-top: 5px"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-card
        flat
        elevation="6"
        max-width="1340"
        min-height="674"
        class="ml-14"
      >
        <div class="mt-12" justify="center">
          <v-card
            flat
            max-width="100%"
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
        </div>
        <component v-bind:is="items[tab].content" class="ml-0"></component>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import PureVueChart from "pure-vue-chart";

import Allpayables from "@/components/payablesTabs/AllPayables.vue";
import SchedulledPayables from "@/components/payablesTabs/SchedulledPayables.vue";
import PendingPayables from "../../components/payablesTabs/PendingPaybles.vue";
import PaidPayables from "../../components/payablesTabs/PaidPayables.vue";
import BudgetPayables from "../../components/payablesTabs/BudgetPayables.vue";
import DropDownMenu from "../../includes/DropDownMenu.vue";

export default {
  name: "payables",
  data() {
    return {
      payableRecord: "234 Records",
      currentBill: "N234,560",
      overDueBill: "N234,560",
      billPeriod: "6",
      currentBillPercentage: 65,
      totalUnpaidBills: "N1,234,560",
      isClicked: true,
      tab: 0,
      search: "",
      items: [
        { tab: "All", content: "Allpayables" },
        { tab: "Scheduled", content: "SchedulledPayables" },
        { tab: "Pending", content: "PendingPayables" },
        { tab: "Paid", content: "PaidPayables" },
        { tab: "Budgets", content: "BudgetPayables" },
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
    Allpayables,
    SchedulledPayables,
    PendingPayables,
    PaidPayables,
    BudgetPayables,
    PureVueChart,
    DropDownMenu,
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
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
  color: #311b92;
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
</style>
