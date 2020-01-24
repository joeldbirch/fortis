import React from 'react'
import Layout from '../../components/Layout'
import LargeText from '../../components/LargeText'
import NewsPreviews from '../../components/NewsPreviews'
import NewsHeader from '../../components/NewsHeader'
import Pagination from '../../components/Pagination'
import SEO from '../../components/SEO'


const News = ({ pageContext }) => {
  const { newsIntro: {
    content: {
      siteSectionTitle,
      introContent,
    },
  },
  nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout
      AddToHeader={<NewsHeader isMain="true" headingText={siteSectionTitle} />}
    >
      <SEO
        title={siteSectionTitle}
      />

      <div
        className={`
          padding-top:site-top
          padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          margin-horizontal:auto
          max-width:container
          padding-bottom:800
          width:100
        `}
      >
        <NewsPreviews
          posts={nodes}
          intro={<LargeText>{introContent}</LargeText>}
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
