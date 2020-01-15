import React from 'react'
import FluidImage from './FluidImage'

const ProjectLogo = ({ logo, alt=``, fallbackClasses, ...props }) => {

  const { imageFile } = logo
  let Logo

  if (imageFile) {
    if ( imageFile.childImageSharp ) {
      Logo = () => <FluidImage image={logo} {...props} />

    } else if (imageFile.extension === 'svg') {
      Logo = () => <img src={imageFile.publicURL} alt={alt} {...props} />

    } else {
      Logo = () => <p className={fallbackClasses}>{alt}</p>
    }
  }

  return <Logo />
}

export default ProjectLogo
