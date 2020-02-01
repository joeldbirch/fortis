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
      AddToHeader={<PageHeader isMain="true" headingText={siteSectionTitle} />}
      scrollStrict={true}
    >
      <SEO
        title={siteSectionTitle}
      />

      <TextBlock text={introContent} nextSection="#previews" style={{
        '--desk-offset-left': '-4.5em',
        '--rotate': '-1deg',
      }} />

      <ProjectPreviews posts={nodes} tags={projectTags} id="previews" />
    </Layout>
  )
}

export default Projects
