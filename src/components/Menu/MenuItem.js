import React from 'react'
import { Link } from 'gatsby'
import { CreateLocalLink, convertAmpersands } from '../../utilities/helpers'


const MenuItem = ({ menuItem, wordPressUrl, tagName=`li`, linkClasses, ...props }) => {

  const ItemWrap = `${tagName}`

  return (
    <ItemWrap {...props}>
      <Link
        to={CreateLocalLink(menuItem, wordPressUrl)}
        className={`
          ${linkClasses}
        `}
      >
        { convertAmpersands(menuItem.label) }
      </Link>
    </ItemWrap>
  )
}

export default MenuItem
