export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth();
    return auth.check();
});