import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Todos os eventos</h1>
    <br />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      console.log(node)
      return (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#bbb" }}> - {node.frontmatter.date}</span>
            </h2>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      )
    })}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
