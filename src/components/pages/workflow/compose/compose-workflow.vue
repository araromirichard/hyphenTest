<template>
  <div ref="compose">
    <div class="vertical-line"></div>

    <div class="loader" v-if="isLoadingEntries">
      <v-progress-circular color="primary" indeterminate></v-progress-circular>
    </div>

    <div v-else class="form-trigger">
      <div class="header" @click="showTriggers = !showTriggers">
        <span class="title"> Compose the conditions </span>
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
            v-if="conditions"
            :group-type="conditions.properties.type"
            @update-group-type="conditions.properties.type = $event"
          >
            <div v-for="(card, i) in conditions.properties.conditions" :key="i">
              <workflow-child-group
                :is-first="i == 0"
                :is-last="i == conditions.properties.conditions.length - 1"
                v-model="conditions.properties.conditions[i]"
                :group-index="i"
                @delete-empty-group="deleteEmptyGroup(i)"
                @valid-group="groups.splice(i, 1, $event)"
                :index="i"
                :inputs="inputs"
                @add-new-group="addNewGroup"
              />
            </div>

            <v-btn
              @click="$emit('continue')"
              :disabled="!canContinue"
              large
              elevation="0"
              color="primary"
            >
              Continue <v-icon size="27" right>mdi-chevron-down</v-icon>
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

    trigger: {
      default: null,
    },

    triggerData: {
      default: null,
    },

    value: {
      default: {
        type: "group",
        properties: {
          type: "and",
          conditions: [
            {
              type: "comparison",
              properties: {
                type: "",
                field: "",
                target: "",
              },
            },
          ],
        },
      },
    },

    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoadingEntries: false,
      showTriggers: true,
      comparisonType,
      conditions: {
        type: "group",
        properties: {
          type: "and",
          conditions: [
            {
              type: "comparison",
              properties: {
                type: "",
                field: "",
                target: "",
              },
            },
          ],
        },
      },
      groups: [],
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: "easeInOutCubic",
        container: ".flows",
      },
      inputs: {
        fields: [],
        operators: [],
      },
      isLoaded: false,
    };
  },
  mounted() {
    this.fetchOperators();
  },
  methods: {
    addNewGroup(grouptype) {
      this.conditions.properties.conditions.push({
        type: "group",
        properties: {
          type: grouptype,
          conditions: [
            {
              type: "comparison",
              properties: {
                type: "",
                field: "",
                target: "",
              },
            },
          ],
        },
      });
    },

    deleteEmptyGroup(i) {
      this.conditions.properties.conditions.splice(i, 1);
      this.groups.splice(i, 1);
    },

    async fetchOperators() {
      try {
        this.isLoadingEntries = true;
        const { data } = await this.$store.dispatch("workflow/getAllOperators");
        this.inputs.operators = data;
      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
    },

    async fetchFormEntries() {
      try {
        this.isLoadingEntries = true;
        const { data } = await this.$store.dispatch(
          "formBuilder/getSingleForm",
          this.triggerData
        );
        this.inputs.fields = data.data.field_names;

      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
    },

    async fetchInvoiceEntries() {
      try {
        this.isLoadingEntries = true;
        const { data } = await this.$store.dispatch(
          "workflow/getAllInvoiceFieldsOptions"
        );
        this.inputs.fields = data;
      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
    },

    async fetchPaymentEntries() {
      try {
        this.isLoadingEntries = true;
        const data = await this.$store.dispatch(
          "workflow/getPaymentFieldsOptions",
          this.triggerData
        );
        this.inputs.fields = data;
      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
    },

    arrangeTriggerSchema() {
      let fields = [];
      this.conditions.properties.conditions.forEach((condition, i) => {
        if (condition.type === "comparison") {
          fields.push(condition.properties.field);
        }

        if (condition.type === "group") {
          condition.properties.conditions.forEach((condition2, i) => {
            if (condition2.type === "comparison") {
              fields.push(condition2.properties.field);
            }
          });
        }
      });

      this.$emit("selected-fields", [...new Set(fields)]);
    },
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.conditions) && val) {
          this.conditions = val;
        }
      },
    },

    conditions: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("input", val);
        this.arrangeTriggerSchema();
      },
    },

    trigger: {
      immediate: true,
      handler(val) {
        console.log("trigger data", val);
        if (val) {
          // this.conditions = {
          //   type: "group",
          //   properties: {
          //     type: "and",
          //     conditions: [
          //       {
          //         type: "comparison",
          //         properties: {
          //           type: "",
          //           field: "",
          //           target: "",
          //         },
          //       },
          //     ],
          //   },
          // };

          if (this.trigger === "invoice") {
            this.fetchInvoiceEntries();
          } else if (this.trigger === "form") {
            this.fetchFormEntries();
          } else if (this.trigger === "payment") {
            this.fetchPaymentEntries();
          }
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

    inputs: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("inputs", val);
      },
    },

    canContinue(val){
      if(val && this.isEdit){
        this.$emit('continue')
      }
    }
  },
  computed: {
    isCompleted() {
      return true;
    },

    canContinue() {
      return this.groups.every((action) => action) && this.groups.length > 0;
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
