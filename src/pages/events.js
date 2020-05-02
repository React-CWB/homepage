import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import EventCard from '../components/event-card'
import SEO from '../components/seo'

export default function Events({data}) {
  return (
    <Layout>
      <SEO title="Eventos" />
      <h3>Todos os eventos</h3>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <EventCard key={node.frontmatter.date} event={node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            palestras {
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
