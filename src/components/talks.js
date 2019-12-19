import React from "react"

const Talk = ({ fotoPalestrante, nomePalestrante, tituloPalestra }) => {
  return (
    <div style={{ padding: "6px", display: "grid", gridTemplateColumns: '50% 50%' }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={fotoPalestrante}
          width="115px"
          heigth="115px"
          style={{ borderRadius: "5px", marginBottom: "5px" }}
          alt="foto do primeiro palestrante"
        />
      </div>
      <div style={{ padding: "10px" }}>
        <p style={{ marginBottom: "0px" }}>{nomePalestrante}</p>
        <span style={{ color: "#aaa" }}>{tituloPalestra}</span>
      </div>
    </div>
  )
}

export default Talk
