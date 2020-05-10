import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import FluidImage from 'components/FluidImage'
import ScrollPrompt from 'components/ScrollPrompt'
import PageHeader from 'components/PageHeader'
import {useNewsData} from 'hooks/use-news-data'
import {cleanWpContent, noOrphans} from 'utilities/helpers'
import RelatedPosts from 'components/RelatedPosts'

const Post = ({pageContext}) => {
  const {
    post: {
      optionalFields: {subheading, note},
      categories: {nodes: cats},
      id,
      title,
      content,
      featuredImage,
      slug,
      relatedPosts: {relatedPostsList},
    },
  } = pageContext

  const catName =
    cats[0] && cats[0].name !== `Uncategorised` ? cats[0].name : `Update`

  const {
    newsIntro: {
      content: {siteSectionTitle},
    },
  } = useNewsData()

  return (
    <Layout
      className={`
      `}
      AddToHeader={<PageHeader headingTag="p" headingText={siteSectionTitle} />}
      slug={slug}
    >
      <SEO title={`${title} | News & views`} />

      <div
        className={`
          @mq-desk--padding-bottom:columns-1
          @mq-desk--padding-horizontal:columns-1-1/2
          @mq-palm--padding-bottom:columns-1-1/2
          js-contrast
          margin-horizontal:auto
          max-width:container
          padding-bottom:columns-2-1/2
          padding-horizontal:columns-0-1/2
          padding-top:site-top
          position:relative
          scroll-snap-align:start
        `}
      >
        <FluidImage
          className={`
            @mq-desk--margin-horizontal:-columns-1
            grid-column:span-2
            margin-bottom:columns-0-1/2
          `}
          image={featuredImage}
          artDirection={`imageFileHero`}
          sizes={`(max-width: 1800px) calc(100vw - var(--site-column)), 1615px`}
        />
        <div
          className={`
            @mq-lap--grid-template-columns:2
            @mq-palm--display:grid
            @mq-palm--grid-template-columns:var-1
          `}
          style={{
            '--grid-template-columns-var-1': `4fr 8fr`,
          }}
        >
          <header
            className={`
              @mq-max-palm--padding-right:columns-3-1/2
              @mq-palm--padding-right:columns-1
              font-size:500
              padding-bottom:800
              position:relative
            `}
            style={{
              '--bigdesk-offset-left': `1rem`,
            }}
          >
            <div
              className={`
                @mq-max-palm--max-width:small-column //clear-the-note
                display:flex
                flex-direction:column-reverse
              `}
            >
              <h1
                className={`
                  font-size:400
                  font-weight:400
                `}
                id={`preview-${id}`}
                dangerouslySetInnerHTML={{__html: noOrphans(title)}}
              />
              {!subheading ? (
                ``
              ) : (
                <h2
                  className={`
                      @mq-desk--font-size:400
                      font-size:400
                      font-weight:400
                    `}
                >
                  <span className={`custom-underline-no-hover`}>{subheading}</span>
                </h2>
              )}
              {!catName ? (
                ``
              ) : (
                <h3
                  className={`
                      color:neutral-700
                      font-size:200
                      font-weight:400
                      pos-top:-columns-0-1/4
                      text-transform:uppercase
                    `}
                >
                  {catName}
                </h3>
              )}
            </div>
            {note && (
              <p
                className={`
                  @mq-max-palm--display:none
                  margin-top:800
                  max-width:small-column
                  handwritten
                `}
              >
                {note}
              </p>
            )}
          </header>
          <div
            className={`
              rhythm-fix-before
              s-editable
            `}
            dangerouslySetInnerHTML={{__html: cleanWpContent(content)}}
          />
        </div>

        {relatedPostsList ? <ScrollPrompt to="#relatedPosts" /> : ``}
      </div>

      {relatedPostsList ? <RelatedPosts previews={relatedPostsList} /> : ``}
    </Layout>
  )
}

export default Post
