const { projectsURI } = require('../globals')

const {
  ProjectTemplateFragment,
  ProjectPreviewFragment,
} = require('../src/templates/project/data')

const { FluidImageFragment } = require('../src/templates/fragments')

const projectTemplate = require.resolve('../src/templates/project')
const projectsTemplate = require.resolve('../src/templates/project/projects')

const GET_PROJECTS = `
  ${FluidImageFragment}
  ${ProjectTemplateFragment}
  ${ProjectPreviewFragment}

  query GET_PROJECTS($first:Int $after:String) {
    wpgraphql {
      projects(
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
  * to use to create projects in our static site.
  */
  const { createPage } = actions
  /**
  * Fetch projects method. This accepts variables to alter
  * the query. The variable `first` controls how many items to
  * request per fetch and the `after` controls where to start in
  * the dataset.
  *
  * @param variables
  * @returns {Promise<*>}
  */
  const fetchProjects = async (variables) =>
  /**
  * Fetch projects using the GET_PAGES query and the variables passed in.
  */
  await graphql(GET_PROJECTS, variables).then(({ data }) => {
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
    * Map over the projects for later creation
    */
    nodes
    && nodes.map((projects) => {
      allProjects.push(projects)
    })

    /**
    * If there's another project, fetch more
    * so we can have all the data we need.
    */
    if (hasNextPage) {
      projectNumber++
      reporter.info(`fetch project ${projectNumber} of projects...`)
      return fetchProjects({ first: itemsPerPage, after: endCursor })
    }

    /**
    * Once we're done, return all the projects
    * so we can create the necessary projects with
    * all the data on hand.
    */
    return allProjects
  })

  /**
  * Kick off our `fetchProjects` method which will get us all
  * the projects we need to create individual projects.
  */
  await fetchProjects({ first: itemsPerPage, after: null }).then((wpProjects) => {

    wpProjects && wpProjects.map((project) => {
      /**
      * Build project path based of theme projectsURI setting.
      */
      const path = `${projectsURI}/${project.uri}/`

      createPage({
        path: path,
        component: projectTemplate,
        context: {
          project: project,
        },
      })

      reporter.info(`project created:  ${project.uri}`)
    })

    reporter.info(`# -----> PROJECTS TOTAL: ${wpProjects.length}`)

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

  })
}
