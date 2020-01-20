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
        featuredImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      query GET_POSTS {
        wpgraphql {
          posts(
            first: 1
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
    posts: wpgraphql.posts.nodes,
    hasNextPage: wpgraphql.posts.pageInfo.hasNextPage,
  }
}
