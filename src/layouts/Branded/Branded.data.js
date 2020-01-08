module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_Branded {
      fieldGroupName
      text
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `
}
