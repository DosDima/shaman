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
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'og:image', content: 'https://shamanictravel.ru/picture/lina_1.jpg'},
                {name: 'og:type', content: 'website'},
                {name: 'format-detection', content: 'telephone=no'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Elbasan&display=swap'},
                {rel: 'canonical', href: 'https://shamanictravel.ru/'},
            ],
        }
    }
})
