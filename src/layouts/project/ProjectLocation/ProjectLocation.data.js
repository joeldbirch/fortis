module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_GoogleMap {
      fieldGroupName
      location {
        city
        streetAddress
        postCode
        zoom
        longitude
        latitude
      }
      fallbackImage {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
