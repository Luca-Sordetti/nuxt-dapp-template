export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth();

    // Redirect to home if authenticated
    if ( auth.isAuthenticated ) {
        return navigateTo("/");
    }
});