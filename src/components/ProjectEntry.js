import React from 'react'
import { Link } from 'gatsby'
import FluidImage from './FluidImage'
import { projectsURI } from '../../globals'
import { shader } from 'styles/helpers'

const ProjectEntry = ({
  post: {
    uri,
    featuredImage,
    note,
    id,
    title,
    projectDetails: {
      detailsTable: {
        textualDetails: {
          buildingType,
          suburb,
          status,
        },
      },
    },
  },
  showNote,
  className=``,
}) => {

  return (
    <article
      aria-labelledby={`project-preview-${id}`}
      className={`
        ${className}
      `}
      style={{
        '--grid-template-columns-var-1': '3.75fr 8fr',
        '--grid-template-columns-var-2': '2.75fr 9fr',
        '--grid-template-columns-var-3': '1.75fr 10fr',
      }}
    >
      <div
        className={`
          position:relative
          @mq-palm--height:auto
          display:flex
          flex-direction:column
        `}
      >
        <FluidImage
          image={featuredImage}
          className={`
            ${shader}
            @mq-palm--height:100
            js-contrast
            js-contrast--reverse
          `}
        />

        <div className={`
          @mq-palm--padding-horizontal:columns-0-1/2
          background-color:neutral-0
        `}>
          <header
            className={`
              js-contrast
              padding-top:400
              padding-bottom:1000
              display:grid
              grid-gap:columns-0-1/4
              grid-template-columns:var-1
              @mq-palm--grid-template-columns:var-2
              @mq-lap--grid-template-columns:var-3
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
                  `}>{title}</span>
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
              <span>{buildingType}</span><br/>
              <span>{status}</span>
            </div>

            { !showNote
              ? ``
              : <p
                  className={`
                    handwritten
                  `}
                >{note}</p>
            }
          </header>
        </div>
      </div>
    </article>
  )
}

export default ProjectEntry
