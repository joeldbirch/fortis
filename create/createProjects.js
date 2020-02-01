const _uniqBy = require('lodash.uniqby')
const _isEmpty = require('lodash.isempty')

const { projectsURI, templateCacheFolder } = require('../globals')

const {
  ProjectTemplateFragment,
  ProjectPreviewFragment,
  ProjectsIntroFragment,
  ProjectTagsFragment,
} = require('../src/templates/project/data')

const { getAllLayoutsData, createTemplate, createPageWithTemplate } = require('./utils')

const filePathToComponents = `../src/layouts/project/`
const layoutMapping = require('./layoutMappingProjects')

const projectTemplate = require.resolve('../src/templates/project')
const projectsTemplate = require.resolve('../src/templates/project/projects')

const {
  FluidImageFragment,
} = require('../src/templates/fragments')

const GET_PROJECTS = (layouts) => `
  ${FluidImageFragment}
  ${ProjectTemplateFragment(layouts)}
  ${ProjectPreviewFragment}
  ${ProjectsIntroFragment}
  ${ProjectTagsFragment}

  query GET_PROJECTS($first:Int) {
    wpgraphql {

      # This is the fragment used for the projects intro
      ...ProjectsIntroFragment

      # This is the fragment used for all existing project tags
      ...ProjectTagsFragment

      projects (
        first: $first
        # This will make sure to only get the parent nodes and no children
        where: {
          parent: null
        }
      ) {
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

let projectsPage
const itemsPerPage = 100

/**
* This is the export which Gatbsy will use to process.
*
* @param { actions, graphql }
* @returns {Promise<void>}
*/
module.exports = async ({ actions, graphql, reporter }) => {
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
          projectTags,
          projectsIntro,
          projects: {
            nodes,
          },
        },
      } = data

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
      projectsPage = {
        path: projectsURI,
        component: projectsTemplate,
        context: {
          projectTags,
          projectsIntro,
          nodes,
        },
      }

      /**
      * Once we're done, return all the pages
      * so we can create the necessary pages with
      * all the data on hand.
      */
      return nodes
    })

    /**
    * Kick off our `fetchProjects` method which will get us all
    * the projects we need to create individual pages.
    */
    await fetchProjects({ first: itemsPerPage}).then((wpProjects) => {
      reporter.info(`${wpProjects.length} projects found.`)

      wpProjects && wpProjects.forEach((project) => {
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

    createPage(projectsPage)
    reporter.info(`created projects archive page`)

}
