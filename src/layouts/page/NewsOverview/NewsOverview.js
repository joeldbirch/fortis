import React from 'react'
import NewsPreviews from 'components/NewsPreviews'
import NewsIntro from 'components/NewsIntro'
import NewsHeader from 'components/NewsHeader'
import SectionHeader from 'components/SectionHeader'
import Divider from 'components/DividerHorizontal'
import LargeText from 'components/LargeText'
import { useNewsData  } from 'hooks/use-news-data'
import { blogURI } from '../../../../globals'

const LinkToNewsPage = () => (
  <p className={`
    margin-vertical:800
    @mq-tiny--margin-vertical:columns-0-1/2
    `}>
    <a className={`btn`} href={blogURI}>View all news</a>
  </p>
)

const NewsOverview = ({introText}) => {
  const {
    posts = [],
    hasNextPage,
  } = useNewsData()

  if (!posts) return null
  return (
    <section className={`
      position:relative
    `}>
      <Divider />
      <div
        className={`
          padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          margin-horizontal:auto
          max-width:container
          padding-bottom:800
          grid-guide
        `}
      >
        <SectionHeader>
          <NewsHeader />
        </SectionHeader>

        <NewsPreviews
          posts={posts}
          intro={introText ? <LargeText>{introText}</LargeText> : <NewsIntro />}
          pagination={hasNextPage ? <LinkToNewsPage /> : () => {}}
        />
      </div>
    </section>
  )
}

export default NewsOverview
