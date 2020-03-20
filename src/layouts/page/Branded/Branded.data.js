module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_Branded {
      fieldGroupName
      video
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(
              maxWidth: 1920,
              maxHeight: 1080,
              cropFocus: CENTER,
              sizes: "(max-aspect-ratio: 16/9) calc(100vh * 1.778), 100vw",
              srcSetBreakpoints: [ 800, 1280, 1615, 1920, 2560 ]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
