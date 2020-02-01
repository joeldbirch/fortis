import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'


const FluidImage = ({ image, withFallback = false, className=``, artDirection=`imageFile`, sizes, ...props }) => {

  const data = useStaticQuery(graphql` query {
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

    const { fluid } = image[artDirection].childImageSharp
    const newFluid = !sizes
      ? fluid
      : {
        ...fluid,
        sizes: `${sizes.trim()}, ${fluid.presentationWidth}px`,
      }

    return <GatsbyImage
      fluid={newFluid}
      alt={image.altText}
      className={className}
      durationFadeIn={1500}
      backgroundColor="#f5f5f5"
      {...props}
    />
  }

  return <img src={image.sourceUrl} alt={image.altText} className={`${className} width:100`} {...props} />
}

export default FluidImage
