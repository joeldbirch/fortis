module.exports = (imports) => {
  return `
    // This is a temporary generated file. Changes to this file will be overwritten!
    import React from 'react'

    import Layout from '../src/components/Layout'
    import SEO from '../src/components/SEO'
    import ProjectDetails from '../src/components/ProjectDetails'
    import Hero from '../src/layouts/page/Hero'

    // ProjectBuilder Sections
    ${imports.map(({ componentName, filePath }) => `import ${componentName} from '${filePath}';`).join('\n')}


    const Project = ({ pageContext }) => {

      const {
        page: {
          title,
          featuredImage,
          projectDetails,
          projectBuilder,
        },
      } = pageContext

      const layouts = projectBuilder && projectBuilder.layouts ? projectBuilder.layouts : []

      return (
        <Layout>
          <SEO title={title + ' | project'} />

          <h1 className="visually-hidden">{title}</h1>

          <Hero
            label={title}
            image={featuredImage}
            video={projectDetails.detailsTable.mediaDetails.video}
          />

          <ProjectDetails
            title={title}
            {...projectDetails}
          />

          {
            layouts.map((layout, index) => {
              ${imports.map(({ componentName, layoutType }) => {
                return `
                  if (layout.fieldGroupName === '${layoutType}') {
                      return <${componentName} {...layout} key={index} />
                  }
                `
              }).join('\n')}
            })
          }

        </Layout>
      )
    }

    export default Project
  `
}
