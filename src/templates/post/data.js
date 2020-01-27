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
      imageFile {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90, cropFocus: CENTER) {
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
          fluid(maxWidth: 800, quality: 90, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
