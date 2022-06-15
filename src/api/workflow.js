import api from "./Api";

export default {
  createWorkflow(payload) {
    return api().post("/workflows", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  updateworkflow(payload) {
    return api().put(`/workflows/${payload.id}`, payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  deleteWorkflow(id) {
    return api().delete(`/workflows/${id}`, {
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

  getWorkflowById(id) {
    return api().get("/workflows/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
