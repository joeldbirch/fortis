import React from 'react'
import { Link } from 'gatsby'
import { blogURI } from '../../globals'

const Pagination = ({ pageNumber, hasNextPage }) => {
  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div>
      <h2>News navigation</h2>
      <div>
        {
          pageNumber > 1 && (
            <Link
              className={`prev page-numbers`}
              to={pageNumber > 2 ? `${blogURI}/page/${pageNumber - 1}` : `${blogURI}/`}
            >
              <span>Earlier articles</span>
            </Link>
          )
        }

        <span aria-current="page" className="page-numbers current" style={{ padding: "5px 10px" }}>
          <span className="meta-nav screen-reader-text">Page </span>
          {pageNumber}
        </span>

        {
          hasNextPage && (
            <Link
              className={`next page-numbers`}
              to={`${blogURI}/page/${pageNumber + 1}`}
            >
              <span>Later articles</span>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Pagination
