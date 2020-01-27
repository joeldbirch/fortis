import React from 'react'
import { useMenuData  } from '../../hooks/use-menu-data'

import MenuItem from './MenuItem'
import CloseAnimation from '../CloseAnimation'
import { centred, appleFade, appleBezier, uiFontSize } from '../../styles/helpers'



const Menu = ({toggleHandler=function(){}, isOpen=false, className=``}) => {
  const {
    menuItems = [],
    wordPressUrl,
  } = useMenuData()

  if (!menuItems) return null

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
            padding:0
            position:absolute
            ${uiFontSize}
            &:before--hit-area-xy-100
            &:hover--text-decoration:underline
            z-index:200
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
              underlined
              underlined--thin
              underlined-reveal
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
            menu-bg
            position:fixed
            pos-right:0
            pos-top:0
            height:100vh
            display:block
            width:100
            max-width:columns-11-1/2
            @mq-palm--max-width:columns-6-1/2
            @mq-bigdesk--max-width:columns-4-1/2
            transition-property:opacity-transform
            transition-duration:400
            padding-top:site-top
            padding-left:columns-1
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
            menu-list
            list-style:none
            padding:0
            margin:0
            font-size:700
            font-weight:300
          `}>
            {
              menuItems.map((menuItem) => (
                <MenuItem
                  className={`
                  `}
                  linkClasses={`
                    text-decoration:none
                    &:hover--text-decoration:underline
                    underlined
                    underlined--thin
                    underlined-reveal
                    color:neutral-900
                    display:inline-block
                    @mq-max-palm--padding-vertical:100
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
