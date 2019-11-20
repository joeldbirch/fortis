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

const Image = ({ name=`hero`, className=``, style={}, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        poster: file(relativePath: { eq: "poster.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 51) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        hero: file(relativePath: { eq: "hero-external-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        living: file(relativePath: { eq: "living.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bathroom: file(relativePath: { eq: "bathroom.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dining: file(relativePath: { eq: "bar-dining.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 675, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        kitchen: file(relativePath: { eq: "kitchen.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 61) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        courtyard: file(relativePath: { eq: "courtyard-looking-in.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 61) {
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
          style={style}
          {...props}
        />
      )
    }
    }
  />
)
export default Image
