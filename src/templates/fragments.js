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
