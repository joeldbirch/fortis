import React from 'react'
import FluidImage from './FluidImage'
import SvgImg from './SvgImg'

const MultiFormatImage = ({ image, alt=``, fallbackClasses, ...props }) => {

  const { imageFile } = image
  let Image

  if (imageFile) {
    if ( imageFile.childImageSharp ) {
      Image = () => <FluidImage image={image} {...props} />

    } else if (imageFile.extension === 'svg') {
      Image = () => <SvgImg
        alt={alt}
        src={imageFile.publicURL}
        {...props}
      />

    } else if (imageFile.extension === 'gif') {
        Image = () => <img
          alt={alt}
          src={imageFile.publicURL}
          {...props}
        />

    } else {
      Image = () => <p className={fallbackClasses}>{alt}</p>
    }
  }

  return <Image />
}

export default MultiFormatImage
