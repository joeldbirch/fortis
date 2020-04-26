import React, {useState} from 'react'
import ProjectEntry from 'components/ProjectEntry'
import ProjectsFilter from 'components/FilterForm'
import {uiFontSize} from 'styles/helpers'

const ProjectPreviews = ({posts, tags: {nodes: tags}, id = null}) => {
  const [shownPosts, setShownPosts] = useState(posts)

  const changeShownPosts = (mustHaveIds = []) => {
    const newlyShownPosts =
      mustHaveIds.length < 1
        ? posts
        : posts.filter((post) => {
            const ids = post.projectTags.nodes.map((tag) => tag.id)
            return mustHaveIds.every((id) => ids.includes(id))
          })
    setShownPosts(newlyShownPosts)
  }

  const isShown = ({id}) => {
    return shownPosts.map((post) => post.id).includes(id)
  }

  const filterReset = () => setShownPosts(posts)

  return (
    <section
      className={`
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
          scroll-snap-stop:always
        `}
      >
        {!tags ? (
          ``
        ) : (
          <>
            <header
              className={`
                  @mq-max-palm--text-align:center
                  @mq-bigdesk--margin-horizontal:auto
                  position:relative
                  margin-horizontal:auto
                  max-width:container
                  padding-vertical:600
                  @mq-lap--padding-vertical:800
                  pointer-events:none
                  pos-top-left:0
                  width:100
                  z-index:300
                `}
              id="ProjectFilterHeader"
            >
              <div
                className={`
                    @mq-max-palm--text-align:center
                    @mq-palm--padding-left:columns-3-1/2
                    @mq-palm--padding-right:columns-1-1/2
                    padding-horizontal:columns-0-1/2
                    width:100
                  `}
              >
                <ProjectsFilter
                  items={tags}
                  update={changeShownPosts}
                  onReset={filterReset}
                  className={`
                    padding-top:1000
                    position:relative
                  `}
                />
              </div>
            </header>
          </>
        )}
      </div>

      <div
        className={`
          ${uiFontSize}
          overflow:hidden
          position:relative
        `}
      >
        {posts &&
          posts.map((post) => (
            <ProjectEntry
              key={post.id}
              post={post}
              imageClasses={`
              max-height:var-1
            `}
              className={`
              overflow:hidden
              transition-duration:700
              max-width:container
              margin-horizontal:auto
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
