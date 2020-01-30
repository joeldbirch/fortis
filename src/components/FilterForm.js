import React, { useEffect, useState } from 'react'

const styles = {
  hitarea: `
    display:inline-flex
    font-size:200
    padding-vertical:100
    padding-horizontal:200
    cursor:pointer
  `,
  icon: `
    vertical-align:middle
    margin-right:100
  `,
  text: `
    vertical-align:middle
  `

}


const FilterForm = ({
  items,
  reset = ()=>{},
  changeHandler = ()=>{},
}) => {


  const shownTags = items.filter(tag => tag.count > 0)

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
          flex-wrap:wrap
          @mq-max-palm--justify-content:center
          margin-horizontal:-100
        `}
      >
        <li>
          <button
            type="reset"
            className={styles.hitarea}
            onClick={reset}
          >
            <span className={styles.icon} >↻</span>
            <span className={styles.text} >Reset</span>
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
