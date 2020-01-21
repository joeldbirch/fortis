import React from 'react'
import { Link } from 'gatsby'
import FluidImage from './FluidImage'
import { handwritten } from 'styles/helpers'

const PostEntry = ({
  uri,
  featuredImage,
  id,
  title,
  subheading,
  label,
  showNote=false,
  note,
  className,
  imageClasses=``,
}) => {

  return (
    <article
      className={`
        ${className}
        position:relative
        padding-bottom:1000
      `}
    >
      <Link
        aria-labelledby={`preview-${id}`}
        className={`
          color:neutral-900
          text-decoration:none
          height:100
          display:flex
          flex-direction:column
        `}
        to={uri}
      >
        <FluidImage image={featuredImage} className={`
          ${imageClasses}
          flex-grow:1
        `} />

        <header
          className={`
            display:flex
            flex-direction:column-reverse
            padding-top:400
            rhythm-fix-before
            rhythm-fix-after
          `}
        >

          <h2
            className={`
              font-weight:400
              font-size:400
            `}
            id={`preview-${id}`}>{title}
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
            {label}
          </h4>
        </header>
      </Link>
      { !showNote
        ? ``
        : <p
            className={`
              ${handwritten}
            `}
          >{note}</p>
      }
    </article>
  )
}

export default PostEntry
