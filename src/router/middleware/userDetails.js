export default async function ({
    next,
    store
}) {

    let userId = localStorage.getItem('userId');

    if (store.state.user == null && userId != null) {
        try {
            await store.dispatch('auth/fetchUserDetails',userId);
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
        } finally {
            next();
        }
    }

}