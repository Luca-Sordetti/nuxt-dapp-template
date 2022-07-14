export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth();

    // Redirect to login if not authenticated
    if ( !auth.isAuthenticated ) {
        return navigateTo("/auth/login");
    }
});