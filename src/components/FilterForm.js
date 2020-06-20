import React from 'react'
import {Helmet} from 'react-helmet'
import {uiFontSize, navList, navItem, navHitarea, navText} from 'styles/helpers'

const styles = {
  icon: `
    visually-hidden
  `,
}

const FilterForm = ({items, update = () => {}, className = ``, ...props}) => {
  const defaultTag = {
    name: `All`,
    id: `all`,
  }

  const shownTags = [defaultTag, ...items.filter((tag) => tag.count > 0)]

  return (
    <form
      className={`
        ${className}
        ${uiFontSize}
        color:neutral-700
        display:inline-flex
        pointer-events:auto
      `}
      style={{
        userSelect: `none`,
      }}
      {...props}
    >
      <Helmet>
        <style>{`
          .kb-nav-used label:focus-within {
            background-color: #f1f1f1;
            color: #111;
          }
        `}</style>
      </Helmet>
      <ul
        className={`
          ${navList}
        `}
      >
        {shownTags?.length &&
          shownTags.map((item) => (
            <FilterItem
              key={item.id}
              name={item.name}
              id={item.id}
              toggleHandler={() => update(item.id === `all` ? [] : [item.id])}
            />
          ))}
      </ul>
      {/* this is to match header heights if font-size gets changed */}
      {/* <span className={`${uiFontSize}`}>&#160;</span> */}
    </form>
  )
}

const FilterItem = ({id, name, toggleHandler = () => {}, ...props}) => (
  <li
    className={`
      ${navItem}
    `}
    key={id}
    {...props}
  >
    <label className={navHitarea}>
      <input
        type="radio"
        defaultChecked={id === `all`}
        className={`
          ${styles.icon}
        `}
        name="filters"
        onChange={() => toggleHandler(id)}
      />
      <span className={navText}>{name}</span>
    </label>
  </li>
)

export default FilterForm
