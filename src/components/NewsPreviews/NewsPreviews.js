import React from 'react'
import NewsEntry from './NewsEntry'
import {smallerSizes, largerSizes} from 'utilities/helpers'
import chunk from 'lodash.chunk'

const NewsPreview = ({posts, intro, pagination}) => {
  if (!posts) return ``
  const postChunks = chunk(posts, 6)
  return postChunks.map((posts, index) => (
    <>
      <div
        className={`
        ${index === 0 ? `padding-top:site-top` : `padding-top:columns-0-1/2`}

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
              '--offset-left': `1rem`,
            }}
          >
            {index === 0 ? intro : ` `}
          </div>
          <NewsEntry
            post={posts[0]}
            layoutOrder={0}
            className={`
              ${
                index === 0
                  ? `@mq-palm--margin-top:columns-1`
                  : `@mq-palm--margin-top:columns-3`
              }
              @mq-palm--padding-right:columns-2
            `}
            sizes={smallerSizes}
          />
        </div>
        {!posts[1] ? (
          ``
        ) : (
          <NewsEntry
            post={posts[1]}
            layoutOrder={1}
            className={`
              `}
            usePortrait={true}
            imageClasses={`
                @mq-palm--flex-grow:1
                @mq-palm--height:0
              `}
            sizes={largerSizes}
          />
        )}

        {!posts[2] ? (
          ``
        ) : (
          <NewsEntry
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
            arrowClasses={`
                @mq-max-palm--margin-left:-600
                @mq-max-palm--transform:arrow-down-right
                @mq-palm--margin-bottom:200
                @mq-palm--margin-left:-400
                @mq-palm--transform:arrow-right-down
                margin-bottom:100
                pos-bottom:100
                position:absolute
              `}
          />
        )}
        {!posts[3] ? (
          ``
        ) : (
          <NewsEntry
            post={posts[3]}
            layoutOrder={3}
            className={`
                @mq-palm--padding-left:columns-2
                @mq-palm--padding-bottom:columns-2
                @mq-palm--padding-top:columns-1
              `}
            sizes={smallerSizes}
          />
        )}
        {!posts[4] ? (
          ``
        ) : (
          <NewsEntry
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
                @mq-palm--width:columns-5
                @mq-desk--width:columns-4
                @mq-palm--text-align:left
                @mq-palm--margin-left:-columns-1
              `}
            arrowClasses={`
                margin-bottom:200
                position:absolute
                transform:var-1
              `}
            arrowStyles={{
              '--translate-y-var-1': `-190%`,
              '--translate-x-var-1': `-50%`,
              '--scale-y-var-1': `.8`,
              '--scale-x-var-1': `-.8`,
              '--rotate-var-1': `20deg`,
            }}
          />
        )}
        {!posts[5] ? (
          ``
        ) : (
          <NewsEntry
            post={posts[5]}
            layoutOrder={5}
            className={`
                @mq-palm--padding-horizontal:columns-1
                @mq-palm--padding-top:columns-1
                @mq-palm--padding-bottom:columns-0-1/2
              `}
            usePortrait={true}
            sizes={smallerSizes}
            imageClasses={`
                flex-grow:1
              `}
          />
        )}
      </div>

      {postChunks.length < 2 || index === 1 ? pagination : ``}
    </>
  ))
}

export default NewsPreview
