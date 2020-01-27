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
            fluid(maxWidth: 1600, maxHeight: 900, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

  `
}
