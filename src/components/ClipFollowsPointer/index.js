import React, { useState, useEffect, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import { hasPointerEvents, isIos, isSafari } from '../../utilities/helpers'

export default function ({children, maskedId=`MaskedLayer`, maskedImageClass=`js-fade-image`, ...props}) {
  const [position, setPosition] = useState({ x: 0, y: 0, })
  const [animationDone, setAnimationDone] = useState(false)
  const pointerType = hasPointerEvents() ? `pointer` : `mouse`

  function getPosition(x, y) {
    const {width, height} = document.getElementById(maskedId).getBoundingClientRect()
    const data = {
      x: x / width * 100,
      y: y / height * 100,
    }
    return data
  }

  function firstPointerOver() {
    document.documentElement.style.setProperty('--circle-r', `15vw`)
    document.removeEventListener(`${pointerType}over`, firstPointerOver)
  }

  function updateCirclePosition() {
    const style = document.documentElement.style
    style.setProperty('--circle-x', `${position.x}%`)
    style.setProperty('--circle-y', `${position.y}%`)
  }

  function pointerMove({pageX, pageY}) {
    if (!animationDone) return
    const data = getPosition(pageX, pageY)
    setPosition(data)
    requestAnimationFrame(updateCirclePosition)
  }

  function animateClipPath() {
    // safari can not animate this smoothly enough
    if (!isIos() && !isSafari()) {
      document.addEventListener(`${pointerType}move`, pointerMove)
    }
    return () => {
      // clean up
      document.removeEventListener(`${pointerType}move`, pointerMove)
    }
  }

  function setInitCircle() {
    const style = document.documentElement.style
    const {x, y, width} = document.getElementById('TheCircle').getBoundingClientRect()
    const data = getPosition(x + width / 2, y + width / 2)
    setPosition(data)
    style.setProperty('--circle-x', `${data.x}%`)
    style.setProperty('--circle-y', `${data.y}%`)
    style.setProperty('--circle-r', `${width / 2}px`)

    const maskedLayer = document.getElementById(maskedId)
    const animationClasses = [
      `animation-delay:1000`,
      `animation-duration:8000`,
      `animation-name:circular-reveal`,
      `animation-easing:ease-out-circ`,
    ]
    // IE doesn't support multiple classList.add args
    animationClasses.forEach(theClass => maskedLayer.classList.add(theClass))

    if (!isIos() && !isSafari()) {
      const maskedImage = document.querySelector(`.${maskedImageClass}`)
      if (maskedImage) {
        const imageAnimationClasses = [
          `animation-delay:1000`,
          `animation-duration:8000`,
          `animation-name:fade-reveal`,
          `animation-easing:ease-out-circ`,
        ]
        // IE doesn't support multiple classList.add args
        imageAnimationClasses.forEach(theClass => maskedImage.classList.add(theClass))
      }
    } else {
      // make call to action text white here
      const ctaText = document.getElementById('CtaText')
      if (ctaText) {
        const textAnimationClasses = [
          `animation-delay:1000`,
          `animation-duration:8000`,
          `animation-name:text-bright`,
          `animation-easing:ease-out-circ`,
          `animation-mode:forwards`,
        ]
        // IE doesn't support multiple classList.add args, (although this is only for Safari-based browsers)
        textAnimationClasses.forEach(theClass => ctaText.classList.add(theClass))
      }
    }

    function overHandler() {
      if (!isIos() && !isSafari()) {
        document.addEventListener(`${pointerType}over`, firstPointerOver)
      }
    }

    function animationEndHandler() {
      setAnimationDone(true)
      overHandler()
    }
    maskedLayer.addEventListener('animationend', animationEndHandler)

    return () => {
      // clean up
      document.removeEventListener(`${pointerType}over`, firstPointerOver)
      document.removeEventListener(`animationend`, animationEndHandler)
    }
  }

  useLayoutEffect(setInitCircle, [])
  useEffect(animateClipPath)

  props.className += `
    clip-path-circle
    transition-duration:400
    transition-property:clip-path
  `

  return (
    <div {...props} id="MaskedLayer">
      <Helmet>
        <style>{`
          :root {
            --circle-r: 0vw;
            --circle-x: 11%;
            --circle-y: -11%;
          }
        `}</style>
      </Helmet>
      {children}
    </div>
  )
}
