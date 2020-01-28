import React from 'react'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import ProjectEntry from 'components/ProjectEntry'
import TextBlock from 'layouts/page/TextBlock'
import PageHeader from '../../components/PageHeader'
import SEO from 'components/SEO'

const Projects = ({ pageContext }) => {
  const {
    projectsIntro: {
      content: {
        siteSectionTitle,
        introContent,
      }
    },
    nodes,
    pageNumber,
    hasNextPage,
    itemsPerPage,
    allProjects
  } = pageContext

  return (
    <Layout
      AddToHeader={<PageHeader isMain="true" headingText={siteSectionTitle} />}
      scrollStrict={true}
    >
      <SEO
        title={siteSectionTitle}
      />

      <TextBlock text={introContent} style={{
        '--desk-offset-left': '-4.5em',
        '--rotate': '-1deg',
      }} />

      <div
        className={`
          width:100
          padding-bottom:800
          @mq-max-palm--padding-horizontal:columns-0-1/2
        `}
      >
        {nodes && nodes.map(post => (
          <ProjectEntry
            key={post.id}
            post={post}
            className={`
              @mq-palm--min-height:100vh
              @mq-palm--display:grid
              scroll-snap-align:start
            `}
            imageClasses={`
              @mq-palm--flex-grow:1
            `}
          />
        ))}

        <Pagination
          pageNumber={pageNumber}
          hasNextPage={hasNextPage}
          allProjects={allProjects}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </Layout>
  )
}

export default Projects
