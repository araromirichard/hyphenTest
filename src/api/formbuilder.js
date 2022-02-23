import api from "./Api";

export default {
  create(form) {
    return api().post("/forms", form, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  getAllForms() {
    return api().get("/forms", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
