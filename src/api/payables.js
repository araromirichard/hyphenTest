import api from "./Api";
export default {
  addInvoiceToPayable(payload) {
    return api().post("transactions/payables", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
