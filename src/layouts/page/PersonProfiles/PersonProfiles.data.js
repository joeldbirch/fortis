module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_PersonProfile {
      fieldGroupName
      profiles {
        group1 {
          start {
            image {
              sourceUrl
              altText
              imageFile {
                childImageSharp {
                  fluid(maxHeight: 800, maxWidth: 800, cropFocus: ATTENTION) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          end {
            name
            position
            note
            description
          }
        }
      }
    }
  `
}
