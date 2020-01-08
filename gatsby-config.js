let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`
console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

module.exports = {
  siteMetadata: {
    title: `Fortis Development Group`,
    description: `Tailoring places to life’s rituals`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `${process.env.WORDPRESS_URL}/graphql`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-hubspot`,
    //   options: {
    //       trackingCode: "6351172",
    //       respectDNT: true,
    //       productionOnly: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `hwx4ktl`,
        },
      },
    },
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /src\/images\/inline/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fortis Development Group`,
        short_name: `Fortis`,
        start_url: `/`,
        background_color: `#f5f2ed`,
        theme_color: `#f5f2ed`,
        display: `minimal-ui`,
        icon: require.resolve(`./src/images/ode-icon.png`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        content: ['public/*.html', 'public/**/*.html', 'src/**/*.js','src/*.js', 'src/images/*.svg', 'src/images/**/*.svg'],
        ignore: [`/src/components/FormModal/_index.scss`, `/src/components/TheWrap/style.module.scss`, `/src/styles/base/_custom-reset.scss`],
        whitelist: [`albatross`],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_&:@<>]+/g) || [];
              }
            },
            extensions: ['html', 'js', 'svg'],
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: ALLOW-FROM http://ami.responsivedesign.is/",
          ],
          "/*.js": [
            "Expires: 1y",
            "Cache-Control: public, max-age=31536000",
          ],
          "/favicon.ico": [
            "Expires: 1y",
            "Cache-Control: public, max-age=31536000",
          ],
        },
      },
    },
  ],
}
