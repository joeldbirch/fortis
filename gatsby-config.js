module.exports = {
  siteMetadata: {
    title: `Ode of Toorak`,
    description: ``,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "6351172",
          respectDNT: true,
          productionOnly: true,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`fetch`]
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
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
        name: `Bower`,
        short_name: `Bower`,
        start_url: `/`,
        background_color: `#dfc2b2`,
        theme_color: `#dfc2b2`,
        display: `minimal-ui`,
        icon: require.resolve(`./src/images/bower-icon.png`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        content: ['public/**/*.html', 'src/**/*.js', 'src/images/*.svg'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_&:@<>]+/g) || [];
              }
            },
            extensions: ['html', 'js'],
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
