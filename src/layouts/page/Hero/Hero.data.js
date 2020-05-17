module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_Hero {
      fieldGroupName
      label
      linkTo {
        ... on WPGraphQL_Project {
          id
          link
        }
        ... on WPGraphQL_Page {
          id
          link
        }
      }
      video
      image {
        ...HeroImage
      }
    }

  `
}
