module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_ImageGallery {
      fieldGroupName
      imageGallery {
        sourceUrl
        altText
        caption
        imageFileHero {
          childImageSharp {
            fluid(maxWidth: 1250, maxHeight: 875, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

  `
}
