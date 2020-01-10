const ProjectTemplateFragment = `
  fragment ProjectTemplateFragment on WPGraphQL_Project {
    projectTags {
      nodes {
        name
      }
    }
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
      buildingType
      fieldGroupName
      fullAddress
      status
      suburb
      logo {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(maxHeight: 200, maxWidth: 400, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
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
      buildingType
      fieldGroupName
      status
      suburb
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
