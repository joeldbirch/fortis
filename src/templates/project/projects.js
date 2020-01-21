import React from 'react'
import Layout from 'components/Layout'
import PostEntry from 'components/PostEntry'
import Pagination from 'components/Pagination'
import SEO from 'components/SEO'
import { projectsURI } from '../../../globals'

const ProjectEntry = ({post: {optionalFields, uri, ...post}, showNote, ...props}) => {
  return (
    <PostEntry
      uri={`${projectsURI}/${uri}/`}
      showNote={showNote}
      {...post}
      {...props}
      {...optionalFields}
    />
  )
}

const Projects = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allProjects } = pageContext

  return (
    <Layout>
      <SEO
        title="Projects"
      />

      <div
        className={`
          padding-top:site-top
          padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          margin-horizontal:auto
          max-width:container
          width:100
          padding-bottom:800
        `}
      >
        {nodes && nodes.map(post => (
          <ProjectEntry
            post={post}
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
