import React from 'react'
import FluidImage from './FluidImage'

const PostEntry = ({
  featuredImage,
  artDirection,
  sizes,
  className=``,
  imageClasses=``,
  headerClasses=``,
  note=null,
  children,
}) => {

  return (
    <article
      className={`
        ${className}
        position:relative
        @mq-max-palm--margin-bottom:600
      `}
    >
      <div
        className={`
          height:100
          display:flex
          flex-direction:column
          position:relative
          group
        `}
      >
        <FluidImage
          image={featuredImage}
          artDirection={artDirection}
          className={`
            ${imageClasses}
            group:hover__opacity:80
            transition-property:opacity
            transition-duration:400
          `}
          sizes={sizes}
        />

        {note}

        <header
          className={`
            ${headerClasses}
            padding-vertical:400
          `}
        >

          {children}

        </header>
      </div>
    </article>
  )
}

export default PostEntry
