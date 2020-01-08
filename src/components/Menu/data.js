export default () => `
  fragment MenuItem on WPGraphQL_MenuItem {
    id
    label
    url
    title
    target
  }
  query GETMAINMENU {
    wpgraphql {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          ...MenuItem
        }
      }
      generalSettings {
        url
      }
    }
  }
`
