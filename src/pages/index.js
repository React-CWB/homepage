import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const NextEventCard = ({ event }) => {
  const date = new Date(Number(event.frontmatter.date))
  return (
    <div
      style={{ padding: "20px", border: "1px solid #333", borderRadius: "5px" }}
    >
      <Link to={event.fields.slug}>
        <h2>
          {event.frontmatter.title}{" "}
          <span style={{ color: "#bbb" }}>
            {" "}
            - {date.toLocaleDateString("pt-br")}
          </span>
        </h2>
      </Link>
      <p>{event.excerpt}</p>
    </div>
  )
}

export default ({ data }) => {
  const [nextEvent] = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div>
        <img
          src="https://secure.meetupstatic.com/photos/event/1/2/2/1/600_481324641.jpeg"
          alt="Group of pandas eating bamboo"
        />
        {nextEvent ? <NextEventCard event={nextEvent.node} /> : null}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { next: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            date
            location
            next
            sponsor
            title
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
