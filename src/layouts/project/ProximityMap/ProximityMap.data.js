module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_ProximityMap {
      fieldGroupName
      heading
      proximityView {
        distanceLabel
        mapImage {
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
        nearby {
          amenity
        }
      }
    }
  `
}
