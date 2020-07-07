import React from 'react'
import SectionHeader from 'components/SectionHeader'
import {uiFontSize, navList, navItem, navHitarea, navText} from 'styles/helpers'

const SectionNav = ({title = ``, headingPriority = `2`, children}) => {
  const HeadingTag = `h${headingPriority}`
  return (
    <SectionHeader
      absolute={false}
      className={`
        js-contrast
        js-no-header-bg
      `}
    >
      <HeadingTag className={uiFontSize}>{title}</HeadingTag>
      <ul
        className={`
          ${navList}
          ${uiFontSize}
          padding-top:400
        `}
      >
        {children}
      </ul>
    </SectionHeader>
  )
}

export default SectionNav

export const Item = ({to = `#`, children}) => {
  return (
    <li className={navItem}>
      <a className={navHitarea} href={to}>
        <span className={navText}>{children}</span>
      </a>
    </li>
  )
}
