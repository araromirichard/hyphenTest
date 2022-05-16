const v = {
  // user: "id",
  // source: "invoice",
  // organization: 2,
  // workflow_schema: {
    condition: {
      type: "group",
      properties: {
        type: "and",
        conditions: [
          {
            type: "group",
            properties: {
              type: "and",
              conditions: [
                {
                  type: "comparison",
                  properties: {
                    type: "!=",
                    field: "Invoice Total",
                    target: "5000",
                  },
                },
                {
                  type: "comparison",
                  properties: {
                    type: "<",
                    field: "Invoice Date",
                    target: "20000",
                  },
                },
              ],
            },
          },
          {
            type: "group",
            properties: {
              type: "and",
              conditions: [
                {
                  type: "comparison",
                  properties: {
                    type: "=",
                    field: "Invoice Date",
                    target: "100",
                  },
                },
                {
                  type: "comparison",
                  properties: {
                    type: "<",
                    field: "PO Number",
                    target: "1222",
                  },
                },
              ],
            },
          },
          {
            type: "comparison",
            properties: {
              type: "<",
              field: "Invoice Date",
              target: "5000",
            },
          },
        ],
      },
    },
  //   actions: [],
  // },
  // trigger_schema: ["Invoice Total", "Invoice Date", "PO Number"],
  // form: null,
  // payment: null,
  // is_active: 1,
  // workflow_title: "hello",
};
