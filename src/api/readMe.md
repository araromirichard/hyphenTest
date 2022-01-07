all direct api endpoints are placed here

 this line is used for auth where token is gotten from browser local storage
 headers: {
        authorization: localStorage.getItem("token"),
      }