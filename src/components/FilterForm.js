import React, { useEffect, useState } from 'react'

const FilterItem = ({id, name, checked=null, toggleHandler = ()=>{}, ...props}) => (
  <li
    className={`
      margin:200
    `}
    key={id}
    {...props}
  >
    <label
      className={`
        display:inline-block
          font-size:200
      `}
    >
      <input
        defaultChecked={checked}
        type="checkbox"
        className={`
          vertical-align:0
          margin-right:100
        `}
        onChange={({target}) => toggleHandler(id, target.checked)}
      />
      <span
        className={`
          vertical-align:middle
        `}
      >{name}</span>
    </label>
  </li>
)


const FilterForm = ({items, changeHandler = ()=>{} }) => {

  const all = {
    name: `All`,
    id: null,
  }

  const shownItems = items.filter(item => item.count > 0)

  const [currentFilters, setFilter] = useState([])

  const itemToggled = (id, checked) => {
    const newFilters = checked
      ? [...currentFilters, id]
      : currentFilters.filter(filterId => filterId === id)

    setFilter(newFilters)
    changeHandler(newFilters)
  }

  // reset on page load
  useEffect(() => setFilter([]), [])

  // toggleItem(id, checked) {

  // }

  return (
    <form>
      <ul
        className={`
          display:flex
          margin:-200
        `}
      >
        {
          shownItems
          && shownItems.length
          && shownItems
          .map(item => (
            <FilterItem
              key={item.id}
              name={item.name}
              id={item.id}
              toggleHandler={itemToggled}
            />
        ))}

      </ul>

    </form>
  )
}

export default FilterForm;
