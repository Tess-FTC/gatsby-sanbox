import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog Page</h1>
      <p>Tips for learning Gatsby</p>
      {data.allMarkdownRemark.nodes.map(post => (
        <Link to={`/blog/${post.fields.slug}`}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.date}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default Blog
