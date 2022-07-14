/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/css/tailwind.css",
        "./tailwind.config.{js,ts}",

        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}