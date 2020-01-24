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

      <div
        className={`
          padding-top:site-top
          @mq-palm--padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          margin-horizontal:auto
          max-width:container
          padding-bottom:800
          width:100
        `}
      >
        <NewsPreviews
          posts={nodes}
          intro={<NewsIntro className={`
            @mq-max-palm--padding-horizontal:columns-0-1/2
          `} />}
          className={`
            padding-top:site-top
          `}
          pagination={
            <Pagination
              pageNumber={pageNumber}
              hasNextPage={hasNextPage}
              allPosts={allPosts}
              itemsPerPage={itemsPerPage}
            />
          }
        />
      </div>

    </Layout>
  )
}

export default News
