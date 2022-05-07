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
                "organization id",
                "name",
              ],
              values: [
                "amount_due",
                this.paymentType,
                "due_date",
                "invoice id value",
                "organization id value",
                "payment",
              ],
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
              keys: ["attribute", "tag", "term", "organization id", "name"],
              values: [
                "attribute value",
                "tag value",
                "term value",
                "organization id value",
                "name value",
              ],
            },
          },
        },
        {
          text: "Update Vendor",
          type: "updateVendor",
          icon: require("@/assets/actions-update-vendor.svg"),
          active: true,
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
                "organization id",
                "name",
              ],
              values: [
                "form id value",
                "form name value",
                "identity value",
                "organization id value",
                "form",
              ],
            },
          },
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
