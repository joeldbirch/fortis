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
        margin-bottom:-columns-0-1/2
        margin-horizontal:auto
        max-width:container
        @mq-bigdesk--padding-horizontal:columns-0-1/2
        position:relative
        scroll-snap-align:center
        width:100
      `}
    >
      <div
        className={`
          overflow:hidden
          padding-bottom:columns-1
          padding-top:columns-0-1/2
        `}
      >
        <Flickity
          options={{
            arrowShape: path,
            pageDots: false,
            setGallerySize: false,
            draggable: false,
          }}
          static={true}
          className={`
            aspectConstrained
          `}
        >
          {imageGallery.map((image, index) => (
            <div
              key={index}
              className={`
                width:100
                height:100
              `}
            >
              <FluidImage
                image={image}
                artDirection={`imageFileHero`}
                className={`
                  height:100
                  width:100
                `}
                imgStyle={{
                  objectFit: `contain`,
                }}
              />
              <div
                className={`
                  handwritten
                  padding-top:columns-0-1/4
                  pos-right:0
                  pos-top:100
                  position:absolute
                  width:33
                `}
                dangerouslySetInnerHTML={{__html: image.caption}}
              />
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  )
}

export default ImageGallery
