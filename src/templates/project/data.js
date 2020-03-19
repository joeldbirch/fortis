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
          fluid(maxWidth: 1600, maxHeight: 900, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      imageFileHero {
        childImageSharp {
          fluid(
            maxWidth: 1615,
            maxHeight: 970,
            cropFocus: CENTER,
            sizes: "(max-aspect-ratio: 16/10) calc(100vh * 1.6), 100vw",
            srcSetBreakpoints: [ 800, 1280, 1615, 1920, 2560 ]) {
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
                fluid(maxWidth: 600, cropFocus: ATTENTION) {
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
                fluid(maxHeight: 250, maxWidth: 1000, quality: 90, cropFocus: CENTER) {
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
      firstContent {
        text
        image {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    relatedContent {
      similarProjects {
        project {
          ... on WPGraphQL_Project {
            id
            uri
            title
            featuredImage {
              sourceUrl
              altText
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 540, maxHeight: 405, cropFocus: ATTENTION) {
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
                }
              }
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
      imageFileHero {
        childImageSharp {
          fluid(
            maxWidth: 1615,
            maxHeight: 970,
            cropFocus: CENTER,
            sizes: "(max-aspect-ratio: 16/10) calc(100vh * 1.6), 100vw",
            srcSetBreakpoints: [ 800, 1280, 1615, 1920, 2560 ]) {
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
