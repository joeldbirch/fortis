import React from 'react'
import NewsEntry from './NewsEntry'
import { cols, mq } from 'utilities/helpers'

const smallerSizes = `
  (max-width: ${mq.toPalm}) ${cols(12)}vw,
  (min-width: ${mq.desk}) ${cols(3)}vw,
  (min-width: ${mq.palm}) ${cols(4)}vw,
  850px
`
const largerSizes = `
  (max-width: 549px) ${cols(12)}vw,
  (min-width: 960px) ${cols(5)}vw,
  (min-width: 550px) ${cols(6)}vw,
  850px
`

const NewsPreview = ({posts, intro, pagination}) => {
  if (!posts) return ``
  return (
    <>
      <div
        className={`
          padding-top:site-top
          @mq-palm--display:grid
          grid-template-columns:2
        `}
      >
        <div
          // first item has intro in same container
          className={`
          `}
        >
          <div
            className={`
              @mq-palm--padding-right:columns-1
              @mq-lap--margin-top:columns-1
              can-style-note
            `}
            style={{
              '--offset-left': '1rem',
              '--rotate': '-2deg',
            }}
          >
            {intro}
          </div>
          <NewsEntry
            post={posts[0]}
            layoutOrder={0}
            className={`
              margin-top:1000
              @mq-palm--margin-top:columns-1
              @mq-palm--padding-right:columns-2
            `}
            sizes={smallerSizes}
          />
        </div>
        { !posts[1]
          ? ``
          : <NewsEntry
              post={posts[1]}
              layoutOrder={1}
              className={`
              `}
              artDirection={`imageFilePortrait`}
              imageClasses={`
                @mq-palm--flex-grow:1
                @mq-palm--height:0
              `}
              sizes={largerSizes}
            />
        }

        { !posts[2]
          ? ``
          : <NewsEntry
              post={posts[2]}
              layoutOrder={2}
              className={`
                @mq-palm--margin-top:columns-0-1/2
                @mq-palm--padding-top:columns-1
              `}
              sizes={largerSizes}
              imageClasses={`
                flex-grow:1
              `}
              noteClasses={`
                @mq-palm--pos-left:100
                @mq-palm--pos-bottom:0
                @mq-palm--width:columns-5
                @mq-palm--text-align:left
                @mq-palm--margin-left:columns-0-1/2
                @mq-desk--margin-bottom:1000
                @mq-desk--padding-bottom:800
              `}
            />
        }
        { !posts[3]
          ? ``
          : <NewsEntry
              post={posts[3]}
              layoutOrder={3}
              className={`
                @mq-palm--padding-left:columns-2
                @mq-palm--padding-bottom:columns-2
                @mq-palm--padding-top:columns-1
              `}
              sizes={smallerSizes}
            />
        }
        { !posts[4]
          ? ``
          : <NewsEntry
              post={posts[4]}
              layoutOrder={4}
              className={`
                @mq-palm--padding-horizontal:columns-1
                @mq-palm--padding-top:columns-1
                @mq-palm--padding-bottom:columns-2-1/2
              `}
              sizes={smallerSizes}
              noteClasses={`
                @mq-palm--pos-left:0
                @mq-palm--pos-top:100
                @mq-palm--padding-top:columns-1
                @mq-palm--margin-top:-400
                @mq-palm--width:columns-6
                @mq-palm--text-align:left
                @mq-palm--margin-left:-columns-1
              `}
            />
        }
        { !posts[5]
          ? ``
          : <NewsEntry
              post={posts[5]}
              layoutOrder={5}
              className={`
                @mq-palm--padding-horizontal:columns-1
                @mq-palm--padding-top:columns-1
                @mq-palm--padding-bottom:columns-0-1/2
              `}
              artDirection={`imageFilePortrait`}
              sizes={smallerSizes}
              imageClasses={`
                flex-grow:1
              `}
            />
        }
      </div>

      {pagination}
    </>
  )
}

export default NewsPreview
