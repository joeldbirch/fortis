import React from 'react'
import NewsEntry from './NewsEntry'

const NewsPreview = ({posts, intro, pagination}) => {
  if (!posts) return ``
  return (
    <>
      <div
        className={`
          padding-top:800
          @mq-palm--padding-top:columns-0-1/2
        `}
      >
        <div
          // first item has intro in same container
          className={`
          `}
        >
          {intro}
          <NewsEntry
            post={posts[0]}
            className={`
              margin-top:1000
              @mq-palm--margin-top:columns-0-1/2
            `}
          />
        </div>
        <NewsEntry
          post={posts[1]}
          className={`
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
