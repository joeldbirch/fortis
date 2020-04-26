import {useStaticQuery, graphql} from 'gatsby'

import {siteURL} from '../../globals'

export const useMenuData = () => {
  const {wpgraphql} = useStaticQuery(
    graphql`
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
  )

  return {
    menuItems: wpgraphql.menuItems.nodes,
    wordPressUrl: wpgraphql.generalSettings.url,
    siteURL: siteURL,
  }
}
