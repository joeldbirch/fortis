import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const FluidImage = ({ image, withFallback = false, className=``, artDirection=`imageFile`, sizes, ...props }) => {

  const data = useStaticQuery(graphql`
    query {
      fallBackImage: file(relativePath: { eq: "fallback.svg" }) {
        publicURL
      }
    }
  `)
  /**
   * Return fallback image, if no image is given.
   */
  if (!image) {
    return withFallback ? <img src={data.fallBackImage.publicURL} alt="" className={`${className} width:100`} {...props} /> : null
  }

  if (image[artDirection]) {

    const fluidData = sizes
      ? {...image[artDirection].childImageSharp.fluid, sizes }
      : image[artDirection].childImageSharp.fluid

    return <GatsbyImage
      fluid={fluidData}
      alt={image.altText}
      className={className}
      durationFadeIn={1500}
      {...props}
    />
  }

  return <img src={image.sourceUrl} alt={image.altText} className={`${className} width:100`} {...props} />
}

export default FluidImage
