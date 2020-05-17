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
