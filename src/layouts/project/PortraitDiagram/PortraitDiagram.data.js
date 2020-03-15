module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_PortraitDiagram {
      fieldGroupName
      start {
        note
        portraitImage {
          sourceUrl
          altText
          imageFile {
            publicURL
            extension
            childImageSharp {
              fluid(maxWidth: 550) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      end {
        horizontalImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 385) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        textContent
      }
    }
  `
}
