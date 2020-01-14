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

  if (image && image.imageFile) {
    return <GatsbyImage fluid={image.imageFile.childImageSharp.fluid} alt={image.altText}{...props} />
  }

  return <img src={image.sourceUrl} alt={image.altText} {...props} />
}

export default FluidImage
