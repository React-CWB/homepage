import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EventCard from "../components/event-card"

export default ({ data }) => {
  const [nextEvent] = data.allMarkdownRemark.edges
  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://secure.meetupstatic.com/photos/event/1/2/2/1/600_481324641.jpeg"
          alt="react cwb logo"
        />
      </section>
      <section>
        <div>
          <h3>Estamos precisando de palestras !</h3>
          <p style={{ marginBottom: "6px" }}>
            entre em contato por{" "}
            <a
              href="http://bit.ly/reactcwb_call4papers"
              style={{ color: "#15b3d5" }}
            >
              aqui
            </a>
          </p>
        </div>
      </section>
      <hr />
      <section style={{ marginTop: "20px" }}>
        {nextEvent ? <EventCard event={nextEvent.node} /> : null}
      </section>
      <br />
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
            palestras {
              titulo
              palestrante
              fotoPalestrante
            }
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
