import React from 'react'
import Flickity from 'react-flickity-component'
import Helmet from 'react-helmet'
import 'flickity/css/flickity.css'
import FluidImage from '../../../components/FluidImage'
import { handwritten } from '../../../styles/helpers'

const ImageGallery = ({imageGallery}) => {
  return (

    <section
      className={`
        position:relative
        width:100vw
        margin-vertical:columns-0-1/2
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
            padding: 1rem;
          }
          .flickity-prev-next-button.next {
            right: 0;
          }
          .flickity-prev-next-button.previous {
            left: 0;
          }
        `}</style>
      </Helmet>

      <Flickity
        static={true}
      >
        { imageGallery.map((image, index) => (
          <div key={index} className={`
            position:relative
            width:100
          `}>
            <FluidImage
              image={image}
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
