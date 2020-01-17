import React, {Component, createRef } from 'react'
import { fetchSvgInline } from '../utilities/helpers'

export default class extends Component {

  constructor({props}) {
    super(props)
    this.imgRef = createRef()
  }

  componentDidMount() {
    const img = this.imgRef.current
    if (img && img.complete) {
      this.svgLoaded({currentTarget: img})
    }
  }

  svgLoaded(e) {
    return (window !== 'undefined' && 'fetch' in window)
      ? fetchSvgInline(e.currentTarget)
      : true
  }

  render() {
    return (
      <img
        alt={this.props.alt}
        lazyload="lazy"
        onLoad={this.svgLoaded}
        ref={this.imgRef}
        {...this.props}
      />
    )
  }
}
