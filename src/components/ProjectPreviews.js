import React, { useState } from 'react'
import ProjectEntry from 'components/ProjectEntry'
import Divider from 'components/DividerHorizontal'
import SectionHeader from 'components/SectionHeader'
import ProjectsFilter from 'components/FilterForm'
import { uiFontSize } from 'styles/helpers'

const ProjectPreviews = ({posts, tags:{ nodes: tags}}) => {

  const [shownPosts, setShownPosts] = useState(posts)

  const changeShownPosts = (mustHaveIds) => {
    const newlyShownPosts = posts.filter(post => {
      const ids = post.projectTags.nodes.map(tag => tag.id)
      return mustHaveIds.every(id => ids.includes(id))
    })
    setShownPosts(newlyShownPosts)
  }

  const isShown = ({id}) => {
    return shownPosts.map(post => post.id).includes(id)
  }

  const filterReset = () => setShownPosts(posts)

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
        `}
      >
        <Divider/>
        <SectionHeader
          absolute={false}
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

          <ProjectsFilter
            items={tags}
            changeHandler={changeShownPosts}
            reset={filterReset}
          />

        </SectionHeader>
      </div>

      {posts && posts.map((post, index) => (
        <ProjectEntry
          key={post.id}
          post={post}
          className={`
            ${index !== 0 ? `scroll-snap-align:start` : ``}
            scroll-margin-top:-px
            overflow:hidden
            transition-duration:400
            ${
              isShown(post)
                ? `max-height:100vh`
                : `max-height:0`
            }
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
