module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_Hero {
      fieldGroupName
      image {
        sourceUrl
        altText
        imageFileHero {
          childImageSharp {
            fluid(
              maxWidth: 1250,
              maxHeight: 703,
              cropFocus: CENTER,
              srcSetBreakpoints: [ 800, 1250, 1600, 1920 ]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `
}
