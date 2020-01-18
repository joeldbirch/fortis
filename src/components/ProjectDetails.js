import React from 'react'
import Logo from './BaseLogo'
import FluidImage from './FluidImage'

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
    >

      <div
        className={`
          @mq-palm--display:flex
          @mq-desk--padding-horizontal:columns-1
        `}
      >

        <div className={`
          @mq-palm--width:50
          @mq-palm--padding-right:columns-1
        `}>
          <Logo
            logo={ logo }
            alt={`${title} logo`}
            width="264"
            height="80"
            className={`
              max-width:logo
            `}
            fallbackClasses={`rhythm-fix-after font-size:700`}
          />
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
              {fullAddress}<br />
              {status} /
              {buildingType}
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
