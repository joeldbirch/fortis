import React from 'react'
import FluidImage from './FluidImage'

const MultiFormatImage = ({ image, alt=``, fallbackClasses, ...props }) => {

  const { imageFile } = image
  let Image

  if (imageFile) {
    if ( imageFile.childImageSharp ) {
      Image = () => <FluidImage image={image} {...props} />

    } else if (imageFile.extension === 'svg') {
      Image = () => <img src={imageFile.publicURL} alt={alt} {...props} />

    } else {
      Image = () => <p className={fallbackClasses}>{alt}</p>
    }
  }

  return <Image />
}

export default MultiFormatImage
