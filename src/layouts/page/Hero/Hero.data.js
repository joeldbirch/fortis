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
