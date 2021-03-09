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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-PJGQRR71MS'],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
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
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
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
        extensions: ['tsx', 'ts', 'css', 'jpg', 'png', 'jpeg'],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     commonmark: true,
    //     footnotes: true,
    //     pedantic: true,
    //     gfm: true,
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-external-links',
    //         options: {
    //           target: '_blank',
    //           rel: 'nofollow noopener noreferrer',
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}
