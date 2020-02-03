import React, { useEffect, useState } from 'react'
import { uiFontSize } from 'styles/helpers'

const styles = {
  hitarea: `
    display:flex
    align-items:center
    padding-vertical:100
    padding-horizontal:200
    cursor:pointer
    line-height:200
    &:hover--text-decoration:underline
  `,
  // TODO: use SVG for reset icon
  icon: `
    margin-right:100
  `,
  text: `
  vertical-align:top
  `
}


const FilterForm = ({
  items,
  reset = ()=>{},
  update = ()=>{},
  className=``,
}) => {

  const shownTags = items.filter(tag => tag.count > 0)

  const [currentFilters, setFilter] = useState([])

  const itemToggled = (id) => {
    const newFilters = currentFilters.includes(id)
      ? currentFilters.filter(filterId => filterId !== id)
      : [...currentFilters, id]

    setFilter(newFilters)
    update(newFilters)
  }

  // reset on page load
  useEffect(() => setFilter([]), [])

  return (
    <form
      className={`
        ${className}
        color:neutral-700
        display:inline-flex
        font-size:300
      `}
      style={{
        userSelect: `none`
      }}
    >
      <h2
        className={`
          display:flex
          align-items:flex-start
          padding-vertical:100
          padding-horizontal:200
          line-height:200
          font-weight:400
          font-size:em
          margin-left:-200
          ${styles.text}
        `}
      >Filters:</h2>
      <ul
        className={`
          display:flex
          align-items:center
          flex-wrap:wrap
        `}
      >
        {
          shownTags
          && shownTags.length
          && shownTags
          .map(item => (
            <FilterItem
              key={item.id}
              name={item.name}
              id={item.id}
              toggleHandler={itemToggled}
            />
        ))}

      </ul>
      {/* this is to match header heights because reasons */}
      <span className={`${uiFontSize}`}>&#160;</span>
    </form>
  )
}

const FilterItem = ({id, name, toggleHandler = ()=>{}, ...props}) => (
  <li
    className={`
    `}
    key={id}
    {...props}
  >
    <label className={styles.hitarea} >
      <input
        type="checkbox"
        className={styles.icon}
        name="filters"
        onChange={() => toggleHandler(id)}
      />
      <span className={styles.text} >{name}</span>
    </label>
  </li>
)


export default FilterForm
