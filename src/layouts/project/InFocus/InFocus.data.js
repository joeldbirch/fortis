module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_InFocus {
      fieldGroupName
      group {
        start {
          quote
          mainImage {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 455) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        end {
          textContent
          secondaryImage {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 770) {
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
