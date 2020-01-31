import React from 'react'
import { Link } from 'gatsby'
import FluidImage from './FluidImage'
import { projectsURI } from '../../globals'

const CarouselSlide = ({
  post: {
    uri,
    featuredImage,
    id,
    title,
    projectDetails: {
      detailsTable: {
        textualDetails: {
          buildingType,
          suburb,
        },
      },
    },
  },
  className=``,
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
          position:relative
          display:flex
          flex-direction:column
        `}
      >
        <FluidImage
          image={featuredImage}
          className={`
            @mq-palm--height:100
            js-contrast
            js-contrast--reverse
          `}
          // TODO: add sizes
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
                  font-weight:400
                  font-size:400
                `}
                id={`project-preview-${id}`}
              >
                <Link
                  aria-labelledby={`project-preview-${id}`}
                  className={`
                    color:inherit
                    &:before:content
                    &:before--hit-area-xy-0
                  `}
                  to={`${projectsURI}/${uri}/`}
                >
                  <span className={`
                    position:relative
                    text-decoration:underline
                    &:hocus--text-decoration:none
                  `}>{title} — <span>{suburb}</span></span>
                </Link>
              </h2>
            </div>

            <div>
              <span>{buildingType}</span><br/>
            </div>

          </header>
        </div>
      </div>
    </article>
  )
}

export default CarouselSlide
