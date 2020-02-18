import React, {useState, useEffect} from 'react'
import styles from './style.module.scss'


export default ({className=``, children, ...props }) => {

  const [freeScroll, setFreeScroll] = useState(false)

  const initFreeScroll = function() {
    const sections = document.querySelectorAll(`.js-free-scroll`)

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        console.log({
          y: entry.boundingClientRect.y,
          root: entry.rootBounds.y,
        });

        if (entry.boundingClientRect.y < 0) {
          setFreeScroll(true)
        } else {
          setFreeScroll(false)
        }
      })
    })

    sections.forEach(section => observer.observe(section))
  }

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
