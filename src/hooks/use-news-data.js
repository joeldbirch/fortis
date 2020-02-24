import { useStaticQuery, graphql } from 'gatsby'
// const { FluidImageFragment } = require('../src/templates/fragments')

export const useNewsData = () => {
  const { wpgraphql } = useStaticQuery(
    graphql`
      fragment NewsPreviewFragment on WPGraphQL_Post {
        id
        postId
        title
        uri
        date
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
      query GET_POSTS {
        wpgraphql {
          newsIntro {
            content {
              siteSectionTitle
              introContent
            }
          }
          posts(
            first: 6
            # This will make sure to only get the parent nodes and no children
            where: {
              parent: null
            }
          ) {
            pageInfo {
              hasNextPage
            }
            nodes {
              # This is the fragment used for the news previews
              ...NewsPreviewFragment
            }
          }
        }
      }
    `
  )

  return {
    newsIntro: wpgraphql.newsIntro,
    posts: wpgraphql.posts.nodes,
    hasNextPage: wpgraphql.posts.pageInfo.hasNextPage,
  }
}
