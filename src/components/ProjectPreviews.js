import React, { useState } from 'react'
import ProjectEntry from 'components/ProjectEntry'
import Divider from 'components/DividerHorizontal'
import SectionHeader from 'components/SectionHeader'
import ProjectsFilter from 'components/FilterForm'
import { uiFontSize } from 'styles/helpers'

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
          js-no-header-bg
          scroll-snap-align:start
          scroll-margin-top:-px
        `}
      >
        { !tags
          ? ``
          :
          <>
            <Divider noMargin={true}/>
            <SectionHeader
              absolute={false}
              className={`
                @mq-max-palm--text-align:center
              `}>

              <ProjectsFilter
                items={tags}
                update={changeShownPosts}
                reset={filterReset}
                className={`
                  position:relative
                  @mq-desk--padding-top:1000
                  padding-top:800
                `}
              />
            </SectionHeader>
          </>
        }

      </div>

      <div
        className={`
          ${uiFontSize}
          position:relative
          overflow:hidden
        `}
      >
        {posts && posts.map((post, index) => (
          <ProjectEntry
            key={post.id}
            post={post}
            className={`
              scroll-margin-top:-px
              overflow:hidden
              transition-duration:700
              ${
                isShown(post)
                  ? `max-height:4000px opacity:1`
                  : `max-height:0 opacity:0`
              }
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
            margin-top:-1000
            z-index:-1
            ${shownPosts.length ? `opacity:0` : ``}
          `}
        >
          <p
            className={`
            `}
            aria-hidden={shownPosts.length ? true : null}
          >
            No projects fit your chosen filter.
          </p>
        </div>

      </div>


    </section>
  )
}

export default ProjectPreviews
