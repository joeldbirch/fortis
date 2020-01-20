import React from 'react'
import PostEntry from 'components/PostEntry'
import { blogURI } from '../../../globals'

const NewsPreview = ({posts, intro, pagination}) => {

  if (!posts) return null

  return (
    <>
      {intro}

      <ol className={`
      `}>
        {
          posts.map((post) => (
            <PostEntry
              key={post.id}
              post={post}
              parentUri={blogURI}
            />
          ))
        }
      </ol>

      {pagination}
    </>
  )
}

export default NewsPreview
