const FluidImageFragment = `
  fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
    aspectRatio
    presentationWidth
    presentationHeight
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

module.exports.FluidImageFragment = FluidImageFragment

const HeroImage = `
  fragment HeroImage on WPGraphQL_MediaItem {
    sourceUrl
    altText
    imageFileHero {
      childImageSharp {
        fluid(
          maxWidth: 1615,
          maxHeight: 970,
          cropFocus: CENTER,
          sizes: "(max-aspect-ratio: 16/10) calc(100vh * 1.6), 100vw",
          srcSetBreakpoints: [ 800, 1280, 1615, 1920 ]) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

module.exports.HeroImage = HeroImage

module.exports.PreviewImage = `
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
`

module.exports.GalleryImage = `
fragment GalleryImage on WPGraphQL_MediaItem {
  sourceUrl
  altText
  caption
  imageFileHero {
    childImageSharp {
      fluid(
        maxWidth: 1615,
        maxHeight: 970,
        cropFocus: CENTER,
        sizes: "(min-width: 1400px) 1250px, 100vw",
        srcSetBreakpoints: [ 800, 1250, 1600, 1920 ]) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`
