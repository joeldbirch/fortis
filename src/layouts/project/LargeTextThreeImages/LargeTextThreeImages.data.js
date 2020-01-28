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
              fluid(maxWidth: 470, maxHeight: 655, quality: 70, cropFocus: CENTER) {
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
              fluid(maxWidth: 235, maxHeight: 328, quality: 70, cropFocus: CENTER) {
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
              fluid(maxWidth: 328, maxHeight: 235, quality: 70, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `
}
