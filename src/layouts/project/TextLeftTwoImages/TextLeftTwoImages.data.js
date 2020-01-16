module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_TextLeftTwoImages {
      fieldGroupName
      billHeading
      billNote
      billText
      billSmallerImage {
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
      billLargerImage {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(maxHeight: 470, maxWidth: 655, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `
}
