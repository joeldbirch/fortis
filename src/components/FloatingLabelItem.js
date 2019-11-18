import React from 'react'
import Helmet from 'react-helmet'

function nameAttrFromText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(' ', '')
}

function capitalize(text) {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const styles = {
  item: `
    👉 c-floating-field
    position:relative
  `,
  input: `
    👉 c-floating-field__input
    &:focus:placeholder--opacity:0
    &:placeholder--color:inherit
    &:placeholder--mix-blend-mode:multiply
    &:placeholder--opacity:60
    &:placeholder--transition-duration:200
    &:placeholder--transition-property:opacity
    box-sizing:border-box
    display:block
    padding-horizontal:350
    padding-vertical:300
    width:100
  `,
  label: `
  👉 c-floating-field__label
  &:before--arrow-left
  margin-left:0
  margin-top:50p
  opacity:0
  pointer-events:none
  pos-left:100
  pos-top:0
  position:absolute
  text-case:lower
  transform:right-center-small
  transition-duration:200
  transition-easing:ease-in-out
  transition-property::opacity
  white-space:no-wrap
  `,
  // raw CSS:
  inputSiblingBehaviour: `
    .c-floating-field__input:focus+.c-floating-field__label {
      opacity: .5;
    }
    .c-floating-field__input:valid+.c-floating-field__label {
      opacity: 0;
    }
  `,
}

export default ({
  className = ``,
  inputClassName = ``,
  label = `Label text`,
  labelClassName = ``,
  name = nameAttrFromText(label),
  required = null,
  type = `text`,
  ...props
}) => {
  className += styles.item
  inputClassName += styles.input
  labelClassName += styles.label

  return (
    <div className={className} {...props}>
      <Helmet>
        <style>{styles.inputSiblingBehaviour}</style>
      </Helmet>
      <input
        aria-required={required}
        className={inputClassName}
        id={capitalize(name)}
        minLength="3"
        name={name}
        placeholder={label}
        required={required}
        size="40"
        type={type}
      />
      <label className={labelClassName} htmlFor={capitalize(name)}>
        {label.toLowerCase()}
      </label>
    </div>
  )
}
