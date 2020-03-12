module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_GoogleMap {
      fieldGroupName
      nearby {
        amenity
      }
      fallbackImage {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1400, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
