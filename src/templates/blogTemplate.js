import React from "react"
import { graphql } from "gatsby"
import "../layout/module.scss"
import PostLink from "../components/index-item"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1 className="index-item-title">
          <span>{frontmatter.first}</span>
          <span className="accent">{frontmatter.nickname}</span>
          <span>{frontmatter.last}</span>
        </h1>
        <div className="index-item-subtitle">
          {frontmatter.subtitle}
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        subtitle
        path
        first
        nickname
        last
        thumbnail
      }
    }
  }
`
