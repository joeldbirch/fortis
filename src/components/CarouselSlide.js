import React from 'react'
import {Link} from 'gatsby'
import FluidImage from './FluidImage'
import {cols, mq} from 'utilities/helpers'

const CarouselSlide = ({
  link = null,
  title = ``,
  subtitle = ``,
  image = null,
  id = ``,
  className = ``,
  ...props
}) => {
  return (
    <article
      className={`
        ${className}
      `}
      {...props}
    >
      <div
        className={`
          display:flex
          flex-direction:column
          position:relative
        `}
      >
        <FluidImage
          image={image}
          className={`
            @mq-palm--height:100
          `}
          sizes={`
            (max-width: ${mq.toPalm}) ${cols(5.75)}vw,
            (min-width: ${mq.desk}) ${cols(3)}vw,
            (min-width: ${mq.palm}) ${cols(3.333)}vw
          `}
        />

        <div className="">
          <header
            className={`
              padding-top:400
              width:100
            `}
          >
            <div>
              <h2
                className={`
                  font-size:400
                  font-weight:400
                `}
                id={`post-preview-${id}`}
              >
                <Link
                  aria-labelledby={`post-preview-${id}`}
                  className={`
                    &::before--hit-area-xy-0
                    &::before:content
                    color:inherit
                  `}
                  to={link}
                >
                  <span
                    className={`
                    &:hover--text-decoration:none
                    position:relative
                    text-decoration:underline
                  `}
                  >
                    {title}
                  </span>
                </Link>
              </h2>
            </div>

            <div>
              <span>{subtitle}</span>
              <br />
            </div>
          </header>
        </div>
      </div>
    </article>
  )
}

export default CarouselSlide
