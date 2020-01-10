import React from 'react'
import { useStaticQuery, graphql  } from 'gatsby'

import MenuItem from './MenuItem'

const Menu = ({toggleHandler=function(){}, isOpen=false, className=``}) => {
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
      ${className}
    `}>
      <nav role="navigation">
        <button
          aria-haspopup
          aria-expanded={isOpen}
          className={`
            padding:0
            position:relative
            font-size:300
            @mq-tiny--font-size:400
            @mq-lap--font-size:500
            &:before--hit-area-xy-100
            &:hocus--text-decoration:underline
            z-index:200
          `}
          onClick={toggleMenu}
        >
          {isOpen ? `Close` : `Menu`}
        </button>
        <div
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
            transition-duration:400
            padding-top:site-pad-300
            padding-left:site-pad-300
            padding-right:site-pad
            ${isOpen ?  `` : `translate-x:50 opacity:0`}
          `
          }
          style={{
            backgroundColor: "hsla(25, 15%, 85%, 0.93)",
            backdropFilter: "blur(3px)",
          }}
        >
          <ul className={`
            padding-vertical:400
          `}>
            {
              menuItems.map((menuItem) => (
                <MenuItem
                  className={`
                    @mq-tiny--font-size:500
                  `}
                  linkClasses={`
                    text-decoration:none
                    &:hocus--text-decoration:underline
                    color:neutral-900
                  `}
                  key={menuItem.id}
                  menuItem={menuItem}
                  wordPressUrl={wordPressUrl}
                />
              ))
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu
