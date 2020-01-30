import React from 'react'
import Flickity from 'react-flickity-component'
import Helmet from 'react-helmet'
import 'flickity/css/flickity.css'
import FluidImage from 'components/FluidImage'
import {path} from 'components/ArrowRounded'
import { handwritten } from 'styles/helpers'

const ImageGallery = ({imageGallery}) => {
  return (

    <section
      className={`
        js-contrast-ignore
        position:relative
        width:100vw
        padding-vertical:columns-0-1/2
        overflow:hidden
        scroll-snap-align:center
      `}
    >
      <Helmet>
        <style>{`
          /* allow caption to break out of flickity container */
          .flickity-viewport {
            overflow: visible;
          }
          /* move dots to be inside flickity container */
          .flickity-page-dots {
            bottom: 1rem;
          }
          .flickity-button {
            border-radius: 0;
            padding: 3vw;
          }
          .flickity-prev-next-button.next {
            right: 0;
          }
          .flickity-prev-next-button.previous {
            left: 0;
          }
          .flickity-prev-next-button .flickity-button-icon {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 0.875rem;
            height: 0.875rem;
          }
        `}</style>
      </Helmet>

      <Flickity
        options={{arrowShape: path}}
        static={true}
      >
        { imageGallery.map((image, index) => (
          <div key={index} className={`
            position:relative
            width:100
            js-contrast
            js-contrast--reverse
          `}>
            <FluidImage
              image={image}
              artDirection={`imageFileHero`}
              className={`
                width:100
                height:100
              `}
            />
            <div
              className={`
                ${handwritten}
                padding-top:columns-0-1/4
                position:absolute
                pos-top:100
                pos-right:0
                width:33
              `}
              dangerouslySetInnerHTML={{__html: image.caption}}
            />
          </div>
        ))}
      </Flickity>

    </section>
  )
}

export default ImageGallery
