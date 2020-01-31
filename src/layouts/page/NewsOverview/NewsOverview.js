import React from 'react'
import NewsPreviews from 'components/NewsPreviews'
import PageHeader from 'components/PageHeader'
import SectionHeader from 'components/SectionHeader'
import Divider from 'components/DividerHorizontal'
import LargeText from 'components/LargeText'
import { useNewsData  } from 'hooks/use-news-data'
import { blogURI } from '../../../../globals'

const LinkToNewsPage = () => (
  <p
    className={`
      margin-bottom:columns-0-1/4
      text-align:center
    `}
  >
    <a className={`btn display:inline-flex`} href={blogURI}>View all news</a>
  </p>
)

const NewsOverview = ({showHeading=true, nextSection=null, id=null, ...props}) => {

  const {
    posts = [],
    hasNextPage,
    newsIntro: {
      content: {
        siteSectionTitle,
        introContent,
      },
    },
  } = useNewsData()

  if (!posts) return null
  return (
    <section
      id={id}
      className={`
        position:relative
        scroll-snap-align:start
      `}
    >
      <Divider />
      <div
        className={`
          padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          padding-bottom:800
          padding-top:columns-1
        `}
      >
        {
          !showHeading
          ? ``
          : <SectionHeader>
              <PageHeader headingText={siteSectionTitle} />
            </SectionHeader>
        }

        <NewsPreviews
          posts={posts}
          intro={<LargeText>{introContent}</LargeText>}
          pagination={hasNextPage ? <LinkToNewsPage /> : () => {}}
        />
      </div>
    </section>
  )
}

export default NewsOverview
