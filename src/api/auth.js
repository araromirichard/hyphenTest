import api from "./Api";

export default {
  login(credentials) {
    return api().post("/auth/local", credentials);

    // {
    //   "identifier":"nulled08@ahem.email",
    //   "password":"password"
    // }
  },

  registerUser(credentials){
      return api().post("/auth/register", credentials);

      // {
      //   "username":"gdi",
      //   "email":"sa@muhhhlaa.me",
      //   "password":"password",
      //   "Firstname":"Samson",
      //   "Lastname":"Aligba"
      //   }
  },

  registerCoWorkerUser(credentials){
    return api().post('/auth/local/register',credentials);

    // {
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
  }
};
