// This middleware prevents users from acessing a route if they ARE NOT loggedIn
export default async function ({ store, redirect }) {
  if (!store.state.auth.isLoggedIn) {
    redirect("/login");
  }
}
