import React, { useState } from 'react'
import ProjectEntry from 'components/ProjectEntry'
import Divider from 'components/DividerHorizontal'
import SectionHeader from 'components/SectionHeader'
import ProjectsFilter from 'components/FilterForm'
import { uiFontSize } from 'styles/helpers'

const ProjectPreviews = ({posts, tags:{ nodes: tags}}) => {

  const [filteredPosts, setFilteredPosts] = useState(posts)

  const changeFilteredPosts = (mustHaveIds) => {
    console.log(mustHaveIds);

    const newlyFilteredPosts = posts.filter(post => {

      const ids = post.projectTags.nodes.map(tag => tag.id)
      console.log({tagIds: ids})

      return mustHaveIds.every(id => ids.includes(id))
    })

    setFilteredPosts(newlyFilteredPosts)
    console.log(newlyFilteredPosts)
  }


  return (
    <section
      className={`
        width:100
        @mq-max-palm--padding-horizontal:columns-0-1/2
      `}
    >
      <div
        className={`
          position:relative
          padding-top:site-top
        `}
      >
        <Divider/>
        <SectionHeader
          className={`
            scroll-snap-align:start
          `}>
          <h2
            className={`
              ${uiFontSize}
              color:neutral-200
              margin-bottom:columns-0-1/4
            `}
          >Projects Filter</h2>

          <ProjectsFilter items={tags} changeHandler={changeFilteredPosts} />
        </SectionHeader>
      </div>

      {filteredPosts && filteredPosts.map(post => (
        <ProjectEntry
          key={post.id}
          post={post}
          className={`
            @mq-palm--min-height:100vh-fixed
            @mq-palm--display:grid
            scroll-snap-align:start
            scroll-margin-top:-px
          `}
          imageClasses={`
            @mq-palm--flex-grow:1
          `}
        />
      ))}
    </section>
  )
}

export default ProjectPreviews
