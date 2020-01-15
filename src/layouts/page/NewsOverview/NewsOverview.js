import React from 'react'

const NewsOverview = ({sectionHeading, introText}) => {
  return (
    <section>
      <h2 dangerouslySetInnerHTML={{__html: sectionHeading}} />
      <div dangerouslySetInnerHTML={{__html: introText}} />
    </section>
  )
}

export default NewsOverview
