import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const FluidImage = ({ image, withFallback = false, className=``, ...props }) => {

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

  const normalisedFile = image.imageFile || image.imageFilePortrait

  if (normalisedFile) {
    return <GatsbyImage
      fluid={normalisedFile.childImageSharp.fluid}
      alt={image.altText}
      className={className}
      durationFadeIn={1500}
      {...props}
    />
  }

  return <img src={image.sourceUrl} alt={image.altText} className={`${className} width:100`} {...props} />
}

export default FluidImage
