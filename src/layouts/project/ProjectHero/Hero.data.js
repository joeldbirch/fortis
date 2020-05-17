module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_Hero {
      fieldGroupName
      image {
        ...HeroImage
      }
    }
  `
}
