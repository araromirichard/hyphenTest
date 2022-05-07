import { mapGetters } from "vuex";
export default {
  data() {
    return {
      actionsMeta: [
        {
          text: "Get Approval",
          type: "PbotApproval",
          icon: require("@/assets/actions-get-approval.svg"),
          active: true,
          meta: {
            type: "PbotApproval",
            properties: {
              keys: ["identity", "organization id", "type", "name"],
              values: ["", "", "human", "approval"],
            },
          },
        },
        {
          text: "Send Email",
          type: "hyphenEmail",
          icon: require("@/assets/actions-send-email.svg"),
          active: true,
          meta: {
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
              values: ["", "", "", "", "", ""],
            },
          },
        },
        {
          text: "Add to Payables",
          type: "hyphenAddToPayables",
          icon: require("@/assets/actions-add-to-payables.svg"),
          active: true,
          meta: {
            type: "hyphenAddToPayables",
            properties: {
              keys: [],
              values: [],
            },
          },
        },
        {
          text: "Send Payment",
          type: "SendPayment",
          icon: require("@/assets/actions-send-payment.svg"),
          active: true,
        },
        {
          text: "Update Customer",
          type: "updateCustomer",
          icon: require("@/assets/actions-update-customer.svg"),
          active: true,
        },
        {
          text: "Update Vendor",
          type: "updateVendor",
          icon: require("@/assets/actions-update-vendor.svg"),
          active: true,
        },
        {
          text: "Send form",
          type: "sendForm",
          icon: require("@/assets/actions-send-form.svg"),
          active: true,
        },
        {
          text: "Connect Workflow",
          type: "connectWorkflow",
          icon: require("@/assets/actions-connect-workflow.svg"),
          active: true,
        },
        {
          text: "Add Delay",
          type: "addDelay",
          icon: require("@/assets/actions-add-delay.svg"),
          active: true,
        },
        {
          text: "Send to Webhook",
          type: "sendToWebhook",
          icon: require("@/assets/actions-send-to-webhook.svg"),
          active: true,
        },
        {
          text: "Send Invoice",
          type: "sendInvoice",
          icon: require("@/assets/actions-send-invoice.svg"),
          active: false,
        },
        {
          text: "Send to ERP",
          type: "sendToERP",
          icon: require("@/assets/actions-send-to-erp.svg"),
          active: false,
        },
      ],
    };
  },
  computed: {
    helloWorld() {
      return "wow";
    },

    ...mapGetters({
      user: "auth/user",
      orgId: "auth/organizationId",
    }),
  },
};
