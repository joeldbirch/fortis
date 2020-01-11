const { blogURI } = require('../globals')

const {
  PostTemplateFragment,
  NewsPreviewFragment,
} = require('../src/templates/post/data')

const { FluidImageFragment } = require('../src/templates/fragments')

const postTemplate = require.resolve('../src/templates/post/index.js')
const newsTemplate = require.resolve('../src/templates/post/news.js')

const GET_POSTS = `
  ${FluidImageFragment}
  ${PostTemplateFragment}
  ${NewsPreviewFragment}

  query GET_POSTS($first:Int $after:String) {
    wpgraphql {
      posts(
        first: $first
        after: $after
        # This will make sure to only get the parent nodes and no children
        where: {
          parent: null
        }
        ) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            uri

            # This is the fragment used for the Post Template
            ...PostTemplateFragment

            # This is the fragment used for the news previews
            ...NewsPreviewFragment
          }
        }
      }
    }
  `

const allPosts = []
const newsPages = []
let pageNumber = 0
const itemsPerPage = 10

/**
* This is the export which Gatbsy will use to process.
*
* @param { actions, graphql }
* @returns {Promise<void>}
*/
module.exports = async ({ actions, graphql, reporter }, options) => {

  /**
  * This is the method from Gatsby that we're going
  * to use to create posts in our static site.
  */
  const { createPage } = actions
  /**
  * Fetch posts method. This accepts variables to alter
  * the query. The variable `first` controls how many items to
  * request per fetch and the `after` controls where to start in
  * the dataset.
  *
  * @param variables
  * @returns {Promise<*>}
  */
  const fetchPosts = async (variables) =>
  /**
  * Fetch posts using the GET_PAGES query and the variables passed in.
  */
  await graphql(GET_POSTS, variables).then(({ data }) => {
    /**
    * Extract the data from the GraphQL query results
    */
    const {
      wpgraphql: {
        posts: {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        },
      },
    } = data

    /**
     * Define the path for the paginated news page.
     * This is the url the page will live at
     * @type {string}
     */
    const newsPagePath = !variables.after
      ? `${blogURI}`
      : `${blogURI}/page/${pageNumber + 1}`

    /**
     * Add config for the newsPage to the newsPage array
     * for creating later
     *
     * @type {{
     *   path: string,
     *   component: string,
     *   context: {nodes: *, pageNumber: number, hasNextPage: *}
     * }}
     */
    newsPages[pageNumber] = {
      path: newsPagePath,
      component: newsTemplate,
      context: {
        nodes,
        pageNumber: pageNumber + 1,
        hasNextPage,
        itemsPerPage,
        allPosts,
      },
    }

    /**
    * Map over the posts for later creation
    */
    nodes
    && nodes.map((posts) => {
      allPosts.push(posts)
    })

    /**
    * If there's another post, fetch more
    * so we can have all the data we need.
    */
    if (hasNextPage) {
      postNumber++
      reporter.info(`fetch post ${postNumber} of posts...`)
      return fetchPosts({ first: itemsPerPage, after: endCursor })
    }

    /**
    * Once we're done, return all the posts
    * so we can create the necessary posts with
    * all the data on hand.
    */
    return allPosts
  })

  /**
  * Kick off our `fetchPosts` method which will get us all
  * the posts we need to create individual posts.
  */
  await fetchPosts({ first: itemsPerPage, after: null }).then((wpPosts) => {

    wpPosts && wpPosts.map((post) => {
      /**
      * Build post path based of theme blogURI setting.
      */
      const path = `${blogURI}/${post.uri}/`

      createPage({
        path: path,
        component: postTemplate,
        context: {
          post: post,
        },
      })

      reporter.info(`post created:  ${post.uri}`)
    })

    reporter.info(`# -----> POSTS TOTAL: ${wpPosts.length}`)

    /**
     * Map over the `newsPages` array to create the
     * paginated news pages
     */
    newsPages
    && newsPages.map((newsPage) => {
      if (newsPage.context.pageNumber === 1) {
        newsPage.context.publisher = true
        newsPage.context.label = newsPage.path.replace(`/`, ``)
      }
      createPage(newsPage)
      reporter.info(`created news archive page ${newsPage.context.pageNumber}`)
    })

  })
}