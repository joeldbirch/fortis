const PageTemplateFragment = (layouts) => `
  fragment PageTemplateFragment on WPGraphQL_Page {
    id
    title
    pageId
    content
    uri
    isFrontPage
    pageBuilder {
      layouts {
        ${layouts}
      }
    }
  }
`

module.exports.PageTemplateFragment = PageTemplateFragment
