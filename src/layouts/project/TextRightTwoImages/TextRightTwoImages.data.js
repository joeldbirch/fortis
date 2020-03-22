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
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 385, maxWidth: 550, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        larger {
          sourceUrl
          altText
          imageFile {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 768, maxWidth: 550, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `
}
