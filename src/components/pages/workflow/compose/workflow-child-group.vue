<template>
  <div>
    <v-card
      v-if="value"
      style="
        mix-blend-mode: normal;
        opacity: 0.8;
        box-sizing: border-box;
        border-radius: 8px;
      "
      flat
      :style="
        groupConditions.length > 1 || (isLast && groupConditions.length == 1)
          ? 'border:1px solid rgba(127, 145, 155, 0.15);'
          : 'border:none'
      "
      :color="
        groupConditions.length > 1 || (isLast && groupConditions.length == 1)
          ? '#F8F9FC'
          : 'transparent'
      "
      class="mb-5 mt-5"
    >
      <div class="text-left mt-5">
        <div
          v-if="
            groupConditions.length > 1 ||
            (isLast && groupConditions.length == 1)
          "
          class="pl-6 mt-5"
          style="
            margin-top: 21px;
            margin-bottom: 9px;
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 15px;
            text-transform: uppercase;
          "
          :style="groupConditions.length > 1 ? undefined : 'opacity:1'"
        >
          WITH

          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                id="chip"
                small
                text-color="primary"
                color="white"
                class="font-weight-bold px-4 mx-1"
                style="font-size: 16px"
                v-bind="attrs"
                v-on="on"
                >{{ group_Type }}
              </v-chip>
            </template>
            <v-card width="150px" class="p-0">
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    class="py-2"
                    v-for="(item, i) in comparisonType"
                    :key="i"
                    @click="groupType = item.val"
                  >
                    <v-list-item-title>{{ item.string }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-menu>
          OF THE FOLLOWING
        </div>
      </div>
      <div style="margin-bottom: 25px">
        <div v-for="(rule, i) in groupConditions" :key="i">
          <workflow-condition-input
            class="my-4"
            :rule="rule"
            @selected-schema="$emit('selected-field', $event)"
            @delete="deleteCondition"
            :index="i"
            :inputs="inputs"
            v-model="groupConditions[i].properties"
          />
        </div>
      </div>
      <v-btn
        :ripple="false"
        @click="addGroupCondition"
        color="primary"
        class="font-weight-bold mb-3 pl-0 ml-6"
        text
        style="text-transform: lowercase; font-size: 16px"
      >
        <v-icon>mdi-plus</v-icon> add new condition</v-btn
      >
    </v-card>
    <div class=""></div>
    <v-card
      v-if="isLast"
      style="
        mix-blend-mode: normal;
        opacity: 0.8;
        border: 1px solid rgba(127, 145, 155, 0.15);
        box-sizing: border-box;
        border-radius: 8px;
      "
      flat
      color="#F8F9FC"
      class="mb-5 mt-11 py-3"
    >
      <div
        style="
          display: flex;
          align-items: center;
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          line-height: 15px;
          text-transform: uppercase;
          color: #96a9cf;
        "
        :style="{
          fontSize: `${$vuetify.breakpoint.smAndUp ? '15px' : '10px'}`,
        }"
      >
        <v-btn
          @click="$emit('add-new-group', newGroup)"
          color="#96A9CF"
          text
          class="font-weight-bold ml-6 pl-0"
          style="text-transform: lowercase; font-size: 16px"
          :style="{
            fontSize: `${$vuetify.breakpoint.smAndUp ? '16px' : '10px'}`,
          }"
        >
          <v-icon>mdi-plus</v-icon> add new group</v-btn
        >

        WITH

        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              id="chip"
              small
              text-color="primary"
              class="font-weight-bold px-4 mx-3"
              style="font-size: 16px"
              v-bind="attrs"
              v-on="on"
              >{{ newGroup_Type }}
            </v-chip>
          </template>
          <v-card width="150px" class="p-0">
            <v-list>
              <v-list-item-group>
                <v-list-item
                  class="py-2"
                  v-for="(item, i) in comparisonType"
                  :key="i"
                  @click="newGroup = item.val"
                >
                  <v-list-item-title>{{ item.string }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>

        OF THE FOLLOWING
      </div>
    </v-card>
  </div>
</template>

<script>
import { comparisonType } from "@/utils/ManagerApprovalOptions.js";
import WorkflowConditionInput from "./workflow-condition-input.vue";
export default {
  props: {
    isFirst: {
      default: true,
    },
    isLast: {
      default: true,
    },
    groupIndex: {
      default: 0,
    },
    inputs: {
      default: null,
    },

    value: {
      default: null,
    },
  },
  components: { WorkflowConditionInput },
  data() {
    return {
      comparisonType,
      groupConditions: [],
      newGroup: "and",
      groupType: "and",
    };
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.conditions)) {
          if (val.type === "comparison") {
            this.groupConditions = [val];
          } else if (val.type === "group") {
            this.groupConditions = val.properties.conditions;
            this.groupType = val.properties.type;
          }
        }
      },
    },

    condition: {
      immediate: true,
      deep: true,
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.value)) {
          this.$emit("input", val);
        }
      },
    },

    selectedFields: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("selected-fields", val);
      },
    },

    groupConditions: {
      immediate: true,
      deep: true,
      handler() {
        this.$emit(
          "valid-group",
          this.groupConditions.every((condition) => {
            if (condition.type === "comparison") {
              if (
                condition.properties.field === "" ||
                condition.properties.target === "" ||
                condition.properties.type === ""
              ) {
                return false;
              }
            }
            return true;
          })
        );
      },
    },
  },

  methods: {
    addGroupCondition() {
      this.groupConditions.push({
        type: "comparison",
        properties: { type: "", field: "", target: "" },
      });
    },

    deleteCondition(index) {
      if (this.isFirst && this.groupConditions.length === 1) {
        return;
      }

      this.groupConditions.splice(index, 1);

      if (this.groupConditions.length === 0 && !this.isFirst) {
        this.$emit("delete-empty-group");
      }
    },

    collectGroupType(type) {
      this.$emit("update-group-type", type.val);
    },
  },

  computed: {
    group_Type() {
      // get condition type from AND/ALL from and/or
      let t = "";
      this.comparisonType.map((type) => {
        if (type.val == this.groupType) {
          t = type.string;
        }
      });

      return t;
    },

    newGroup_Type() {
      // get condition type from AND/ALL from and/or for new group created
      let t = "";
      this.comparisonType.map((type) => {
        if (type.val == this.newGroup) {
          t = type.string;
        }
      });

      return t;
    },

    condition() {
      if (this.groupConditions.length === 1) {
        return this.groupConditions[0];
      }
      return {
        type: "group",
        properties: {
          type: this.groupType,
          conditions: this.groupConditions,
        },
      };
    },
    validCondition() {
      return this.groupConditions.every((condition) => {
        if (condition.type === "comparison") {
          if (
            condition.properties.field === "" ||
            condition.properties.target === "" ||
            condition.properties.type === ""
          ) {
            return false;
          }
        }
        return true;
      });
    },

    selectedFields() {
      return this.groupConditions.map((condition) => {
        if (condition.type == "comparison") {
          return condition.properties.field;
        }
      });
    },
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
