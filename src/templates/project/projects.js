import React from 'react'
import Layout from '../../components/Layout'
import PostEntry from '../../components/PostEntry'
import Pagination from '../../components/Pagination'
import SEO from '../../components/SEO'
import { projectsURI } from '../../../globals'

const Projects = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allProjects } = pageContext

  return (
    <Layout>
      <SEO
        title="Projects"
      />

      {nodes && nodes.map(post => <PostEntry key={post.id} post={post} parentUri={projectsURI} />)}

      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allProjects={allProjects}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  )
}

export default Projects
