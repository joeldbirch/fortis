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
        @mq-max-palm--padding-horizontal:columns-0-1/2
        js-contrast-ignore
        width:100
      `}
      id={id}
    >
      <div
        className={`
          js-contrast
          js-no-header-bg
          position:relative
          scroll-margin-top:-px
          scroll-snap-align:start
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
                  @mq-desk--padding-top:1000
                  padding-top:800
                  position:relative
                `}
              />
            </SectionHeader>
          </>
        }

      </div>

      <div
        className={`
          ${uiFontSize}
          overflow:hidden
          position:relative
        `}
      >
        {posts && posts.map((post, index) => (
          <ProjectEntry
            key={post.id}
            post={post}
            className={`
              overflow:hidden
              scroll-margin-top:-px
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
            margin-top:-1000
            padding-horizontal:columns-0-1/2
            pos-top:50
            position:absolute
            text-align:center
            transition-duration:1000
            translate-y:-50
            width:100
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
