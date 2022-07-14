import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ["~/assets/css/app.css"],
    buildModules: [
        "@pinia/nuxt",
    ],
    modules: [
        "@nuxtjs/tailwindcss"
    ]
});
