// This middleware prevents users from acessing a route if they ARE loggedIn
export default async function ({ store, redirect }) {
    console.log(store.state.auth.isLoggedIn)
    if(store.state.auth.isLoggedIn){
        redirect("/welcome");
    }
   }
   