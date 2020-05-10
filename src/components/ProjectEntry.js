import React from 'react'
import {Link} from 'gatsby'
import FluidImage from './FluidImage'
import Divider from './DividerHorizontal'
import {projectsURI} from '../../globals'
import {uiFontSize} from 'styles/helpers'
import {cols, mq} from 'utilities/helpers'

const ProjectEntry = ({
  post: {
    slug,
    featuredImage,
    projectId,
    title,
    projectDetails: {
      detailsTable: {
        textualDetails: {buildingType, suburb, status},
      },
    },
  },
  className = ``,
  imageClasses = ``,
  ...props
}) => {
  return (
    <article
      aria-labelledby={`project-preview-${projectId}`}
      className={`
        ${className}
        position:relative
        padding-horizontal:columns-0-1/2
      `}
      {...props}
    >
      <Divider inside={true} />
      <NewLayout>
        <FluidImage
          image={featuredImage}
          artDirection="imageFileHero"
          className={`
            ${imageClasses}
            js-contrast
            @mq-bigdesk--grid-column:3
          `}
          sizes={`
              (max-width: ${mq.tolap}) ${cols(12)}vw,
              (min-width: ${mq.lap}) ${cols(6)}vw,
              (min-width: ${mq.bigdesk}) ${cols(7)}vw
            `}
        />
        <header
          className={`
            @mq-tiny--grid-template-columns:var-2
            @mq-lap--grid-template-columns:var-3
            @mq-bigdesk--grid-template-columns:var-4
            @mq-bigdesk--grid-gap:0
            @mq-lap--grid-column:1
            @mq-bigdesk--grid-column:2
            @mq-lap--grid-row:1
            @mq-lap--grid-gap:columns-0-1/2
            display:grid
            grid-gap:columns-1
            grid-template-columns:var-1
            width:100
            ${uiFontSize}
          `}
          style={{
            '--grid-template-columns-var-1': `5fr 6fr`,
            '--grid-template-columns-var-2': `4fr 7fr`,
            '--grid-template-columns-var-3': `2.5fr 2.5fr`,
            '--grid-template-columns-var-4': `1.5fr 1.5fr`,
          }}
        >
          <div
            className={`
              @mq-bigdesk--padding-right:400
            `}
          >
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
                to={`${projectsURI}/${slug}/`}
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

          <div
            className={`
              @mq-bigdesk--padding-right:400
            `}
          >
            <span>{buildingType}</span>
            <br />
            <span>{status}</span>
          </div>
        </header>
      </NewLayout>
    </article>
  )
}

export default ProjectEntry

const NewLayout = ({children}) => (
  <div
    className={`
      @mq-bigdesk--grid-template-columns:var-2
      @mq-bigdesk--grid-gap:0
      @mq-lap--margin-top:columns-0-1/2
      @mq-lap--margin-bottom:columns-1
      @mq-lap--grid-gap:columns-0-1/2
      @mq-lap--grid-template-columns:var-1
      display:grid
      grid-gap:400
      margin-bottom:800
      padding-top:0
      position:relative
    `}
    style={{
      '--grid-template-columns-var-1': `5.5fr 6fr`,
      '--grid-template-columns-var-2': `1fr 4fr 7fr`,
    }}
  >
    {children}
  </div>
)
