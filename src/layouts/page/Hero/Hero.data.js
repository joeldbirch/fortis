module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_Hero {
      fieldGroupName
      label
      linkTo {
        ... on WPGraphQL_Project {
          id
          link
        }
        ... on WPGraphQL_Page {
          id
          link
        }
      }
      video
      image {
        sourceUrl
        altText
        imageFileHero {
          childImageSharp {
            fluid(
              maxWidth: 1280,
              maxHeight: 800,
              cropFocus: CENTER,
              sizes: "(max-aspect-ratio: 16/10) calc(100vh * 1.6), 100vw",
              srcSetBreakpoints: [ 800, 1280, 1600, 1920 ]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

  `
}
