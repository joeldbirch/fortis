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
        @mq-desk--padding-horizontal:columns-1-1/2
        margin-horizontal:auto
        max-width:container
        padding-horizontal:columns-0-1/2
        padding-top:site-top
        position:relative
      `}
      id={id}
    >
      <div
        className={`
          @mq-palm--display:flex
        `}
      >

        <div className={`
          @mq-palm--padding-right:columns-1
          @mq-palm--width:50
        `}>
          <div
            className={`
              @mq-max-palm--width:50
              max-width:caption
              position:relative
            `}
          >
            <Logo
              logo={logo}
              alt={`${title} logo`}
              width="264"
              height="80"
              className={`
                height:auto
                width:100
              `}
              fallbackClasses={`rhythm-fix-after font-size:700`}
              sizes={`15em`}
            />
          </div>
          <div className={`
            @mq-desk--padding-bottom:columns-1
            @mq-lap--padding-bottom:columns-1-1/2
            @mq-palm--margin-top:columns-0-1/2
            @mq-palm--padding-bottom:columns-1
            margin-top:800
          `}>
            <p className={`
              meta
              font-size:300
              margin-bottom:400
            `}>
              <span>{fullAddress}</span><br />
              <span>{status}</span> /
              <span>{buildingType}</span>
            </p>

            <div
              dangerouslySetInnerHTML={{__html: introductoryText}}
              className={`
                @mq-lap--font-size:500
                @mq-palm--font-size:400
                @mq-tiny--font-size:500
                s-editable
              `}
            />
            {
              enquiryLink && (
                <p className={`
                  @mq-palm--margin-top:columns-0-1/2
                  margin-top:800
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
              )
            }
          </div>
        </div>

        <div className={`
          @mq-desk--padding-left:columns-1
          @mq-palm--width:50
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
