module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_GoogleMap {
      fieldGroupName
      location {
        city
        streetAddress
        postCode
        zoom
        longitude
        latitude
      }
      nearby {
        amenity
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
