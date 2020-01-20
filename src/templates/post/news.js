import React from 'react'
import Layout from '../../components/Layout'
import NewsIntro from '../../components/NewsIntro'
import NewsPreviews from '../../components/NewsPreviews'
import NewsHeader from '../../components/NewsHeader'
import Pagination from '../../components/Pagination'
import SEO from '../../components/SEO'

const NewsNavigation = () => (
  <NewsHeader isMain="true" />
)

const News = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout
      AddToHeader={<NewsNavigation/>}
    >
      <SEO
        title="News & Views"
      />

      <NewsPreviews
        posts={nodes}
        intro={<NewsIntro />}
        pagination={
          <Pagination
            pageNumber={pageNumber}
            hasNextPage={hasNextPage}
            allPosts={allPosts}
            itemsPerPage={itemsPerPage}
          />
        }
      />

    </Layout>
  )
}

export default News
