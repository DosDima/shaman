// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    ssr: false,
    modules: ["@nuxt/eslint", '@nuxt/icon', '@nuxtjs/google-fonts'],
    css: ["~/assets/css/main.css"],
    typescript: {
        typeCheck: true
    },
    hooks: {
        'prerender:routes'({routes}) {
            routes.clear() // Do not generate any routes (except the defaults)
        }
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Elbasan&display=swap'}
            ],
        }
    }
})
