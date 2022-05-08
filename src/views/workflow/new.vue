<template>
  <div class="workflow">
    <div class="workflow__wrapper">
      <div class="analytics">
        <details-tab-workflow
          :runs="workflow.runs"
          :trigger="workflow.trigger"
        />
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
            <div>
              <transition name="animate-down">
                <trigger-workflow
                  v-if="showTriggers"
                  v-model="workflow.trigger"
                />
              </transition>
            </div>
          </div>

          <payment-trigger
            ref="paymentTrigger"
            v-model="workflow.payment"
            v-if="isPaymentTrigger"
          />

          <form-trigger
            ref="formTrigger"
            v-model="workflow.form"
            v-if="isFormTrigger"
          />

          <compose-workflow
            ref="conditions"
            :inputs="inputItems"
            v-model="workflow.conditions"
            :isVisable="canShowConditions"
            v-if="canShowConditions"
          />

          <execute-actions-workflow
            v-if="canShowActions"
            ref="actions"
            @publish="publishDialog = true"
            :isVisable="canShowActions"
            v-model="workflow.actions"
          />
        </div>
      </div>
    </div>

    <v-dialog
      v-model="publishDialog"
      max-width="550px"
      transition="dialog-transition"
    >
      <div class="publish">
        <div class="publish__header">
          <span class="t">Confirm Workflow</span>
          <v-btn @click="publishDialog = false" icon color="primary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="publish__content">
          <span class="msg"
            >Confirm this workflow is completed and ready for use</span
          >

          <v-btn color="primary" @click="CREATE_WORKFLOW" elevation="1" x-large>
            <v-icon left>mdi-chevron-right</v-icon> Save</v-btn
          >
          <button id="add-to-draft" @click="addWorkflowToDraft">
            No, Add to draft
          </button>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import ExecuteActionsWorkflow from "../../components/pages/workflow/actions/execute-actions-workflow.vue";
import ComposeWorkflow from "../../components/pages/workflow/compose/compose-workflow.vue";
import detailsTabWorkflow from "../../components/pages/workflow/details-tab-workflow.vue";
import TriggerWorkflow from "../../components/pages/workflow/trigger-workflow.vue";
import FormTrigger from "../../components/pages/workflow/trigger/form-trigger.vue";
import PaymentTrigger from "../../components/pages/workflow/trigger/payment-trigger.vue";

import { operators } from "@/utils/ManagerApprovalOptions.js";

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
        publishDialog: false,
        showTriggers: false,
        scrollOptions: {
          duration: 500,
          offset: 0,
          easing: "easeInOutCubic",
          container: ".flows",
        },
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
          runs: 0,
          conditions: null,
          payment: null,
          form: null,
          actions: [
            {
              type: "PbotApproval",
              properties: {
                keys: ["identity", "organization id", "type", "name"],
                values: [
                  "musk@mail.com",
                  "organization id value",
                  "human",
                  "approval",
                ],
              },
            },
            {
              type: "hyphenEmail",
              properties: {
                keys: [
                  "subject",
                  "message",
                  "to",
                  "cc",
                  "organization id",
                  "name",
                ],
                values: [
                  "Next step",
                  "I am buying amazon next",
                  "musk@mail.com",
                  ["johndoe@gmail.com", "musk@mail.com", "janedoe@gmail.com"],
                  2,
                  "email",
                ],
              },
            },
            {
              type: "hyphenAddToPayables",
              properties: {
                keys: ["total", "amount_due", "organization", "name"],
                values: ["5000", "8,000", 2, "payables"],
              },
            },
            {
              type: "hyphenUpdateCustomer",
              properties: {
                keys: ["attribute", "tag", "term", "organization", "name"],
                values: ["Tag", ["high value", "wema bank"], "", 2, "customer"],
              },
            },
            {
              type: "hyphenForm",
              properties: {
                keys: [
                  "form id",
                  "form name",
                  "identity",
                  "organization",
                  "name",
                ],
                values: [3, "Form 3", "musk@mail.com", 2, "form"],
              },
            },
            {
              type: "hyphenToWorkFlow",
              properties: {
                keys: ["workflow", "organization"],
                values: ["3", 2],
              },
            },
            {
              type: "hyphenDelay",
              properties: {
                keys: ["days", "organization", "type", "name"],
                values: [3, 2, "delay", "delay"],
              },
            },
          ],
        },
      };
    }
  },
  mounted() {
    this.breadcrumbs[2].text = this.$route.query.name || "untitled";
    this.showTriggers = true;
  },

  methods: {
    CREATE_WORKFLOW() {
      this.publishDialog = false;
    },

    addWorkflowToDraft() {
      this.publishDialog = false;
    },
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

    workflowPayload: {
      deep: true,
      immediate: true,
      handler(val) {
        console.log(JSON.stringify(val, null, 2));
      },
    },

    canShowConditions(val) {
      if (val) {
        this.$nextTick(() => {
          this.$vuetify.goTo(this.$refs.conditions, this.scrollOptions);
        });
      }
    },

    canShowActions(val) {
      if (val) {
        this.$nextTick(() => {
          this.$vuetify.goTo(this.$refs.actions, this.scrollOptions);
        });
      }
    },

    isPaymentTrigger(val) {
      if (val) {
        console.log("payment scroll");
        this.$nextTick(() => {
          this.$vuetify.goTo(this.$refs.paymentTrigger, this.scrollOptions);
        });
      }
    },

    isFormTrigger(val) {
      if (val) {
        console.log("form scroll");
        this.$nextTick(() => {
          this.$vuetify.goTo(this.$refs.formTrigger, this.scrollOptions);
        });
      }
    },
  },

  computed: {
    inputItems() {
      if (this.workflow.trigger && this.workflow.trigger.value == "INVOICE") {
        return {
          fields: [
            "Invoice Total",
            "Invoice Number",
            "Vendor Name",
            "Invoice Date",
            "PO Number",
            "Invoice Type",
            "Net Term",
            "Due Date",
          ],
          operators: operators,
        };
      } else {
        return {
          fields: [
            "email",
            "Total",
            "PO Number",
            "Registered Date",
            "Due Date",
          ],
          operators: operators,
        };
      }
    },
    canShowConditions() {
      return (
        this.isInvoiceTrigger || this.workflow.payment || this.workflow.form
      );
    },

    canShowActions() {
      return this.workflow.conditions !== null;
    },

    isPaymentTrigger() {
      if (this.workflow.trigger && this.workflow.trigger.value == "PAYMENT") {
        return true;
      }
      return false;
    },

    isFormTrigger() {
      if (this.workflow.trigger && this.workflow.trigger.value == "FORM") {
        return true;
      }
      return false;
    },

    isInvoiceTrigger() {
      if (this.workflow.trigger && this.workflow.trigger.value == "INVOICE") {
        return true;
      }
      return false;
    },

    workflowPayload() {
      return {
        id: this.workflow.id, // rand it by time stamp for now
        name: this.workflow.title,
        trigger: this.workflow.trigger?.value || "",
        schema: this.workflow.conditions, // data gotten from workflow component
        actions: this.workflow.actions, // data gotten from workflo actions component
      };
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

.publish {
  border-radius: 8px;
  background-color: #fff;
  &__header {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .t {
      color: var(--v-primary-base);
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__content {
    background-color: #fefcf8;
    padding: 60px 120px;
    text-align: center;

    .msg {
      font-size: 17px;
      color: #757575;
      line-height: 24px;
      display: block;
      margin-bottom: 30px;
    }

    #add-to-draft {
      display: block;
      margin: 20px auto 0px auto;
      background: transparent;
      color: #d7a47b;
      cursor: pointer;
      font-size: 17px;
      border-bottom: 1px solid #d7a47b;
    }
  }
}
</style>
