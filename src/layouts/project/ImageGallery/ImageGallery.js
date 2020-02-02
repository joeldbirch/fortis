import React from 'react'
import Flickity from 'react-flickity-component'
import FluidImage from 'components/FluidImage'
import {path} from 'components/ArrowRounded'
import 'flickity/css/flickity.css'
import 'styles/_flickity-overrides.scss'

const ImageGallery = ({imageGallery}) => {
  return (

    <section
      className={`
        js-contrast-ignore
        position:relative
        width:100vw
        padding-top:columns-0-1/2
        padding-bottom:columns-1
        margin-bottom:-columns-0-1/2
        overflow:hidden
        scroll-snap-align:center
      `}
    >
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
                handwritten
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
