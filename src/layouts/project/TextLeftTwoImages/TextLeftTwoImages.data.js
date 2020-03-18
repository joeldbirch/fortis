module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_TextLeftTwoImages {
      fieldGroupName
      billHeading
      billNote
      billText
      billImages {
        smaller {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 550, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        larger {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 430, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `
}
