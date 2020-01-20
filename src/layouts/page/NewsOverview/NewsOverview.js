import React from 'react'
import NewsPreviews from 'components/NewsPreviews'
import NewsIntro from 'components/NewsIntro'
import NewsHeader from 'components/NewsHeader'
import SectionHeader from 'components/SectionHeader'
import { useNewsData  } from 'hooks/use-news-data'
// import { container  } from '../../../styles/helpers'
import { blogURI } from '../../../../globals'

const LinkToNewsPage = () => (
  <p className={`
    margin-vertical:800
    @mq-tiny--margin-vertical:columns-0-1/2
    `}>
    <a className={`btn`} href={blogURI}>View all news</a>
  </p>
)

const Intro = ({content}) => (
  content
  ? <div
      className={` s-editable `}
      dangerouslySetInnerHTML={{__html: content}}
    />
  : <NewsIntro />
)

const NewsOverview = ({sectionHeading, introText}) => {
  const {
    posts = [],
    hasNextPage,
  } = useNewsData()

  if (!posts) return null
  return (
    <section className={`
      padding-horizontal:columns-0-1/2
      @mq-desk--padding-horizontal:columns-1-1/2
      margin-horizontal:auto
      max-width:container
      padding-vertical:800
      position:relative
      grid-guide

    `}>
      <SectionHeader>
        <NewsHeader />
      </SectionHeader>

      <NewsPreviews
        posts={posts}
        intro={<Intro content={introText} />}
        pagination={hasNextPage ? <LinkToNewsPage /> : () => {}}
      />

    </section>
  )
}

export default NewsOverview
