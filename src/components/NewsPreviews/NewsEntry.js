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
        @mq-hover-only--opacity:0
        @mq-palm--padding-bottom:0
        &:focus-within--opacity:100
        &:hover--opacity:100
        display:flex
        flex-direction:column-reverse
        transition-duration:400
        transition-property:opacity
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
                @mq-max-palm--margin-left:-600
                @mq-max-palm--transform:arrow-down-right
                @mq-palm--margin-bottom:200
                @mq-palm--margin-left:-400
                @mq-palm--transform:arrow-right-down
                margin-bottom:100
                pos-bottom:100
                position:absolute
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
      @mq-max-palm--margin-bottom:1000
      @mq-max-palm--max-width:columns-4
      @mq-max-palm--padding-right:400
      @mq-max-palm--pos-bottom-right:0
      @mq-max-palm--transform:var-1
      handwritten
      position:absolute
    `}
    style={{
      '--translate-y-var-1': '50%',
    }}
  >{children}</p>
)

export default NewsEntry

