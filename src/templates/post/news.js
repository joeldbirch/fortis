import React from 'react'
import Layout from '../../components/Layout'
import LargeText from '../../components/LargeText'
import NewsPreviews from '../../components/NewsPreviews'
import PageHeader from '../../components/PageHeader'
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
      AddToHeader={<PageHeader isMain="true" headingText={siteSectionTitle} />}
    >
      <SEO
        title={siteSectionTitle}
      />

      <div
        className={`
          js-contrast
          padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          @mq-palm--padding-bottom:columns-0-1/2
          padding-bottom:800
          width:100
          max-width:container
          margin-horizontal:auto
        `}
      >
        <NewsPreviews
          posts={nodes}
          intro={<LargeText className="@mq-max-palm--margin-bottom:1000">{introContent}</LargeText>}
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
