import React from 'react'
import { Link } from 'gatsby'
import FluidImage from './FluidImage'
import { projectsURI } from '../../globals'
import { cols, mq } from 'utilities/helpers'

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
                  font-weight:400
                  font-size:400
                `}
                id={`project-preview-${id}`}
              >
                <Link
                  aria-labelledby={`project-preview-${id}`}
                  className={`
                    color:inherit
                    &::before:content
                    &::before--hit-area-xy-0
                  `}
                  to={`${projectsURI}/${uri}/`}
                >
                  <span className={`
                    position:relative
                    text-decoration:underline
                    &:hover--text-decoration:none
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
