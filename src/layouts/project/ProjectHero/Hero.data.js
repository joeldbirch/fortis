module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_Hero {
      fieldGroupName
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
