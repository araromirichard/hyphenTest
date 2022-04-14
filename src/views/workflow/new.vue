<template>
  <div class="workflow">
    <div class="workflow__wrapper">
      <div class="analytics">
        <details-tab-workflow />
      </div>

      <div class="flow-setup">
        <v-breadcrumbs :items="breadcrumbs" style="font-weight: 600">
          <template v-slot:divider>
            <v-icon class="px-0">mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>

        <div class="flows">
          <div class="flow-setup__trigger">
            <div class="header" @click="showTriggers = !showTriggers">
              <span class="d-flex items-center">
                <v-btn color="#8F96A1" icon
                  ><v-icon size="33"
                    >mdi-chevron-right-circle-outline</v-icon
                  ></v-btn
                >
                <span class="title pl-1">{{ workflow.title }}</span></span
              >
              <v-btn color="primary" icon
                ><v-icon size="33" v-if="!showTriggers"
                  >mdi-chevron-down</v-icon
                >
                <v-icon size="33" v-else>mdi-chevron-up</v-icon>
              </v-btn>
            </div>
            <div v-if="showTriggers">
              <transition name="animate-down">
                <trigger-workflow v-model="workflow.trigger" />
              </transition>
            </div>
          </div>

          <payment-trigger
            v-model="workflow.payment"
            v-if="workflow.trigger && workflow.trigger.value == 'PAYMENT'"
          />

          <form-trigger
            v-model="workflow.form"
            v-if="workflow.trigger && workflow.trigger.value == 'FORM'"
          />
          <compose-workflow
            v-model="workflow.conditions"
            :isVisable="canShowConditions"
            v-if="canShowConditions"
          />

          <execute-actions-workflow
            v-model="workflow.actions"
            :isVisable="canShowActions"
            v-if="canShowActions"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExecuteActionsWorkflow from "../../components/pages/workflow/actions/execute-actions-workflow.vue";
import ComposeWorkflow from "../../components/pages/workflow/compose/compose-workflow.vue";
import detailsTabWorkflow from "../../components/pages/workflow/details-tab-workflow.vue";
import TriggerWorkflow from "../../components/pages/workflow/trigger-workflow.vue";
import FormTrigger from "../../components/pages/workflow/trigger/form-trigger.vue";
import PaymentTrigger from "../../components/pages/workflow/trigger/payment-trigger.vue";
export default {
  components: {
    detailsTabWorkflow,
    TriggerWorkflow,
    PaymentTrigger,
    FormTrigger,
    ComposeWorkflow,
    ExecuteActionsWorkflow,
  },
  data() {
    {
      return {
        showTriggers: false,
        breadcrumbs: [
          {
            text: "Workflow",
            to: "/workflow",
            disabled: true,
          },
          {
            text: "rule",
            to: "#",
            disabled: true,
          },
          {
            text: "approval",
            disabled: false,
          },
        ],
        workflow: {
          title: this.$route.query.name || "untitled",
          trigger: null,
          conditions: null,
          payment: null,
          form: null,
          actions: null,
        },
      };
    }
  },
  mounted() {
    this.breadcrumbs[2].text = this.$route.query.name || "untitled";
  },

  watch: {
    "workflow.trigger": {
      deep: true,
      immediate: true,
      handler() {
        this.workflow.form = null;
        this.workflow.payment = null;
        this.workflow.conditions = null;
      },
    },
  },

  computed: {
    canShowConditions() {
      return (
        (this.workflow.trigger && this.workflow.trigger.value == "INVOICE") ||
        this.workflow.payment ||
        this.workflow.form
      );
    },

    canShowActions() {
      return this.workflow.conditions !== null;
    },
  },
};
</script>

<style lang="scss" scoped>
.items-center {
  align-items: center;
}

.workflow {
  height: 100%;

  &__wrapper {
    // display: flex;
    display: relative;
    height: 100%;
    padding: 10px 0px;

    .analytics {
      width: 31%;
      height: 100%;
      position: absolute;
      padding-top: 30px;
      left: 0;
      top: 0;
      bottom: 0;
    }

    .flows {
      flex: 1;
      overflow: auto;
      padding: 20px;
    }

    .flow-setup {
      position: absolute;
      // flex: 1;
      height: 100%;
      width: 69%;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      overflow: hidden;
      flex-direction: column;

      &__trigger {
        width: 100%;
        padding: 30px;
        background: #fff;
        box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
        border-radius: 6px;

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;

          .title {
            font-size: 30px;
            font-weight: 700;
            color: #8f96a1;
            text-transform: capitalize;
          }
        }
      }
    }
  }
}

.animate-down {
  &enter {
    transform: translateY(-10px);
    opacity: 0;
  }
  &enter-active,
  &leave-active {
    transition: all 0.3s ease-out;
  }

  &leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>