import React from 'react'
import FluidImage from './FluidImage'
import { handwritten } from 'styles/helpers'

const PostEntry = ({
  featuredImage,
  artDirection,
  showNote=false,
  note,
  className=``,
  imageClasses=``,
  headerClasses=``,
  children,
}) => {

  return (
    <article
      className={`
        ${className}
        position:relative
      `}
    >
      <div
        className={`
          height:100
          display:flex
          flex-direction:column
          position:relative
        `}
      >
        <FluidImage
          image={featuredImage}
          artDirection={artDirection}
          className={`
            ${imageClasses}
            @mq-max-palm--height:9/16vw
          `}
        />

        <header
          className={`
            ${headerClasses}
            padding-top:400
            padding-bottom:1000
          `}
        >

          {children}

          { !showNote
            ? ``
            : <p
                className={`
                  ${handwritten}
                `}
              >{note}</p>
          }
        </header>
      </div>
    </article>
  )
}

export default PostEntry
