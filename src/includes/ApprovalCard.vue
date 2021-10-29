<template>
  <v-card
    style="
      mix-blend-mode: normal;
      opacity: 0.8;
      border: 1px solid rgba(127, 145, 155, 0.15);
      box-sizing: border-box;
      border-radius: 8px;
    "
    flat
    color="#F8F9FC"
    class="mb-5 mt-11 text-center"
    min-height="132px"
  >
    <div class="text-left mt-5">
      <div
        class="pl-6 mt-5"
        style="
          margin-top: 21px;
          margin-bottom: 9px;
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 15px;
          text-transform: uppercase;
        "
      >
        if
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              id="chip"
              small
              text-color="primary"
              class="fort-weight-bold text-body-1"
              v-bind="attrs"
              v-on="on"
              >{{ BasicCompareType[selectedBasicCompareType]["text"] }}
            </v-chip>
          </template>
          <v-list>
            <v-list-item-group v-model="selectedBasicCompareType">
              <v-list-item v-for="(item, i) in BasicCompareType" :key="i">
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        of this..
      </div>
    </div>
    <div style="margin-bottom: 36px">
      <div v-for="(rule, i) in approvalRules" :key="i">
        <ApprovalInputs
          class="my-4"
          :rule="rule"
          :index="i"
          @updateField="updateField($event, i)"
          @delete="deleteApprovalRule($event)"
        />
      </div>
    </div>
    <v-btn fab color="#7F919B" x-small bottom absolute @click="addApprovalRule">
      <v-icon color="#FFFFFF">mdi-plus</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import { formItems, operators } from "@/utils/ManagerApprovalOptions.js";
import ApprovalInputs from "./ApprovalInputs.vue";
export default {
  props: ["comparisonType"],
  data() {
    return {
      selectedBasicCompareType: 0,

      approvalRules: [
        {
          parameter: "",
          operator: "",
          inputField: "",
        },
      ],
      formItems,
      operators,

      BasicCompareType: [{ text: "ALL" }, { text: "ANY" }],
    };
  },
  watch: {
    comparisonType: function (newValue) {
      let value = newValue.split(" ")[0];
      const items = this.BasicCompareType.map((x) => x.text);
      this.selectedBasicCompareType = items.indexOf(value);
      console.log({
        newValue,
        value,
        items,
        selectedBasicCompareType: this.selectedBasicCompareType,
      });
    },
  },
  components: { ApprovalInputs },
  methods: {
    selectItem(Index) {
      this.activeItem = Index;
    },
    updateField(e, i) {
      const { field, value } = e;
      this.approvalRules[i][field] = value;
      console.log(this.approvalRules);
    },
    addApprovalRule() {
      this.approvalRules.push({
        parameter: "",
        operator: "",
        inputField: "",
      });
    },
    deleteApprovalRule(i) {
      this.approvalRules.splice(i, 1);
      this.$emit("checkApprovalCard", this.approvalRules.length);
    },
  },
  mounted() {
    if (this.comparisonType) {
      let value = this.comparisonType.split(" ")[0];
      const items = this.BasicCompareType.map((x) => x.text);
      this.selectedBasicCompareType = items.indexOf(value);
    }
  },
};
</script>

<style scoped>
.v-text-field fieldset,
.v-text-field .v-input__control {
  color: inherit;
  min-height: 50px !important;
}

.inputSelect {
  display: flex;
  flex-direction: row;
}
#no-background-hover::after {
  background-color: transparent !important;
}

#operators {
  color: #16be98 !important;
}
</style>
