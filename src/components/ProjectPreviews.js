import React, { useState } from 'react'
import ProjectEntry from 'components/ProjectEntry'
import Divider from 'components/DividerHorizontal'
import SectionHeader from 'components/SectionHeader'
import ProjectsFilter from 'components/FilterForm'

const ProjectPreviews = ({posts, tags:{ nodes: tags}, id=null}) => {

  const [shownPosts, setShownPosts] = useState(posts)

  const changeShownPosts = (mustHaveIds=[]) => {
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
        js-contrast-ignore
      `}
      id={id}
    >
      <div
        className={`
          position:relative
          js-contrast
        `}
      >
        { !tags
          ? ``
          :
          <>
            <Divider/>
            <SectionHeader
              absolute={false}
              className={`
                scroll-snap-align:start
                @mq-max-palm--text-align:center
              `}>

              <ProjectsFilter
                items={tags}
                update={changeShownPosts}
                reset={filterReset}
                className={`@mq-desk--padding-top:columns-0-1/2 padding-top:1000`}
              />

            </SectionHeader>
          </>
        }

      </div>

      <div
        style={{
          '--min-height': `calc(56.25vw + 4.5rem)`,
          '--min-height-var-2': `calc(56.25vw + 6rem)`,
        }}
        className={`
          position:relative
          overflow:hidden
          min-height:var-1
          @mq-palm--min-height:var-2
          background-color:neutral-100
        `}
      >
        {posts && posts.map((post, index) => (
          <ProjectEntry
            key={post.id}
            post={post}
            className={`
              ${index !== 0 ? `scroll-snap-align:start` : ``}
              scroll-margin-top:-px
              overflow:hidden
              transition-duration:700
              ${
                isShown(post)
                  ? `max-height:100vh opacity:1`
                  : `max-height:0 opacity:0`
              }
            `}
            imageClasses={`
              @mq-palm--flex-grow:1
            `}
          />
        ))}


        <div
          className={`
            position:absolute
            pos-top:50
            translate-y:-50
            padding-horizontal:columns-0-1/2
            transition-duration:1000
            text-align:center
            width:100
            ${shownPosts.length ? `opacity:0` : ``}
          `}
        >
          <p
            className={`
            `}
            aria-hidden={shownPosts.length ? true : null}
          >
            No projects fit all your chosen filters.
          </p>
        </div>

      </div>


    </section>
  )
}

export default ProjectPreviews
