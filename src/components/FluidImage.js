import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const FluidImage = ({ image, withFallback = false, ...props }) => {
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
    return withFallback ? <img src={data.fallBackImage.publicURL} alt="" {...props} /> : null
  }

  const normalisedFile = image.imageFile || image.imageFilePortrait

  if (normalisedFile) {
    return <GatsbyImage fluid={normalisedFile.childImageSharp.fluid} alt={image.altText} {...props} />
  }

  return <img src={image.sourceUrl} alt={image.altText} {...props} />
}

export default FluidImage
