const _uniqBy = require(`lodash.uniqby`)
const _isEmpty = require(`lodash.isempty`)

const {templateCacheFolder} = require(`../globals`)

const {
  getAllLayoutsData,
  createTemplate,
  createPageWithTemplate,
} = require(`./utils`)

const filePathToComponents = `../src/layouts/page/`
const layoutMapping = require(`./layoutMapping`)

const pageTemplate = require.resolve(`../src/templates/page`)
const {PageTemplateFragment} = require(`../src/templates/page/data`)

const {FluidImageFragment, HeroImage} = require(`../src/templates/fragments`)

const GET_PAGES = (layouts) => `
  ${FluidImageFragment}
  ${HeroImage}
  ${PageTemplateFragment(layouts)}

  query GET_PAGES($first:Int $after:String) {
    wpgraphql {
      pages (
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
          ...PageTemplateFragment
        }
      }
    }
  }
`

const allPages = []
let pageNumber = 0
const itemsPerPage = 1

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({actions, graphql, reporter}, options) => {
  /**
   * Get all layouts data as a concatenated string
   */
  const layoutsData = getAllLayoutsData()

  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const {createPage} = actions

  /**
   * Fetch pages method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchPages = async (variables) =>
    /**
     * Fetch pages using the GET_PAGES query and the variables passed in.
     */
    await graphql(GET_PAGES(layoutsData), variables).then(({data}) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: {hasNextPage, endCursor},
          },
        },
      } = data

      const usesCustomTemplate = [`projects`]

      /**
       * Map over the pages for later creation
       */
      nodes &&
        nodes
          .filter(({slug}) => !usesCustomTemplate.includes(slug))
          .forEach((pages) => {
            allPages.push(pages)
          })

      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      if (hasNextPage) {
        pageNumber++
        reporter.info(`fetch page ${pageNumber} of pages...`)
        return fetchPages({first: itemsPerPage, after: endCursor})
      }

      /**
       * Once we're done, return all the pages
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPages
    })

  /**
   * Kick off our `fetchPages` method which will get us all
   * the pages we need to create individual pages.
   */
  await fetchPages({first: itemsPerPage, after: null}).then((wpPages) => {
    wpPages &&
      wpPages.forEach((page) => {
        let pagePath = `/${page.slug}/`

        /**
         * If the page is the front page, the page path should not be the slug,
         * but the root path '/'.
         */
        if (page.isFrontPage) {
          pagePath = `/`
        }

        /**
         * Some pages don't have pageBuilder
         */
        page.pageBuilder = page.pageBuilder || {layouts: []}

        if (page.slug === `contact`) {
          page.pageBuilder.layouts.unshift({
            fieldGroupName: `contactLayout`,
          })
        }

        if (page.pageId === 2352) {
          // `info`
          page.pageBuilder.layouts.unshift({
            fieldGroupName: `resourcesLayout`,
          })
        }
        /**
         * Filter out empty objects. This can happen if for some reason you
         * don't query for a specific layout (UnionType), that is potentially
         * there.
         */

        const layouts = page.pageBuilder.layouts.filter((el) => {
          return !_isEmpty(el)
        })

        let mappedLayouts = []

        if (layouts && layouts.length > 0) {
          const UniqueLayouts = _uniqBy(layouts, `fieldGroupName`)

          mappedLayouts = UniqueLayouts.map((layout) => {
            return {
              layoutType: layout.fieldGroupName,
              componentName: layoutMapping[layout.fieldGroupName],
              filePath: filePathToComponents + layoutMapping[layout.fieldGroupName],
            }
          })
        }

        createPageWithTemplate({
          createTemplate,
          templateCacheFolder,
          pageTemplate,
          page,
          pagePath,
          mappedLayouts,
          createPage,
          reporter,
        })
      })

    reporter.info(`# -----> PAGES TOTAL: ${wpPages.length}`)
  })
}
