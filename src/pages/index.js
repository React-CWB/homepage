/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import EventCard from '../components/event-card'
import SEO from '../components/seo'

export default function Index({data}) {
  const [nextEvent] = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <section
        css={css`
          display: flex;
          justify-content: center;
          width: 100%;
        `}
      >
        <img
          src="https://secure.meetupstatic.com/photos/event/1/2/2/1/600_481324641.jpeg"
          alt="react cwb logo"
          css={css`
            width: 100%;
            @media (max-width: 768px) {
              height: 100%;
            }
          `}
        />
      </section>
      <section>
        <div>
          <h3>Estamos precisando de palestras !</h3>
          <p
            css={css`
              margin-bottom: 6px;
            `}
          >
            entre em contato por{' '}
            <a
              href="http://bit.ly/reactcwb_call4papers"
              css={css`
                color: #15b3d5;
              `}
            >
              aqui
            </a>
          </p>
        </div>
      </section>
      <hr />
      <section
        css={css`
          margin-top: 20px;
        `}
      >
        {nextEvent ? (
          <div>
            <h3>Próximo Evento</h3>
            <EventCard event={nextEvent.node} />
          </div>
        ) : null}
      </section>
      <br />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {next: {eq: true}}}) {
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
