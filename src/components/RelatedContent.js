import React from 'react'
import Flickity from 'react-flickity-component'
import Divider from 'components/DividerHorizontal'
import CarouselSlide from 'components/CarouselSlide'
import { path } from 'components/ArrowRounded'
import { uiFontSize } from 'styles/helpers'
import 'flickity/css/flickity.css'
import 'styles/_flickity-overrides.scss'

const RelatedContent = ({
  similarProjects,
  className=``,
}) => {

  const slides = similarProjects?.map(similar => similar.project )
  if (!slides) return ``

  return (
    <div className={`
      ${className}
      position:relative
    `}>
      <Divider/>
      <section
        className="
        "
      >
        <h2
          className={`
            ${uiFontSize}
            margin-top:600
            padding-horizontal:columns-0-1/2
            @mq-desk--padding-horizontal:columns-1-1/2
          `}
        >
          Similar projects
        </h2>

        <div
          className={`
            padding-vertical:columns-1
            padding-horizontal:columns-0-1/2
            @mq-desk--padding-horizontal:columns-1-1/2
            overflow:hidden
          `}
        >
          <Flickity
            className={'position:static'}
            options={{
              arrowShape: path,
              // initialIndex: 1,
              pageDots: false,
              cellAlign: `left`,
              contain: true,
            }}
            static={true}
          >
            {
              slides.map((slide, index) => (
                <CarouselSlide
                  post={slide}
                  key={index}
                  style={{
                    '--width-var-1': 'calc(var(--site-column) * 5.75)',
                    '--width-var-2': 'calc(var(--site-column) * 3.667)',
                  }}
                  className={`
                    width:var-1
                    margin-right:columns-0-1/2
                    @mq-lap--width:var-2
                    @mq-lap--margin-right:columns-0-1/2
                    @mq-desk--width:columns-3
                    @mq-desk--margin-right:columns-0-1/2
                  `}
                />
              ))
            }
          </Flickity>
        </div>
      </section>
    </div>
  )
}

export default RelatedContent
