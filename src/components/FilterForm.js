import React, { useEffect, useState } from 'react'
import { uiFontSize } from 'styles/helpers'

const styles = {
  hitarea: `
    display:flex
    align-items:center
    font-size:300
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

  const itemToggled = (id, checked) => {
    const newFilters = checked
      ? [...currentFilters, id]
      : currentFilters.filter(filterId => filterId !== id)

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
        display:flex
      `}
      style={{
        userSelect: `none`
      }}
    >
      <ul
        className={`
          display:flex
          flex-wrap:wrap
          margin-horizontal:-200
        `}
      >
        <li className={``}>
          <button
            type="reset"
            className={styles.hitarea}
            onClick={reset}
          >
            <span className={styles.icon} >↻</span>
            <span className={styles.text} >Reset filter</span>
          </button>
        </li>

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

const FilterItem = ({id, name, checked=null, toggleHandler = ()=>{}, ...props}) => (
  <li
    className={`
    `}
    key={id}
    {...props}
  >
    <label className={styles.hitarea} >
      <input
        defaultChecked={checked}
        type="checkbox"
        className={styles.icon}
        onChange={({target}) => toggleHandler(id, target.checked)}
      />
      <span className={styles.text} >{name}</span>
    </label>
  </li>
)


export default FilterForm
