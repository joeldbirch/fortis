module.exports = () => {
  return `
    ... on WPGraphQL_Page {
      resources {
        fieldGroupName
        introductionSection {
          text
          image {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(maxWidth: 1000, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  `
}
