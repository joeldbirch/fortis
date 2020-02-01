module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_LargeTextThreeImagesNotes {
      fieldGroupName
      start {
        benText
        benLargerImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 836, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      middle {
        benNote
        benSmallerImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 420) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      end {
        benOtherNote
        benOtherSmallerImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 430) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `
}
