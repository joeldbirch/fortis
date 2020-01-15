import React from 'react'

const TextBlock = ({text}) => {
  return (
    <section>
      <div dangerouslySetInnerHTML={{__html: text}} />
    </section>
  )
}

export default TextBlock
