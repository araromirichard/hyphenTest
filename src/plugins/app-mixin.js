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
              keys: ["identity", "organization", "type", "name"],
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
              keys: ["subject", "message", "to", "cc", "organization", "name"],
              values: ["", "", "", "", "", "email"],
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
              keys: ["total", "amount_due", "organization", "name"],
              values: [],
            },
          },
        },
        {
          text: "Send Payment",
          type: "hyphenSendPayment",
          icon: require("@/assets/actions-send-payment.svg"),
          active: true,
          meta: {
            type: "hyphenSendPayment",
            properties: {
              keys: [
                "amount_due",
                "payment",
                "due_date",
                "invoice",
                "organization",
                "name",
              ],
              values: ["amount_due", this.paymentType, "", "", "", ""],
            },
          },
        },
        {
          text: "Update Customer",
          type: "hyphenUpdateCustomer",
          icon: require("@/assets/actions-update-customer.svg"),
          active: true,
          meta: {
            type: "hyphenUpdateCustomer",
            properties: {
              keys: ["attribute", "tag", "term", "organization", "name"],
              values: ["", "", "", "", "update customer"],
            },
          },
        },

        {
          text: "Update Vendor",
          type: "hyphenUpdateVendor",
          icon: require("@/assets/actions-update-vendor.svg"),
          active: true,
          meta: {
            type: "hyphenUpdateVendor",
            properties: {
              keys: ["attribute", "tag", "term", "organization", "name"],
              values: ["", "", "", "", "update vendor"],
            },
          },
        },
        {
          text: "Send form",
          type: "hyphenForm",
          icon: require("@/assets/actions-send-form.svg"),
          active: true,
          meta: {
            type: "hyphenForm",
            properties: {
              keys: [
                "form id",
                "form name",
                "identity",
                "organization",
                "name",
              ],
              values: ["", "", "", "", "form"],
            },
          },
        },
        {
          text: "Connect Workflow",
          type: "hyphenToWorkFlow",
          icon: require("@/assets/actions-connect-workflow.svg"),
          active: true,
          meta: {
            type: "hyphenToWorkFlow",
            properties: {
              keys: ["workflow", "organization"],
              values: ["", ""],
            },
          },
        },
        {
          text: "Add Delay",
          type: "hyphenDelay",
          icon: require("@/assets/actions-add-delay.svg"),
          active: true,
          meta: {
            type: "hyphenDelay",
            properties: {
              keys: ["days", "organization", "type", "name"],
              values: ["", "", "", "delay", "delay"],
            },
          },
        },
        {
          text: "Send to Webhook",
          type: "hyphenToWebhook",
          icon: require("@/assets/actions-send-to-webhook.svg"),
          active: true,
          meta: {
            type: "hyphenToWebhook",
            properties: {
              keys: ["webhook_url", "organization", "name"],
              values: ["", "", "", "webhook"],
            },
          },
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
    walletBalance() {
      return "14,000.00";
    },

    ...mapGetters({
      user: "auth/user",
      orgId: "auth/organizationId",
    }),
  },
};
