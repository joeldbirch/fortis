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
              fluid(maxHeight: 655, maxWidth: 470, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
          imageFilePortrait {
            childImageSharp {
              fluid(maxHeight: 328, maxWidth: 235, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
          imageFilePortrait {
            childImageSharp {
              fluid(maxHeight: 235, maxWidth: 328, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `
}
