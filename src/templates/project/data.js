const ProjectTemplateFragment = `
  fragment ProjectTemplateFragment on WPGraphQL_Project {
    projectTags {
      nodes {
        slug
        name
        id
      }
    }
    projectId
    id
    title
    content
    featuredImage {
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
    projectDetails {
      fieldGroupName
      detailsTable {
        mediaDetails {
          suburbImage {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(maxHeight: 900, maxWidth: 900, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          logo {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 400, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
              publicURL
              extension
            }
          }
          video
        }
        textualDetails {
          buildingType
          suburb
          fullAddress
          status
          introductoryText
          enquiryLink
        }
      }
    }
  }
`

const ProjectPreviewFragment = `
  fragment ProjectPreviewFragment on WPGraphQL_Project {
    projectId
    id
    title
    featuredImage {
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
    projectDetails {
      fieldGroupName
      detailsTable {
        textualDetails {
          buildingType
          suburb
          status
        }
      }
    }
    projectTags {
      nodes {
        slug
        name
        id
      }
    }
  }
`

module.exports.ProjectTemplateFragment = ProjectTemplateFragment
module.exports.ProjectPreviewFragment = ProjectPreviewFragment
