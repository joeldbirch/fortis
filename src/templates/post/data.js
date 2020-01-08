const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    title
    postId
    content
    link
    featuredImage {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      name
      slug
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
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    author {
      name
      slug
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.NewsPreviewFragment = NewsPreviewFragment
