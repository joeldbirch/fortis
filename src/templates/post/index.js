import React  from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import FluidImage from 'components/FluidImage'
import ScrollPrompt from 'components/ScrollPrompt'
import PageHeader from 'components/PageHeader'
import NewsOverview from 'layouts/page/NewsOverview'
import { useNewsData  } from 'hooks/use-news-data'
import { handwritten } from 'styles/helpers'


const Post = ({ pageContext }) => {
  const {
    post: {
      optionalFields: {
        subheading,
        note
      },
      categories: {
        nodes: cats,
      },
      id,
      title,
      content,
      featuredImage,
    },
  } = pageContext

  const {
    newsIntro: {
      content: {
        siteSectionTitle,
      },
    },
  } = useNewsData()

  return (
    <Layout
      AddToHeader={<PageHeader headingTag="p" headingText={siteSectionTitle} />}
    >
      <SEO title={`${title} | News & views`} />

      <div
        className={`
          padding-top:site-top
          padding-bottom:800
          position:relative
          @mq-palm--padding-bottom:columns-1
          padding-horizontal:columns-0-1/2
          @mq-desk--padding-horizontal:columns-1-1/2
          scroll-snap-align:start
        `}
      >
        <FluidImage
          className={`
            grid-column:span-2
            @mq-desk--margin-horizontal:-columns-1
            margin-bottom:columns-0-1/2
          `}
          image={featuredImage}
          artDirection={`imageFileHero`}
        />
        <div
          className={`
            @mq-palm--display:grid
            @mq-palm--grid-template-columns:var-1
            @mq-lap--grid-template-columns:2
          `}
          style={{
            '--grid-template-columns-var-1': '4fr 8fr',
          }}
        >

          <header
            className={`
              position:relative
              padding-bottom:800
              @mq-palm--padding-right:columns-1
              font-size:500
              @mq-bigdesk--font-size:600
            `}
            style={{
              '--bigdesk-offset-left': '1rem',
            }}
          >
            <div
              className={`
                display:flex
                flex-direction:column-reverse
                @mq-max-palm--max-width:small-column //clear-the-note
              `}
            >
              <h1
                className={`
                  font-weight:400
                  font-size:em
                  margin-top:100
                  @mq-lap--margin-top:0
                  @mq-wall--font-size:700
                `}
                id={`preview-${id}`}
              >
                {title}
              </h1>
              { !subheading
                ? ``
                : <h2
                    className={`
                      font-weight:400
                      font-size:300
                      @mq-bigdesk--font-size:400
                    `}
                  >
                    <span className={``}>{subheading}</span>
                  </h2>
              }
              <h3
                className={`
                  font-weight:400
                  font-size:200
                  text-transform:uppercase
                  margin-bottom:100
                  @mq-bigdesk--position:absolute
                  pos-top:-columns-0-1/4
                  color:neutral-700
                `}
              >
                {cats[0].name}
              </h3>
            </div>
            { !note
              ? ``
              : <p
                  className={`
                    ${handwritten}
                    @mq-palm--margin-top:800
                    @mq-max-palm--position:absolute
                    @mq-max-palm--pos-top-right:0
                    @mq-max-palm--max-width:caption
                    @mq-palm--max-width:small-column
                  `}
                  style={{
                    'transform': 'rotate(-1deg)',
                  }}
                >
                  {note}
                </p>
            }
          </header>
          <div
            className={`
              s-editable
              @mq-wall--font-size:500
              rhythm-fix-before
            `}
            dangerouslySetInnerHTML={{__html: content}}
          />

        </div>

        <ScrollPrompt/>
      </div>

      <NewsOverview/>

    </Layout>
  )
}

export default Post
