import React from 'react'
import Hero from '../layouts/Hero'
import TextBlock from '../layouts/TextBlock'

const AllLayouts = ({ layoutData }) => {
  const layoutType = layoutData.fieldGroupName

  const Default = () => <div>In AllLayouts the mapping of this component is missing: {layoutType}</div>

  const layouts = {
    page_Pagebuilder_Layouts_Hero: Hero,
    page_Pagebuilder_Layouts_TextBlock: TextBlock,
    page_default: Default,
  }

  const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts['page_default']

  return (
    <ComponentTag {...layoutData} />
  )
}

export default AllLayouts
