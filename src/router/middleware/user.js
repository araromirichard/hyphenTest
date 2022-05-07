/* This middleware is used ot fetch user details from the database and store it in the store.
 *  if it is not present in the store, it will fetch it from the database and store it in the store.
 */

export default async function ({ store, redirect }) {
  console.log("userDetails middleware");
  let userId = localStorage.getItem("userId");

  // user details is empty and userId is present in the local storage
  if (store.state.auth.user == null && userId != null) {
    if (process.env.NODE_ENV === "development") {
      console.log("fetching user details...");
    }

    try {
      await store
        .dispatch("auth/fetchUserDetails", userId)
        .then(async () => {
          await store.dispatch("organizations/getOrganizationToken");
        })
        .then(async () => {
          await store.dispatch("organizations/getOrganizationById");
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
