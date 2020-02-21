import React from 'react'
import { useMenuData  } from '../../hooks/use-menu-data'

import MenuItem from './MenuItem'
import CloseAnimation from '../CloseAnimation'
import { centred, appleFade, appleBezier, uiFontSize, getInvertedStyles } from '../../styles/helpers'


const Menu = ({toggleHandler=function(){}, isOpen=false, className=``, headerReversed}) => {
  const {
    menuItems = [],
    wordPressUrl,
  } = useMenuData()

  if (!menuItems) return null
  const transitionDuration = `400ms`

  return (
    <div className={`
      menu
      ${className}
    `}>
      <nav role="navigation">
        <button
          aria-haspopup
          aria-expanded={isOpen}
          className={`
            menu-toggler
            color:inherit
            padding:0
            position:absolute
            ${uiFontSize}
            &::before--hit-area-xy-100
            z-index:300
            margin-right:columns-0-1/2
            margin-top:columns-0-1/2
            pos-top-right:0
            user-select:none
          `}
          onClick={() => toggleHandler(!isOpen)}
          style={{
            width: `2.6em`,
            height: `1.3em`,
          }}
        >
          <span
            className={`
              width:100
              height:100
              pos-top-left:0
              position:absolute
              hover-underline
              ${isOpen ? `opacity:0 scale:80` : ``}
            `}
            style={getInvertedStyles(headerReversed)}
          >
            <span
              className={`
                ${centred}
                ${isOpen ? `text-decoration:none` : ``}
              `}
            >Menu</span>
          </span>
        </button>

        <button
          aria-haspopup
          aria-expanded={isOpen}
          className={`
            menu-toggler
            color:inherit
            padding:0
            position:fixed
            ${uiFontSize}
            &::before--hit-area-xy-100
            z-index:300
            margin-right:columns-0-1/2
            margin-top:columns-0-1/2
            pos-top-right:0
            user-select:none
          `}
          onClick={() => toggleHandler(!isOpen)}
          style={{
            width: `2.6em`,
            height: `1.3em`,
          }}
        >
          <CloseAnimation
            closed={isOpen}
            wrapStyles={appleFade}
          />
        </button>

        <div
          className={`
            menu-bg
            height:100
            padding-horizontal:columns-2
            @mq-desk--padding-horizontal:columns-1-1/2
            @mq-bigdesk--padding-horizontal:columns-1
            @mq-hover-none--align-items:center
            padding-vertical:site-top
            pos-right:0
            pos-top:0
            position:fixed
            display:flex
            ${isOpen ?  `` : `translate-x:100 opacity:0 visibility:hidden`}
          `
          }
          style={{
            backgroundColor: `hsla(25, 0%, 88%, 0.95)`,
            backdropFilter: `blur(3px)`,
            transition: `
              opacity ${transitionDuration} ${appleBezier} 0s,
              transform ${transitionDuration} ${appleBezier} 0s,
              visibility 0s linear ${isOpen ? `0s` : transitionDuration}
            `,

          }}
        >
          <ul className={`
            menu-list
            list-style:none
            padding:0
            margin-horizontal:auto
            margin-vertical:0
            font-size:600
            @mq-hover-none--font-size:700
            @mq-widepalm--font-size:600
            white-space:no-wrap
            rhythm-fix-before
          `}>
            {
              menuItems.map((menuItem) => (
                <MenuItem
                  className={`
                  `}
                  linkClasses={`
                    hover-underline
                    color:neutral-900
                    display:inline-block
                    @mq-hover-none--padding-vertical:px
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
