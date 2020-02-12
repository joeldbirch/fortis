import React from 'react'
import PostEntry from 'components/PostEntry'
import ArrowDrawnUpLeft from 'components/ArrowDrawnUpLeft'
import { Link } from 'gatsby'
import { blogURI } from '../../../globals'

const NewsEntry = ({
  post: {
    optionalFields: {
      subheading,
      note
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
  ...props
}) => {

  return (
    <PostEntry
      ariaLabelledby={`preview-${postId}`}
      headerClasses={`
        display:flex
        flex-direction:column-reverse
        @mq-palm--padding-bottom:0
        @mq-max-palm--max-width:columns-8
        @mq-max-palm--padding-right:400
        scroll-snap-align:start
      `}
      note={
        [2,4].includes(layoutOrder)
        ? <Note
            className={`
              ${noteClasses}
            `}
          >

            <ArrowDrawnUpLeft
              className={`
                position:absolute
                pos-bottom:100
                margin-bottom:100
                @mq-palm--margin-bottom:200
                @mq-max-palm--transform:arrow-down-right
                @mq-palm--transform:arrow-right-down
                @mq-palm--margin-left:-400
                @mq-max-palm--margin-left:-600
                ${ layoutOrder !== 2
                  ? `@mq-palm--display:none`
                  : ``
                }
              `}
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
          font-weight:400
          font-size:400
        `}
        id={`preview-${postId}`}
      >
        <Link
          className={`
            color:inherit
            text-decoration:none
            &::before:content
            &::before--hit-area-xy-0
          `}
          to={`${blogURI}/${uri}/`}
        >
          <span className={`
            position:relative
            text-decoration:underline
            &:hover--text-decoration:none
          `}>{title}</span>
        </Link>
      </h2>
      <h3
        className={`
          font-weight:400
          font-size:300
        `}
      >
        {subheading || `Article`}
      </h3>
      <h4
        className={`
          font-weight:400
          font-size:200
          text-transform:uppercase
          margin-bottom:100
          color:neutral-700
        `}
      >
        {categories.nodes[0].name}
      </h4>
    </PostEntry>
  )
}


const Note = ({className=``, children}) => (
  <p
    className={`
      ${className}
      handwritten
      position:absolute
      @mq-max-palm--pos-bottom-right:0
      @mq-max-palm--rotate:-2
      @mq-max-palm--margin-bottom:1000
      @mq-max-palm--max-width:columns-4
      @mq-max-palm--padding-right:400
      text-align:center
    `}
  >{children}</p>
)

export default NewsEntry

