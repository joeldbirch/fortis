import React from 'react'
import NewsPreviews from 'components/NewsPreviews'
import PageHeader from 'components/PageHeader'
import SectionHeader from 'components/SectionHeader'
import Divider from 'components/DividerHorizontal'
import LargeText from 'components/LargeText'
import {useNewsData} from 'hooks/use-news-data'
import {blogURI} from '../../../../globals'

const LinkToNewsPage = () => (
  <p
    className={`
      margin-bottom:columns-0-1/4
      text-align:center
    `}
  >
    <a className={`btn display:inline-flex`} href={blogURI}>
      View all news
    </a>
  </p>
)

const NewsOverview = ({
  introText = null,
  showHeading = true,
  nextSection = null,
  id = null,
  ...props
}) => {
  const {
    posts = [],
    hasNextPage,
    newsIntro: {
      content: {siteSectionTitle, introContent},
    },
  } = useNewsData()

  if (!posts) return null
  return (
    <section
      id={id}
      className={`
        @mq-desk--padding-horizontal:columns-1-1/2
        js-contrast
        margin-horizontal:auto
        max-width:container
        padding-horizontal:columns-0-1/2
        position:relative
        scroll-snap-align:start
        width:100
      `}
    >
      <Divider className={`js-free-scroll`} />
      <div
        className={`
          padding-bottom:800
        `}
      >
        {showHeading && (
          <SectionHeader className="z-index:400">
            <PageHeader headingText={siteSectionTitle} />
          </SectionHeader>
        )}

        <NewsPreviews
          posts={posts}
          intro={
            <LargeText
              className={`
            @mq-max-palm--display:none
            @mq-max-palm--font-size:400
          `}
            >
              {introText || introContent}
            </LargeText>
          }
          pagination={hasNextPage ? <LinkToNewsPage /> : () => {}}
        />
      </div>
    </section>
  )
}

export default NewsOverview
