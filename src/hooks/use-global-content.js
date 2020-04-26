import {useStaticQuery, graphql} from 'gatsby'

const useGlobalContent = () => {
  const {wpgraphql} = useStaticQuery(
    graphql`
      query GET_GLOBAL_CONTENT {
        wpgraphql {
          globalContent {
            contactInformation {
              email
              fieldGroupName
              phone
              officeLocations {
                suburb
                state
                postcode
                label
                streetAddress
              }
              socialMedia {
                name
                url
              }
              teamImage {
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER) {
                      presentationWidth
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return {
    globalContent: wpgraphql.globalContent,
  }
}

export default useGlobalContent
