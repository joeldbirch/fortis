import React from 'react'
import Helmet from 'react-helmet'
import { uiFontSize } from 'styles/helpers'

const styles = {
  hitarea: `
    &::before--hit-area-y-100
    &:hover--color:neutral-900
    align-items:center
    cursor:pointer
    display:flex
    group
    padding:200
    position:relative
    `,
  icon: `
    visually-hidden
  `,
  text: `
    display:block
    group:hover__background-image:solid
    hover-underline
    vertical-align:top
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
          @mq-palm--margin-left:-200
          align-items:center
          display:flex
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
              toggleHandler={() => update(item.id === `all` ? [] : [item.id])}
            />
        ))}

      </ul>
      {/* this is to match header heights if font-size gets changed */}
      {/* <span className={`${uiFontSize}`}>&#160;</span> */}
    </form>
  )
}

const FilterItem = ({id, name, toggleHandler = ()=>{}, ...props}) => (
  <li
    className={`
      margin-bottom:-200
      margin-right:vw
      rhythm-fix-before
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
