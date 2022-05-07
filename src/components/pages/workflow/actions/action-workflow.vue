<template>
  <div v-if="value != null">
    <div
      class="selected-action"
      :style="
        actionMeta.type == 'addDelay'
          ? 'border:3px dashed rgb(249, 238, 210)'
          : ''
      "
    >
      <div class="selected-action__icon">
        <div>
          <v-icon color="primary">mdi-lightning-bolt-outline </v-icon>
        </div>
      </div>
      <div class="selection-acion__text">
        <span class="selected-action__text-title"> {{ actionMeta.text }} </span>
        <span class="selected-action__text-description">
          channel: {{ channel }}
        </span>
      </div>
      <div class="selection-acion__actions">
        <button @click="$emit('remove-action', index)">
          <v-icon size="24" color="rgba(127, 145, 155, 0.4)"
            >mdi-close-circle-outline</v-icon
          >
        </button>
        <button @click="showDialog(actionMeta.type)">
          <v-icon size="24" color="rgba(127, 145, 155, 0.4)">mdi-cog</v-icon>
        </button>
      </div>
    </div>

    <v-timeline>
      <div class="d-flex mt-1">
        <v-btn
          v-if="isLast"
          @click="$emit('add-new-action')"
          fab
          dark
          height="45"
          width="45"
          color="#D7A47B"
          depressed
          class="mx-auto justify-center"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-timeline>

    <get-approval-action
      v-if="actionModal == 'PbotApproval'"
      @channel="channel = $event"
      v-model="data"
      ref="PbotApproval"
    />

    <send-email-action
      v-if="actionModal == 'hyphenEmail'"
       @channel="channel = $event"
      v-model="data"
      ref="hyphenEmail"
    />
    
    <add-to-payables-action v-if=" actionModal == 'hyphenAddToPayables'" v-model="data" ref="hyphenAddToPayables" />

    <!-- <send-form-action v-model="data" ref="sendForm" />

    <add-delay-action v-model="data" ref="addDelay" />

    <update-customer-action v-model="data" ref="updateCustomer" />

    <send-payment-action v-model="data" ref="SendPayment" />

    <connect-workflow-action v-model="data" ref="connectWorkflow" /> -->
  </div>
</template>

<script>
import AddDelayAction from "./addDelayAction.vue";
import AddToPayablesAction from "./addToPayablesAction.vue";
import ConnectWorkflowAction from "./connectWorkflowAction.vue";
import GetApprovalAction from "./getApprovalAction.vue";
import sendEmailAction from "./sendEmailAction.vue";
import SendFormAction from "./sendFormAction.vue";
import SendPaymentAction from "./sendPaymentAction.vue";
import UpdateCustomerAction from "./updateCustomerAction.vue";

export default {
  components: {
    GetApprovalAction,
    sendEmailAction,
    AddToPayablesAction,
    SendFormAction,
    AddDelayAction,
    UpdateCustomerAction,
    SendPaymentAction,
    ConnectWorkflowAction,
  },
  props: {
    value: {
      default: null,
    },
    index: {
      type: Number,
      default: null,
    },
    isLast: {
      // this would let us know if current condition is the last on the list
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      data: null,
      actionModal: null,
      channel:"N/A"
    };
  },

  mounted() {
    this.data = this.value;

    if (this.value?.fresh) {
      this.showDialog(this.value.type);
    }

    this.actionModal = this.value.type;
  },

  methods: {
    async showDialog(ref) {
      // this.actionModal = ref;
      await this.$nextTick();
      //call show function of modal component identified the "ref"
      this.$refs[ref].open();
    },
  },

  computed: {
    actionMeta() {
      if (typeof this.value === "object") {
        return this.actionsMeta.find(
          (action) => action.type === this.value.type
        );
      } else {
        return this.actionsMeta.find((action) => action.type === this.value);
      }
    },
  },

  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(this.value)) {
          this.$emit("input", newValue);
        }
        // send out the collected from the modal form
      },
    },

    value: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.data = newValue;
        // reset the modal form data
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.selected-action {
  margin: auto;
  width: 325px;
  height: 85px;
  background: #ffffff;
  border: 1px solid #f9eed2;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgba(127, 145, 155, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  color: #757575;

  &__icon {
    width: 44px;
    height: 41px;
    background: #f9eed2;
    border-radius: 8px;
    margin: auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selection-acion__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;

    .selected-action__text-title {
      font-weight: 600;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .selected-action__text-description {
      margin-top: 1px;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .selection-acion__actions {
    display: flex;
    height: 100%;
    flex-direction: column;
    border-left: 1px solid #f9eed2;
    width: 50px;
  }

  .selection-acion__actions button {
    flex: 1;
    color: rgba(5, 6, 7, 0.5);
    cursor: pointer;
    outline: none;
  }

  .selection-acion__actions button:first-child {
    border-bottom: 1px solid #f9eed2;
  }
}
</style>
