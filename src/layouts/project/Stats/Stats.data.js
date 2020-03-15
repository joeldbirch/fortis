module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_Stats {
      fieldGroupName
      disclaimer
      items {
        label
        value
      }
    }
  `
}
