import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'


const FluidImage = ({ image, withFallback = true, className=``, artDirection=`imageFile`, sizes, ...props }) => {

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
    return withFallback ? <div className={`${className}`}><img src={data.fallBackImage.publicURL} alt="" className={`width:100 height:100`} {...props} /></div> : null
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
      alt={image.altText || ``}
      className={className}
      durationFadeIn={1000}
      {...props}
    />
  }

  return <img src={image.sourceUrl} alt={image.altText} className={`${className} width:100`} {...props} />
}

export default FluidImage
