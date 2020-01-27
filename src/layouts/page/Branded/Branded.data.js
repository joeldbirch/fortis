module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_Branded {
      fieldGroupName
      text
      video
      image {
        sourceUrl
        altText
        imageFile {
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
