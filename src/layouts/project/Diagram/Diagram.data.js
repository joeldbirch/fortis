module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_FullWidthDiagramWithText {
      fieldGroupName
      text
      heading
      diagram {
        sourceUrl
        altText
        imageFile {
          publicURL
          extension
          childImageSharp {
            fluid(maxHeight: 900, maxWidth: 1600, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
