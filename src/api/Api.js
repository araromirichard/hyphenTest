import axios from "axios";
//import store from '@/store'
export default () => {
  const api = axios.create({
    baseURL: "https://api.onpbot.com/v1/",
  });
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      let error_message = null;

      try {
        if (error.response.status === 401) {
          if (process.env.NODE_ENV === "development")
            console.log("you are unauthorized...401");
          //  store.dispatch('auth/LogoutUser')
        } else if (error.response.status === 400) {
          if (process.env.NODE_ENV === "development")
            console.log("it's a bad request...400");
        } else if (error.response.status === 404) {
          if (process.env.NODE_ENV === "development")
            console.log("it was not found...404");
        }

         console.log(JSON.stringify(error.response.data, null, 2));

        error_message = {
          msg:
          error.response.data.data[0].messages[0].message != undefined
          ?   error.response.data.data[0].messages[0].message :
            'Unknown Error',
          
              status: error.response.status != undefined ? error.response.status : null,
        };
      } catch (err) {
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
