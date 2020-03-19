module.exports = (imports) => {
  return `
    // This is a temporary generated file. Changes to this file will be overwritten!
    import React from 'react'

    import Layout from '../src/components/Layout'
    import SEO from '../src/components/SEO'
    import ProjectDetails from '../src/components/ProjectDetails'
    import RelatedContent from '../src/components/RelatedContent'
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
          relatedContent,
          uri,
        },
      } = pageContext

      const layouts = projectBuilder && projectBuilder.layouts ? projectBuilder.layouts : []

      return (
        <Layout
          AddToHeader={<h1 className="
            @mq-desk--font-size:500
            @mq-tiny--font-size:400
            font-size:300
            font-weight:400
          ">{title}</h1>}
        >
          <SEO title={title + ' | project'} />

          <Hero
            image={projectDetails.header.image}
            video={projectDetails.header.video}
            nextSection="#project-details"
          />

          <ProjectDetails
            title={title}
            {...projectDetails}
            id="project-details"
          />

          {
            layouts.map((layout, index) => {
              ${imports.map(({ componentName, layoutType }) => {
                return `
                  if (layout.fieldGroupName === '${layoutType}') {
                      return <${componentName} {...layout} key={index} id={"section-"+index} uri={uri} />
                  }
                `
              }).join('\n')}
            })
          }

          <RelatedContent
            {...relatedContent}
          />

        </Layout>
      )
    }

    export default Project
  `
}
