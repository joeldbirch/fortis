import React from 'react'
import {Link} from 'gatsby'
import {blogURI} from '../../globals'

const Pagination = ({pageNumber, hasNextPage}) => {
  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div
      className={`
        margin-vertical:columns-0-1/2
        text-align:center
      `}
    >
      <h2 className={`visually-hidden`}>News navigation</h2>

      <div
        className={`
          ${pageNumber > 1 && hasNextPage ? `display:inline-grid` : ``}
          grid-template-columns:2
        `}
      >
        {pageNumber > 1 && (
          <Link
            className={`btn display:inline-block margin-horizontal:100`}
            to={pageNumber > 2 ? `${blogURI}/page/${pageNumber - 1}` : `${blogURI}/`}
          >
            Later articles
          </Link>
        )}

        {hasNextPage && (
          <Link
            className={`btn display:inline-block margin-horizontal:100`}
            to={`${blogURI}/page/${pageNumber + 1}`}
          >
            Earlier articles
          </Link>
        )}
      </div>

      {/* {
        (hasNextPage || pageNumber > 1)
        ? <p aria-current="page" className="page-numbers current margin-top:400 color:neutral-400">
            <span className="meta-nav visually-hidden">Page </span>
            {pageNumber}
          </p>
        : ``
      } */}
    </div>
  )
}

export default Pagination
