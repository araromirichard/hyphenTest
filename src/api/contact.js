import api from "./Api";
export default {
  getAllVendors(orgId) {
    return api().get(`organizations/${orgId}/vendors`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
