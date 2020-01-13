import React from 'react'
import { useStaticQuery, graphql  } from 'gatsby'

import MenuItem from './MenuItem'
import CloseAnimation from '../CloseAnimation'

import { centred, appleFade, appleBezier, uiFontSize } from '../../styles/helpers'

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
            position:absolute
            ${uiFontSize}
            &:before--hit-area-xy-100
            &:hover--text-decoration:underline
            z-index:200
            margin-right:site-pad-100
            margin-top:site-pad-100
            pos-top-right:0
          `}
          onClick={toggleMenu}
          style={{
            width: `4em`,
            height: `1.3em`,
          }}
        >
          <span
            className={`
              width:100
              height:100
              pos-top-left:0
              position:absolute
              ${isOpen ? `opacity:0 scale:80` : ``}
            `}
            style={{
              ...appleFade,
            }}
          >
            <span
              className={`
                ${centred}
                ${isOpen ? `text-decoration:none` : ``}
              `}
            >Menu</span>
          </span>
          <CloseAnimation
            closed={isOpen}
            wrapStyles={appleFade}
          />
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
            transition-property:transform-opacity
            transition-duration:1000
            padding-top:site-pad-300
            padding-left:site-pad-300
            padding-right:site-pad
            ${isOpen ?  `` : `translate-x:100 opacity:0`}
          `
          }
          style={{
            backgroundColor: `hsla(25, 0%, 88%, 0.95)`,
            backdropFilter: `blur(3px)`,
            transitionTimingFunction: appleBezier,
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
                    &:hover--text-decoration:underline
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
