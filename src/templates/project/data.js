const ProjectTemplateFragment = (layouts) => `
  fragment ProjectTemplateFragment on WPGraphQL_Project {
    projectId
    id
    title
    content
    featuredImage {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900, quality: 70, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      imageFileHero {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900, quality: 70, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    projectBuilder {
      layouts {
        ${layouts}
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
                fluid(maxHeight: 1000, maxWidth: 1000, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
          fluid(maxWidth: 1600, maxHeight: 900, quality: 70, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
const ProjectsIntroFragment = `
  fragment ProjectsIntroFragment on WPGraphQL {
    projectsIntro {
      content {
        siteSectionTitle
        introContent
      }
    }
  }
`
const ProjectTagsFragment = `
  fragment ProjectTagsFragment on WPGraphQL {
    projectTags {
      nodes {
        name
        slug
        id
        count
      }
    }
  }
`
module.exports.ProjectTemplateFragment = ProjectTemplateFragment
module.exports.ProjectPreviewFragment = ProjectPreviewFragment
module.exports.ProjectsIntroFragment = ProjectsIntroFragment
module.exports.ProjectTagsFragment = ProjectTagsFragment
