import React from 'react'
import FluidImage from '../../components/FluidImage'

const Branded = ({image, text}) => {
  return (
    <section>
      <h2 className={`
        font-family:cursive
        font-weight:400
      `}>{text}</h2>
      <FluidImage image={image} />
    </section>
  )
}

export default Branded
