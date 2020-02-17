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
            fluid(maxWidth: 1600, maxHeight: 1120, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

  `
}
