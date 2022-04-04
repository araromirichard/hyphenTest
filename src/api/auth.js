import api from "./Api";

export default {
  login(credentials) {
    return api().post("/auth/local", credentials);

    // credentials: {
    //   "identifier":"nulled08@ahem.email",
    //   "password":"password"
    // }
  },

  getUser() {
    return api().get("/users/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  registerUser(credentials) {
    return api().post("/auth/local/register", credentials);

    // credentials: {
    //   "username":"gdi",
    //   "email":"sa@muhhhlaa.me",
    //   "password":"password",
    //   "Firstname":"Samson",
    //   "Lastname":"Aligba"
    //   }
  },

  registerCoWorkerUser(credentials) {
    return api().post("/auth/local/register", credentials);

    // credentials: {
    //   "username":"blue014",
    //   "email":"blue007@ahem.email",
    //   "password":"password",
    //   "role": "coworker",
    //   "Firstname":"Olu",
    //   "Lastname":"Jacobs",
    //   "organizations":{
    //       "id":7
    //   }
    //   }
  },

  forgotPassword(credentials) {
    return api().post("/auth/forgot-password", credentials);
  },
};
