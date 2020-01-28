import React from 'react'
import PostEntry from 'components/PostEntry'
import { Link } from 'gatsby'
import { blogURI } from '../../../globals'

const NewsEntry = ({
  showNote,
  post: {
    optionalFields: {
      subheading,
    },
    uri,
    categories,
    id,
    title,
    ...post
  },
  ...props
}) => {

  return (
    <PostEntry
      showNote={showNote}
      headerClasses={`
        display:flex
        flex-direction:column-reverse
        @mq-palm--padding-bottom:0
      `}
      {...post}
      {...props}
    >
      <h2
        className={`
          font-weight:400
          font-size:400
        `}
        id={`preview-${id}`}
      >
        <Link
          aria-labelledby={`preview-${id}`}
          className={`
            color:inherit
            text-decoration:none
            &:before:content
            &:before--hit-area-xy-0
          `}
          to={`${blogURI}/${uri}/`}
        >
          <span className={`
            position:relative
            text-decoration:underline
            &:hocus--text-decoration:none
          `}>{title}</span>
        </Link>
      </h2>
      <h3
        className={`
          font-weight:400
          font-size:400
        `}
      >
        {subheading}
      </h3>
      <h4
        className={`
          font-weight:400
          font-size:200
          text-transform:uppercase
          margin-bottom:100
        `}
      >
        {categories.nodes[0].name}
      </h4>
    </PostEntry>
  )
}

export default NewsEntry
