module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_GoogleMap {
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
