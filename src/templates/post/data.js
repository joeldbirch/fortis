const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    title
    content
    optionalFields {
      subheading
      note
    }
    categories {
      nodes {
        name
      }
    }
    featuredImage {
      sourceUrl
      altText
      imageFileHero {
        childImageSharp {
          fluid(
            maxWidth: 1615,
            maxHeight: 970,
            cropFocus: CENTER,
            srcSetBreakpoints: [ 800, 1280, 1615, 1920, 2560 ]) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const NewsPreviewFragment = `
  fragment NewsPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    optionalFields {
      subheading
      note
    }
    categories {
      nodes {
        name
      }
    }
    featuredImage {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 700, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    otherImages {
      portraitImage {
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
`

const NewsIntroFragment = `
  fragment NewsIntroFragment on WPGraphQL {
    newsIntro {
      content {
        siteSectionTitle
        introContent
      }
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.NewsPreviewFragment = NewsPreviewFragment
module.exports.NewsIntroFragment = NewsIntroFragment
