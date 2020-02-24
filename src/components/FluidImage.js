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
  if (!image && withFallback) {
    return (
      <div className={`${className}`}>
        <img src={data.fallBackImage.publicURL} alt="" className={`width:100 height:100`} {...props} />
      </div>
    )
  }

  if (image[artDirection]) {
    const { fluid } = image[artDirection].childImageSharp
    return (
      <GatsbyImage
        fluid={{
          ...fluid,
          sizes: sizes || fluid.sizes,
        }}
        alt={image.altText || ``}
        className={className}
        durationFadeIn={1000}
        {...props}
      />
    )
  }

  return <img src={image.sourceUrl} alt={image.altText} className={`${className} width:100`} {...props} />
}

export default FluidImage
