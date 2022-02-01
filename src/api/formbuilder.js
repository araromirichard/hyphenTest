import api from "./Api";

export default {
  create(form) {
    return api().post("/forms", form, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
  },

  getAllForms() {
    return api().get("/forms", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
  },
};
