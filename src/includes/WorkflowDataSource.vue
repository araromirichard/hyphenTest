<template>
  <div class="pa-0 ma-0">
    <v-item-group @change="selectedDataSource" v-model="selectedData">
      <v-row>
        <v-col>
          <v-card flat color="white" class="d-flex" height="200px">
            <div
              class="flex-column pr-5"
              v-for="(dataItem, i) in dataSource"
              :key="i"
            >
              <v-item :value="dataItem" v-slot:default="{ active, toggle }">
                <v-card
                  @click="toggle"
                  :class="
                    active ? 'border-color: #301F78' : 'border-color: #D5DCEC'
                  "
                  class="justify-center notActive"
                  flat
                  width="110"
                  height="100"
                  style="
                    border: 1px solid rgba(48, 31, 120, 0.07);
                    border-radius: 8px;
                    cursor: pointer;
                  "
                >
                  <v-img
                    class="mx-auto"
                    contain
                    width="22px"
                    height="22px"
                    style="margin-top: 32%"
                    src="@/assets/pbot_icons/wFlowTrigger1.png"
                  >
                  </v-img>
                </v-card>
              </v-item>
              <div class="mt-1">
                <h5 class="cardTitle">
                  {{ dataItem.title }}
                </h5>
                <h6 class="spanText text-break" style="max-width: 8rem">
                  {{ dataItem.text }}
                </h6>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-item-group>
    <div>
      <template class="my-7">
        <v-select
          :menu-props="{ bottom: true, offsetY: true }"
          :items="formSelectDropdown"
          style="
            background: #ffffff;
            box-sizing: border-box;
            border-radius: 3px;
            width: 50%;
            height: 50px;
          "
          class="justify-center flex-column custom-placeholer-color"
          flat
          outlined
          hide-details="auto"
          placeholder="Select a form"
        >
          <template slot="prepend-inner">
            <v-img
              class="mx-auto"
              contain
              width="20px"
              height="20px"
              src="@/assets/pbot_icons/wFlowTrigger1.png"
            >
            </v-img>
          </template>
          <template slot="append">
            <v-icon class="pl-2">mdi-menu-down</v-icon>
          </template>
        </v-select>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkflowDataSource",
  data() {
    return {
      dataSource: [
        { title: "Form", text: "Process form submissions" },
        { title: "Bank", text: " Process emailed invoice" },
        { title: "Email", text: "Process bank transactions" },
      ],
      formSelectDropdown: [
        "Expense reinbursement ",
        "Vendor onboarding",
        "Payment request",
        "Petty cash request",
      ],
      selectedData: null,
      ShowFormSelect: false,
    };
  },
  components: {
    //
  },
  methods: {
    selectedDataSource(e) {
      console.table({
        e,
        selectedData: this.selectedData,
      });
    },
  },
  // computed: {
  //   DisplaySelectedInput() {},
  // },
};
</script>

<style scoped>
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000; /*rgb(89, 106, 115);*/
  text-align: left;
}
.spanText {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #7f919b;
}
.notActive {
  border: 1px solid rgba(48, 31, 120, 0.07);
}
.active {
  border: 1px solid #301f78;
}
</style>
