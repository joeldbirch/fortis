import React, { useState } from 'react'
import ProjectEntry from 'components/ProjectEntry'
import Divider from 'components/DividerHorizontal'
import SectionHeader from 'components/SectionHeader'
import ProjectsFilter from 'components/FilterForm'

const ProjectPreviews = ({posts, tags:{ nodes: tags}, id=null}) => {

  const [shownPosts, setShownPosts] = useState(posts)

  const changeShownPosts = (mustHaveIds) => {
    const newlyShownPosts =
      mustHaveIds.length < 1
      ? posts
      : posts.filter(post => {
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
      id={id}
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
          <h2 className={` visually-hidden `}>Projects Filter</h2>

          <ProjectsFilter
            items={tags}
            update={changeShownPosts}
            reset={filterReset}
            className={`@mq-desk--padding-top:columns-0-1/2 padding-top:1000`}
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
