import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const NextEventCard = ({ event }) => {
  const date = new Date(Number(event.frontmatter.date))
  return (
    <div>
      <h3>Próximo Evento</h3>
      <div
        style={{
          padding: "20px 30px 10px 30px",
          border: "2px solid #444",
          borderRadius: "5px",
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={event.fields.slug}>
            <h2>{event.frontmatter.title}</h2>
          </Link>
          <h5 style={{ color: "#bbb" }}>
            {date.toLocaleDateString("pt-br")}
          </h5>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          
          <div style={{ padding: '6px', display: 'flex'}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={event.frontmatter.fotoPalestrante1}
                width="115px"
                style={{ borderRadius: '5px', marginBottom: '5px' }}
              />
            </div>
            <div style={{ padding: '10px' }}>
              <p style={{ marginBottom: '0px'}}>{event.frontmatter.palestrante1}</p>
              <span style={{ color: '#aaa' }}>{event.frontmatter.palestra1}</span>
            </div>
          </div>
          
          <div 
            style={{ padding: '6px', display: 'flex'}}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={event.frontmatter.fotoPalestrante2} 
                width="115px"
                style={{ borderRadius: '5px', marginBottom: '5px' }}
              />
            </div>
            <div style={{ padding: '10px' }}>
              <p style={{ marginBottom: '0px' }}>{event.frontmatter.palestrante2}</p>
              <span style={{ color: '#aaa' }}>{event.frontmatter.palestra2}</span>
            </div>
          </div>
        </div>
        <p>{event.excerpt}</p>
      </div>
    </div>
  )
}

export default ({ data }) => {
  const [nextEvent] = data.allMarkdownRemark.edges
  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://secure.meetupstatic.com/photos/event/1/2/2/1/600_481324641.jpeg"
          alt="Group of pandas eating bamboo"
        />
      </section>
      <section>
        <div>
          <h3>Estamos precisando de palestras !</h3>
          <p style={{ marginBottom: '6px' }}>
            entre em contato através deste <a href="http://bit.ly/reactcwb_call4papers" style={{color: '#15b3d5'}}>link</a>
          </p>
        </div>
      </section>
      <hr />
      <section style={{ marginTop: "20px" }}>
        {nextEvent ? <NextEventCard event={nextEvent.node} /> : null}
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
            palestra1
            palestra2
            palestrante1
            palestrante2
            fotoPalestrante1
            fotoPalestrante2
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
