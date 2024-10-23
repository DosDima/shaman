// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    ssr: false,
    modules: ["@nuxt/eslint"],
    css: ["~/assets/css/main.css"],
    typescript: {
        typeCheck: true
    },
    hooks: {
        'prerender:routes' ({ routes }) {
            routes.clear() // Do not generate any routes (except the defaults)
        }
    },
})
