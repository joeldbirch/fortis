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
        imageFile {
          childImageSharp {
            fluid(maxHeight: 900, maxWidth: 1600, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

  `
}
