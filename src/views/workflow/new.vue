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

        <div class="mt-10 pa-10">
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
            v-model="workflow.schema"
            v-if="workflow.trigger && workflow.trigger.value == 'FORM'"
          />

          <compose-workflow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          schema: null,
          payment: null,
        },
      };
    }
  },
  mounted() {
    this.breadcrumbs[2].text = this.$route.query.name || "untitled";
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
    display: flex;
    height: 100%;
    padding: 10px 0px;

    .analytics {
      width: 25%;
      height: 100%;
      padding-top: 30px;
    }

    .flow-setup {
      flex: 1;
      height: 100%;

      &__trigger {
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
