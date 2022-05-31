import { useStaticQuery } from 'gatsby'
import React from 'react'

import { globalHistory } from '@reach/router'

const SubBanner = () => {
  const data = useStaticQuery(graphql`
        query {
            allImageSharp(filter: {fluid: {src: {regex: "/banner_/"}}}) {
              edges {
                node {
                  fluid(maxWidth: 2080, quality: 100) {
                    src
                  }
                }
              }
            }
          }
    `)
  let df = []
  let astyle
  data.allImageSharp.edges.map(item => df.push(item.node.fluid.src))
  let path = globalHistory.location.pathname
  path = path.slice(1,)
  if (path.slice(0, 3) === "en/") {
    path = path.slice(3,)
  }
  let img = ""
  if (path.slice(-1,) === "/") {
    path = path.slice(0, -1)
  }
  df.map((data, i) => {
    if (data.includes(path) && (path != "") && (path != "en")) {
      img = df[i]; astyle = { display: 'flex' }
    } else {
      astyle = { display: "none" }
    }
  })


  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        astyle
      }}
    >
      <img src={img} />
    </div>
  )
}

export default SubBanner
