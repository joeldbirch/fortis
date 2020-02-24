import React, { useEffect } from 'react'
import useFreeScroll from 'hooks/use-free-scroll'
import styles from './style.module.scss'


export default ({className=``, children, ...props }) => {

  const [freeScroll, initFreeScroll] = useFreeScroll()
  useEffect(initFreeScroll, [])

  return (
    <div
      {...props}
      className={`${className} ${styles.wrap}`}
      style={freeScroll ? {scrollSnapType: `none`}:{}}
    >
      {children}
    </div>
  )
}
