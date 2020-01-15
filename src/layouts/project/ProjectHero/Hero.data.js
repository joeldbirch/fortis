module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_Hero {
      fieldGroupName
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
