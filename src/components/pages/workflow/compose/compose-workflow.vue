<template>
  <div ref="compose">
    <div class="vertical-line"></div>

    <div class="loader" v-if="isLoadingFormFields">
      <v-progress-circular color="primary" indeterminate></v-progress-circular>
    </div>
    

    <div v-else class="form-trigger">
      <div class="header" @click="showTriggers = !showTriggers">
        <span class="title"> Compose the conditions {{ isVisable }} </span>

        <v-btn color="primary" icon
          ><v-icon size="33" v-if="!showTriggers">mdi-chevron-down</v-icon>
          <v-icon size="33" v-else>mdi-chevron-up</v-icon>
        </v-btn>
      </div>

      <div v-if="showTriggers">
        <span class="text"
          >Design the conditions for which this workflow’ data will be
          proccessed</span
        >

        <transition name="animate-down">
          <workflow-parent-group
            :group-type="schema.condition.properties.type"
            @update-group-type="schema.condition.properties.type = $event"
          >
            <div v-for="(card, i) in selectedCompareGroup" :key="i">
              <workflow-child-group
                :is-last="i == selectedCompareGroup.length - 1"
                :group-index="i"
                :group-type="selectedCompareGroup[i]"
                @remove-condition="removeCondition($event, i)"
                @update-group="updateGroupCondition($event, i)"
                @add-new-group="addNewGroup($event, i)"
                @update-group-type="updateGroupType($event, i)"
                :index="i"
                :inputs="inputs"
              />
            </div>

            <v-btn
              @click="$emit('input', schema)"
              large
              elevation="0"
              color="primary"
            >
              <v-icon size="27" left>mdi-chevron-right</v-icon> Continue
            </v-btn>
          </workflow-parent-group>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
//  <workflow-parent-group> components holds the parent condition
// ..it holds childen conditions/group (slot components)
import { comparisonType } from "@/utils/ManagerApprovalOptions.js";
import WorkflowChildGroup from "./workflow-child-group.vue";
import WorkflowParentGroup from "./workflow-parent-group.vue";
export default {
  components: { WorkflowChildGroup, WorkflowParentGroup },
  props: {
    isVisable: {
      type: Boolean,
      default: false,
    },
    inputs:{
      default:null
    }
  },
  data() {
    return {
      isLoadingFormFields: false,
      showTriggers: true,
      comparisonType,
      selectedCompareGroup: ["and"], // we are using this to store the whole group condition
      schema: {
        condition: {
          type: "group",
          properties: {
            type: "and",
            conditions: [],
          },
        },
      },
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: "easeInOutCubic",
        container: ".flows",
      },
    };
  },
  methods: {
    addNewGroup(item, i) {
      if (this.selectedCompareGroup.length - 1 === i) {
        // if it called from last condition, add new group to list
        this.selectedCompareGroup.push(item);
      } else {
        // just add condition to current group
        this.selectedCompareGroup[i + 1] = item;
      }
    },
    removeCondition(e, i) {
      if (!e) {
        if (this.selectedCompareGroup.length === 1) {
          // we can't remove the first group
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

    fetchFormFields() {
      this.isLoadingFormFields = true;
      setTimeout(() => {
        this.isLoadingFormFields = false;
      }, 1000);
    },
  },
  watch: {
    schema: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$store.dispatch("workflow/updateSchema", val);
       // console.log(JSON.stringify(val, null, 2));
      },
    },

    isVisable: {
      immediate: true,
      handler(val) {
        if (val) {
          this.fetchFormFields();
        }
      },
    },

    showTriggers: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick();
          setTimeout(() => {
            this.$vuetify.goTo(this.$refs.compose, this.scrollOptions);
          }, 1500);
        }
      },
    },
  },
  computed: {
    isCompleted() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.vertical-line {
  display: block;
  background-color: #d9dee1;

  margin: auto;
  height: 80px;
  width: 2px;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;
}

.form-trigger {
  width: 100%;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .title {
      font-weight: bold;
      color: var(--v-primary-base);
      font-size: 16px;
      display: block;
      text-transform: capitalize;
    }

    .text {
      display: block;
      font-size: 14px;
      color: rgba(25, 40, 61, 0.8);
      margin-top: 10px;
    }
  }
}
</style>
