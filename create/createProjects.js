const _uniqBy = require('lodash.uniqby')
const _isEmpty = require('lodash.isempty')

const { projectsURI, templateCacheFolder } = require('../globals')

const {
  ProjectTemplateFragment,
  ProjectPreviewFragment,
} = require('../src/templates/project/data')

const { getAllLayoutsData, createTemplate, createPageWithTemplate } = require('./utils')

const filePathToComponents = `../src/layouts/project/`
const layoutMapping = require('./layoutMappingProjects')

const projectTemplate = require.resolve('../src/templates/project')
const projectsTemplate = require.resolve('../src/templates/project/projects')

const { FluidImageFragment } = require('../src/templates/fragments')

const GET_PROJECTS = (layouts) => `
  ${FluidImageFragment}
  ${ProjectTemplateFragment(layouts)}
  ${ProjectPreviewFragment}

  query GET_PROJECTS($first:Int $after:String) {
    wpgraphql {
      projects (
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

          # This is the fragment used for the Project Template
          ...ProjectTemplateFragment

          # This is the fragment used for the projects previews
          ...ProjectPreviewFragment
        }
      }
    }
  }
`

const allProjects = []
const projectsPages = []
let pageNumber = 0
const itemsPerPage = 1

/**
* This is the export which Gatbsy will use to process.
*
* @param { actions, graphql }
* @returns {Promise<void>}
*/
module.exports = async ({ actions, graphql, reporter }, options) => {
  /**
   * Get all layouts data as a concatenated string
   */
  const layoutsData = getAllLayoutsData(`project`)

  /**
  * This is the method from Gatsby that we're going
  * to use to create pages in our static site.
  */
  const { createPage } = actions

  /**
  * Fetch pages method. This accepts variables to alter
  * the query. The variable `first` controls how many items to
  * request per fetch and the `after` controls where to start in
  * the dataset.
  *
  * @param variables
  * @returns {Promise<*>}
  */
  const fetchProjects = async (variables) =>
    /**
    * Fetch pages using the GET_PAGES query and the variables passed in.
    */
    await graphql(GET_PROJECTS(layoutsData), variables).then(({ data }) => {
      /**
      * Extract the data from the GraphQL query results
      */
      const {
        wpgraphql: {
          projects: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      /**
       * Define the path for the paginated projects page.
       * This is the url the page will live at
       * @type {string}
       */
      const projectsPagePath = !variables.after
        ? `${projectsURI}`
        : `${projectsURI}/page/${pageNumber + 1}`

      /**
       * Add config for the projectsPage to the projectsPage array
       * for creating later
       *
       * @type {{
       *   path: string,
       *   component: string,
       *   context: {nodes: *, pageNumber: number, hasNextPage: *}
       * }}
       */
      projectsPages[pageNumber] = {
        path: projectsPagePath,
        component: projectsTemplate,
        context: {
          nodes,
          pageNumber: pageNumber + 1,
          hasNextPage,
          itemsPerPage,
          allProjects,
        },
      }

      /**
      * Map over the pages for later creation
      */
      nodes
      && nodes.map((projects) => {
        allProjects.push(projects)
      })

      /**
      * If there's another page, fetch more
      * so we can have all the data we need.
      */
      if (hasNextPage) {
        pageNumber++
        reporter.info(`fetch project ${pageNumber} of project...`)
        return fetchPages({ first: itemsPerPage, after: endCursor })
      }

      /**
      * Once we're done, return all the pages
      * so we can create the necessary pages with
      * all the data on hand.
      */
      return allProjects
    })

    /**
    * Kick off our `fetchProjects` method which will get us all
    * the projects we need to create individual pages.
    */
    await fetchProjects({ first: itemsPerPage, after: null }).then((wpProjects) => {

      wpProjects && wpProjects.map((project) => {
        /**
        * Build project path based of theme projectsURI setting.
        */
        const path = `${projectsURI}/${project.uri}/`

        /**
         * Some projects don't have projectBuilder
         */
        project.projectBuilder = project.projectBuilder || {layouts: []}

        /**
         * Filter out empty objects. This can happen if for some reason you
         * don't query for a specific layout (UnionType), that is potentially
         * there.
         */

        const layouts = project.projectBuilder.layouts.filter(el => {
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
          createTemplate: createTemplate,
          templateCacheFolder: templateCacheFolder,
          pageTemplate: projectTemplate,
          page: project,
          pagePath: path,
          mappedLayouts: mappedLayouts,
          createPage: createPage,
          reporter: reporter,
          prefix: `project`,
        })

        reporter.info(`project created:  ${project.uri}`)
      })

      reporter.info(`# -----> PAGES TOTAL: ${wpProjects.length}`)
    })

        /**
     * Map over the `projectsPages` array to create the
     * paginated projects pages
     */
    projectsPages
    && projectsPages.map((projectsPage) => {
      if (projectsPage.context.pageNumber === 1) {
        projectsPage.context.publisher = true
        projectsPage.context.label = projectsPage.path.replace(`/`, ``)
      }
      createPage(projectsPage)
      reporter.info(`created projects archive page ${projectsPage.context.pageNumber}`)
    })

}
