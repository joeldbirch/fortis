import React from 'react'
import Logo from './BaseLogo'
import FluidImage from './FluidImage'
import { cols, mq } from 'utilities/helpers'

const ProjectDetails = ({
  title,
  id=null,
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
        @mq-desk--padding-horizontal:columns-1-1/2
        padding-top:site-top
        position:relative
        scroll-snap-align:start
      `}
      id={id}
    >
      <div
        className={`
          @mq-palm--display:flex
        `}
      >

        <div className={`
          @mq-palm--width:50
          @mq-palm--padding-right:columns-1
          rhythm-fix-before
        `}>
          <div
            className={`
              max-width:caption
              @mq-max-palm--width:50
              position:relative
            `}
          >
            <Logo
              logo={ logo }
              alt={`${title} logo`}
              width="264"
              height="80"
              className={`
                width:100
                height:auto
              `}
              fallbackClasses={`rhythm-fix-after font-size:700`}
              sizes={`15em`}
            />
          </div>
          <div className={`
            margin-top:800
            @mq-palm--margin-top:columns-0-1/2
          `}>
            <p className={`
              meta
              font-size:300
              @mq-bigdesk--font-size:400
              margin-bottom:400
            `}>
              <span>{fullAddress}</span><br />
              <span>{status}</span> /
              <span>{buildingType}</span>
            </p>

            <div
              dangerouslySetInnerHTML={{__html: introductoryText}}
              className={`
                s-editable
                font-size:500
                @mq-bigdesk--font-size:600
              `}
            />
            {
              enquiryLink
              ?
                <p className={`
                  margin-top:800
                  @mq-palm--margin-top:columns-0-1/2
                `}>
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

        <div className={`
          @mq-palm--width:50
          @mq-desk--padding-left:columns-1
        `}>
          <FluidImage
            image={suburbImage}
            className={`
              @mq-max-palm--margin-top:columns-1
              @mq-palm--height:100
            `}
            sizes={`
              (max-width: ${mq.toPalm}) ${cols(12)}vw,
              (min-width: ${mq.desk}) ${cols(4)}vw,
              (min-width: ${mq.palm}) ${cols(6)}vw
            `}
          />
        </div>
      </div>

    </section>
  )
}

export default ProjectDetails
