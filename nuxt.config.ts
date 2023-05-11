// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/algolia','nuxt-icon','@nuxtjs/tailwindcss'],
      algolia: {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        applicationId: process.env.ALGOLIA_APPLICATION_ID,
        instantSearch: {
          theme: 'satellite'
        },
        globalIndex: 'MANAGER',
        lite: true,
        cache: true
      },
      css: ['~/assets/css/tailwind.css'],
    
})
