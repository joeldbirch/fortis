import React from 'react'
import Layout from '../../components/Layout'
import PostEntry from '../../components/PostEntry'
import Pagination from '../../components/Pagination'
import SEO from '../../components/SEO'

const News = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout>
      <SEO
        title="News & Views"
      />

      {nodes && nodes.map(post => <PostEntry key={post.postId} post={post}/>)}

      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  )
}

export default News
