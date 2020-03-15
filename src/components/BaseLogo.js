import React from 'react'
import FluidImage from './FluidImage'

const BaseLogo = ({ logo={imageFile:null}, alt=``, fallbackClasses, ...props }) => {
  const { imageFile } = logo

  switch (true) {
    case imageFile && imageFile.childImageSharp:
      return <FluidImage image={logo} {...props} />

    case imageFile && imageFile.extension === 'svg':
      return <img src={imageFile.publicURL} alt={alt} {...props} />

    default:
      return <p className={fallbackClasses}>{alt}</p>
  }
}

export default BaseLogo
