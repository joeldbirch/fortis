import React from 'react'
import PostEntry from 'components/PostEntry'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'
import { Link } from 'gatsby'
import { blogURI } from '../../../globals'
import { noOrphans } from 'utilities/helpers'

const NewsEntry = ({
  post: {
    optionalFields: {
      subheading,
      note,
    },
    uri,
    categories,
    id,
    postId,
    title,
    ...post
  },
  layoutOrder,
  noteClasses=``,
  arrowClasses=``,
  arrowStyles={},
  ...props
}) => {

  const catName = (categories?.nodes?.[0].name && categories.nodes[0].name !== `Uncategorised`) ? categories.nodes[0].name : `Update`

  return (
    <PostEntry
      ariaLabelledby={`preview-${postId}`}
      headerClasses={`
        @mq-palm--padding-bottom:0
        display:flex
        flex-direction:column-reverse
      `}
      note={
        [2,4].includes(layoutOrder)
        ? <Note
            className={`
              ${noteClasses}
              @mq-max-palm--display:none
            `}
          >

            <ArrowDrawnUpLeft
              className={`
                ${arrowClasses}
              `}
              style={arrowStyles}
            />


            {note}
          </Note>
        : ``
      }

      {...post}
      {...props}
    >
      <h2
        className={`
          font-size:400
          font-weight:400
        `}
        id={`preview-${postId}`}
      >
        <Link
          className={`
            &::before--hit-area-xy-0
            &::before:content
            color:inherit
            text-decoration:none
          `}
          to={`${blogURI}/${uri}/`}
        >
          <span
            className={`
              position:relative
            `}
            dangerouslySetInnerHTML={{__html: noOrphans(title)}}
          />
        </Link>
      </h2>
      <h3
        className={`
          &:hover--text-decoration:none
          font-size:400
          font-weight:400
        `}
      >
        <span className="custom-underline">{subheading || `Article`}</span>
      </h3>
      { catName &&
        <h4
          className={`
            color:neutral-700
            font-size:200
            font-weight:400
            margin-bottom:100
            text-transform:uppercase
          `}
        >
          {catName}
        </h4>
      }
    </PostEntry>
  )
}


const Note = ({className=``, children}) => (
  <p
    className={`
      ${className}
      handwritten
      position:absolute
    `}
  >{children}</p>
)

export default NewsEntry

