const path = require(`path`)
const Fiber = require(`fibers`)

const {wordpressSelectors, wordpressPatterns} = require(`./src/whitelist`)

const getAuthBase64 = (user, pass) =>
  Buffer.from(`${user}:${pass}`).toString(`base64`)

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`
console.log(`Using environment config: ${activeEnv}`)

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

const sourceWP = {
  url: `${process.env.WORDPRESS_URL}/graphql`,
  headers:
    activeEnv === `development`
      ? {}
      : {
          Authorization: `Basic ${getAuthBase64(
            process.env.AUTH_USERNAME,
            process.env.AUTH_PASSWORD
          )}`,
        },
}

module.exports = {
  siteMetadata: {
    title: `Fortis Development Group`,
    description: `A highly personal approach to development`,
    siteUrl: `https://www.fortis.com.au`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        ...sourceWP,
      },
    },
    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
        trackingCode: `6351172`,
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [
          `Array.prototype.every`,
          `Array.prototype.includes`,
          `smoothscroll`,
          `IntersectionObserver`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
        fiber: Fiber,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /src\/images\/inline/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        webpQuality: 90,
        quality: 90,
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fortis Development Group`,
        short_name: `Fortis`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: require.resolve(`./src/images/fortis-icon.png`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: `825176704560092`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        content: [path.join(process.cwd(), `src/**/!(*.d).{js,svg,html}`)],
        ignore: [
          `src/components/TheWrap/style.module.scss`,
          `src/fortis-styles/base/_custom-reset.scss`,
          `flickity`,
        ],
        whitelist: wordpressSelectors,
        whitelistPatterns: wordpressPatterns,
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_&:@<>()/]+/g) || []
              }
            },
            extensions: [`html`, `js`, `svg`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [`X-Frame-Options: ALLOW-FROM http://ami.responsivedesign.is/`],
          '/*.js': [`Expires: 1y`, `Cache-Control: public, max-age=31536000`],
          '/favicon.ico': [`Expires: 1y`, `Cache-Control: public, max-age=31536000`],
        },
      },
    },
  ],
}
