import React from 'react'
import Logo from './BaseLogo'
import FluidImage from './FluidImage'
import { uiFontSize } from '../styles/helpers'

const ProjectDetails = ({
  title,
  detailsTable: {
    mediaDetails: {
      suburbImage,
      logo,
    },
    textualDetails: {
      buildingType,
      fullAddress,
      status,
      introductoryText,
      enquiryLink,
    },
  },
}) => {

  return (
    <section
      className={`
        padding-horizontal:columns-0-1/2
        padding-top:site-top
        max-width:container
        margin-horizontal:auto
        position:relative
      `}
      style={{
        '--guides-max-width': '100rem',
        '--guide-color': 'hsla(350, 100%, 48%, 0.1)',
        '--position': 'absolute'
      }}
    >

      <div
        className={`
          @mq-palm--degrade-to-inline
          @mq-desk--padding-horizontal:columns-1
        `}
        style={{
          '--prefer-display': 'flex',
        }}
      >

        <div className={`
          @mq-palm--width:50
          @mq-palm--padding-right:columns-1
        `}>
          <Logo logo={ logo } alt={title} style={{maxWidth: '15rem'}} />
          <div className="u-space-items margin-top:columns-0-1/2">
            <p className={`
              meta
              font-size:300
              @mq-bigdesk--font-size:400
            `}>
              {fullAddress}<br />
              {status} /
              {buildingType}
            </p>

            <div
              className={`
                s-editable
              `}
            >
              <p
                className={`
                  @mq-lap--font-size:500
                  @mq-bigdesk--font-size:600
                `}
              >{introductoryText}</p>
              {
                enquiryLink
                ?
                  <p className="margin-top:columns-0-1/2">
                    <a
                      href={enquiryLink}
                      className={`
                        btn
                        display:inline-block
                      `}
                    >
                      Enquire
                    </a>
                  </p>
                : ``
              }
            </div>
          </div>
        </div>

        <div className={`
          @mq-palm--width:50
          @mq-desk--padding-left:columns-1
        `}>
          <FluidImage
            image={suburbImage}
            className={`
              @mq-max-palm--margin-top:columns-0-1/2
              @mq-max-palm--max-width:columns-10
              @mq-palm--height:100
            `}
          />
        </div>
      </div>

    </section>
  )
}

export default ProjectDetails
