import React from 'react'
import {Link} from 'gatsby'
import FluidImage from './FluidImage'
import {projectsURI} from '../../globals'
import {uiFontSize} from 'styles/helpers'

const ProjectEntry = ({
  post: {
    uri,
    featuredImage,
    note,
    projectId,
    title,
    projectDetails: {
      detailsTable: {
        textualDetails: {buildingType, suburb, status},
      },
    },
  },
  showNote,
  className = ``,
  imageClasses = ``,
  ...props
}) => {
  return (
    <article
      aria-labelledby={`project-preview-${projectId}`}
      className={`
        ${className}
      `}
      style={{
        '--grid-template-columns-var-1': `3.75fr 8fr`,
        '--grid-template-columns-var-2': `2.75fr 9fr`,
        '--grid-template-columns-var-3': `1.75fr 10fr`,
      }}
      {...props}
    >
      <div
        className={`
          position:relative
        `}
      >
        <FluidImage
          image={featuredImage}
          artDirection="imageFileHero"
          className={`
            ${imageClasses}
            js-contrast
            @mq-palm--margin-horizontal:columns-0-1/2
          `}
        />

        <div
          className={`
          js-project-header
          @mq-palm--padding-horizontal:columns-0-1/2
          background-color:neutral-0
          max-width:container
          margin-horizontal:auto
          width:100
        `}
        >
          <header
            className={`
              @mq-widepalm--grid-template-columns:var-2
              display:grid
              grid-gap:columns-0-1/4
              grid-template-columns:var-1
              js-contrast
              padding-bottom:1000
              padding-top:400
              width:100
              ${uiFontSize}
            `}
          >
            <div>
              <h2
                className={`
                  font-weight:400
                  ${uiFontSize}
                `}
                id={`project-preview-${projectId}`}
              >
                <Link
                  className={`
                    &::before--hit-area-xy-0
                    &::before:content
                    color:inherit
                  `}
                  to={`${projectsURI}/${uri}/`}
                >
                  <span
                    className={`
                    custom-underline
                    position:relative
                  `}
                  >
                    {title}
                  </span>
                </Link>
              </h2>
              <span
                className={`
                `}
              >
                {suburb}
              </span>
            </div>

            <div>
              <span>{buildingType}</span>
              <br />
              <span>{status}</span>
            </div>

            {!showNote ? (
              ``
            ) : (
              <p
                className={`
                    handwritten
                  `}
              >
                {note}
              </p>
            )}
          </header>
        </div>
      </div>
    </article>
  )
}

export default ProjectEntry
