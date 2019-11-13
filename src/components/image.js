import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ name=`penthouseLiving`, className=``, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "front-on-render.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1586, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image38Chairs: file(relativePath: { eq: "38-chairs.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 515, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        penthouseLiving: file(relativePath: { eq: "penthouse-living.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1061, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        chair: file(relativePath: { eq: "chair.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 578, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        kitchen: file(relativePath: { eq: "kitchen.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1061, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        vignetteKitchen: file(relativePath: { eq: "vignette-kitchen.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        terrace: file(relativePath: { eq: "terrace-03.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1415, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bedroom: file(relativePath: { eq: "bedroom.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 578, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ensuite: file(relativePath: { eq: "ensuite.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1415, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          className={className}
          fluid={data[name].childImageSharp.fluid}
          {...props}
        />
      )
    }
    }
  />
)
export default Image
