import React from 'react'
import FluidImage from './FluidImage'
import SvgImg from './SvgImg'

const BaseLogo = ({ logo, alt=``, fallbackClasses, ...props }) => {
  const { imageFile } = logo

  switch (true) {
    case imageFile && imageFile.childImageSharp:
      return <FluidImage image={logo} {...props} />

    case imageFile && imageFile.extension === 'svg':
      return <SvgImg src={imageFile.publicURL} alt={alt} {...props} />

    default:
      return <p className={fallbackClasses}>{alt}</p>
  }
}

export default BaseLogo
