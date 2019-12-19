import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCard from '../components/event-card'

export default ({ data }) => (
  <Layout>
    <h1>Todos os eventos</h1>
    <br />
    {data.allMarkdownRemark.edges.map(
      ({ node }) => <EventCard key={node.frontmatter.date} event={node} />
    )}
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
            palestras{
              titulo
              palestrante
              fotoPalestrante
            }
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
