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
              fluid(maxWidth: 650, maxHeight: 903) {
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
              fluid(maxWidth: 396, maxHeight: 550) {
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
              fluid(maxWidth: 650, maxHeight: 455) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `
}
