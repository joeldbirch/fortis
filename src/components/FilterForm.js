import React from 'react'
import Helmet from 'react-helmet'
import { uiFontSize } from 'styles/helpers'

const styles = {
  hitarea: `
    position:relative
    &::before--hit-area-y-100
    display:flex
    align-items:center
    padding-vertical:100
    padding-horizontal:200
    cursor:pointer
    &:hover--color:neutral-900
    group
    `,
  icon: `
    visually-hidden
  `,
  text: `
    vertical-align:top
    hover-underline
    display:block
    group:hover__background-image:solid
  `
}


const FilterForm = ({
  items,
  update = ()=>{},
  className=``,
}) => {

  const defaultTag = {
    name: `All`,
    id: `all`,
  }

  const shownTags = [defaultTag, ...items.filter(tag => tag.count > 0)]

  return (
    <form
      className={`
        ${className}
        ${uiFontSize}
        color:neutral-700
        display:inline-flex
      `}
      style={{
        userSelect: `none`
      }}
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
          display:flex
          align-items:center
          flex-wrap:wrap
          @mq-palm--margin-left:-200
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
              toggleHandler={() => update(item.id === `all` ? [] : [item.id])}
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
        type="radio"
        defaultChecked={id===`all`}
        className={`
          ${styles.icon}
        `}
        name="filters"
        onChange={() => toggleHandler(id)}
      />
      <span className={styles.text} >{name}</span>
    </label>
  </li>
)


export default FilterForm
