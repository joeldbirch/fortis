import React from 'react'
import { useStaticQuery, graphql  } from 'gatsby'

import MenuItem from './MenuItem'

const Menu = ({toggleHandler=function(){}, isOpen=false}) => {
  const data = useStaticQuery(graphql`
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
  `)

  if (!data.wpgraphql.menuItems) return null

  const menuItems = data.wpgraphql.menuItems.nodes || []
  const wordPressUrl = data.wpgraphql.generalSettings.url


  function toggleMenu() {
    toggleHandler(!isOpen)
  }

  return (
    <div className={`
    `}>
      <nav role="navigation">
        <button
          aria-haspopup
          aria-expanded={isOpen}
          className={`
            padding:0
            position:relative
            font-size:500
            &:before--hit-area-xy-100
            &:hocus--text-decoration:underline
            z-index:200
          `}
          onClick={toggleMenu}
        >
          {isOpen ? `Close` : `Menu`}
        </button>
        <ul
          className={`
            position:fixed
            pos-right:0
            pos-top:0
            height:100vh
            display:block
            width:100
            max-width:75
            @mq-palm--max-width:50
            transition-property:opacity-transform
            transition-duration:200
            padding-top:site-pad-300
            padding-left:site-pad-300
            padding-right:site-pad
            ${isOpen ?  `` : `translate-x:100`}
          `
          }
          style={{
            backgroundColor: "hsla(25, 15%, 85%, 0.8)",
            backdropFilter: "blur(3px)",
          }}
        >
          {
            menuItems.map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl} />
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Menu
