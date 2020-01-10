import React from 'react'
import Layout from '../../components/Layout'
import NewsIntro from '../../components/NewsIntro'
import PostEntry from '../../components/PostEntry'
import Pagination from '../../components/Pagination'
import { blogURI } from '../../../globals'

import SEO from '../../components/SEO'

const News = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout>
      <SEO
        title="News & Views"
      />

      <NewsIntro />

      {nodes && nodes.map(post => <PostEntry key={post.id} post={post} parentUri={blogURI}/>)}

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
