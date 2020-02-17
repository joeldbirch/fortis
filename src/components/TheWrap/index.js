import React, {useState, useEffect} from 'react'
import styles from './style.module.scss'


export default ({className=``, children, ...props }) => {

  const [freeScroll, setFreeScroll] = useState(false)

  const initFreeScroll = function() {
    const sections = document.querySelectorAll(`.js-free-scroll`)

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setFreeScroll(true)
        } else {
          setFreeScroll(false)
        }
      })
    }, {
      threshold: [0, 0.3, 0.5],
      rootMargin: `10% 0% 0% 0%`,
      root: document.querySelector(`.the-wrap`),
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
