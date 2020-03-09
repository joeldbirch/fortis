module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_ImageGallery {
      fieldGroupName
      imageGallery {
        sourceUrl
        altText
        caption
        imageFileHero {
          childImageSharp {
            fluid(
              maxWidth: 1615,
              maxHeight: 970,
              cropFocus: CENTER,
              sizes: "(min-width: 1400px) 1250px, 100vw",
              srcSetBreakpoints: [ 800, 1250, 1600, 1920 ]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

  `
}
