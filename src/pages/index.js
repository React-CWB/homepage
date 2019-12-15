import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data.allMarkdownRemark.nodes)
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
