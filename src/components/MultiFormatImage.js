import React from 'react'
import FluidImage from './FluidImage'
import SvgImg from './SvgImg'

const formatComponents = {
  svg: SvgImg,
  gif: `img`,
}

const usesPublicURL = (image) => image && image.imageFile && image.imageFile.publicURL && Object.keys(formatComponents).includes(image.imageFile.extension)

const MultiFormatImage = ({
  alt=``,
  fallbackClasses=``,
  image,
  sizes,
  textFallback=false,
  ...props
}) => {

  let Image

  if (usesPublicURL(image)) {
    const { extension, publicURL } = image.imageFile
    const Component = formatComponents[extension]

    Image = () => <Component
      alt={alt}
      className={`
        width:100
        height:auto
      `}
      src={publicURL}
      {...props}
    />

  } else if ( textFallback ) {
    Image = () => <p className={fallbackClasses}>{alt}</p>

  } else {
    Image = () => <FluidImage image={image} sizes={sizes} {...props} />
  }

  return <Image />
}

export default MultiFormatImage
