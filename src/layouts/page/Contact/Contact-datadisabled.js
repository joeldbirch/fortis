module.exports = () => {
  return `
    ... on WPGraphQL {
      globalContent {
        contactInformation {
          email
          fieldGroupName
          phone
          officeLocations {
            suburb
            state
            postcode
            label
            streetAddress
          }
          socialMedia {
            name
            url
          }
          teamImage {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  `
}
