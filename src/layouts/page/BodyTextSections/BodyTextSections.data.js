module.exports = () => {
  return `
    ... on WPGraphQL_Page_Pagebuilder_Layouts_BodyTextSections {
      fieldGroupName
      sections {
        bodyCopy
        headingStyle
        sectionHeading
      }
    }
  `
}
