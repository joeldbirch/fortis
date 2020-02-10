import React from 'react'
import Layout from 'components/Layout'
import ProjectPreviews from 'components/ProjectPreviews'
import TextBlock from 'layouts/page/TextBlock'
import PageHeader from 'components/PageHeader'
import SEO from 'components/SEO'

const Projects = ({ pageContext }) => {
  const {
    projectsIntro: {
      content: {
        siteSectionTitle,
        introContent,
      },
    },
    nodes,
    projectTags,
  } = pageContext

  return (
    <Layout
      scrollStrict={true}
      AddToHeader={<PageHeader isMain="true" headingText={siteSectionTitle} />}
    >
      <SEO
        title={siteSectionTitle}
      />

      <TextBlock text={introContent} nextSection="#previews" style={{
        '--desk-offset-left': '-3.5em',
      }} />

      <ProjectPreviews posts={nodes} tags={projectTags} id="previews" />
    </Layout>
  )
}

export default Projects
