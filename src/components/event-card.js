import React from "react"
import { Link } from "gatsby"

import Talk from "../components/talks"

const EventCard = ({ event }) => {
  const { palestras } = event.frontmatter
  const date = new Date(Number(event.frontmatter.date))
  return (
    <div style={{marginBottom: '20px'}}>
      <h3>Próximo Evento</h3>
      <div
        style={{
          padding: "10px",
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
          {palestras && event.frontmatter.palestras.map(
            ({titulo, palestrante, fotoPalestrante}) => (
              <Talk
                key={fotoPalestrante}
                nomePalestrante={palestrante}
                fotoPalestrante={fotoPalestrante}
                tituloPalestra={titulo}
              />
          ))}
        </div>
        <p>{event.excerpt}</p>
      </div>
    </div>
  )
}

export default EventCard
