module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_TextRightTwoImages {
      fieldGroupName
      bobHeading
      bobNote
      bobText
      bobImages {
        smaller {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxHeight: 235, maxWidth: 328, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        larger {
          sourceUrl
          altText
          imageFilePortrait {
            childImageSharp {
              fluid(maxHeight: 655, maxWidth: 470, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `
}
