import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)

  if (!data) {
    return <div>carregando...</div>
  }

  return (
    <Layout>
      <div>
        <h3>My Files</h3>
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Pretty Size</th>
              <th>Extension</th>
              <th>Birth Time</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }) => (
              <tr key={node.relativePath}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.relativePath}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
