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

const TheHero = ({ ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "hero-corner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 41) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.hero.childImageSharp.fluid}
        {...props}
      />
    )}
  />
)
export default TheHero
