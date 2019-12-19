import React from "react"
import { Link } from "gatsby"

import Talk from "../components/talks"

const EventCard = ({ event }) => {
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={event.fields.slug}>
            <h2>{event.frontmatter.title}</h2>
          </Link>
          <h5 style={{ color: "#bbb" }}>{date.toLocaleDateString("pt-br")}</h5>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Talk
            nomePalestrante={event.frontmatter.palestrante1}
            fotoPalestrante={event.frontmatter.fotoPalestrante1}
            tituloPalestra={event.frontmatter.palestra1.tituloz}
          />
          <Talk
            nomePalestrante={event.frontmatter.palestrante2}
            fotoPalestrante={event.frontmatter.fotoPalestrante2}
            tituloPalestra={event.frontmatter.palestra2}
          />
        </div>
        <p>{event.excerpt}</p>
      </div>
    </div>
  )
}

export default EventCard
