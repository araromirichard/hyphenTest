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
  getForm(id) {
    return api().get("/forms/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  updateForm(id, form) {
    return api().put("/forms/" + id, form, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  deleteForm(id) {
    return api().delete("/forms/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
