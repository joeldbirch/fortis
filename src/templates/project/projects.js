import React from 'react'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import ProjectEntry from 'components/ProjectEntry'
import SectionHeader from 'components/SectionHeader'
import SEO from 'components/SEO'

const Projects = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allProjects } = pageContext

  return (
    <Layout
      AddToHeader={
        <SectionHeader>
          Projects
        </SectionHeader>
      }
    >
      <SEO
        title="Projects"
      />



      <div
        className={`
          padding-top:site-top
          width:100
          padding-bottom:800
          @mq-max-palm--padding-horizontal:columns-0-1/2
        `}
        style={{
          '--grid-template-columns-var-1': '4.75fr 7fr',
          '--grid-template-columns-var-2': '2.75fr 9fr',
          }}
      >
        {nodes && nodes.map(post => (
          <ProjectEntry
            post={post}
            className={`
              @mq-palm--min-height:100vh
              @mq-palm--display:grid
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
