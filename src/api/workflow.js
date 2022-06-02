import api from "./Api";

export default {
  createWorkflow(payload) {
    return api().post("/workflows", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  getAllInvoiceFieldsOptions() {
    return api().get("/workflows/options?type=invoice", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  getPaymentFieldsOptions() {
    return api().get("/workflows/options?type=payment", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  getAllOperators() {
    return api().get("/workflows/options?type=operator", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  getAllWorkflows() {
    return api().get("/workflows", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
