import React from 'react'
import FluidImage from '../../components/FluidImage'

const Hero = ({image, label}) => {
  return (
    <section>
      <h2>{label}</h2>
      <FluidImage image={image} />
    </section>
  )
}

export default Hero
