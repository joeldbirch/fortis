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
            fluid(
              maxWidth: 1615,
              maxHeight: 970,
              cropFocus: CENTER,
              sizes: "(max-aspect-ratio: 16/10) calc(100vh * 1.6), 100vw",
              srcSetBreakpoints: [ 800, 1280, 1615, 1920, 2560 ]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
