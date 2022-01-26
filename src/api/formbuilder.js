import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-test-json-server.herokuapp.com/",

  withCredentials: false,
  Headers: {
    Accept: "application.json",
    "content-type": "application.json",
  },
});
export default {
  postForm(dataPayload) {
    return apiClient.post("/organID", dataPayload);
  },
  getAllForms() {
    return apiClient.get(`/organID/`);
  },
  getForm(id) {
    return apiClient.get(`/organID/${id}`);
  },
  updateForm(id, dataPayload) {
    return apiClient.put(`/organID/${id}`, dataPayload);
  },
  deleteForm(id) {
    return apiClient.delete(`/organID/${id}`);
  },
};
