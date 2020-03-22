import React from 'react'
import FluidImage from 'components/FluidImage'
import Divider from 'components/DividerHorizontal'
import { subhead } from 'styles/helpers'

const Location = ({fallbackImage, nearby, listHeading=``}) => {

  const amenities = nearby && Object.values(nearby).map(item => item.amenity )

  return (
    <div
      className={`
        margin-vertical:columns-0-1/2
        @mq-max-palm--margin-vertical:800
        width:100
        display:grid
        grid-gap:0
        @mq-palm--grid-template-columns:var-2
        @mq-lap--grid-template-columns:var-3
        @mq-desk--grid-template-columns:var-3
        @mq-bigdesk--grid-template-columns:var-4
        max-width:container
        margin-horizontal:auto
        padding-horizontal:columns-0-1/2
      `}
        style={{
          '--scale-x-var-1': `1.75`,
          '--scale-y-var-1': `1.75`,
          '--scale-x-var-2': `1.25`,
          '--scale-y-var-2': `1.25`,
          '--grid-template-columns-var-2': `7fr 5fr`,
          '--grid-template-columns-var-3': `8fr 4fr`,
          '--grid-template-columns-var-4': `9fr 3fr`,
        }}
    >
      <div
        className={`
          position:relative
          padding-bottom:800
          @mq-palm--padding-bottom:columns-0-1/2
          @mq-palm--margin-left:columns-0-1/2
          @mq-palm--padding-left:columns-0-1/2
          @mq-widepalm--padding-left:0
        `}
      >
        <Divider noMargin />
        <h2
          className={`
            ${subhead}
            margin-bottom:400
            rhythm-fix-after
            margin-top:400
            margin-bottom:800
            @mq-palm--margin-bottom:columns-0-1/2
          `}
        >
          { listHeading }
        </h2>

        { amenities && amenities.length < 1
          ? ``
          : <ol
              className={`
                list-type:none
                display:grid
                grid-gap:200
                @mq-widepalm--grid-gap:400
              `}
              style={{
                '--grid-template-columns-var-1': `auto 1fr`
              }}
            >
              { amenities?.map((amenity, index) => (
                <li
                  key={index}
                  className={`
                    display:grid
                    grid-template-columns:var-1
                    align-items:center
                    grid-gap:300
                    @mq-lap--grid-gap:400
                  `}
                >
                  <span
                    aria-hidden
                    className={`
                      marker
                      display:inline-flex
                      size:800
                      border-style:solid
                      border-color:inherit
                      border-width:100
                      border-radius:1000
                      align-items:center
                      justify-content:center
                    `}
                  >
                    <span
                      className={`
                        font-size:200
                        line-height:200
                      `}
                    >{index + 1}</span>
                  </span>
                  <span
                    className={`
                      font-size:300
                      @mq-lap--font-size:400
                    `}
                  >{amenity}</span>
                </li>
              ))}
            </ol>
        }
      </div>

      <div
        className={`
          @mq-bigdesk--margin-left:0
          @mq-palm--grid-column:1
          @mq-palm--grid-row:1
          @mq-palm--margin-left:-columns-0-1/2
          overflow:hidden
        `}
      >
        <FluidImage
          image={fallbackImage}
          className={`
            @mq-bigdesk--transform:none
            @mq-lap--transform:var-2
            display:block
            height:100
            transform:var-1
            width:100
          `}
          // ensure wider image than phone viewport as it crops heavily when portrait
          sizes={`
            (max-width: 1000px) 1000px
          `}
        />
      </div>
    </div>
  )
}

export default Location
