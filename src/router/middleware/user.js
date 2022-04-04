/* This middleware is used ot fetch user details from the database and store it in the store.
 *  if it is not present in the store, it will fetch it from the database and store it in the store.
 */

<<<<<<< HEAD
export default async function ({ store, redirect }) {
  console.log("userDetails middleware");
  let userId = localStorage.getItem("userId");

  // user details is empty and userId is present in the local storage
  if (store.state.auth.user == null && userId != null) {
    if (process.env.NODE_ENV === "development") {
      console.log("fetching user details...");
    }

    try {
      await store.dispatch("auth/fetchUserDetails", userId).then(async () => {
        await store.dispatch("organizations/getOrganizationToken");
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      redirect("/error");
    }
  } else {
    // user details is not empty and userId is present in the local storage
    // or user details is empty and userId is not present in the local storage
    if (process.env.NODE_ENV === "development") {
      console.log("user might already exists...");
    }
  }
}
=======
export default async function({ store, redirect }) {
    console.log("userDetails middleware");
    let userId = localStorage.getItem("userId");

    // user details is empty and userId is present in the local storage
    if (store.state.auth.user == null && userId != null) {
        if (process.env.NODE_ENV === "development") {
            console.log("fetching user details...");
        }

        try {
            await store.dispatch("auth/fetchUserDetails", userId).then(async() => {
                await store.dispatch("organizations/getOrganizationToken");
            });
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            redirect("/error");
        }
    } else {
        // user details is not empty and userId is present in the local storage
        // or user details is empty and userId is not present in the local storage
        if (process.env.NODE_ENV === "development") {
            console.log("user might already exists...");
        }
    }
}
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
