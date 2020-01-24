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
        { !posts[1]
          ? ``
          : <NewsEntry
              post={posts[1]}
              className={`
                @mq-palm--padding-bottom:columns-1
              `}
              imageClasses={`
                flex-grow:1
              `}
            />
        }

        { !posts[2]
          ? ``
          : <NewsEntry
              post={posts[2]}
              className={`
                @mq-palm--margin-top:columns-0-1/2
                @mq-palm--padding-bottom:columns-1
              `}
              imageClasses={`
                flex-grow:1
              `}
            />
        }
        { !posts[3]
          ? ``
          : <NewsEntry
              post={posts[3]}
              className={`
                @mq-palm--padding-left:columns-2
                @mq-palm--padding-bottom:columns-3
              `}
            />
        }
        { !posts[4]
          ? ``
          : <NewsEntry
              post={posts[4]}
              className={`
                @mq-palm--padding-horizontal:columns-1
                @mq-palm--padding-bottom:columns-2-1/2
              `}
            />
        }
        { !posts[5]
          ? ``
          : <NewsEntry
              post={posts[5]}
              className={`
                @mq-palm--padding-horizontal:columns-1
                @mq-palm--padding-bottom:columns-0-1/2
              `}
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
