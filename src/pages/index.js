import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data.allMarkdownRemark.nodes)
  return (
    <Layout>
      <div>
        <img
          src="https://secure.meetupstatic.com/photos/event/1/2/2/1/600_481324641.jpeg"
          alt="Group of pandas eating bamboo"
        />
        {data.allMarkdownRemark.edges.map(({ node }) => {
          console.log(node)
          return (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h2>
                  {node.frontmatter.title}{" "}
                  <span style={{ color: "#bbb" }}>
                    {" "}
                    - {node.frontmatter.date}
                  </span>
                </h2>
              </Link>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            title
            bla
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
