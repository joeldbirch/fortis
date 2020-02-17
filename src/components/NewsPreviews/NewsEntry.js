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

  const catName = (categories?.nodes?.[0].name && categories.nodes[0].name !== `Uncategorised`) ? categories.nodes[0].name : `Update`

  return (
    <PostEntry
      ariaLabelledby={`preview-${postId}`}
      headerClasses={`
        display:flex
        flex-direction:column-reverse
        @mq-palm--padding-bottom:0
        scroll-snap-align:start
        @mq-hover-only--opacity:0
        &:hover--opacity:100
        transition-property:opacity
        transition-duration:400
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
          font-weight:400
          font-size:400
          text-decoration:underline
          &:hover--text-decoration:none
        `}
      >
        {subheading || `Article`}
      </h3>
      { catName &&
        <h4
          className={`
            font-weight:400
            font-size:200
            text-transform:uppercase
            margin-bottom:100
            color:neutral-700
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
      @mq-max-palm--pos-bottom-right:0
      @mq-max-palm--margin-bottom:1000
      @mq-max-palm--transform:var-1
      @mq-max-palm--max-width:columns-4
      @mq-max-palm--padding-right:400
    `}
    style={{
      '--translate-y-var-1': '50%',
    }}
  >{children}</p>
)

export default NewsEntry

