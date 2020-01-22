module.exports = () => {
  return `
    ... on WPGraphQL_Project_Projectbuilder_Layouts_GoogleMap {
      fieldGroupName
      location {
        city
        streetAddress
        postCode
        zoom
        longitude
        latitude
      }
    }
  `
}
