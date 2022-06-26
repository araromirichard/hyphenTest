<template>
  <div class="workflow">
    <div class="workflow__wrapper">
      <div class="analytics">
        <details-tab-workflow
          :runs="workflow.runs"
          :trigger="workflow.trigger"
          :schema="workflow.conditions"
          :inputs="workflow.inputs"
        />
      </div>

      <div class="flow-setup">
        <div class="d-flex pr-5" style="align-items: center">
          <v-breadcrumbs :items="breadcrumbs" style="font-weight: 600">
            <template v-slot:divider>
              <v-icon class="px-0">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <v-spacer></v-spacer>

          <v-btn @click="$router.go(-1)" text rounded large>
            <v-icon left>mdi-chevron-left</v-icon> Back
          </v-btn>
        </div>

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
            :isVisable="isPaymentTrigger"
            v-if="isPaymentTrigger"
          />

          <form-trigger
            ref="formTrigger"
            v-model="workflow.form"
            :isVisable="isFormTrigger"
            v-if="isFormTrigger"
          />

          <compose-workflow
            ref="conditions"
            v-model="workflow.conditions"
            :isVisable="canShowConditions"
            :trigger="workflow.trigger"
            @continue="workflow.composerIsReady = true"
            @inputs="workflow.inputs = $event"
            :trigger-data="
              isFormTrigger
                ? workflow.form
                : isPaymentTrigger
                ? workflow.payment
                : null
            "
            v-if="canShowConditions"
            @selected-fields="workflow.fields = $event"
          />

          <execute-actions-workflow
            v-if="canShowActions"
            ref="actions"
            :trigger="workflow.trigger"
            @publish="publishDialog = true"
            :isVisable="canShowActions"
            v-model="workflow.actions"
          />
        </div>
      </div>
    </div>

    <v-dialog
      v-model="publishDialog"
      :persistent="isPublishingWorkflow"
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

          <v-btn
            color="primary"
            @click="CREATE_WORKFLOW"
            elevation="1"
            x-large
            :loading="isPublishingWorkflow"
          >
            <v-icon left>mdi-chevron-right</v-icon> Save</v-btn
          >
          <button
            v-if="!isPublishingWorkflow"
            id="add-to-draft"
            disabled
            @click="addWorkflowToDraft"
          >
            No, Add to draft
          </button>
        </div>
      </div>
    </v-dialog>

    <!-- publish dialog -->

    <v-dialog
      v-model="publishDialogSucessful"
      max-width="550px"
      transition="dialog-transition"
    >
      <div class="publish-sucessful">
        <div class="publish-sucessful__header">
          <span class="t">Workflow Published</span>
          <v-btn @click="publishDialogSucessful = false" icon color="primary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="publish-sucessful__top">
          <v-btn color="success" small fab outlined>
            <v-icon>check</v-icon>
          </v-btn>
          <span>Workflow published successfully</span>
        </div>
        <div class="publish-sucessful__content">
          <span class="msg">
            Your workflow {{ workflow.title }}, was successfully saved and is
            ready to process data from your selected trigger.
          </span>

          <div class="mt-3">
            <v-btn
              color="primary"
              style="font-weight: bold"
              @click="showAdvance = !showAdvance"
              text
              >Advanced
              <v-icon v-if="!showAdvance" right>mdi-chevron-down</v-icon>
              <v-icon v-else>mdi-chevron-up</v-icon>
            </v-btn>

            <div v-if="showAdvance">
              <span
                style="color: #19283dcc; font-size: 16px"
                class="mb-2 mt-1 d-block"
              >
                To trigger this workflow using an external API or webhook
                service, make a POST request to the endpoint below
              </span>

              <!-- <v-text-field
                prefix="POST"
                v-model="workflow.webhook"
                disabled
                outlined
                append-icon="mdi-content-copy"
              ></v-text-field> -->

              <div class="api-cover">
                <button class="api-cover__req">POST</button>
                <div class="api-cover__url">{{ workflow.webhook }}</div>
                <v-btn icon style="margin-right: 15px"
                  ><v-icon>mdi-content-copy</v-icon></v-btn
                >
              </div>

              <span
                class="mt-1 d-block"
                style="color: #8f96a1; font-size: 14px"
              >
                <b>Note:</b> This endpoint is unique to this workflow and serves
                as a trigger. The payload must match the fields used in your
                workflow composition
              </span>
            </div>
          </div>

          <div class="mt-5 cta">
            <v-btn
              color="primary"
             to="/workflow"
              elevation="0"
              large
            >
              <v-icon left>mdi-chevron-right</v-icon> close</v-btn
            >
          </div>
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
import { mapActions } from "vuex";

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
        publishDialogSucessful: false,
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
        showAdvance: false,
        hypn_id: "",
        workflow: {
          title: this.$route.query.name || "untitled",
          trigger: "",
          runs: 0,
          conditions: null,
          fields: null,
          payment: null,
          form: null,
          composerIsReady: false,
          inputs: null,
          actions: [
            // {
            //   type: "PbotApproval",
            //   properties: {
            //     keys: ["identity", "organization id", "type", "name"],
            //     values: [
            //       "musk@mail.com",
            //       "organization id value",
            //       "human",
            //       "approval",
            //     ],
            //   },
            // },
            // {
            //   type: "hyphenEmail",
            //   properties: {
            //     keys: [
            //       "subject",
            //       "message",
            //       "to",
            //       "cc",
            //       "organization id",
            //       "name",
            //     ],
            //     values: [
            //       "Next step",
            //       "I am buying amazon next",
            //       "musk@mail.com",
            //       ["johndoe@gmail.com", "musk@mail.com", "janedoe@gmail.com"],
            //       2,
            //       "email",
            //     ],
            //   },
            // },
            // {
            //   type: "hyphenAddToPayables",
            //   properties: {
            //     keys: ["total", "amount_due", "organization", "name"],
            //     values: ["5000", "8,000", 2, "payables"],
            //   },
            // },
            // {
            //   type: "hyphenUpdateCustomer",
            //   properties: {
            //     keys: ["attribute", "tag", "term", "organization", "name"],
            //     values: ["Tag", ["high value", "wema bank"], "", 2, "customer"],
            //   },
            // },
            // {
            //   type: "hyphenForm",
            //   properties: {
            //     keys: [
            //       "form id",
            //       "form name",
            //       "identity",
            //       "organization",
            //       "name",
            //     ],
            //     values: [3, "Form 3", "musk@mail.com", 2, "form"],
            //   },
            // },
            // {
            //   type: "hyphenToWorkFlow",
            //   properties: {
            //     keys: ["workflow", "organization"],
            //     values: ["3", 2],
            //   },
            // },
            // {
            //   type: "hyphenDelay",
            //   properties: {
            //     keys: ["days", "organization", "type", "name"],
            //     values: [3, 2, "delay", "delay"],
            //   },
            // },
          ],
          webhook: "",
        },
        isPublishingWorkflow: false,
      };
    }
  },
  mounted() {
    this.breadcrumbs[2].text = this.$route.query.name || "untitled";
    this.showTriggers = true;
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    async CREATE_WORKFLOW() {
      this.isPublishingWorkflow = true;
      try {
        const { data } = await this.$store.dispatch(
          "workflow/createWorkflow",
          this.workflowPayload
        );
        this.workflow.webhook = "http://flow.hypn.so/" + data.workflow_id;
        console.log(JSON.stringify(data, null, 2));
        this.publishDialog = false;
        this.publishDialogSucessful = true;
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        this.showToast({
          sclass: "error",
          show: true,
          message: error.msg,
          timeout: 3000,
        });
      } finally {
        this.isPublishingWorkflow = false;
      }
    },

    addWorkflowToDraft() {
      this.publishDialog = false;
    },
  },

  watch: {
    "workflow.trigger": {
      deep: true,
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
        this.$nextTick(() => {
          this.$vuetify.goTo(this.$refs.paymentTrigger, this.scrollOptions);
        });
      }
    },

    isFormTrigger(val) {
      if (val) {
        this.$nextTick(() => {
          this.$vuetify.goTo(this.$refs.formTrigger, this.scrollOptions);
        });
      }
    },
  },

  computed: {
    canShowConditions() {
      return (
        this.isInvoiceTrigger ||
        this.workflow.payment !== null ||
        this.workflow.form !== null
      );
    },

    canShowActions() {
      return this.workflow.composerIsReady;
    },

    isPaymentTrigger() {
      if (this.workflow.trigger && this.workflow.trigger == "payment") {
        return true;
      }
      return false;
    },

    isFormTrigger() {
      if (this.workflow.trigger && this.workflow.trigger == "form") {
        return true;
      }
      return false;
    },

    isInvoiceTrigger() {
      if (this.workflow.trigger && this.workflow.trigger == "invoice") {
        return true;
      }
      return false;
    },

    workflowPayload() {
      return {
        user: this.$store.getters["auth/user"].id,
        source: this.workflow.trigger,
        organization: this.orgId,
        workflow_schema: {
          condition:this.workflow.conditions,
          actions: this.workflow.actions,
        },
        trigger_schema: this.workflow.fields,
        form: this.workflow.form,
        payment: this.workflow.payment,
        is_active: 1,
        workflow_title: this.workflow.title,
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
    padding: 30px 50px;
    text-align: center;

    .msg {
      font-size: 16px;
      color: #757575;
      line-height: 24px;
      display: block;
      margin-bottom: 30px;
    }

    #add-to-draft {
      display: block;
      margin: 50px auto 0px auto;
      background: transparent;
      color: #d7a47b;
      cursor: pointer;
      font-size: 17px;
      border-bottom: 1px solid #d7a47b;
    }
  }
}

.publish-sucessful {
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

  &__top {
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 2px;
    padding: 20px;
    background-color: #f6f3ee;
    span {
      display: inline-block;
      margin-left: 10px;
      font-size: 21px;
      font-weight: bold;
      color: var(--primary-base);
    }
  }

  &__content {
    background-color: #f8f7f4;
    padding: 20px 50px;

    .msg {
      font-size: 16px;
      color: #757575;
      line-height: 24px;
      display: block;
      margin-bottom: 30px;
    }

    .cta {
      display: flex;
      justify-content: end;
    }
  }

  .api-cover {
    display: flex;
    align-items: center;
    border: 1px solid #19283d1a;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgba(25, 40, 61, 0.1);
    border-radius: 3px;
    margin: 10px 0px;

    &__req {
      height: 55px;
      padding: 0px 20px;
      background-color: #f4f5f6;
      color: #00233880;
      font-weight: bold;
      border-radius: 3px;
      font-family: "Inter";
    }

    &__url {
      padding: 0px 25px;
      flex: 1;
      color: #596a73;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
