import React from 'react'
import NewsEntry from './NewsEntry'

const NewsPreview = ({posts, intro, pagination}) => {
  if (!posts) return ``
  return (
    <>
      <div
        className={`
          padding-top:800
          @mq-palm--padding-top:0
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
            `}
            style={{'--offset-left': '1rem'}}
          >
            {intro}
          </div>
          <NewsEntry
            post={posts[0]}
            className={`
              margin-top:1000
              @mq-palm--margin-top:columns-1
              @mq-palm--padding-right:columns-2
              @mq-palm--padding-bottom:columns-1
            `}
          />
        </div>
        <NewsEntry
          post={posts[1]}
          className={`
            @mq-palm--padding-bottom:columns-1
          `}
          imageClasses={`

          `}
        />
        <NewsEntry
          post={posts[2]}
          className={`
          `}
        />
        <NewsEntry
          post={posts[3]}
          className={`
          `}
        />
        <NewsEntry
          post={posts[4]}
          className={`
          `}
        />
        <NewsEntry
          post={posts[5]}
          className={`
          `}
        />
      </div>

      {pagination}
    </>
  )
}

export default NewsPreview
