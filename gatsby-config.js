module.exports = {
    siteMetadata: {
        title: `CSL Dış Cephe Sistemleri`,
        description: `CSL Metal`,
        author: `@duqqqq&@soulwind420`,
        siteUrl: `https://cslmultinewkadirboi.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,

        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `dominantColor`,
                    quality: 90,
                    breakpoints: [400, 750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },

        // It needs to be the first one to work with gatsby-remark-images

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets/img`,
                name: `uploads`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets/homepageimg`,
                name: `homepageimages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/config/translations`,
                name: `translations`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/config/menu`,
                name: `menu`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: `images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/products`,
                name: `products`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/config/language-mapping`,
                name: `language-mapping`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: `uploads`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1040,
                            linkImagesToOriginal: false,
                            quality: 90,
                        },
                    },
                    `gatsby-remark-lazy-load`,
                    `gatsby-remark-prismjs`, // It needs to be the last one
                ],
            },
        },

        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,

        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Open Sans`,
                    `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby MLP`,
                short_name: `Gatsby mlp`,
                start_url: `/`,
                background_color: `#16202c`,
                theme_color: `#16202c`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `documents`,
                path: `${__dirname}/static/assets/documents`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
