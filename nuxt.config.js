export default {

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        ],
        script: [
            { src: 'jquery-3.5.1.js' },
            { src: 'pdfmake.min.js' },
            { src: 'vfs_fonts.js' },
            { src: 'datatables.min.js' },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/css/datatables.min.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}