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
      margin-horizontal:auto
      max-width:container
      padding-horizontal:columns-0-1/2
      position:relative
      width:100
    `}>
      <Divider/>
      <section>
        <h2
          className={`
            ${uiFontSize}
            @mq-desk--padding-horizontal:columns-1
            margin-top:600
          `}
        >
          Similar projects
        </h2>

        <div
          className={`
            @mq-desk--padding-horizontal:columns-1
            overflow:hidden
            padding-vertical:columns-1
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
                    @mq-desk--margin-right:columns-0-1/2
                    @mq-desk--width:columns-3
                    @mq-lap--margin-right:columns-0-1/2
                    @mq-lap--width:var-2
                    margin-right:columns-0-1/2
                    width:var-1
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
