import api from "./Api";

export default {
  
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
};
