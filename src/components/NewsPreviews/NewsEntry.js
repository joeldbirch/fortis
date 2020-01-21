import React from 'react'
import PostEntry from 'components/PostEntry'
import { blogURI } from '../../../globals'

const NewsEntry = ({
  post: {
    optionalFields,
    uri,
    categories,
    ...post
  },
  showNote,
  ...props
}) => {

  return (
    <PostEntry
      uri={`${blogURI}/${uri}/`}
      showNote={showNote}
      label={categories.nodes[0].name}
      {...post}
      {...props}
      {...optionalFields}
    />
  )
}

export default NewsEntry
