import React from 'react'
import FluidImage from './FluidImage'

const ProjectLogo = ({ logo, alt=`` }) => {

  const { imageFile } = logo
  let Logo

  if (imageFile) {
    if ( imageFile.childImageSharp ) {
      Logo = () => <FluidImage image={logo} />

    } else if (imageFile.extension === 'svg') {
      Logo = () => <img src={imageFile.publicURL} alt={alt} />

    } else {
      Logo = () => <h1>{alt}</h1>
    }
  }

  return <Logo />
}

export default ProjectLogo
