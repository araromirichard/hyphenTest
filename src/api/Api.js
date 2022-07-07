import axios from "axios";
//import store from '@/store'
export default () => {
  const api = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(JSON.stringify(error.response, null, 2));

      // const error_message = {
      //   msg:
      //     error.response.data.data[0].messages[0].message ||
      //     error.response.data.message ||
      //     error.response.message ||
      //     "An error occurred",
      //   status:
      //     error.response.data.data[0].status[0].status ||
      //     error.response.data.status ||
      //     error.response.status ||
      //     "error",
      // };

      // try {
      //   if (error.response.status === 401) {
      //     //this is for unauthorized request, you can choose to redirect the user to login page
      //     if (process.env.NODE_ENV === "development")
      //       console.log("user is unauthorized...400");

      //     //  store.dispatch('auth/LogoutUser')
      //   } else if (error.response.status === 400) {
      //     // this is for bad req
      //     if (process.env.NODE_ENV === "development")
      //       console.log("it's a bad request...400");
      //   } else if (error.response.status === 404) {
      //     // not found
      //     if (process.env.NODE_ENV === "development")
      //       console.log("it was not found...404");
      //   }

      //   console.log(JSON.stringify(error.response.data.message, null, 2));

      //   // return error message checking for the error message in the response no matter how deep the object is
      //   error_message = {
      //     msg:
      //       error.response.data.data[0].messages[0].message ||
      //       error.response.data.message ||
      //       error.response.message ||
      //       "An error occurred",
      //     status:
      //       error.response.data.data[0].status[0].status ||
      //       error.response.data.status ||
      //       error.response.status ||
      //       "error",
      //   };
      // } catch (err) {
      //   // return unknown error response
      //   error_message = {
      //     msg:
      //       error.response.data.data[0].messages[0].message ||
      //       error.response.data.message ||
      //       error.response.message ||
      //       "An error occurred",
      //     status:
      //       error.response.data.data[0].status[0].status ||
      //       error.response.data.status ||
      //       error.response.status ||
      //       "error",
      //   };
      // }
      return Promise.reject({
        msg: error.response.data.message || "An error occurred",
        status: error.response.data.statusCode,
      });
    }
  );

  return api;
};
