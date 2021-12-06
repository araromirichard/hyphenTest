<template>
  <div>
    <v-card
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
                text-color="#311b92"
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
                    @click="collectGroupType(item)"
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
            :index="i"
            @updateField="updateGroupCondition($event, i)"
            @delete="deleteGroupCondition($event)"
          />
        </div>
      </div>
      <v-btn
        :ripple="false"
        @click="addGroupCondition"
        color="#311b92"
        class="font-weight-bold mb-3 pl-0 ml-6"
        text
        style="text-transform: lowercase; font-size: 16px"
      >
        <v-icon>mdi-plus</v-icon> add new condition</v-btn
      >
    </v-card>

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
          font-size: 15px;
          line-height: 15px;
          text-transform: uppercase;
          color: #96a9cf;
        "
      >
        <v-btn
          @click="$emit('add-new-group', newGroup)"
          color="#96A9CF"
          text
          class="font-weight-bold ml-6 pl-0"
          style="text-transform: lowercase; font-size: 16px"
        >
          <v-icon>mdi-plus</v-icon> add new group</v-btn
        >

        WITH

        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              id="chip"
              small
              text-color="#311b92"
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
import {
  formItems,
  operators,
  comparisonType,
} from "@/utils/ManagerApprovalOptions.js";
import WorkflowConditionInput from "./workflow-condition-input.vue";
export default {
  props: {
    groupType: {
      default: "and",
    },
    isLast: {
      default: true,
    },
    groupIndex: {
      default: 0,
    },
  },
  components: { WorkflowConditionInput },
  data() {
    return {
      comparisonType,
      groupConditions: [
        {
          type: "",
          field: "",
          target: "",
        },
      ],
      formItems,
      operators,
      newGroup: "and",
    };
  },
  watch: {
    groupConditions: {
      immediate: true,
      deep: true,
      handler() {
        this.sendOutGroup();
      },
    },

    group_Type: {
      immediate: true,
      deep: true,
      handler() {
        this.sendOutGroup();
      },
    },
  },

  methods: {
    updateGroupCondition(e) {
      this.groupConditions[e.index].type = e.data.type;
      this.groupConditions[e.index].field = e.data.field;
      this.groupConditions[e.index].target = e.data.target;
    },

    addGroupCondition() {
      this.groupConditions.push({
        field: "",
        type: "",
        target: "",
      });
    },

    deleteGroupCondition(i) {
      if (this.groupConditions.length == 1 && this.groupIndex == 0) {
        return;
      }

      this.groupConditions.splice(i, 1);
      this.$emit("remove-condition", this.groupConditions.length);
    },

    collectGroupType(type) {
      this.$emit("update-group-type", type.val);
    },

    sendOutGroup() {
      let payload = {};
      const isGroup = this.groupConditions.length > 1;
      if (!isGroup) {
        //just one
        this.$set(payload, "type", "comparison");
        this.$set(payload, "properties", this.groupConditions[0]);
      } else {
        this.$set(payload, "type", "group");
        this.$set(payload, "properties", {
          type: this.groupType,
          conditions: this.groupConditions.map((flow) => {
            return {
              type: "comparison",
              properties: {
                type: flow.type,
                field: flow.field,
                target: flow.target,
              },
            };
          }),
        });
      }

      //console.log(JSON.stringify(payload, null, 2));
      this.$emit("update-group", payload);
    },
  },

  computed: {
    group_Type() {
      let t = "";
      this.comparisonType.map((type) => {
        if (type.val == this.groupType) {
          t = type.string;
        }
      });

      return t;
    },

    newGroup_Type() {
      let t = "";
      this.comparisonType.map((type) => {
        if (type.val == this.newGroup) {
          t = type.string;
        }
      });

      return t;
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
