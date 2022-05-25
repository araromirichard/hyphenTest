<template>
  <v-tabs
    grow
    slider-color="primary"
    slider-size="4"
    background-color="#F8F7F4"
    style="margin:0px auto auto auto;width:100% mix-blend-mode: normal;padding:10px"
  >
    <v-tab> Details </v-tab>
    <v-tab> Audit Trail </v-tab>

    <v-tab-item>
      <v-divider></v-divider>
      <div class="details">
        <div class="runs">
          <div>
            <span class="runs__title">Workflow Runs</span>

            <span class="runs__count">{{ runs }}</span>
          </div>
          <div class="runs__icon">
            <v-btn color="white" elevation="0" fab>
              <v-icon size="30" color="primary"
                >mdi-swap-horizontal</v-icon
              ></v-btn
            >
          </div>
        </div>

        <div class="trigger" v-if="trigger">
          <span class="t">Trigger: </span>
          <span class="n capitalize"> {{ trigger }}</span>
        </div>
        <div v-if="schema" class="schema">
          <div v-if="schema">
            When <span class="type">{{ groupType(parentGroup) }}</span> of the
            following is <span class="operator">TRUE</span>
          </div>

          <div
            style="margin-top: 10px"
            v-for="(condition, index) in conditions"
            :key="index"
          >
            <div class="group" v-if="condition.type == 'group'">
              With
              <span class="type">{{
                groupType(condition.properties.type)
              }}</span>
              of the following

              <span
                v-for="(innerConditions, index) in condition.properties
                  .conditions"
                :key="index"
              >
                <div
                  class="comparison"
                  v-if="innerConditions.type == 'comparison'"
                >
                  <span class="field">{{
                    getFieldLabel(innerConditions.properties.field)
                  }}</span>
                  is
                  <span class="operator">{{
                    operator(innerConditions.properties.type)
                  }}</span>
                  <span class="target">{{
                    innerConditions.properties.target
                  }}</span>
                </div>
              </span>
            </div>

            <div class="comparison" v-if="condition.type == 'comparison'">
              <span class="field">{{
                getFieldLabel(condition.properties.field)
              }}</span>
              is
              <span class="operator">{{
                operator(condition.properties.type)
              }}</span>
              <span class="target">{{ condition.properties.target }}</span>
            </div>
          </div>
        </div>
      </div>
    </v-tab-item>
    <v-tab-item>
      <v-divider></v-divider>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    runs: {
      type: Number,
      default: 0,
    },
    trigger: {
      default: "",
    },

    schema: {
      type: Object,
      default: null,
    },

    inputs: {
      default: null,
    },
  },
  data() {
    return {};
  },

  methods: {
    operator(operand) {
      if (this.inputs.operators) {
        return (
          this.inputs.operators.find((operator) => operator.key == operand)
            ?.label || operand
        );
      }
    },

    groupType(type) {
      if (this.comparisonType) {
        return (
          this.comparisonType.find((groupType) => groupType.val === type)
            ?.string || type
        );
      }
    },

    getFieldLabel(inputField) {
      if (this.inputs) {
        return (
          this.inputs.fields.find((field) => field.key === inputField)?.label ||
          inputField
        );
      }
      return inputField;
    },
  },
  computed: {
    ...mapGetters({
      comparisonType: "workflow/comparisonType",
    }),

    parentGroup() {
      if (this.schema) return this.schema.properties.type;
      else return null;
    },

    conditions() {
      if (this.schema) return this.schema.properties.conditions;
      else return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  height: calc(100vh - 100px);
  padding: 5px;
  background-color: rgba(242, 242, 242, 0.6);
  overflow: auto;

  .runs {
    background-color: #f3eee8;
    border-radius: 4px;
    display: flex;
    gap: 20px;
    align-items: center;

    padding: 20px;
    margin-bottom: 5px;
    margin-top: 40px;

    &__title {
      font-size: 16px;
      font-weight: 400;
      color: #7f919b;
      display: block;
    }

    &__count {
      margin-top: 30px;
      font-size: 24px;
      font-weight: 700;
      color: var(--v-primary-base);
      display: block;
    }

    &__icon {
      display: flex;
      justify-content: center;
      flex: 1;
    }
  }

  .trigger {
    background-color: #fbf4e4;
    border-radius: 4px;

    padding: 20px;

    .t {
      color: #8f96a1;
    }

    .n {
      color: #19283d;
    }
  }

  .schema {
    margin-top: 30px;
    background-color: transparent;
    font-size: 16px;
    color: #596a73;

    .type {
      color: var(--v-primary-base);
      font-weight: bold;
      background-color: #301f7812;
      padding: 0px 8px;
      border-radius: 10px;
      display: inline-block;
      margin: 0px 4px;
    }

    .operator {
      color: #16be98;
      font-weight: bold;
      background-color: #fff;
      padding: 0px 8px;
      border-radius: 10px;
      display: inline-block;
      margin: 0px 4px;
    }

    .group {
      padding: 15px 0px;
      border-bottom: 1px dashed #d5dcec;
    }

    .comparison {
      margin-top: 3px;
      display: block;
      margin-left: 15px;
      line-height: 35px;

      .operator {
        background-color: #d4f6ef;
        white-space: nowrap;
        display: inline-block;
        margin: 0px 4px;
      }

      .field {
        font-weight: bold;
        color: #8f96a1;
      }

      .target {
        color: #e3aa1c;
        font-weight: bold;
        background-color: #f9eed2;
        padding: 0px 8px;
        border-radius: 10px;
        display: inline-block;
        margin: 0px 4px;
      }
    }
  }
}
</style>
