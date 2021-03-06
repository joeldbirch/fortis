import React from 'react'
import Flickity from 'react-flickity-component'
import Divider from 'components/DividerHorizontal'
import CarouselSlide from 'components/CarouselSlide'
import {path} from 'components/ArrowRounded'
import {uiFontSize} from 'styles/helpers'
import 'flickity/css/flickity.css'
import 'styles/_flickity-overrides.scss'

const CarouselSection = ({slideData = [], title = `Related`, ...props}) => {
  if (slideData.length < 1) return ``

  return (
    <div
      className={`
        margin-horizontal:auto
        max-width:container
        padding-horizontal:columns-0-1/2
        position:relative
        width:100
      `}
      {...props}
    >
      <Divider />
      <section
        className={`
          position:relative
        `}
      >
        <h2
          className={`
            ${uiFontSize}
            @mq-desk--padding-horizontal:columns-1
            margin-top:600
          `}
        >
          {title}
        </h2>

        <div
          className={`
            @mq-desk--padding-horizontal:columns-1
            padding-vertical:columns-1
          `}
        >
          <Flickity
            className={`
              overflow:hidden
              flickity-carousel
            `}
            options={{
              arrowShape: path,
              // initialIndex: 1,
              pageDots: false,
              cellAlign: `left`,
              contain: true,
            }}
            static={true}
          >
            {slideData.map((data) => (
              <CarouselSlide
                {...data}
                style={{
                  '--width-var-1': `calc(var(--site-column) * 5.75)`,
                  '--width-var-2': `calc(var(--site-column) * 3.667)`,
                }}
                className={`
                    @mq-desk--margin-right:columns-0-1/2
                    @mq-desk--width:columns-3
                    @mq-lap--margin-right:columns-0-1/2
                    @mq-lap--width:var-2
                    margin-right:columns-0-1/2
                    width:var-1
                  `}
              />
            ))}
          </Flickity>
        </div>
      </section>
    </div>
  )
}

export default CarouselSection
