/* eslint-disable @typescript-eslint/camelcase */
const path = require('path')

module.exports = {
  pathPrefix: '/jordangarcia.me',
  siteMetadata: {
    title: `Who is Jordan Garcia?`,
    description: `Senior Software Engineer at @invitae. Currently residing in New York, New York.`,
    author: `@whoisjordangarcia`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'UA-86912357-1',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        //gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        //gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        //dataLayerName: 'YOUR_DATA_LAYER_NAME'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-86912357-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        //experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: 'example.com'
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jordangarcia.me`,
        short_name: `jordangarcia.me`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/man-technologist-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          pages: path.resolve(__dirname, 'src/components'),
          static: path.resolve(__dirname, 'src/static'),
          styles: path.resolve(__dirname, 'src/styles'),
          images: path.resolve(__dirname, 'src/images'),
        },
        extensions: ['tsx', 'ts', 'css'],
      },
    },
  ],
}
