<template>
  <div>
    <v-card flat elevation="4" min-height="1200" width="1300">
      <v-card
        flat
        elevation="2"
        height="98"
        width="1300"
        class="rounded-t-lg"
        style="margin-right: 57; background: rgba(127, 145, 155, 0.052607)"
      >
        <v-row class="d-flex">
          <img
            style="font-size: 24px; margin-top: 37px; margin-left: 49px"
            :src="require('@/assets/pbot_icons/ManagerApproval.svg')"
            alt="Manager-approval-icon"
          />
          <v-card-title
            class="ml-4 justify-center align-center"
            style="
              padding: 0px;
              margin-top: 34px;
              font-family: Inter;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 29px;
              color: #311b92;
            "
          >
            Approval by MD & Snr. Managers
          </v-card-title>
          <v-spacer></v-spacer>
          <v-switch
            dense
            color="#16BE98"
            hide-details="auto"
            class="d-flex, row-reverse mr-16 justify-center align-center"
          >
            <template #prepend>
              <v-label>
                <span style="font-size: 12px"> Disable </span>
              </v-label>
            </template>
          </v-switch>
        </v-row>
      </v-card>
      <template>
        <v-stepper
          style="top: 92px; left: 44px"
          elevation="0"
          width="1250"
          min-height="806"
          color="#301F78"
          v-model="e6"
          vertical
        >
          <v-stepper-step
            non-linear
            color="#311B92"
            :complete="e6 > 1"
            step="1"
          >
            <span
              style="
                margin-top: 40px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 19px;
                color: #311b92;
              "
            >
              Choose workflow trigger
            </span>
            <span
              class="mt-6"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 200;
                font-size: 14px;
                line-height: 15px;
                letter-spacing: 0.45px;
                color: #596a73;
              "
              >All automation begins with a data source, choose one below to
              initiate your automation rule</span
            >
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card flat color="#ffffff" class="d-flex" height="200px">
              <div
                class="mt-6 flex-column pr-5"
                v-for="(card, Index) in cards"
                :key="Index"
                @click="selectItem(Index)"
              >
                <v-card
                  :class="{ active: Index === activeItem }"
                  class="justify-center notActive"
                  flat
                  width="110"
                  height="80"
                  style="border-radius: 8px"
                >
                  <icon-base icon-name="workflowCard"
                    ><icon-workflow-card
                      style="margin-left: 40px; margin-top: 28px"
                  /></icon-base>
                </v-card>
                <div class="mt-2">
                  <h5 class="cardTitle">
                    {{ card }}
                  </h5>
                  <h6 v-if="card === 'Form'" class="spanText mt-1">
                    Process form <br />
                    submissions
                  </h6>
                  <h6 v-else-if="card === 'Email'" class="spanText mt-1">
                    Process emailed <br />
                    invoice
                  </h6>
                  <h6 v-else class="spanText mt-1">
                    Process bank <br />
                    transactions
                  </h6>
                </div>
              </div>
            </v-card>
            <template class="my-7">
              <v-select
                :menu-props="{ bottom: true, offsetY: true }"
                :items="dropDownItems"
                style="
                  background: #ffffff;
                  border: 1px solid rgba(212, 216, 223, 0.377431);
                  box-sizing: border-box;
                  border-radius: 3px;
                  width: 223px;
                  height: 50px;
                "
                class="justify-center flex-column custom-placeholer-color"
                flat
                outlined
                hide-details="auto"
                placeholder="Select a form"
              >
                <template slot="prepend-inner">
                  <icon-base icon-name="workflowCard"
                    ><icon-workflow-card style="margin-left: 17px"
                  /></icon-base>
                </template>
                <template slot="append">
                  <v-icon class="pl-2">mdi-menu-down</v-icon>
                </template>
              </v-select>
            </template>
            <v-btn
              @click="e6 = 2"
              dark
              text
              elevation="0"
              width="125"
              height="55"
              style="
                margin-top: 26px;
                margin-bottom: 73px;
                background: #311b92;
                box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                border-radius: 4px;
              "
            >
              <simple-line-icons
                icon="arrow-right"
                color="#FFFFFF"
                style="
                  font-family: simple-line-icons;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 16px;
                "
                no-svg
              />
              <span
                class="text-capitalize pl-3 py-4"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 17px;
                  text-align: center;
                  letter-spacing: 0.636364px;
                  color: #ffffff;
                "
                >next</span
              >
            </v-btn>
          </v-stepper-content>

          <v-stepper-step non-linear :complete="e6 > 2" step="2">
            <span
              style="
                margin-top: 40px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 19px;
                color: #311b92;
              "
            >
              Compose workflow
            </span>
            <span
              class="mt-6"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 200;
                font-size: 14px;
                line-height: 15px;
                letter-spacing: 0.45px;
                color: #596a73;
              "
              >Select items from your data source and compose how it should be
              handled by pbot</span
            >
          </v-stepper-step>

          <v-stepper-content step="2">
            <div v-for="(card, i) in selectedCompareGroup" :key="i">
              <ApprovalCard ref="ApprovalCard" />

              <v-timeline style="margin-left: 30px">
                <div class="d-flex">
                  <v-menu bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        width="130"
                        rounded
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        class="mx-auto justify-center"
                      >
                        <v-icon class="pl-2" x-small>mdi-plus</v-icon>
                        <span class="pr-2"> WITH </span>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item-group>
                        <v-list-item
                          v-for="(item, i) in comparisonType"
                          :key="i"
                        >
                          <v-list-item-title @click="addApprovalCard">{{
                            item
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-menu>
                </div>
              </v-timeline>
            </div>
            <v-btn
              @click="e6 = 3"
              dark
              text
              elevation="0"
              width="125"
              height="55"
              style="
                margin-top: 26px;
                margin-bottom: 73px;
                background: #311b92;
                box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                border-radius: 4px;
              "
            >
              <simple-line-icons
                icon="arrow-right"
                color="#FFFFFF"
                style="
                  font-family: simple-line-icons;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 16px;
                "
                no-svg
              />
              <span
                class="text-capitalize pl-3 py-4"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 17px;
                  text-align: center;
                  letter-spacing: 0.636364px;
                  color: #ffffff;
                "
                >next</span
              >
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            <span
              style="
                margin-top: 40px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 19px;
                color: #311b92;
              "
            >
              Execute action
            </span>
            <span
              class="mt-6"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 200;
                font-size: 14px;
                line-height: 15px;
                letter-spacing: 0.45px;
                color: #596a73;
              "
              >Choose an action to be performed by the above rule or create a
              new action.</span
            >
          </v-stepper-step>

          <v-stepper-content step="3">
            <ExecuteActions style="margin-top: 42px" />
          </v-stepper-content>
        </v-stepper>
      </template>
    </v-card>
  </div>
</template>

<script>
import { comparisonType } from "@/utils/ManagerApprovalOptions.js";
import SimpleLineIcons from "vue-simple-line";
import IconWorkflowCard from "../components/icons/IconWorkflowCard.vue";
import ApprovalCard from "./ApprovalCard.vue";
import ExecuteActions from "./ExecuteActions.vue";

export default {
  data() {
    return {
      e6: 1,
      cards: ["Form", "Bank", "Email", "Bank"],
      activeItem: null,
      dropDownItems: [
        "Expense reinbursement ",
        "Vendor onboarding",
        "Payment request",
        "Petty cash request",
      ],
      selectedCompareGroup: [
        {
          ApprovalCard: 0,
        },
      ],
      comparisonType,
    };
  },
  components: {
    SimpleLineIcons,
    IconWorkflowCard,
    ApprovalCard,
    ExecuteActions,
  },
  methods: {
    selectItem(Index) {
      this.activeItem = Index;
    },
    addApprovalCard() {
      console.log(this.$refs.ApprovalCard);
      this.selectedCompareGroup.push(this.$refs.ApprovalCard);
    },
  },
};
</script>

<style scoped>
.v-application .elevation-2 {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 2%), 0px 4px 5px 0px rgb(0 0 0 / 2%),
    0px 1px 10px 0px rgb(0 0 0 / 1%) !important;
}
.v-application .elevation-4 {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 3%), 0px 4px 5px 0px rgb(0 0 0 / 3%),
    0px 1px 10px 0px rgb(0 0 0 / 3%) !important;
}

.cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: rgb(89, 106, 115);
  text-align: center;
}
.spanText {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.45px;
  color: #7f919b;
}
.notActive {
  border: 1px solid rgba(48, 31, 120, 0.07);
}
.active {
  border: 1px solid #301f78;
}

#chip {
  padding: 10px;
  font-size: 1rem !important;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: "Inter", sans-serif !important;
}
.v-application .elevation-8 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
