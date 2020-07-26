import React from 'react'
import GatsbyImage from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

const FluidImage = ({
  image,
  withFallback = true,
  className = ``,
  artDirection = `imageFile`,
  sizes,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      fallBackImage: file(relativePath: {eq: "fallback.svg"}) {
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
        <img
          src={data.fallBackImage.publicURL}
          alt=""
          className={`width:100 height:100`}
          {...props}
        />
      </div>
    )
  }

  if (image[artDirection]) {
    const {fluid} = image[artDirection].childImageSharp
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

  return (
    <img
      src={image.sourceUrl}
      alt={image.altText}
      className={`${className} width:100`}
      {...props}
    />
  )
}

export default FluidImage

export const imageFragments = graphql`
  fragment PortraitImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFile {
      childImageSharp {
        fluid(maxWidth: 1000, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }

  fragment SquareImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFile {
      childImageSharp {
        fluid(maxHeight: 800, maxWidth: 800, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }

  fragment MovieImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFile {
      childImageSharp {
        fluid(maxHeight: 450, maxWidth: 800, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }

  fragment HeroImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFileHero {
      childImageSharp {
        fluid(
          maxWidth: 1615
          maxHeight: 970
          cropFocus: CENTER
          sizes: "(max-aspect-ratio: 16/10) calc(100vh * 1.6), 100vw"
          srcSetBreakpoints: [800, 1280, 1615, 1920]
        ) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }

  fragment PreviewImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFile {
      childImageSharp {
        fluid(maxWidth: 540, maxHeight: 405, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }

  fragment PortraitImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFile {
      childImageSharp {
        fluid(maxWidth: 1000, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
