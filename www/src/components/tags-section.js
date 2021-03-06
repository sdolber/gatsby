import React from "react"
import { Link } from "gatsby"
import TagsIcon from "react-icons/lib/ti/tags"

import Button from "./button"
import { rhythm, scale } from "../utils/typography"
const _ = require(`lodash`)

const TagsSection = ({ tags }) => {
  if (!tags) return null
  const tagLinks = tags.map((tag, i) => {
    const divider = i < tags.length - 1 && <span>{` | `}</span>
    return (
      <span key={tag}>
        <Link to={`/blog/tags/${_.kebabCase(tag.toLowerCase())}`}>{tag}</Link>
        {divider}
      </span>
    )
  })
  return (
    <div
      css={{
        display: `flex`,
        flexFlow: `row nowrap`,
        justifyContent: `space-between`,
        alignItems: `baseline`,
      }}
    >
      <em
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
        }}
      >
        Tagged with {tagLinks}
      </em>
      <Button tiny key="blog-post-view-all-tags-button" to="/blog/tags">
        View All Tags <TagsIcon />
      </Button>
    </div>
  )
}

export default TagsSection
