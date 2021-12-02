<template>
  <div>
    <workflow-parent-group
      :group-type="schema.condition.properties.type"
      @update-group-type="schema.condition.properties.type = $event"
    >
      <div v-for="(card, i) in selectedCompareGroup" :key="i">
        <workflow-child-group
          :is-last="i == selectedCompareGroup.length - 1"
          :group-index="i"
          :group-type="selectedCompareGroup[i]"
          ref="ApprovalCard"
          @remove-condition="removeCondition($event, i)"
          @update-group="updateGroupCondition($event, i)"
          @add-new-group="addNewGroup($event, i)"
          @update-group-type="updateGroupType($event, i)"
          :index="i"
        />
      </div>
    </workflow-parent-group>
  </div>
</template>

<script>
import { comparisonType } from "@/utils/ManagerApprovalOptions.js";
import WorkflowChildGroup from "./workflow-child-group.vue";
import WorkflowParentGroup from "./workflow-parent-group.vue";
export default {
  components: { WorkflowChildGroup, WorkflowParentGroup },
  data() {
    return {
      comparisonType,
      selectedCompareGroup: ["and"],
      schema: {
        condition: {
          type: "group",
          properties: {
            type: "and",
            conditions: [],
          },
        },
      },
    };
  },
  methods: {
    addNewGroup(item, i) {
      if (this.selectedCompareGroup.length - 1 === i) {
        this.selectedCompareGroup.push(item);
      } else {
        this.selectedCompareGroup[i + 1] = item;
      }
    },
    removeCondition(e, i) {
      if (!e) {
        if (this.selectedCompareGroup.length === 1) {
          return;
        }
        this.selectedCompareGroup.splice(i, 1);
        this.schema.condition.properties.conditions.splice(i, 1);
      }
    },

    updateGroupCondition(e, i) {
      this.schema.condition.properties.conditions.splice(i, 1, e);
    },

    updateGroupType(e, i) {
      this.selectedCompareGroup.splice(i, 1, e);
    },
  },
  watch: {
    schema: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style></style>
