import api from "./Api";

export default {
  login(credentials) {
    return api().post("/auth/local", credentials);
  },

  registerUser(credentials){
      return api().post("/auth/register", credentials);
  }
};
