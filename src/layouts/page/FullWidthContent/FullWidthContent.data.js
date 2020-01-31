module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_FullWidthTextAndImage {
      fieldGroupName
      freeText
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(maxHeight: 1000, maxWidth: 1600, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
