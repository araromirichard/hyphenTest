import axios from "axios";
//import store from '@/store'
export default () => {
  const api = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      let error_message = null;

      try {
        if (error.response.status === 401) {
          //this is for unauthorized request, you can choose to redirect the user to login page
          if (process.env.NODE_ENV === "development")
            console.log("user is unauthorized...400");

          //  store.dispatch('auth/LogoutUser')
        } else if (error.response.status === 400) {
          // this is for bad req
          if (process.env.NODE_ENV === "development")
            console.log("it's a bad request...400");
        } else if (error.response.status === 404) {
          // not found
          if (process.env.NODE_ENV === "development")
            console.log("it was not found...404");
        }

        //  we try to return the formatted response
        error_message = {
          msg:
            error.response.data.data[0].messages[0].message != undefined
              ? error.response.data.data[0].messages[0].message
              : "Unknown Error",

          status:
            error.response.status != undefined ? error.response.status : null,
        };
      } catch (err) {
        // return unknown error response
        error_message = {
          msg: "An error occurred",
          status: null,
        };
      }
      return Promise.reject(error_message);
    }
  );

  return api;
};
