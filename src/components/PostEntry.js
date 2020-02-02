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
        group
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
            group:hocus__opacity:80
            transition-property:opacity
            transition-duration:400
          `}
          sizes={sizes}
        />

        {note}

        <header
          className={`
            ${headerClasses}
            padding-top:400
            padding-bottom:1000
          `}
        >

          {children}

        </header>
      </div>
    </article>
  )
}

export default PostEntry
