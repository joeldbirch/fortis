module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_SimpleLandscape {
      fieldGroupName

      simpleGroup {
        media {
          simpleNote
          simpleVideo
          simpleImage {
            sourceUrl
            altText
            imageFile {
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 655) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        textual {
          simpleText
        }
      }
    }
  `
}
